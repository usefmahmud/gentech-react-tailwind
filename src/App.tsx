import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import Contact from './components/Contact'
import { useState } from 'react'

import { CiLight, CiCloudMoon } from "react-icons/ci"
import Customers from './components/Customers'

type THEMES = 'light' | 'dark' 

const getTheme = (): THEMES => {
  return localStorage.getItem('theme') as THEMES || 'light'
}

const App = () => {
  const [isDark, setIsDark] = useState<boolean>(getTheme() === 'dark' ? true : false)

  const toggleTheme = () => {
    setIsDark(!isDark)

    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }
  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <Navbar activeSection='Home' />
      <Hero />
      <Work />
      <Services />
      <Customers />
      <Contact />

      <div className='fixed z-50 bottom-5 right-5'>
        <div 
          className='h-15 w-15 bg-[#388016] flex items-center justify-center rounded-[50%] cursor-pointer shadow-4xl active:scale-97'
          onClick={toggleTheme}
        >
          <span className='text-4xl text-white'>
            {
              isDark ? <CiLight /> : <CiCloudMoon />
            }
          </span>
        </div>
      </div>
    </div>
  )
}

export default App