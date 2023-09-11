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
        <div className=' max-w-[66%] ml-72 flex justify-between py-24'>
            <p className=' text-8xl text-[#4832D3]' >Skills</p>
            <div className='flex flex-col gap-12' style={{ maxHeight: "50vh" }}>
                {array1.map(item =>
                    <div>
                        <img src={item} alt='Pictures' />
                    </div>
                )}
            </div>
            <div className='flex flex-col gap-12' style={{ maxHeight: "50vh" }}>
                {array2.map(item =>
                    <div>
                        <img src={item} alt='Pictures' />
                    </div>
                )}
            </div>

        </div>

    )
}
