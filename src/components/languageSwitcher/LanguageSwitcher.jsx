/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { LanguageButton } from "../../styled-components/StyledComponents"
function LanguageSwitcher({
  language,
  handleChangeLanguage,
  bodyColor,
  bodyBackgroundColor,
}) {
  return (
    <LanguageButton
      onClick={handleChangeLanguage}
      style={{
        color: bodyColor,
      }}
    >
      {language == "es" ? "ES" : "EN"}
    </LanguageButton>
  )
}
export default LanguageSwitcher
