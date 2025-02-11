import { useEffect, useState } from "react"

type sectionsType = {
  title: string,
  paragraph: string
}

const SECTIONS: sectionsType[] = [
  {
    title: "Discuss",
    paragraph: "Let's discuss what projects you have in mind"
  },{
    title: "Planning",
    paragraph: "Set the foundation for success by organizing your ideas"
  },{
    title: "Coding",
    paragraph: "Turn concepts into reality with clean and efficient code"
  }
]

const Work = () => {
  const [active, setActive] = useState(0)

  const handleActive = (targetIdx: number) => {
    setActive(targetIdx)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(active => (active + 1) % SECTIONS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="flex py-25">
      <div className="flex-1 flex justify-end">
        <div className="grid grid-auto-flow grid-rows-2 grid-cols-2">
          <div className="h-[220px] w-[220px] relative">
            <span className="absolute w-[50%] h-[4px] bg-gray top-[50%] right-0 translate-y-[-50%]"></span>
          </div>

          {
          SECTIONS.map((section, idx) => (
            <div 
              className={
                `h-[220px] w-[220px] 
                ${idx === active ? 'bg-linear-to-b from-[#9FD685] to-[#F9DD03]' : 'bg-linear-to-b from-[#E5E5E5] to-[#FFFFFF]'}
                cursor-pointer select-none flex flex-col justify-around transition decoration-200`
              }

              onMouseEnter={() => handleActive(idx)}
            >
              <div className="text-3xl pl-4 font-medium text-gray">{section.title}</div>
              <span className="text-right text-8xl font-bold px-[10px] text-gray-600/10">0{idx + 1}</span>
            </div>
          ))
          }
        </div>
      </div>

      <div className="flex-1 flex justify-start">
        <div className="flex flex-col pl-20 gap-12 justify-center">
          <h2 className="text-7xl/20 font-bold text-gray ">How <br/> We Work?</h2>
          <p className="text-2xl font-medium text-[#9F9F9F] text-wrap max-w-[330px]">
            {SECTIONS[active].paragraph}
          </p>
          <div className="">
            <button className="bg-gray text-white text-[18px] py-4 px-17 cursor-pointer border-2 border-gray hover:bg-transparent hover:text-gray duration-100">
              More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work