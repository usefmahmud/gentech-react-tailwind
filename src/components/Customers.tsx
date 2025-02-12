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
    <section className="flex pt-25">
      <div className='flex-1'>
        <div>
          <h2>Our Customers are our biggest fans</h2>
          <p>We have helped startups around the globe as well as fortune 500 companies</p>
          <p>See All</p>
        </div>
      </div>

      <div className='flex-1'>
        <div className="grid grid-cols-3">
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