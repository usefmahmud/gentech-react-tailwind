import HomeImage from '../assets/image1.png'

const Home = () => {
  return (
    <section className='flex relative'>
      <div className='flex flex-col justify-around flex-1 items-start'>
        <div className='relative flex flex-col pl-30 font-poppins text-8xl font-semibold text-gray gap-2 after:content-[""] after:absolute after:-z-1 after:bottom-[7px] after:w-full after:animate-rect-slide after:h-[30px] after:bg-linear-to-br after:from-[#9FD685] after:to-[#F9DD03]'>
          <h2>We Code</h2>
          <h2>We Deliver</h2>
        </div>
        <div className='pl-30'>
          <p className='text-[22px]'>
            Twiscode specializes in developing <br /> 
            high-performing mobile and <br /> 
            web applications.
          </p>
          <div className='pt-5'>
            <button className='text-[22px] font-bold text-white bg-[#9FD685] px-7 py-3 cursor-pointer rounded-4xl transition duration-100 active:scale-97 shadow-lg active:shadow-sm'>
              Let's Have a Coffee
            </button>
          </div>
        </div>
      </div>
      <div className='flex-1 hidden lg:block'>
        <img src={HomeImage} className='w-full'/>
      </div>
    </section>
  )
}

export default Home