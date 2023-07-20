/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import { spanishCodes, englishCodes, whiteTheme, blackTheme } from "../Global"

export const AppContext = createContext()

const ContextProvider = ({ children }) => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light")
  }
  const body = document.querySelector("body")
  const rgbToHex = (rgbText) => {
    const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/
    const match = rgbText.match(regex)

    if (!match) {
      return null
    }

    const r = parseInt(match[1])
    const g = parseInt(match[2])
    const b = parseInt(match[3])

    const rHex = r.toString(16).padStart(2, "0")
    const gHex = g.toString(16).padStart(2, "0")
    const bHex = b.toString(16).padStart(2, "0")

    return `#${rHex}${gHex}${bHex}`
  }

  const bodyColor = rgbToHex(body.style.color)
  const bodyBackgroundColor = rgbToHex(body.style.backgroundColor)

  const evilBodyBackgroundColor =
    bodyBackgroundColor == "#ffffff" ? "#121212" : "#ffffff"
  const evilBodyColor = bodyColor == "#ffffff" ? "#000000" : "#ffffff"

  const handleChangeLanguage = () => {
    setData((prevState) => ({
      ...prevState,
      language: prevState.language === "es" ? "en" : "es",
    }))
  }
  const handleChangeTheme = () => {
    setData((prevState) => ({
      ...prevState,
      theme: prevState.theme === "light" ? "dark" : "light",
      bodyColor: prevState.bodyColor === "#ffffff" ? "#000000" : "#ffffff",
      evilBodyColor:
        prevState.evilBodyColor === "#ffffff" ? "#000000" : "#ffffff",
      evilBodyBackgroundColor:
        prevState.evilBodyBackgroundColor === "#ffffff" ? "#000000" : "#ffffff",
    }))

    localStorage.getItem("theme") === "light"
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light")
  }

  function navigateToSection(id) {
    var element = document.getElementById(id)
    element.scrollIntoView({
      duration: 1500,
      behavior: "smooth",
      block: "start",
    })
  }

  const setTheme = () => {
    if (localStorage.getItem("theme") === "light") {
      return "light"
    } else if (localStorage.getItem("theme") === "dark") {
      return "dark"
    } else {
      localStorage.setItem("theme", "light")
      return "light"
    }
  }

  const navigatorLanguage = navigator.language
  const setLanguage = () => {
    if (spanishCodes.includes(navigatorLanguage)) {
      return "es"
    } else if (englishCodes.includes(navigatorLanguage)) {
      return "en"
    }
    return "en"
  }
  const language = setLanguage()
  const theme = setTheme()

  const [data, setData] = useState({
    language,
    theme,
    bodyColor,
    bodyBackgroundColor,
    evilBodyBackgroundColor,
    evilBodyColor,
    handleChangeLanguage,
    handleChangeTheme,
    navigateToSection,
    rgbToHex,
  })
  if (data.theme === "light") {
    body.style.backgroundColor = whiteTheme.backgroundColor
    body.style.color = whiteTheme.textColor
  } else {
    body.style.backgroundColor = blackTheme.backgroundColor
    body.style.color = blackTheme.textColor
  }

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
