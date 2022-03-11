import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import "./loyalityPoup.scss";
function LoyalityPopup({ setLoyalityPopup }) {
  return (
    <div className="LoyalityPopup">
      <div className="loyality__Popup__headder">
        <h3>Loyality</h3>
        <div
          className="close__icon__loyality__opoup"
          onClick={() => setLoyalityPopup(false)}
        >
          <CancelIcon />
        </div>
      </div>
    </div>
  );
}

export default LoyalityPopup;
