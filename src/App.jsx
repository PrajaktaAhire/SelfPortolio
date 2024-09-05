import { useEffect, useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Home } from './components/Home'
import { Experience } from './components/Experience'
import { Skill } from './components/Skill'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  useEffect(() => {
    Aos.init();
  },[])

  return (
    <>
      <Navbar/>
      <div className='container'>
       <Home/>
       <Experience/>
       <Skill/>
       <Projects/>
       <Contact/>
      </div>
    </>
  )
}

export default App
