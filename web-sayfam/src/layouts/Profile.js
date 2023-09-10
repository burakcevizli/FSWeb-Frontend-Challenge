import React from 'react'
import ProfilePicture from "../assets/ProfilePicture.png"

export default function Profile() {
    return (
        <div className='bg-purple pb-12'>
            <h2 className='text-green text-6xl ml-72 mb-8  pt-16'>Profile</h2>
            <div className='ml-72 flex w-4/6 justify-between'>
                <div className=''>
                    <h6 className='text-3xl text-[#FFF]  '>Basic Information</h6>
                    <div className='flex'>
                        <div className='w-24 text-green mt-6'>
                            <h6 >
                                Doğum Tarihi
                            </h6>
                            <h6 className='mt-8'>
                                İkamet Şehri
                            </h6>
                            <h6 className='mt-8'>
                                Eğitim Durumu
                            </h6>
                            <h6 className='mt-8'>
                                Tercih Edilen Rol
                            </h6>
                        </div>
                        <div className='w-44 mt-6 ml-4 text-[#FFF]'>
                            <h6 >
                                24.03.1996
                            </h6>
                            <h6 className='mt-8'>
                                Ankara
                            </h6>

                            <h6 className='mt-8'>
                                Hacettepe Ünv.  Biyoloji
                                Lisans, 2016
                            </h6>
                            <h6 className='mt-8'>
                                Frontend, UI
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
                        About Me
                    </h6>
                    <p className='mt-12 text-[#FFF]'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                    </p>
                    <p className='mt-12 text-[#FFF]'>
                        Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
                    </p>
                </div>
            </div>
        </div>
    )
}
