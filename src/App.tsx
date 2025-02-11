import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'

const App = () => {
  return (
    <div className=''>
      <Navbar activeSection='Home' />
      <Hero />
      <Work />
      <Services />
    </div>
  )
}

export default App
