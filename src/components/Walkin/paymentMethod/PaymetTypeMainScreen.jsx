import React from "react";
import "./paymentTypeMainScreen.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import CreditCardPaymentScreen from "./CreditCardPaymentScreen";
import MobilePayment from "./mobilePayment";
function PaymetTypeMainScreen({ closeScreen, paymentType }) {
  return (
    <div className="paymentTypeMainScreen">
      <div className="paymentTypeMainScreen__headder">
        <h3>{paymentType}</h3>
        <div className="close__btn">
          <CancelIcon
            onClick={() => closeScreen("")}
            style={{ fontSize: "30px", cursor: "pointer", color: "#ffff" }}
          />
        </div>
      </div>
      <div className="paymentTypeMainScreen__main__body">
        <div className="creditCardOption">
          {paymentType === "Card Payment" && <CreditCardPaymentScreen />}
          {paymentType === "Mobile Payment" && <MobilePayment />}
        </div>
      </div>
    </div>
  );
}

export default PaymetTypeMainScreen;
