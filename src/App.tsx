import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'

const App = () => {
  return (
    <div className=''>
      <Navbar activeSection='Home' />
      <Hero />
      <Work />
    </div>
  )
}

export default App
