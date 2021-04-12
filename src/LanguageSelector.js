import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div onChange={changeLanguage}>
      <input type="radio" value="fr" name="language" defaultChecked /> Français
      <input type="radio" value="ar" name="language"/> Arabe
    </div>
  )
}

export default LanguageSelector