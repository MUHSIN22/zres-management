import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./imageSliders.scss";
function ImageSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <div className="right__slide__section">
        <Slider {...settings} className="sliderss" easing="ease">
          <div className="each-slide">
            <div>
              <img
                src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/08/sushiSafe-1298575561-770x533-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img
                src="https://www.curiouscuisiniere.com/wp-content/uploads/2013/06/Japanese-Sushi-0458.450-450x270.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="each-slide">
            <div>
              <img
                src="https://assets.cntraveller.in/photos/60ba200bbfe773a828a46d76/4:3/w_1884,h_1413,c_limit/Sushi.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="each-slide">
            <div>
              <img
                src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/08/sushiSafe-1298575561-770x533-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img
                src="https://www.curiouscuisiniere.com/wp-content/uploads/2013/06/Japanese-Sushi-0458.450-450x270.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="each-slide">
            <div>
              <img
                src="https://assets.cntraveller.in/photos/60ba200bbfe773a828a46d76/4:3/w_1884,h_1413,c_limit/Sushi.jpg"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;
