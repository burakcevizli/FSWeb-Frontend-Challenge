import React from 'react'
import "../layouts/SkillsCss.css"
import JavascriptLogo from "../assets/js.png"
import ReactLogo from "../assets/react.png"
import ReduxLogo from "../assets/redux.png"
import NodeLogo from "../assets/node.png"
import VsCodeLogo from "../assets/vsCode.png"
import FigmaLogo from "../assets/figma.png"

export default function Skills() {
    const array = [
        JavascriptLogo, ReactLogo, ReduxLogo, NodeLogo, VsCodeLogo, FigmaLogo
    ]
    return (
        <div className='skillsMain'>
            <p className='Skills text-8xl'>Skills</p>
            <div className='SecondMain' style={{ width: "60%" }}>


                <div className='ImagesDiv flex flex-wrap'>
                    {array.map(item =>
                        <img className='images' src={item} alt='Pictures' />
                    )}
                </div>
            </div>
        </div>

    )
}
