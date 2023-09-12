import React, { useContext } from 'react'
import Mail from "../assets/mail.png"
import Twitter from "../assets/twitter.png"
import Codepen from "../assets/codepen.png"
import Instagram from "../assets/instagram.png"
import data from '../data/data'
import { websiteContext } from '../contexts/websiteContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Footer() {
    const { language } = useContext(websiteContext)

    const mailOnClickHandler = () => {
        toast.success('Mail Sayfasına Yönlendiriliyorsunuz...', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setTimeout(()=>{
                window.open("mailto:burakcevizli@gmail.com","_blank")
              },2000)}
        
        return (

            <div className='text-center dark:bg-[#252128]'>
                <h1 className='text-[48px] pt-12 text-purple dark:text-[#8F88FF]'>{data[language].footer.title}</h1>
                <p className='text-[24px] dark:text-[#FFFFFF] mt-8 mb-8 text-[#120B39]'>{data[language].footer.description}</p>
                <a onClick={mailOnClickHandler} className='cursor-pointer text-[20px] text-purple dark:text-[#8F88FF] underline underline-offset-2'>{data[language].footer.mail}</a>
                <div className='flex justify-center mt-8 pb-12 gap-4'>
                    <img src={Twitter} alt='A'></img>
                    <img src={Codepen} alt='A'></img>
                    <img src={Mail} alt='A'></img>
                    <img src={Instagram} alt='A'></img>
                </div>
            </div>


        )
    }

