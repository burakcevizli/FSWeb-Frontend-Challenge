import React from 'react'
import "../layouts/HeaderCss.css"
import githubLigth from "../assets/github-lighth.png"

export default function Header() {
  return (
    <header className='flex HeaderClass'>
      <div className='HeaderPurpleDiv'>

        <p className='turkceIngılızceGecis'>Türkçeye Geç </p>


        <div className='SolPaddingHeader'>
          <h1 className="almila">almila</h1>
          <h1 className='text-5xl text-green'>I am frontend developer...</h1>
          <p className='text-xl text-white'>LOREMMMMMMLOREMMMMMMLOREMMMMMMLOREMMMMMMLOREMMMMMM</p>
          <div className='buttons'>
            <button className='bg-white flex gap-2'>
              <img src={githubLigth} alt='github-light'></img>
              <p className='text-center'>Github</p>
            </button>
            <button className='bg-white'>
              Linkedin
            </button>
          </div>

        </div>


      </div>
      <div className='DARKMODE bg-green'>
        DARK MODE
      </div>
    </header>
  )
}
