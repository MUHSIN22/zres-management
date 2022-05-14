import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import "./loyalityPoup.scss";
import {BiSearchAlt} from 'react-icons/bi'

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
      <div className="date">
        <p>25 nov 21 17:58</p>
      </div>
      <div className="search_bar">
        <div className="search">
          <BiSearchAlt/>
        <input type="text" placeholder="search by customer name or Contact no."/>
        </div>
        <button>Search</button>
      </div>

      <div className="loyal_table">
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Contact No</th> 
              <th>Total Loyality Points</th>
              <th>Loyality Used</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>alex</td>
              <td>123456789</td>
              <td>100</td>
              <td>10</td>
              <td>90</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div  onClick={() => setLoyalityPopup(false)}className="button">
        <button >Ok</button>
      </div>
    </div>
  );
}

export default LoyalityPopup;
