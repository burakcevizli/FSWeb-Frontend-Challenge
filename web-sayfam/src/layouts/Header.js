import React, { useContext } from 'react'
import githubLigth from "../assets/github-lighth.png"
import LinkedinLight from "../assets/LinkedIn.png"
import HeroPicture from "../assets/resim.png"
import { websiteContext } from '../contexts/websiteContext'
import githubDark from "../assets/githubdark.png"
import linkEdinDark from "../assets/LinkedIndark.png"
import data from '../data/data'
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {

  const { language, setLanguage, darkModeHandler, darkMode } = useContext(websiteContext)


  const languageHandler = () => {
    axios
      .post("https://reqres.in/api/users", { language })
      .then(res => {
        setLanguage(res.data.language === "tr" ? "en" : "tr");
        localStorage.setItem("language", res.data.language === "tr" ? "en" : "tr");
      })
      .catch(err => console.log(err))
  }

  const gitHubOnClickHandler = () => {
    toast.success('Github Yönlendiriliyorsunuz...', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setTimeout(() => {
      window.open("https://github.com/burakcevizli", "_blank")
    }, 2000)

  }
  const linkEdinOnClickHandler = () => {
    toast.success('Linkedin Yönlendiriyorsunuz...', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setTimeout(() => {
      window.open("https://www.linkedin.com/in/burak-cevizli-044631155/", "_blank")
    }, 2000)
  }

  return (
    <>
      <div className="header flex">
        <div className="header-left bg-purple dark:bg-[#171043] min-w-[70%]">
          <p onClick={languageHandler} className="text-green text-xl text-right mt-8 cursor-pointer mr-8"><span className='text-green'>{data[language].header.to}</span> <span style={{ color: "#D9D9D9" }}>{data[language].header.languageSwitch}</span></p>
          <p className="text-green text-3xl ml-72">{data[language].header.name}</p>
        </div>


        <div  className="header-right bg-green dark:bg-[#1A210B] min-w-[30%]">
          <div  className='bg-green dark:bg-[#1A210B]'>
            <div  className="flex flex-row gap-2 items-center mt-8 ml-8 cursor-pointer" id="NightModeRoot">
              <div onClick={darkModeHandler} className="bg-[#8f88ff] dark:bg-[#3A3A3A]  mt-0.5 self-start flex flex-row justify-end dark:justify-start w-12 shrink-0 h-6 items-center px-1 rounded-[100px]">
                <div className="bg-[#ffe86e] w-4 shrink-0 h-4 rounded-[50%]" id="Ellipse" />
                <div
                  className="bg-[#e92577] w-px shrink-0 h-px rounded-[50%]"
                  id="Ellipse1"
                />
              </div>
              <div onClick={darkModeHandler} className="font-['Inter'] tracking-[1.5] text-[#4731d3] text-xl ">
                DARK MODE
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-content flex">
        <div className="hero-left bg-purple dark:bg-[#171043] min-w-[70%] self-end ">
          <p className="text-green text-6xl ml-72 mr-48 mt-24">
            {data[language].header.title}
          </p>
          <p className="text-green text-6xl ml-72 mr-48">{data[language].header.titleSecond}</p>
          <p className="text-white text-2xl ml-72 mr-48 mt-12">
            {data[language].header.description}
          </p>
          <div className='buttons gap-4 flex ml-72 mb-24 mt-8 pt-5'>
            <button onClick={gitHubOnClickHandler} className='bg-white dark:bg-[#252128] border border-white border-solid rounded-md py-4 px-8 flex gap-2'>
              <img src={darkMode ? githubDark : githubLigth} alt='github-light'></img>
              <p className='text-center dark:text-[#FFFFFF]'>Github</p>
            </button>
            <button onClick={linkEdinOnClickHandler} className='bg-white dark:bg-[#252128] border border-white border-solid rounded-md py-4 px-8 flex gap-2'>
              <img src={darkMode ? linkEdinDark : LinkedinLight} alt='LinkedinLight'></img>
              <p className='mt-1 dark:text-[#FFFFFF]'>Linkedin</p>
            </button>
          </div>
        </div>

        <div className="hero-right bg-green dark:bg-[#1A210B] min-w-[30%]">
          <img
            className="-ml-64 absolute"
            src={HeroPicture}
            alt="heroright"
          ></img>
        </div>
      </div>

    </>

  )
}
