import React, { useContext } from 'react'
import data from '../data/data'
import { websiteContext } from '../contexts/websiteContext'

export default function Skills() {

    const { language, darkMode } = useContext(websiteContext)


    return (
        <div className='dark:bg-[#252128;]'>
            <div className=' max-w-[66%] ml-80 flex justify-between py-24 '>
                <p className=' text-6xl text-[#4832D3] dark:text-[#CBF281]' >{data[language].skills.skils}</p>
                <div className='flex flex-col gap-12' style={{ height: "60%" }}>
                    {(darkMode ? data[language].skills.skillsDarkArray1 : data[language].skills.skillsArray1).map((item, index) =>
                        <div key={index}>
                            <img src={item} alt='Pictures' />
                        </div>
                    )}
                </div>
                <div className='flex flex-col gap-12' style={{ maxHeight: "60vh" }}>
                    {(darkMode ? data[language].skills.skillsDarkArray2 : data[language].skills.skillsArray2).map((item, index) =>
                        <div key={index}>
                            <img src={item} alt='Pictures' />
                        </div>
                    )}
                </div>

            </div>
        </div>


    )
}
