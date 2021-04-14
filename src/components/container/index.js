import React from "react";
import "./container.scss";
import { Icons } from "utils/icons";
import { useTranslation } from "react-i18next";

const Header = ({ children }) => {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  return i18n.language === "fr" ? (
    <div className="root">
      {children}

      <img className="icon" height="30" src={Icons[0].icon} alt="close" />
    </div>
  ) : (
    <div dir="rtl" className="root">
      {children}

      <img className="icon" height="30" src={Icons[0].icon} alt="close" />
    </div>
  );
};

export default Header;
