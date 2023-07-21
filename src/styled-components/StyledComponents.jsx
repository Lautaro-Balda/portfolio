import { styled, keyframes } from "styled-components"

export const PreferenceButton = styled.button`
  background-color: transparent;
  border: none;
  transition: color 0.3s ease-in-out;
`
export const LanguageButton = styled(PreferenceButton)`
  border: 1px solid green;
  padding: 0.5rem;
`

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`
export const NavigationButton = styled(PreferenceButton)`
  font-size: 1.5rem;
  padding: 1rem;
  border: 1px solid #ffffff;
  border-radius: 0.5rem;
  cursor: pointer;
  animation: ${pulseAnimation} 2s infinite;
`

export const NavigationLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
`

export const ContactNavigationLink = styled(NavigationLink)`
  border-radius: 15px;
  padding: 1rem;
  transition: background-color 0.3s ease-in-out;
`
