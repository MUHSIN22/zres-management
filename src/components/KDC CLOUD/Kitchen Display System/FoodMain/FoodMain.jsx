import React, { useState } from "react";
import "./foodmain.scss";

const Data = [
  {
    code: "#65667",
    category: "Dine In",
    Product: "BEEF BURGER",
    orderTime: "11:28:15",
    server: "Roy",
    customer: "Ram Jose",
    timer: "16:15",
    staus: "urgent",
  },
  {
    code: "#65667",
    category: "Dine In",
    Product: "BEEF BURGER",
    orderTime: "11:28:15",
    server: "Roy",
    customer: "Ram Jose",
    timer: "16:15",
    staus: "urgent",
  },
  {
    code: "#65667",
    category: "Dine In",
    Product: "BEEF BURGER",
    orderTime: "11:28:15",
    server: "Roy",
    customer: "Ram Jose",
    timer: "16:15",
    staus: "urgent",
  },
  {
    code: "#75667",
    category: "Walk In",
    Product: "CHICKEN BURGER",
    orderTime: "11:28:15",
    server: "Roy",
    customer: "Ram Jose",
    timer: "16:15",
    staus: "cook",
  },
  {
    code: "#25667",
    category: "Delivery",
    Product: "STEAK BURGER",
    orderTime: "11:28:15",
    server: "Roy",
    customer: "Ram Jose",
    timer: "16:15",
    staus: "new",
  },
];

function FoodMain() {
  const [statusChanger, setstatusChanger] = useState("");
  return (
    <div className="FoodMain">
      <div className="FoodMain__expo__top__section">
        {Data.map((items, index) => (
          <div
            className="food__wrapper__main"
            onClick={() => setstatusChanger(index)}
          >
            {statusChanger === index && (
              <div className="overlayer__option">
                {items.staus === "new" && (
                  <button
                    className="startBtn"
                    onClick={() => setstatusChanger("")}
                  >
                    Start
                  </button>
                )}
                {items.staus === "cook" && (
                  <button
                    className="DoneBtn"
                    onClick={() => setstatusChanger("")}
                  >
                    Done
                  </button>
                )}
                {items.staus === "urgent" && (
                  <button
                    className="UrgentBtn"
                    onClick={() => setstatusChanger("")}
                  >
                    Urgent
                  </button>
                )}
              </div>
            )}

            <div className="food__left__section">
              <div
                className={
                  "color__squire " +
                  ((items.category === "Delivery" && "green") ||
                    (items.category === "Walk In" && "blue"))
                }
              ></div>
              <div className="sections__food">
                <h4>{items.code}</h4>
                <h5>{items.category}</h5>
              </div>
              <div className="sections__food" style={{ width: "100%" }}>
                <h3
                  className={
                    (items.category === "Delivery" && "green ") ||
                    (items.category === "Walk In" && "blue ")
                  }
                >
                  {items.Product}
                </h3>

                <div className="extraDetails">
                  <div className="detailss">
                    <h5>Order Time : {items.orderTime}</h5>
                  </div>
                  <div className="detailss">
                    <h5>Server : {items.server}</h5>
                  </div>

                  <div className="detailss">
                    <h5>Customer : {items.customer}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="food__right__section">
              <div className="otherSections">
                <h5>{items.timer}</h5>
              </div>

              <div className="icon__Sectionss">
                {items.staus === "urgent" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44.099"
                    height="44.099"
                    viewBox="0 0 44.099 44.099"
                  >
                    <g id="surface1" transform="translate(-2.001 -1.9)">
                      <path
                        id="Path_54"
                        data-name="Path 54"
                        d="M21.2,44.8l-18-18a3.988,3.988,0,0,1,0-5.7l18-18a3.981,3.981,0,0,1,5.7,0l18,18a3.981,3.981,0,0,1,0,5.7l-18,18A3.987,3.987,0,0,1,21.2,44.8Z"
                        fill="#f44336"
                      />
                      <path
                        id="Path_55"
                        data-name="Path 55"
                        d="M21.6,32.7a2.863,2.863,0,0,1,.2-.9,1.763,1.763,0,0,1,.5-.7,2.1,2.1,0,0,1,.8-.5,2.89,2.89,0,0,1,1-.2,2.93,2.93,0,0,1,1,.2,2.113,2.113,0,0,1,.8.5,1.725,1.725,0,0,1,.5.7,2.871,2.871,0,0,1,.2.9,2.9,2.9,0,0,1-.2.9,1.753,1.753,0,0,1-.5.7,2.216,2.216,0,0,1-.8.5,3.031,3.031,0,0,1-1,.2,2.989,2.989,0,0,1-1-.2,3.6,3.6,0,0,1-.8-.5,1.792,1.792,0,0,1-.5-.7A2.364,2.364,0,0,1,21.6,32.7Zm4.2-4.6H22.2L21.7,13h4.6Z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                )}
                {items.staus === "cook" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37.051"
                    height="37"
                    viewBox="0 0 37.051 37"
                  >
                    <g id="surface1" transform="translate(-6 -6.05)">
                      <path
                        id="Path_44"
                        data-name="Path 44"
                        d="M43.051,41.38a1.026,1.026,0,0,1-1.029,1.029H7.029A1.026,1.026,0,0,1,6,41.38V29.029A1.026,1.026,0,0,1,7.029,28H42.022a1.026,1.026,0,0,1,1.029,1.029Z"
                        transform="translate(0 0.641)"
                        fill="#455a64"
                      />
                      <path
                        id="Path_45"
                        data-name="Path 45"
                        d="M27.38,41.146a1.026,1.026,0,0,1-1.029,1.029H15.029A1.026,1.026,0,0,1,14,41.146V37.029A1.026,1.026,0,0,1,15.029,36H26.35a1.026,1.026,0,0,1,1.029,1.029Z"
                        transform="translate(0.234 0.875)"
                        fill="#b0bec5"
                      />
                      <path
                        id="Path_46"
                        data-name="Path 46"
                        d="M42.38,41.146a1.026,1.026,0,0,1-1.029,1.029H30.029A1.026,1.026,0,0,1,29,41.146V37.029A1.026,1.026,0,0,1,30.029,36H41.35a1.026,1.026,0,0,1,1.029,1.029Z"
                        transform="translate(0.672 0.875)"
                        fill="#b0bec5"
                      />
                      <path
                        id="Path_47"
                        data-name="Path 47"
                        d="M34.38,33.146a1.026,1.026,0,0,1-1.029,1.029H22.029A1.026,1.026,0,0,1,21,33.146V29.029A1.026,1.026,0,0,1,22.029,28H33.35a1.026,1.026,0,0,1,1.029,1.029Z"
                        transform="translate(0.438 0.641)"
                        fill="#b0bec5"
                      />
                      <path
                        id="Path_48"
                        data-name="Path 48"
                        d="M6,33.146a1.026,1.026,0,0,0,1.029,1.029H18.35a1.026,1.026,0,0,0,1.029-1.029V29.029A1.026,1.026,0,0,0,18.35,28H7.029A1.026,1.026,0,0,0,6,29.029Z"
                        transform="translate(0 0.641)"
                        fill="#b0bec5"
                      />
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M42.175,28H37.029A1.026,1.026,0,0,0,36,29.029v4.117a1.026,1.026,0,0,0,1.029,1.029h5.146Z"
                        transform="translate(0.876 0.641)"
                        fill="#b0bec5"
                      />
                      <path
                        id="Path_50"
                        data-name="Path 50"
                        d="M11.146,36H6v6.175h5.146a1.026,1.026,0,0,0,1.029-1.029V37.029A1.026,1.026,0,0,0,11.146,36Z"
                        transform="translate(0 0.875)"
                        fill="#b0bec5"
                      />
                      <path
                        id="Path_51"
                        data-name="Path 51"
                        d="M14,25.553a7.937,7.937,0,0,0,.579,3.088h5.6a3.658,3.658,0,0,1-.02-.366c0-4.848,5.114-5.226,4.137-9.926,1.656,2.095,2.135,2.718-.036,6.967-.486.961-.028,2.3,2.095,2.3,1.516,0,1.6-1.319,1.029-3.088,2.464,1.524,2.191,2.838,2.058,4.117h6.175c-.2-3.815-2.6-5.918-2.541-8.33.072-2.867,1.118-6.5-2.605-9.166.366,2.432,0,5.146-2.058,5.146s-.088-3.453-2.058-6.593a7.276,7.276,0,0,0-6.211-3.646C24.324,8.507,22.527,16.323,21.2,17.32c-2.082,1.568-2.058-3.088-5.146-3.088,1.238.579.635,4.68-.088,6.207C15.383,21.694,14.129,23.045,14,25.553Z"
                        transform="translate(0.233)"
                        fill="#ff3d00"
                      />
                      <path
                        id="Path_52"
                        data-name="Path 52"
                        d="M20,28.292a3.658,3.658,0,0,1-.02-.366c0-4.848,5.114-5.226,4.137-9.926,1.656,2.095,2.135,2.718-.036,6.967-.486.961-.028,2.3,2.095,2.3,1.516,0,1.6-1.319,1.029-3.088,2.464,1.524,2.191,2.838,2.058,4.117Z"
                        transform="translate(0.408 0.349)"
                        fill="#fdd835"
                      />
                    </g>
                  </svg>
                )}{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="FoodMain__bottom__section">
        <div className="BtnSection">
          <div className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37.051"
              height="37"
              viewBox="0 0 37.051 37"
            >
              <g id="surface1" transform="translate(-6 -6.05)">
                <path
                  id="Path_44"
                  data-name="Path 44"
                  d="M43.051,41.38a1.026,1.026,0,0,1-1.029,1.029H7.029A1.026,1.026,0,0,1,6,41.38V29.029A1.026,1.026,0,0,1,7.029,28H42.022a1.026,1.026,0,0,1,1.029,1.029Z"
                  transform="translate(0 0.641)"
                  fill="#455a64"
                />
                <path
                  id="Path_45"
                  data-name="Path 45"
                  d="M27.38,41.146a1.026,1.026,0,0,1-1.029,1.029H15.029A1.026,1.026,0,0,1,14,41.146V37.029A1.026,1.026,0,0,1,15.029,36H26.35a1.026,1.026,0,0,1,1.029,1.029Z"
                  transform="translate(0.234 0.875)"
                  fill="#b0bec5"
                />
                <path
                  id="Path_46"
                  data-name="Path 46"
                  d="M42.38,41.146a1.026,1.026,0,0,1-1.029,1.029H30.029A1.026,1.026,0,0,1,29,41.146V37.029A1.026,1.026,0,0,1,30.029,36H41.35a1.026,1.026,0,0,1,1.029,1.029Z"
                  transform="translate(0.672 0.875)"
                  fill="#b0bec5"
                />
                <path
                  id="Path_47"
                  data-name="Path 47"
                  d="M34.38,33.146a1.026,1.026,0,0,1-1.029,1.029H22.029A1.026,1.026,0,0,1,21,33.146V29.029A1.026,1.026,0,0,1,22.029,28H33.35a1.026,1.026,0,0,1,1.029,1.029Z"
                  transform="translate(0.438 0.641)"
                  fill="#b0bec5"
                />
                <path
                  id="Path_48"
                  data-name="Path 48"
                  d="M6,33.146a1.026,1.026,0,0,0,1.029,1.029H18.35a1.026,1.026,0,0,0,1.029-1.029V29.029A1.026,1.026,0,0,0,18.35,28H7.029A1.026,1.026,0,0,0,6,29.029Z"
                  transform="translate(0 0.641)"
                  fill="#b0bec5"
                />
                <path
                  id="Path_49"
                  data-name="Path 49"
                  d="M42.175,28H37.029A1.026,1.026,0,0,0,36,29.029v4.117a1.026,1.026,0,0,0,1.029,1.029h5.146Z"
                  transform="translate(0.876 0.641)"
                  fill="#b0bec5"
                />
                <path
                  id="Path_50"
                  data-name="Path 50"
                  d="M11.146,36H6v6.175h5.146a1.026,1.026,0,0,0,1.029-1.029V37.029A1.026,1.026,0,0,0,11.146,36Z"
                  transform="translate(0 0.875)"
                  fill="#b0bec5"
                />
                <path
                  id="Path_51"
                  data-name="Path 51"
                  d="M14,25.553a7.937,7.937,0,0,0,.579,3.088h5.6a3.658,3.658,0,0,1-.02-.366c0-4.848,5.114-5.226,4.137-9.926,1.656,2.095,2.135,2.718-.036,6.967-.486.961-.028,2.3,2.095,2.3,1.516,0,1.6-1.319,1.029-3.088,2.464,1.524,2.191,2.838,2.058,4.117h6.175c-.2-3.815-2.6-5.918-2.541-8.33.072-2.867,1.118-6.5-2.605-9.166.366,2.432,0,5.146-2.058,5.146s-.088-3.453-2.058-6.593a7.276,7.276,0,0,0-6.211-3.646C24.324,8.507,22.527,16.323,21.2,17.32c-2.082,1.568-2.058-3.088-5.146-3.088,1.238.579.635,4.68-.088,6.207C15.383,21.694,14.129,23.045,14,25.553Z"
                  transform="translate(0.233)"
                  fill="#ff3d00"
                />
                <path
                  id="Path_52"
                  data-name="Path 52"
                  d="M20,28.292a3.658,3.658,0,0,1-.02-.366c0-4.848,5.114-5.226,4.137-9.926,1.656,2.095,2.135,2.718-.036,6.967-.486.961-.028,2.3,2.095,2.3,1.516,0,1.6-1.319,1.029-3.088,2.464,1.524,2.191,2.838,2.058,4.117Z"
                  transform="translate(0.408 0.349)"
                  fill="#fdd835"
                />
              </g>
            </svg>

            <h4>Cook</h4>
          </div>

          <div className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="25"
              viewBox="0 0 46 34"
            >
              <g id="surface1" transform="translate(-1 -7)">
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M9,12H39v3H9Z"
                  fill="#424242"
                />
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M4,29H44V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4Z"
                  fill="#616161"
                />
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M8,41H40c3,0,4-4,4-4l3-8H1l3,8s1,4,4,4"
                  fill="#7f7f7f"
                />
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M11,7H37v8H11Z"
                  fill="#90caf9"
                />
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M7,23H41v6H7Z"
                  fill="#212121"
                />
              </g>
            </svg>
            <h4>PRINT</h4>
          </div>

          <div className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              viewBox="0 0 30 38"
            >
              <g id="surface1" transform="translate(-5 -1)">
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M20,38.5c-9.383,0-14.5-1.652-14.5-2.5V4A2.5,2.5,0,0,1,8,1.5H32A2.5,2.5,0,0,1,34.5,4V36C34.5,36.848,29.383,38.5,20,38.5Z"
                  fill="#98ccfd"
                />
                <path
                  id="Path_17"
                  data-name="Path 17"
                  d="M32,2a2,2,0,0,1,2,2V35.891C33.359,36.633,28.629,38,20,38S6.641,36.633,6,35.891V4A2,2,0,0,1,8,2H32m0-1H8A3,3,0,0,0,5,4V36c0,1.656,6.715,3,15,3s15-1.344,15-3V4A3,3,0,0,0,32,1Z"
                  fill="#4788c7"
                />
                <path
                  id="Path_18"
                  data-name="Path 18"
                  d="M9,5H31V31H9Z"
                  fill="#fff"
                />
                <path
                  id="Path_19"
                  data-name="Path 19"
                  d="M13.5,10.5h13"
                  fill="none"
                  stroke="#4788c7"
                  stroke-linecap="round"
                  stroke-width="1"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M13.5,15.5h13"
                  fill="none"
                  stroke="#4788c7"
                  stroke-linecap="round"
                  stroke-width="1"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M13.5,18.5h10"
                  fill="none"
                  stroke="#4788c7"
                  stroke-linecap="round"
                  stroke-width="1"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M13.5,21.5h13"
                  fill="none"
                  stroke="#4788c7"
                  stroke-linecap="round"
                  stroke-width="1"
                />
                <path
                  id="Path_23"
                  data-name="Path 23"
                  d="M13.5,24.5h10"
                  fill="none"
                  stroke="#4788c7"
                  stroke-linecap="round"
                  stroke-width="1"
                />
                <path
                  id="Path_24"
                  data-name="Path 24"
                  d="M18.5,35.5V35a1.5,1.5,0,0,1,3,0v.5"
                  fill="none"
                  stroke="#4788c7"
                  stroke-linecap="round"
                  stroke-width="1"
                />
              </g>
            </svg>

            <h4>ITEM SUMMARTY</h4>
          </div>

          <div className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.518"
              height="25.171"
              viewBox="0 0 20.518 39.171"
            >
              <g id="surface1" transform="translate(-12 -3)">
                <path
                  id="Path_25"
                  data-name="Path 25"
                  d="M28,41.72a1.864,1.864,0,0,0,1.865,1.865h1.865A1.864,1.864,0,0,0,33.6,41.72l-.933-15.855c0-1.031.1-1.865-.933-1.865H30.8a1.864,1.864,0,0,0-1.865,1.865Z"
                  transform="translate(-1.078 -1.414)"
                  fill="#3f51b5"
                />
                <path
                  id="Path_26"
                  data-name="Path 26"
                  d="M19.663,21H15.933L15,41.518a1.864,1.864,0,0,0,1.865,1.865h1.865A1.864,1.864,0,0,0,20.6,41.518Z"
                  transform="translate(-0.202 -1.212)"
                  fill="#3f51b5"
                />
                <path
                  id="Path_27"
                  data-name="Path 27"
                  d="M32.612,3V24.451H28.881C24.218,6.731,30.746,3,32.612,3Z"
                  transform="translate(-1.026 0)"
                  fill="#2196f3"
                />
                <path
                  id="Path_28"
                  data-name="Path 28"
                  d="M20.394,3V15.124H18.529V3H16.663V15.124H14.8V3H12.933L12,16.057l3.731,3.731h3.731l3.731-3.731L22.259,3Z"
                  transform="translate(0 0)"
                  fill="#2196f3"
                />
              </g>
            </svg>

            <h4>RECEIPES</h4>
          </div>
        </div>
        <div className="BtnSection">
          <div className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51.771"
              height="25.771"
              viewBox="0 0 51.771 51.771"
            >
              <g id="surface1" transform="translate(-0.988 -0.988)">
                <path
                  id="Path_29"
                  data-name="Path 29"
                  d="M.988,26.874A25.885,25.885,0,1,1,26.874,52.759,25.888,25.888,0,0,1,.988,26.874Z"
                  transform="translate(0 0)"
                  fill="#48a1af"
                />
                <path
                  id="Path_30"
                  data-name="Path 30"
                  d="M10.488,28.444A17.956,17.956,0,1,1,28.444,46.4,17.955,17.955,0,0,1,10.488,28.444Z"
                  transform="translate(-1.57 -1.57)"
                  fill="#fff"
                />
                <path
                  id="Path_31"
                  data-name="Path 31"
                  d="M12.863,28.837A15.973,15.973,0,1,1,28.837,44.81,15.974,15.974,0,0,1,12.863,28.837Z"
                  transform="translate(-1.963 -1.963)"
                  fill="#48a1af"
                />
                <path
                  id="Path_32"
                  data-name="Path 32"
                  d="M31.512,33.974a2.462,2.462,0,1,1,2.462-2.462A2.466,2.466,0,0,1,31.512,33.974Z"
                  transform="translate(-4.639 -4.639)"
                  fill="#fff"
                />
                <path
                  id="Path_33"
                  data-name="Path 33"
                  d="M30.018,32.643h-9.2a.8.8,0,1,1,0-1.6h9.2a.8.8,0,1,1,0,1.6Z"
                  transform="translate(-3.145 -4.968)"
                  fill="#fff"
                />
                <path
                  id="Path_34"
                  data-name="Path 34"
                  d="M31.842,31.352a.79.79,0,0,1-.564-.238.807.807,0,0,1,0-1.138l6.511-6.511A.8.8,0,0,1,38.927,24.6l-6.511,6.511A.83.83,0,0,1,31.842,31.352Z"
                  transform="translate(-4.968 -3.677)"
                  fill="#fff"
                />
                <path
                  id="Path_35"
                  data-name="Path 35"
                  d="M32.837,15.793a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,32.837,15.793Z"
                  transform="translate(-4.92 -2.275)"
                  fill="#fff"
                />
                <path
                  id="Path_36"
                  data-name="Path 36"
                  d="M32.837,47.793a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,32.837,47.793Z"
                  transform="translate(-4.92 -7.565)"
                  fill="#fff"
                />
                <path
                  id="Path_37"
                  data-name="Path 37"
                  d="M48.837,31.793a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,48.837,31.793Z"
                  transform="translate(-7.565 -4.92)"
                  fill="#fff"
                />
                <path
                  id="Path_38"
                  data-name="Path 38"
                  d="M16.837,31.793a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,16.837,31.793Z"
                  transform="translate(-2.275 -4.92)"
                  fill="#fff"
                />
                <path
                  id="Path_39"
                  data-name="Path 39"
                  d="M44.149,20.481a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,44.149,20.481Z"
                  transform="translate(-6.79 -3.05)"
                  fill="#fff"
                />
                <path
                  id="Path_40"
                  data-name="Path 40"
                  d="M21.524,43.106a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,21.524,43.106Z"
                  transform="translate(-3.05 -6.79)"
                  fill="#fff"
                />
                <path
                  id="Path_41"
                  data-name="Path 41"
                  d="M44.149,43.106a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,44.149,43.106Z"
                  transform="translate(-6.79 -6.79)"
                  fill="#fff"
                />
                <path
                  id="Path_42"
                  data-name="Path 42"
                  d="M21.524,20.481a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,21.524,20.481Z"
                  transform="translate(-3.05 -3.05)"
                  fill="#fff"
                />
              </g>
            </svg>

            <h4>ITEM SUMMARTY</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodMain;
