import React, { useState } from "react";
import CalculateIcon from "@mui/icons-material/Calculate";
import "./payment.scss";
import ChangeDue from "./changeDue/ChangeDue";
import SplitCheck from "./spilitCheck/SplitCheck";
import PaymetTypeMainScreen from "../paymentMethod/PaymetTypeMainScreen";
import { useEffect } from "react";
import NumPad from "react-numpad";
import Billgenerated from "../Bills/Billgenerated";
function Payment({ setPaymentOption, paymentOption, setPaymentSUcessfull }) {
  const [pay, setPay] = useState(false);
  const [mainPaymentSection, setMainPaymentSection] = useState(true);
  const [changeDueActive, setChangeDueActive] = useState(false);
  const [paymentType, setPaymentType] = useState("");
  const [loyalityPayment, setLoyalityPayment] = useState(false);
  const [amountEnter, setAmountEnter] = useState(0);
  const [printNow, setPrintNow] = useState(false);
  useEffect(() => {
    let loyalityPoint = 50;
    if (loyalityPoint) {
      setMainPaymentSection(false);
      setLoyalityPayment(true);
    }
  }, []);

  const addCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");

  const handleChange = (event) =>
    setAmountEnter(addCommas(removeNonNumeric(event.target.value)));

  return (
    <>
      {/* paymentTypeScreen */}
      {/* credit,phonepay ectt */}
      {paymentType && (
        <div className="paymentTypeScrean">
          <PaymetTypeMainScreen
            closeScreen={setPaymentType}
            paymentType={paymentType}
          />
        </div>
      )}

      {/* change due */}
      {changeDueActive && (
        <div className="ChangeDueSection">
          <ChangeDue
            setPaymentOption={setPaymentOption}
            setPaymentSUcessfull={setPaymentSUcessfull}
          />
        </div>
      )}

      {/* loayality readeam setion */}
      {loyalityPayment && (
        <div className="loyality__redeam__section">
          <div className="top__loyality__section">
            <h3>
              Do you want to redeem your Loyalty points in this transaction?
            </h3>
          </div>
          <div className="bottom__loyality__section">
            <button
              onClick={() => {
                setLoyalityPayment(false);
                setMainPaymentSection(true);
              }}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setLoyalityPayment(false);
                setMainPaymentSection(true);
              }}
            >
              No
            </button>
          </div>
        </div>
      )}

      {mainPaymentSection && (
        <div className="Payment__Section" id="printTable">
          <div className="left__payment__section">
            <div className="spilt__wrapper__section">
              <div className="left__area__split__Section">
                <div className="left__top__payment__section">
                  <h4>Total Amount OMR</h4>
                  <h1>4500.00</h1>
                </div>
                <div className="right__area__split__Section">
                  <button>Cash</button>
                  <button onClick={() => setPaymentType("Card Payment")}>
                    Credit Card
                  </button>
                  <button onClick={() => setPaymentType("Mobile Payment")}>
                    Mobile Pay
                  </button>
                </div>
                <div className="left__bottom__payment__section">
                  <div className="top__section">
                    <NumPad.Number
                      onChange={(value) => {
                        setAmountEnter(value);
                      }}
                    >
                      <CalculateIcon />
                    </NumPad.Number>
                    <input
                      type="text"
                      value={amountEnter}
                      onChange={handleChange}
                      style={{
                        height: "100%",
                        outline: "none",
                        border: "none",
                        borderBottom: "1px solid grey",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr style={{ marginTop: "10px", marginBottom: "5px" }} />

            <div className="bottom__area__sections">
              <h4>Walk in</h4>

              <div className="button__area">
                <button onClick={() => setPaymentOption(false)}>Back</button>
                <button
                  onClick={() => {
                    setPrintNow(true);
                  }}
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
          <div className="right__payment__section">
            <div className="top__right__payment">
              <div className="money__put__area">
                <input type="text" />
              </div>
            </div>
            <div className="bottom__right__payment">
              <div
                className="inner__div"
                style={{ backgroundColor: "#88A8FB" }}
              >
                <h3>0.000</h3>
              </div>
              <div
                className="inner__div"
                style={{ backgroundColor: "#88A8FB" }}
              >
                <h3>100.00</h3>
              </div>
              <div
                className="inner__div"
                style={{ backgroundColor: "#88A8FB" }}
              >
                <h3>200.00</h3>
              </div>
              <div
                className="inner__div"
                style={{ backgroundColor: "#88A8FB" }}
              >
                <h3>300.00</h3>
              </div>
              <div
                className="inner__div"
                style={{ backgroundColor: "#517DF8" }}
              >
                <h3>1000.00</h3>
              </div>
              <div
                className="inner__div"
                style={{ backgroundColor: "#517DF8" }}
                onClick={() => setChangeDueActive(true)}
              >
                <h3>Next $ Up</h3>
              </div>
              <div
                className="inner__div"
                style={{ backgroundColor: "#517DF8" }}
                onClick={() => setChangeDueActive(true)}
              >
                <h3>Exact Cash</h3>
              </div>
              <div
                className="inner__div"
                style={{ backgroundColor: "#517DF8" }}
              >
                <h3>Cash</h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <Billgenerated printNow={printNow} />
    </>
  );
}

export default Payment;
