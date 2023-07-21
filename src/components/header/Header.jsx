/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { styled } from "styled-components"
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher"
import {
  ContactNavigationLink,
  NavigationLink,
} from "../../styled-components/StyledComponents"
import ThemeSwitch from "../themeSwitch/ThemeSwitch"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 12rem;
  background-color: transparent;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`

function Header() {
  const data = useContext(AppContext)
  const {
    language,
    handleChangeLanguage,
    handleChangeTheme,
    navigateToSection,
    bodyColor,
    evilBodyBackgroundColor,
    evilBodyColor,
    theme,
  } = data.data

  const moveToProjects = () => {
    navigateToSection("proyects")
  }
  const moveToAbout = () => {
    navigateToSection("about")
  }
  return (
    <StyledHeader>
      <div>
        <ThemeSwitch
          onClick={handleChangeTheme}
          defaultChecked={theme == "dark" ? true : false}
        />
        <LanguageSwitcher
          language={language}
          handleChangeLanguage={handleChangeLanguage}
          bodyColor={bodyColor}
        />
      </div>
      <div>
        <StyledUl>
          <li>
            <NavigationLink onClick={moveToAbout} style={{ color: bodyColor }}>
              {language == "es" ? "Info" : "About"}
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              onClick={moveToProjects}
              style={{ color: bodyColor }}
            >
              {language == "es" ? "Proyectos" : "Projects"}
            </NavigationLink>
          </li>
          <li>
            <ContactNavigationLink
              href='#'
              style={{
                color: evilBodyColor,
                backgroundColor: evilBodyBackgroundColor,
              }}
            >
              {language == "es" ? "Contacto" : "Contact"}
            </ContactNavigationLink>
          </li>
        </StyledUl>
      </div>
    </StyledHeader>
  )
}
export default Header
