import React from 'react'
import "../layouts/SkillsCss.css"
import JavascriptLogo from "../assets/js.png"
import ReactLogo from "../assets/react.png"
import ReduxLogo from "../assets/redux.png"
import NodeLogo from "../assets/node.png"
import VsCodeLogo from "../assets/vsCode.png"
import FigmaLogo from "../assets/figma.png"

export default function Skills() {
    return (
        <div className='skillsMain'>
            <div>
                <p className='Skills text-8xl '>Skills</p>
            </div>
            <div className='flex flex-col flex-wrap'>
                <img src={JavascriptLogo} alt='javascript' />
                <img src={ReactLogo} alt='react' />
                <img src={ReduxLogo} alt='redux' />
                <img src={NodeLogo} alt='NodeLogo' />
                <img src={VsCodeLogo} alt='VsCodeLogo' />
                <img src={FigmaLogo} alt='FigmaLogo' />
            </div>
        </div>

    )
}
