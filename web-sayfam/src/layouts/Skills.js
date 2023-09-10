import React from 'react'
import JavascriptLogo from "../assets/js.png"
import ReactLogo from "../assets/react.png"
import ReduxLogo from "../assets/redux.png"
import NodeLogo from "../assets/node.png"
import VsCodeLogo from "../assets/vsCode.png"
import FigmaLogo from "../assets/figma.png"

export default function Skills() {
    const array1 = [
        JavascriptLogo, ReactLogo, ReduxLogo
    ]
    const array2 = [
        NodeLogo, VsCodeLogo, FigmaLogo
    ]
    return (
        <div className=' w-8/12 ml-72 flex justify-between'>
            <p className=' text-8xl text-[#4832D3]' >Skills</p>
            <div className='flex justify-between'>
                <div className='ImagesDiv flex flex-col flex-wrap'>
                    {array1.map(item =>
                        <img className='images' src={item} alt='Pictures' />
                    )}
                </div>
                <div className='ImagesDiv flex flex-col flex-wrap'>
                    {array2.map(item =>
                        <img className='images' src={item} alt='Pictures' />
                    )}
                </div>
            </div>
        </div>

    )
}
