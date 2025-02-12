import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className=''>
      <Navbar activeSection='Home' />
      <Hero />
      <Work />
      <Services />

      <Contact />
    </div>
  )
}

export default App
