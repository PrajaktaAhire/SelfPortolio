import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/PRAJAKTA_AHIRE_UI.pdf'
import Typed from 'typed.js'
import hero from "./data/hero.json"

export const Home = () => {
    const typedRef = useRef(null)
    useEffect(()=>{
        const options = {
            strings: [
                "Welcome to my Profile",
                "My name is Prajakta Ahire",
                "I'm Fullstack Developer",
                "Frontend Developer - (React JS)"
            ],
            typeSpeed: 40,
            backSpeed: 40,
            loop: true,
        }
        const typed = new Typed(typedRef.current, options)
        return ()=>{
            typed.destroy();
        };
    },[])
  return (
    <>
    <div className='container home' id='home'>
        <div className='left' data-aos = "fade-up-right" data-aos-duration = "1000">
            <h1 ref={typedRef}></h1>
            <a href={pdf} download="Resume.pdf" className='btn btn-outline-warning my-3'>Download Resume</a>
        </div>
        <div className='right'>
            <div className='img' data-aos = "fade-up-left" data-aos-duration = "1000">
                <img src={`/assets/${hero.imgSrc}`} alt = "profile" />
            </div>
        </div>
    </div>
    </>
  )
}
