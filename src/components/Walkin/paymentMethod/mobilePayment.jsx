import React from "react";
import "./mobilePayment.scss";
const defDat = [
  {
    image: "https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png",
  },
  {
    image: "http://assets.stickpng.com/images/60e7f964711cf700048b6a6a.png",
  },
  {
    image: "https://cdn.iconscout.com/icon/free/png-256/bhim-3-69845.png",
  },
  {
    image: "https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png",
  },
];

function MobilePayment() {
  return (
    <div className="MobilePayment">
      <div className="top__payment__avialable">
        {defDat.map((data) => (
          <div className="avilablepay">
            <img src={data.image} alt="" />
          </div>
        ))}
      </div>

      <div className="bottom__verification">
        <div className="input__area__fiels">
          <input type="text" placeholder="Enter Your UPI ID" />
          <button>Verify</button>
        </div>
      </div>
    </div>
  );
}

export default MobilePayment;
