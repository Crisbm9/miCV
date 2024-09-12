import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carrusel.css"; 

import pic2 from '../images/1.jpg';
import pic3 from '../images/2.jpg';
import pic4 from '../images/3.jpg';
import pic5 from '../images/4.jpg';
import pic6 from '../images/5.jpg';
import pic7 from '../images/6.jpg';

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className="slide">
        <img src={pic2} alt="Slide 1" className="slide-image" />
      </div>
      <div className="slide">
        <img src={pic3} alt="Slide 2" className="slide-image" />
      </div>
      <div className="slide">
        <img src={pic4} alt="Slide 3" className="slide-image" />
      </div>
      <div className="slide">
        <img src={pic5} alt="Slide 4" className="slide-image" />
      </div>
      <div className="slide">
        <img src={pic6} alt="Slide 5" className="slide-image" />
      </div>
      
    </Slider>
  );
};

export default Carrusel;