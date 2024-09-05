import React from 'react'
import skills from './data/skills.json'

export const Skill = () => {
  return (
    <>
      <div className='container skills' id='skills'>
          <h1>Skills</h1>
          <div className='items'>
            {
              skills.map((data) => (
                <>
                <div className='item' key = {data.id} data-aos = "flip-left" data-aos-duration = "1000">
                    <img src = {`/assets/${data.imgSrc}`} alt="logo" />
                    <h3>{data.title}</h3>
                </div>
                </>
              ))
            }
          </div>
      </div>
    </>
  )
}
