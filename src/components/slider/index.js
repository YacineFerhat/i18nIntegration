import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from '@material-ui/core/styles';
const PrettoSlider = withStyles({
  root: {
    height: 40,
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  thumb: {
    display:'none'
  },
  track: {
    height: 40,
    borderRadius: 4,
  },
  rail: {
    height: 40,
    borderRadius: 4,
  },
})(Slider);

const SliderC = ({title,subTitlte}) => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='sliderRoot'>
         <div className='title'>{t(`${title}`)}</div>
      <PrettoSlider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={6}
        className="customSlide"

      />
         <div className='title'> {t(`${subTitlte}`)}</div>
      <Slider
        className="slider"
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
};

export default SliderC;
