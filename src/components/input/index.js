import React from "react";
import { useTranslation } from "react-i18next";
import "./input.scss";
const Input = ({ title, icon, data, description, placeholder }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="inputRoot">
      <div className="titleHolder">
        <img className='inputIcon' src={icon ? icon.icon : null} alt="icon" height="15" />
        <h3>{t(`${title}`)}</h3>
      </div>
      <div className="label">{t(`${description}`)}</div>
      <div className="selectHolder">
        <select className="select">
          <option value={placeholder} disabled selected>
            {placeholder}
          </option>
          {data.map((select, idx) => (
            <option value={select.title} key={idx}>
              {select.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
