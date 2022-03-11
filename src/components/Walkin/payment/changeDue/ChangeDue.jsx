import React from "react";
import "./changeDue.scss";

function ChangeDue({ setPaymentSUcessfull, setPaymentOption }) {
  return (
    <div className="ChangDue">
      <div className="changeDue__headder">
        <h3>Change Due</h3>
      </div>
      <div className="changeDue__mid">
        <div className="changeDue__mid__sections">
          <h5>Total Due</h5>

          <h5>$ 44.800</h5>
        </div>
        <div className="changeDue__mid__sections">
          <h5>Amount Tendered</h5>

          <h5>$ 44.800</h5>
        </div>
        <div className="changeDue__mid__sections">
          <h5>Payment</h5>

          <h5>$ 44.800</h5>
        </div>

        <div
          className="changeDue__mid__sections"
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
          <h3>Change Due</h3>

          <h3>$ 0.00</h3>
        </div>
      </div>
      <div className="changeDue__bottom">
        <button
          onClick={() => {
            setPaymentSUcessfull(true);
            setPaymentOption(false);
          }}
        >
          <h4>Ok</h4>
        </button>
      </div>
    </div>
  );
}

export default ChangeDue;
