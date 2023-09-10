import React from 'react'
import Mail from "../assets/mail.png"
import Twitter from "../assets/twitter.png"
import Codepen from "../assets/codepen.png"
import Instagram from "../assets/instagram.png"

export default function Footer() {
    return (
        <div className='text-center'>
            <h1 className='text-[48px] mt-12 text-purple'>Send me a message !</h1>
            <p className='text-[24px] mt-8 text-[#120B39]'>Got a question or proposal, or just want
                to say hello? Go ahead.</p>
            <p className='text-[20px] mt-8 text-purple underline underline-offset-2'>almilasucode@gmail.com</p>
            <div className='flex justify-center mt-8 mb-12 gap-4'>
                <img src={Twitter}></img>
                <img src={Codepen}></img>
                <img src={Mail}></img>
                <img src={Instagram}></img>
            </div>
        </div>
    )
}
