import React, { useContext } from 'react'
import Mail from "../assets/mail.png"
import Twitter from "../assets/twitter.png"
import Codepen from "../assets/codepen.png"
import Instagram from "../assets/instagram.png"
import data from '../data/data'
import { websiteContext } from '../contexts/websiteContext'

export default function Footer() {
    const {language} = useContext(websiteContext)
    return (
        <div className='text-center'>
            <h1 className='text-[48px] mt-12 text-purple'>{data[language].footer.title}</h1>
            <p className='text-[24px] mt-8 text-[#120B39]'>{data[language].footer.description}</p>
            <a href='#' className='cursor-pointer text-[20px] mt-8 text-purple underline underline-offset-2'>{data[language].footer.mail}</a>
            <div className='flex justify-center mt-8 mb-12 gap-4'>
                <img src={Twitter}></img>
                <img src={Codepen}></img>
                <img src={Mail}></img>
                <img src={Instagram}></img>
            </div>
        </div>
    )
}
