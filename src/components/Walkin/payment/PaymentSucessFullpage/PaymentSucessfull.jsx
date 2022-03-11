import React from "react";
import "./paymentSucessfull.scss";
function PaymentSucessfull({ setPaymentSUcessfull }) {
  return (
    <div className="payment__Sucessfull__section__wrapper">
      <img
        src="https://cdn2.iconfinder.com/data/icons/weby-flat-vol-1/512/1_Approved-check-checkbox-confirm-green-success-tick-512.png"
        alt=""
      />
      <div className="payment__Sucessfull__section">
        <div className="payment__sucess__headder">
          <h4>Payment Successful !</h4>
        </div>

        <div className="payment__sucessfull__mid">
          <div className="payment__sucess__div">
            <h5>Payment Type</h5>
            <h5>Cash</h5>
          </div>
          <div className="payment__sucess__div">
            <h5>Mobile</h5>
            <h5>9857985478</h5>
          </div>
          <div className="payment__sucess__div">
            <h5>Email</h5>
            <h5>anjustany@gmail.com</h5>
          </div>
          <div className="payment__sucess__div" style={{ marginTop: "20px" }}>
            <h4>Amount paid</h4>
            <h4>15093.00</h4>
          </div>
          <div className="payment__sucess__div">
            <h5>Transaction Id</h5>
            <h5>#45ERY147</h5>
          </div>
        </div>

        <div className="payment__sucessfull__bottom">
          <button>
            <h5>Print</h5>
          </button>
          <button onClick={() => setPaymentSUcessfull(false)}>
            <h5>Close</h5>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentSucessfull;
