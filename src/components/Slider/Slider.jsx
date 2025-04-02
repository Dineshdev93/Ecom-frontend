import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'



export default function SlickSlider() {
  const settings = {
    dots: true, 
    infinite: true, // ✅ Enables infinite looping
    speed: 500, // ✅ Transition speed
    slidesToShow: 1, // ✅ Show 1 slide at a time
    slidesToScroll: 1, // ✅ Scroll 1 slide at a time
    autoplay: true, // ✅ Enable autoplay
    autoplaySpeed: 3000, // ✅ 3-second autoplay delay
    arrows: true, // ✅ Show left/right navigation buttons
    
  };

  return (
    <div style={{ width: "80%", margin: "auto", textAlign: "center" }} className="mt-5">
      <Slider {...settings}>
        <div className="custom-slide">
          <img src="./ban1.jpg" alt="Slide 1" className="slider-img" />
        </div>
        <div className="custom-slide">
          <img src="./ban2.jpg" alt="Slide 2" className="slider-img" />
        </div>
        <div className="custom-slide">
          <img src="./ban3.jpg" alt="Slide 3" className="slider-img" />
        </div>
        <div className="custom-slide">
          <img src="./ban4.jpg" alt="Slide 4" className="slider-img" />
        </div>
      </Slider>
    </div>
  );
}
