import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./customerInsights.scss";

function CusomerInsight() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="top__right"> 


      <div className="right__headder">
        <h3>Customer Insights</h3>
      </div>


      <div className="body__container">
        <div className="mid__body">

          <div className="order__scroll">


            <Slider {...settings}>
              <div className="slider__wrapper">
                <div className="slider__caresol">
                  <div className="last__order">
                    <h3>LAST ORDER</h3>
                    <h3>ABOUT 2 HOURS AGO</h3>
                  </div>
                  <div className="product__wrapper">
                    <div className="left__section">
                      <h4>1.0</h4>
                    </div>
                    <div className="right__section">
                      <h4>margerita piza Large</h4>
                    </div>
                  </div>

                  <div className="product__wrapper">
                    <div className="left__section">
                      <h4>1.0</h4>
                    </div>
                    <div className="right__section">
                      <h4>margerita piza Large</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slider__wrapper">
                <div className="slider__caresol">
                  <div className="last__order">
                    <h3>LAST ORDER</h3>
                    <h3>ABOUT 2 HOURS AGO</h3>
                  </div>
                  <div className="product__wrapper">
                    <div className="left__section">
                      <h4>1.0</h4>
                    </div>
                    <div className="right__section">
                      <h4>margerita piza Large</h4>
                    </div>
                  </div>

                  <div className="product__wrapper">
                    <div className="left__section">
                      <h4>1.0</h4>
                    </div>
                    <div className="right__section">
                      <h4>margerita piza Large</h4>
                    </div>
                  </div>

                  <div className="product__wrapper">
                    <div className="left__section">
                      <h4>1.0</h4>
                    </div>
                    <div className="right__section">
                      <h4>margerita piza Large</h4>
                    </div>
                  </div>

                  <div className="product__wrapper">
                    <div className="left__section">
                      <h4>1.0</h4>
                    </div>
                    <div className="right__section">
                      <h4>margerita piza Large</h4>
                    </div>
                  </div>

                  <div className="product__wrapper">
                    <div className="left__section">
                      <h4>1.0</h4>
                    </div>
                    <div className="right__section">
                      <h4>margerita piza Large</h4>
                    </div>
                  </div>

                  <div className="product__wrapper">
                    <div className="left__section">
                      <h4>1.0</h4>
                    </div>
                    <div className="right__section">
                      <h4>margerita piza Large</h4>
                    </div>
                  </div>

                  <div className="product__wrapper">
                    <div className="left__section">
                      <h4>2.0</h4>
                    </div>
                    <div className="right__section">
                      <h4>Burger</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>

          </div>
          <hr />

          <div className="notes">
            <h4>Notes</h4>
            <button>Add</button>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default CusomerInsight;
