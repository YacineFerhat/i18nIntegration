import React from "react";
import { useTranslation } from "react-i18next";
import dzFlag from "assets/dz.png";
import frFlag from "assets/fr.svg";
const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event);
  };

  return (
    <div>
      {i18n.language === "fr" ? (
        <div>
          <img alt='France flag' onClick={() => changeLanguage("ar")} src={dzFlag} height="30" />
        </div>
      ) : (
        <div>
          <img alt='Algeria flag' onClick={() => changeLanguage("fr")} src={frFlag} height="30" />
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
