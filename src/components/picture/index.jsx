import React from "react";
import doctor from 'assets/doctor.jpg'
import "./index.scss";
const Picture = () => {
  return (
    <img className="picture" src={doctor} alt='doctor'/>
  );
};

export default Picture;
