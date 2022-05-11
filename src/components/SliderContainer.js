import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/sliderContainer.scss";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      NEXT
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      PREV
    </div>
  );
}

const SliderContainer = ({ children, settings }) => {
  const sliderSettings = {
    ...settings,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return <>{children && <Slider {...sliderSettings}>{children}</Slider>}</>;
};

export default SliderContainer;
