import React, { useContext } from 'react'
import data from '../data/data'
import { websiteContext } from '../contexts/websiteContext'
import { toast } from 'react-toastify';


export default function Projects() {

    const { language } = useContext(websiteContext)
    const onClickHandler = () => {
        toast.success('Projenin Sayfasına Yönlendiriliyorsunuz...', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }


    return (
        <div className='bg-green pb-24 dark:bg-[#1A210B]'>
            <h2 className='ml-80 w-4/6 text-purple dark:text-[#CBF281] text-5xl pt-24'>{data[language].projects.title}</h2>

            {data[language].projects.projectsArray.map((proje, index) => (
                <div key={index} className='ml-80 w-4/6 mt-16 flex bg-white dark:bg-[#2B2727] rounded-xl'>
                    <img className='w-[22.5rem] rounded-xl' src={proje.img} alt='Projepic' />
                    <div className='pl-8 pr-8'>
                        <h1 className='text-[32px] mt-6 text-[#4338CA] dark:text-[#C1BAED]  font-bold'>{proje.title}</h1>
                        <p className='text-[16px] mt-12 text-[#383838] dark:text-[#FFFFFF]'>{proje.description}</p>

                        <div className='mt-12 flex gap-4'>
                            {proje.programs.map((program, index) => (
                                <a key={index} href='#' className='px-4 py-2 bg-purple dark:bg-[#8173DA] text-white rounded-[23px]'>{program}</a>
                            ))}

                        </div>
                        <div className='mt-12 pb-8'>
                            <a onClick={onClickHandler} href={proje.site} target='_blank' className='text-[#120B39] dark:text-[#CBF281] underline underline-offset-2 text-xl'>{data[language].projects.visit}</a>
                            <a href='#' className='ml-24 text-[#120B39] dark:text-[#CBF281] underline underline-offset-2 text-xl' >Github</a>
                        </div>
                    </div>
                </div>
            )
            )}
        </div>
    )
}
