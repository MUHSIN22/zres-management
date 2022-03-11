import React, { useState } from "react";
import "./optionSelection.scss";
import CasherImage from "./img/1.jpg";
import OfficePerson from "./img/officePerson.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { useHistory } from "react-router";
function OptionSelection() {
  const history = useHistory();
  const [SelctedOption, setSelectedOption] = useState("");
  // const [closeBtnClick, setCloseBtnClick] = useState(false);

  const handleCloseEvent = () => {
    setSelectedOption("");
  };
  const [dineInpopUp, setDineInpopUp] = useState(false);
  const [selCategory, setSelCategory] = useState("");

  const handleClick = (e) => {
    let valuesSelected = e.target.innerText;

    if (valuesSelected === "Crm") {
      history.push({
        pathname: "/mainPage",
        state: { detail: "CRM" },
      });
    } else if (valuesSelected === "Inventory") {
      history.push({
        pathname: "/mainPage",
        state: { detail: "Inventory" },
      });
    } else if (valuesSelected === "Accounts") {
      history.push({
        pathname: "/mainPage",
        state: { detail: "Accounts" },
      });
    } else if (valuesSelected === "Delivery") {
      history.push({
        pathname: "/mainPage",
        state: { detail: "DeliveryManager" },
      });
    } else if (valuesSelected === "Existing Check") {
      history.push({
        pathname: "/mainPage",
        state: { detail: "DeliveryManager" },
      });
    } else if (valuesSelected === "New Check") {
      history.push({
        pathname: "/mainPage",
        state: { detail: "WalkIn" },
      });
    } else if (valuesSelected === "Walk In") {
      history.push({
        pathname: "/mainPage",
        state: { detail: "WalkIn" },
      });
    } else if (valuesSelected === "Dine In") {
      setDineInpopUp(true);

      // history.push({
      //   pathname: "/mainPage",
      //   state: { detail: "DineIn" },
      // });
    } else if (valuesSelected === "View Table") {
      history.push({
        pathname: "/mainPage",
        state: { detail: "DineIn" },
      });
    } else if (valuesSelected === "Take Away") {
      history.push({
        pathname: "/mainPage",
        state: { detail: "DeliveryManager", subnav: "takeAwayOrder" },
      });
    }
  };

  return (
    <div className="OptionSelection">
      {dineInpopUp && (
        <div className="dineInoverlayer">
          <div className="dineInPopupDIV">
            <div className="closeIconSection">
              <CloseIcon onClick={() => setDineInpopUp(false)} />
            </div>
            <div className="headder__dinein">
              <h2>Dine In</h2>
            </div>

            <div className="table__detaill__section">
              <h4>Table NO</h4>
              <input type="text" />
            </div>

            <div className="table__detaill__section">
              <h4>Guest</h4>
              <input type="text" />
            </div>

            <button value="ViewTable" onClick={handleClick}>
              View Table
            </button>
          </div>
        </div>
      )}

      <div
        className="orderTaking"
        onClick={() => setSelectedOption("orderTaking")}
      >
        <div className="order__taking__option">
          <h2>Order Taking Options</h2>

          <img src={CasherImage} alt="" />
        </div>
      </div>
      <div
        className="mainoption"
        onClick={() => setSelectedOption("mainOption")}
      >
        <div className="inside__section_mainoption">
          <h2>Main Options</h2>
          <img src={OfficePerson} alt="" />
        </div>
      </div>
      {/* overlay section */}
      {SelctedOption !== "" && (
        <>
          <div className="overlay__black__section"></div>

          {SelctedOption === "orderTaking" && (
            <div className="overlay__Section__for__orderTaking">
              <div className="top__section">
                <h1>Order Taking Option</h1>{" "}
                <CloseIcon
                  className="closeBtnIcon"
                  onClick={() => handleCloseEvent()}
                />
              </div>
              <div className="body__section">
                <button
                  className="yellow__color"
                  onClick={handleClick}
                  value="ExsistingCheck"
                >
                  <h6>Existing Check</h6>
                </button>

                <button
                  className="green__color"
                  onClick={handleClick}
                  value="WalkIn"
                >
                  <h6>Walk In</h6>
                </button>
                <button
                  className="green__color"
                  onClick={handleClick}
                  value="DineIn"
                >
                  <h6>Dine In</h6>
                </button>
                <button
                  className="green__color"
                  onClick={handleClick}
                  value="TakeAway"
                >
                  <h6>Take Away</h6>
                </button>
                <button
                  className="red__color"
                  onClick={handleClick}
                  value="Delivery"
                >
                  <h6>Delivery</h6>
                </button>
              </div>
            </div>
          )}

          {/* MAIN OPTIONS */}

          {SelctedOption === "mainOption" && (
            <div className="overlay__Section__for__orderTaking mainOptionSection">
              <div className="top__section">
                <h1>Main Options</h1>{" "}
                <CloseIcon
                  className="closeBtnIcon"
                  onClick={() => handleCloseEvent()}
                />
              </div>
              <div className="body__section">
                <button
                  className="yellow__color"
                  name="Inventory"
                  onClick={handleClick}
                >
                  <h6>Inventory</h6>
                </button>
                <button
                  className="yellow__color"
                  name="CRM"
                  onClick={handleClick}
                >
                  <h6>Crm</h6>
                </button>
                <button
                  className="green__color"
                  name="Accounts"
                  onClick={handleClick}
                >
                  <h6>Accounts</h6>
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default OptionSelection;
