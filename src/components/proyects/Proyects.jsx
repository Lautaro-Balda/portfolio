import { styled } from "styled-components"

const StyledSection = styled.section`
  height: calc(100vh - 6rem);
`
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
function Proyects() {
  return (
    <StyledSection id='proyects'>
      <StyledDiv>PROJECTS</StyledDiv>
    </StyledSection>
  )
}
export default Proyects
