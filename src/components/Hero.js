import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={`${props.class} w-full my-20`}>
          <div className="py-44 text-center">{props.desc}</div>
        </div>
        <div className={`${props.class} w-full my-20`}>
          <div className="py-44 text-center">{props.desc}</div>
        </div>
        <div className={`${props.class} w-full my-20`}>
          <div className="py-44 text-center">{props.desc}</div>
        </div>
        <div className={`${props.class} w-full my-20`}>
          <div className="py-44 text-center">{props.desc}</div>
        </div>
        <div className={`${props.class} w-full my-20`}>
          <div className="py-44 text-center">{props.desc}</div>
        </div>
        <div className={`${props.class} w-full my-20`}>
          <div className="py-44 text-center">{props.desc}</div>
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
