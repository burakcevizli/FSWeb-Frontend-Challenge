import React, { useContext } from 'react'
import githubLigth from "../assets/github-lighth.png"
import LinkedinLight from "../assets/LinkedIn.png"
import HeroPicture from "../assets/resim.png"
import { websiteContext } from '../contexts/websiteContext'
import data from '../data/data'

export default function Header() {
  // 20.satırdaki justify startı end yapınca Dark mode değişecek !
  const {language,setLanguage} = useContext(websiteContext)

  return (
    <>
      <div className="header flex">
        <div className="header-left bg-purple min-w-[70%]">
          <p onClick={()=>language === "tr" ? setLanguage("en"): setLanguage("tr")} className="text-green text-xl text-right mt-8 cursor-pointer mr-8"><span className='text-green'>{data[language].header.to}</span> <span style={{color:"#D9D9D9"}}>{data[language].header.languageSwitch}</span></p>
          <p className="text-green text-3xl ml-72">{data[language].header.name}</p>
        </div>

        
        <div className="header-right bg-green min-w-[30%]">
          <div className='DARKMODE bg-green'>
            <div className="flex flex-row gap-2 items-center mt-8 ml-8 cursor-pointer" id="NightModeRoot">
              <div className="bg-[#8f88ff] mt-0.5 self-start flex flex-row justify-start w-12 shrink-0 h-6 items-center px-1 rounded-[100px]">
                <div className="bg-[#ffe86e] w-4 shrink-0 h-4 rounded-[50%]" id="Ellipse" />
                <div
                  className="bg-[#e92577] w-px shrink-0 h-px rounded-[50%]"
                  id="Ellipse1"
                />
              </div>
              <div className="font-['Inter'] tracking-[1.5] text-[#4731d3] text-xl ">
                DARK MODE
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-content flex">
        <div className="hero-left bg-purple min-w-[70%] self-end ">
          <p className="text-green text-6xl ml-72 mr-48 mt-24">
            {data[language].header.title}
          </p>
          <p className="text-green text-6xl ml-72 mr-48">{data[language].header.titleSecond}</p>
          <p className="text-white text-2xl ml-72 mr-48 mt-12">
            {data[language].header.description}
          </p>
          <div className='buttons gap-4 flex ml-72 mb-24 mt-4'>
            <button className='bg-white rounded-md py-4 px-8 flex gap-2'>
              <img src={githubLigth} alt='github-light'></img>
              <p className='text-center'>Github</p>
            </button>
            <button className='bg-white rounded-md py-4 px-8 flex gap-2'>
              <img src={LinkedinLight} alt='LinkedinLight'></img>
              <p className='mt-1'>Linkedin</p>
            </button>
          </div>
        </div>

        <div className="hero-right bg-green min-w-[30%]">
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
