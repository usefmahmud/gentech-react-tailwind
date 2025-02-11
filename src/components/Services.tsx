import { useState } from 'react';
import BG from '../assets/service-bg.png'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const SERVICES = [
  {
    title: "Mobile Application",
    description: "Building mobile applications is never easy. P2P lending app ? Logistic App ? E-Commerce App ? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your mobile applications idea so that you can focus on the core business. Leave the keyboard-clacking to us."
  }, {
    title: "Web Application",
    description: "Building mobile applications is never easy. P2P lending app ? Logistic App ? E-Commerce App ? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your mobile applications idea so that you can focus on the core business. Leave the keyboard-clacking to us."
  }, {
    title: "UI/UX Design",
    description: "Building mobile applications is never easy. P2P lending app ? Logistic App ? E-Commerce App ? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your mobile applications idea so that you can focus on the core business. Leave the keyboard-clacking to us."
  }
]

const Services = () => {
  const [active, setActive] = useState(0)

  const handleActive = (targetIdx: number) => {
    setActive(targetIdx)
  }

  const goNextService = () => {
    setActive(active => (active + 1) % SERVICES.length)
  }

  const goPrevService = () => {
    if(active - 1 < 0){
      setActive(SERVICES.length - 1)
      return
    }

    setActive(active => (active - 1) % SERVICES.length)
  }

  return (
    <section className='flex flex-col lg:flex-row pt-25'>
      <div className='flex-1 relative overflow-hidden'>
        <img className='w-full object-cover absolute pointer-events-none -z-10' src={BG} alt="" />
        <div className='flex flex-col justify-between h-full py-10 pr-10'>
          <div className='text-white text-right flex flex-col items-end mb-10'>
            <h2 className='max-w-[350px] text-6xl font-bold'>{SERVICES[active].title}</h2>
            <p className='pt-10 text-right max-w-[550px] text-xl/7'>{SERVICES[active].description}</p>
          </div>
          <div className='flex justify-end'>
            <button 
              className='h-[50px] w-[50px] bg-gray text-white flex justify-center items-center cursor-pointer mr-[5px]'
              onClick={goPrevService}
            >
              <span className='text-3xl'><MdKeyboardArrowLeft /></span>
            </button>

            <button 
              className='h-[50px] w-[50px] bg-gray text-white flex justify-center items-center cursor-pointer'
              onClick={goNextService}  
            >
              <span className='text-3xl'><MdKeyboardArrowRight /></span>
            </button>
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <div className='pl-20 py-10 flex flex-col'>
          <h2 className='text-7xl/20 font-bold text-gray max-w-[300px]'>What We Do?</h2>
          <div className='pt-10'>
            <ul className='flex flex-col gap-5'>
              {
              SERVICES.map((service, idx) => (
                <li
                  className={
                    `select-none cursor-pointer text-3xl font-medium
                    ${idx === active ? 'text-gray' : 'text-[#9F9F9F]'}`
                  }
                  onClick={() => handleActive(idx)}
                >- {service.title}</li>
              ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services