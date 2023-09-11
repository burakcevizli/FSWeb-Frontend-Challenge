import React, { useContext } from 'react'

import data from '../data/data'
import { websiteContext } from '../contexts/websiteContext'

export default function Skills() {
    
    const {language} = useContext(websiteContext)
    

    return (
        <div className=' max-w-[66%] ml-72 flex justify-between py-24'>
            <p className=' text-8xl text-[#4832D3]' >{data[language].skills.skils}</p>
            <div className='flex flex-col gap-12' style={{ maxHeight: "50vh" }}>
                {data[language].skills.skillsArray1.map(item =>
                    <div>
                        <img src={item} alt='Pictures' />
                    </div>
                )}
            </div>
            <div className='flex flex-col gap-12' style={{ maxHeight: "50vh" }}>
                {data[language].skills.skillsArray2.map(item =>
                    <div>
                        <img src={item} alt='Pictures' />
                    </div>
                )}
            </div>

        </div>

    )
}
