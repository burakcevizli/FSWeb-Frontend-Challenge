import React from 'react'
import "../layouts/HeaderCss.css"
import githubLigth from "../assets/github-lighth.png"
import LinkedinLight from "../assets/LinkedIn.png"
import HeroPicture from "../assets/resim.png"

export default function Header() {
  return (
    <header className='flex HeaderClass '>
      <div className='HeaderPurpleDiv'>

        <p className='turkceIngılızceGecis cursor-pointer font-bold'><span className='Türkçe'>TÜRKÇE</span><span className='Geçiş'>'YE GEÇ</span></p>

        <div>
          <div className='SolPaddingHeader '>
            <h1 className="almila absolute top-12 font-bold">almila</h1>

            <h1 className='text-5xl text-green font-bold'>I am frontend developer...</h1>
            <p className='text-xl text-white '>...who likes to craft solid and scalable frontend products with great user experiences.</p>
            <div className='buttons mt-7'>
              <button className='bg-white flex gap-2'>
                <img src={githubLigth} alt='github-light'></img>
                <p className='text-center'>Github</p>
              </button>
              <button className='bg-white flex gap-2'>
                <img src={LinkedinLight} alt='LinkedinLight'></img>
                <p>Linkedin</p>
              </button>
            </div>
            <img src={HeroPicture} alt='hero' style={{ width: "500px" }} className='resim absolute top-14' />

          </div>
        </div>


      </div>
      <div className='DARKMODE bg-green'>
        <div className="flex flex-row gap-2 w-full items-center mt-8 ml-8 cursor-pointer" id="NightModeRoot">
          <div className="bg-[#8f88ff] self-start flex flex-row justify-end w-12 shrink-0 h-6 items-center px-1 rounded-[100px]">
            <div className="bg-[#ffe86e] w-4 shrink-0 h-4 rounded-[50%]" id="Ellipse" />
            <div
              className="bg-[#e92577] w-px shrink-0 h-px rounded-[50%]"
              id="Ellipse1"
            />
          </div>
          <div className="text-sm font-['Inter'] tracking-[1.5] text-[#4731d3] font-bold">
            DARK MODE
          </div>
        </div>
      </div>
    </header>
  )
}
