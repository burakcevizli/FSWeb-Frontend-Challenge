import React, { useContext } from 'react'
import data from '../data/data'
import { websiteContext } from '../contexts/websiteContext'

export default function Projects() {

    const {language} = useContext(websiteContext)

    return (
        <div className='bg-green pb-24'>
            <h2 className='ml-72 w-4/6 text-purple text-5xl pt-24'>{data[language].projects.title}</h2>

            {data[language].projects.projectsArray.map(proje => (
                <div className='ml-72 w-4/6 mt-16 flex bg-white rounded-xl'>
                    <img src={proje.img} alt='Projepic' />
                    <div className='pl-8 pr-8'>
                        <h1 className='text-[32px] mt-6 text-[#4338CA] font-bold'>{proje.title}</h1>
                        <p className='text-[16px] mt-12 text-[#383838]'>{proje.description}</p>

                        <div className='mt-12 flex gap-4'>
                            {proje.programs.map(program => (
                                <a className='px-4 py-2 bg-purple text-white rounded-[23px]' href='#'>{program}</a>
                            ))}

                        </div>
                        <div className='mt-12 pb-8'>
                            <a className='text-[#120B39] underline underline-offset-2 text-xl' href='#'>{data[language].projects.visit}</a>
                            <a className='ml-24 text-[#120B39] underline underline-offset-2 text-xl' href='#'>Github</a>
                        </div>
                    </div>
                </div>
            )
            )}
        </div>
    )
}
