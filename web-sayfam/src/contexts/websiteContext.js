import React, { createContext, useState } from 'react'



export const websiteContext = createContext()

const WebSiteProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false)

      const darkModeHandler = () => {
            document.body.classList.toggle("dark",!darkMode)
            setDarkMode(!darkMode)
      }

    const [language ,setLanguage] = useState("tr")

    return (
        <websiteContext.Provider value={{language,setLanguage,darkModeHandler,darkMode}}>{children}</websiteContext.Provider>
    )
}

export default WebSiteProvider