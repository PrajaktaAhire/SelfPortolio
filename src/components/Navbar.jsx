import React from 'react'

export const Navbar = () => {
    return (
        <>
            <div className='conatiner nav_bar' data-aos="fade-down" data-aos-duration="1000">
                <div className='left nav_items'>
                    Self_Portfolio
                </div>
                <div className='right'>
                    <a className='nav_items' href='#home'>Home</a>
                    <a className='nav_items' href='#experience'>Experience</a>
                    <a className='nav_items' href='#skills'>Skills</a>
                    <a className='nav_items' href='#projects'>Projects</a>
                    <a className='nav_items' href='#contact'>Contact</a>
                </div>
            </div>
        </>
    )
}
