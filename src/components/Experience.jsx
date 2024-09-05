import React from 'react'
import experience from './data/experience.json'

export const Experience = () => {
    return (
        <>
            <div className='container ex' id="experience">
                <h1>Experience</h1>
                {
                    experience.map((data) => {
                        return (
                            <>
                                <div key={data.id} className='ex-items text-center'
                                    data-aos="zoom-in" data-aos-duration="1000">
                                    <div className='left'>
                                        <img src={`/assets/${data.imgSrc}`} alt='company logo' />
                                    </div>
                                    <div className='right'>
                                        <h2>{data.role}</h2>
                                        <h4>
                                            <span style={{ color: "yellowgreen" }}>
                                                {data.startDate} {data.endDate} {" "}
                                            </span>
                                            {" "}
                                            <span style={{ color: "yellow" }}>{data.Location}</span>
                                        </h4>
                                        <h5 style={{ color: "yellow" }}>
                                            {data.Experience[0]}
                                        </h5>
                                        <h5 style={{ color: "yellow" }}>
                                            {data.Experience[1]}
                                        </h5>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}