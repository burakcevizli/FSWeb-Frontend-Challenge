import React, { createContext, useEffect, useState } from 'react'

export const websiteContext = createContext()

const WebSiteProvider = ({ children }) => {


  const darkModeHandler = () => {
    document.body.classList.toggle("dark", !darkMode)
    setDarkMode(!darkMode)
  }
  const getInitialDarkModeState = () => {
    if (JSON.parse(localStorage.getItem("darkmode")) === true) {
      return true;
    } else if (JSON.parse(localStorage.getItem("darkmode")) === false) {
      return false;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    } else {
      return false;
    }
  };

  const initialState = getInitialDarkModeState();

  const [darkMode, setDarkMode] = useState(initialState)

  useEffect(() => {
    const isDarkModeEnabled = darkMode;
    if (isDarkModeEnabled) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkMode));
  }, [darkMode]);

  const [language, setLanguage] = useState(localStorage.getItem("language") ? localStorage.getItem("language") : "en")

  return (
    <websiteContext.Provider value={{ language, setLanguage, darkModeHandler, darkMode }}>{children}</websiteContext.Provider>
  )
}

export default WebSiteProvider