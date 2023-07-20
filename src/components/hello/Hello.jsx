import { styled } from "styled-components"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { NavigationButton } from "../../styled-components/StyledComponents"

const HelloSection = styled.section`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 5vw;
`
const AboutAndPicDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10vw;
`
const AboutDiv = styled.div`
  max-width: 500px;
  font-size: 1.5rem;
  font-weight: 400;
  width: 50%;
`
const PictureDiv = styled.div`
  max-width: 500px;
  width: 50%;
`
const Pic = styled.img`
  width: 100%;
  border-radius: 50%;
`
function Hello() {
  const data = useContext(AppContext)

  const { language, navigateToSection, bodyColor } = data.data

  const handleChangeSection = () => {
    navigateToSection("proyects")
  }
  return (
    <HelloSection>
      <AboutAndPicDiv>
        <AboutDiv>
          <h1>Lautaro Balda</h1>
          {language === "es"
            ? `Estudiante argentino, apasionado de la programación y con experiencia en
          el trabajo colaborativo en diferentes áreas. Impulsado por el deseo
          constante de aprender y con la determinación de avanzar. Soy una persona
          cortés, atenta y paciente. Tengo un alto desempeño en sistemas
          informáticos, además de un rápido aprendizaje de cualquier herramienta
          digital y/o física`
            : `Argentine student, passionate about programming and with experience in
          collaborative work in different areas. driven by desire
          constant to learn and with the determination to advance. I am a person
          courteous, attentive and patient. I have a high performance in systems
          computers, in addition to a quick learning of any tool
          digital and/or physical`}
        </AboutDiv>
        <PictureDiv>
          <Pic src='https://e1.pxfuel.com/desktop-wallpaper/996/233/desktop-wallpaper-hunter-x-hunter-hisoka-backgrounds-hisoka-hxh.jpg' />
        </PictureDiv>
      </AboutAndPicDiv>
      <div>
        <NavigationButton
          onClick={handleChangeSection}
          style={{ color: bodyColor }}
        >
          {language === "es" ? "Proyectos" : "Projects"}
        </NavigationButton>
      </div>
    </HelloSection>
  )
}
export default Hello
