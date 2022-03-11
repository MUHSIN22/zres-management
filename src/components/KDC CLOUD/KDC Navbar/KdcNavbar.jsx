import React, { useState } from "react";
import "./kdcNavBar.scss";
import MenuBar from "./MenuRightBar/MenuBar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Date = [
  {
    name: "expo",
  },
  {
    name: "Burger",
  },

  {
    name: "pizza",
  },

  {
    name: "Steak",
  },
  {
    name: "Salad",
  },
  {
    name: "noodles",
  },
  {
    name: "pasta",
  },
];

function KdcNavbar({
  setSelectedNavMidOption,
  setSelectedMainOption,
  selectedMainOption,
}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  const [menuBarClick, setMenuBarClick] = useState(false);

  const [optionClick, setOptionClick] = useState("expo");

  return (
    <>
      <div className={"kdc__menu__bar " + (menuBarClick && "active")}>
        <MenuBar setSelectedMainOption={setSelectedMainOption} />
      </div>
      <div className="kdcNavbar">
        <div className="left__kdcNavbar__navbar__section">
          <div className="logo__section__name">
            <svg
              onClick={() => setMenuBarClick(!menuBarClick)}
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 41 41"
            >
              <g
                id="Group_1"
                data-name="Group 1"
                transform="translate(-18.832 -21.832)"
              >
                <path
                  id="Rectangle_1"
                  data-name="Rectangle 1"
                  d="M2,0H17a2,2,0,0,1,2,2V19a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z"
                  transform="translate(18.832 21.832)"
                  fill="#b1b1b1"
                />
                <path
                  id="Rectangle_1-2"
                  data-name="Rectangle 1"
                  d="M2,0H17a2,2,0,0,1,2,2V17a2,2,0,0,1-2,2H0a0,0,0,0,1,0,0V2A2,2,0,0,1,2,0Z"
                  transform="translate(40.832 21.832)"
                  fill="#b1b1b1"
                />
                <path
                  id="Rectangle_1-3"
                  data-name="Rectangle 1"
                  d="M2,0H19a0,0,0,0,1,0,0V17a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z"
                  transform="translate(18.832 43.832)"
                  fill="#b1b1b1"
                />
                <path
                  id="Rectangle_1-4"
                  data-name="Rectangle 1"
                  d="M0,0H17a2,2,0,0,1,2,2V17a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V0A0,0,0,0,1,0,0Z"
                  transform="translate(40.832 43.832)"
                  fill="#b1b1b1"
                />
              </g>
            </svg>

            <h2>ZRES</h2>
          </div>
        </div>

        {selectedMainOption === "Kitchen Display System" && (
          <div className="mid__kdcNavbar__navbar__section">
            <div className="right__slide__section">
              <Slider {...settings} className="sliderss" easing="ease">
                {Date.map((dta) => (
                  <div className="each-slide">
                    <div>
                      <div
                        className={
                          "wrapper__div__sections " +
                          (optionClick === dta.name && "active ")
                        }
                        onClick={() => {
                          setOptionClick(dta.name);
                          setSelectedNavMidOption(dta.name);
                        }}
                      >
                        <div className="tail__Section"></div>
                        <h5>{dta.name}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}

        <div className="right__kdcNavbar__navbar__section">
          <div className="search__options">
            <input type="text" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 41 41"
            >
              <g id="surface1" transform="translate(-50.184 -0.184)">
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M15.842.184a15.658,15.658,0,1,0,9.677,27.924l1.392,1.4a2.95,2.95,0,0,0,.551,3.443l7.329,7.38a2.934,2.934,0,0,0,4.139,0l1.4-1.4a2.934,2.934,0,0,0,0-4.139l-7.38-7.329a2.91,2.91,0,0,0-3.443-.5l-1.4-1.392A15.655,15.655,0,0,0,15.842.184Zm0,2.892A12.766,12.766,0,1,1,3.076,15.842,12.766,12.766,0,0,1,15.842,3.076ZM7.766,11.8A8.736,8.736,0,0,0,15.2,25.12a8.873,8.873,0,0,0,5.038-1.595c-.386.038-.8.044-1.2.044A11.238,11.238,0,0,1,7.766,12.3C7.766,12.133,7.76,11.975,7.766,11.8Z"
                  transform="translate(50)"
                  fill="#b1b1b1"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default KdcNavbar;
