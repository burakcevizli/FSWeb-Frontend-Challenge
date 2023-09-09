import React from 'react'
import "../layouts/HeaderCss.css"
import githubLigth from "../assets/github-lighth.png"
import LinkedinLight from "../assets/LinkedIn.png"
import HeroPicture from "../assets/resim.png"

export default function Header() {
  return (
    <header className='flex HeaderClass '>
      <div className='HeaderPurpleDiv'>
        
          <p className='turkceIngılızceGecis'><span className='Türkçe'>TÜRKÇE</span><span className='Geçiş'>'YE GEÇ</span></p>
        
        <div>


          <div className='SolPaddingHeader '>
          <h1 className="almila absolute top-12">almila</h1>

            <h1 className='text-5xl text-green'>I am frontend developer...</h1>
            <p className='text-xl text-white '>LOREMMMMMMLOREMMMMMMLOREMMMMMMLOREMMMMMMLOREMMMMMM</p>
            <div className='buttons'>
              <button className='bg-white flex gap-2'>
                <img src={githubLigth} alt='github-light'></img>
                <p className='text-center'>Github</p>
              </button>
              <button className='bg-white flex gap-2'>
                <img src={LinkedinLight} alt='LinkedinLight'></img>
                <p className='text-center'>Linkedin</p>
              </button>
            </div>
            <img src={HeroPicture} alt='hero' style={{ width: "500px" }} className='resim absolute top-14' />

          </div>
        </div>


      </div>
      <div className='DARKMODE bg-green'>
        DARK MODE
      </div>
    </header>
  )
}
