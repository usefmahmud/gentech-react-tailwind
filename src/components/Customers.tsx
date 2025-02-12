import Company1 from '../assets/company1.png'
import Company2 from '../assets/company2.png'
import Company3 from '../assets/company3.png'
import Company4 from '../assets/company4.png'
import Company5 from '../assets/company5.png'
import Company6 from '../assets/company6.png'
import Company7 from '../assets/company7.png'
import Company8 from '../assets/company8.png'
import Company9 from '../assets/company9.png'

const LOGOS = [
  Company1,
  Company2,
  Company3,
  Company4,
  Company5,
  Company6,
  Company7,
  Company8,
  Company9,
];

const Customers = () => {
  return (
    <section className="flex lg:flex-row flex-col lg:gap-0 gap-10 lg:pt-25 pt-10">
      <div className='flex-1 flex lg:items-center lg:justify-center justify-start lg:pl-0 pl-20'>
        <div className='flex flex-col justify-around gap-5'>
          <h2 className='text-5xl/15 font-bold max-w-[500px] text-gray'>Our Customers are our biggest fans</h2>
          <p className='text-3xl max-w-[500px] font-medium text-gray-500'>We have helped startups around the globe as well as fortune 500 companies</p>
          <p className='text-3xl font-bold bg-gradient-to-r from-[#9FD685] to-[#F9DD03] w-fit bg-clip-text text-transparent select-none cursor-pointer'>See All</p>
        </div>
      </div>

      <div className='flex-1 flex justify-center lg:block'>
        <div className="grid grid-cols-3 px-20 gap-5">
          {
            LOGOS.map(logo => (
              <div>
                <img src={logo} className='grayscale'/>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Customers