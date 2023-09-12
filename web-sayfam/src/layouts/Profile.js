import React, { useContext } from 'react'
import ProfilePicture from "../assets/ProfilePicture.png"
import data from '../data/data'
import { websiteContext } from '../contexts/websiteContext'

export default function Profile() {

    const { language } = useContext(websiteContext)

    return (
        <div className='bg-purple pb-12 dark:bg-[#171043]'>
            <h2 className='text-green text-6xl ml-72 mb-8  pt-16'>{data[language].profile.profile}</h2>
            <div className='ml-72 flex w-4/6 justify-between'>
                <div className=''>
                    <h6 className='text-3xl text-[#FFF]  '>{data[language].profile.title}</h6>
                    <div className='flex'>
                        <div className='w-24 text-green mt-6'>
                            <h6 >
                                {data[language].profile.birthday}
                            </h6>
                            <h6 className='mt-8'>
                                {data[language].profile.city}
                            </h6>
                            <h6 className='mt-8'>
                                {data[language].profile.graduatedFrom}
                            </h6>
                            <h6 className='mt-8'>
                                {data[language].profile.role}
                            </h6>
                        </div>
                        <div className='w-44 mt-6 ml-4 text-[#FFF]'>
                            <h6 >
                                {data[language].profile.response.birthday}
                            </h6>
                            <h6 className='mt-8'>
                                {data[language].profile.response.city}
                            </h6>

                            <h6 className='mt-8'>
                                {data[language].profile.response.graduatedFrom}
                            </h6>
                            <h6 className='mt-8'>
                                {data[language].profile.response.role}
                            </h6>
                        </div>
                    </div>

                </div>
                <img
                    src={ProfilePicture}
                    className=""
                    id="ImageRoot"
                    alt='sad'
                />
                <div className='w-[18.75rem]'>
                    <h6 className='text-3xl text-[#FFF]  '>
                        {data[language].profile.aboutMe}
                    </h6>
                    <p className='mt-6 text-[#FFF]'>
                        {data[language].profile.aboutMeFirstP}
                    </p>
                    <p className='mt-6 text-[#FFF]'>
                        {data[language].profile.aboutMeSecondP}
                    </p>
                </div>
            </div>
        </div>
    )
}
