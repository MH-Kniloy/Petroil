import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reactslick = ({slider1, slider2, slider3, slider4}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="py-6">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h3>
                <img src={slider1} alt="" />
              </h3>
            </div>
            <div>
              <h3>
                <img src={slider2} alt="" />
              </h3>
            </div>
            <div>
              <h3>
                <img src={slider3} alt="" />
              </h3>
            </div>
            <div>
              <h3>
                <img src={slider4} alt="" />
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Reactslick;
