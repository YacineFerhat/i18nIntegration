import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";
const Button = ({ label }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="buttonContainer">
      <div className="button">
          Démarrer
        {t.label !== "undefined" ? t.label : "Démarrer"}
      </div>
    </div>
  );
};

export default Button;
