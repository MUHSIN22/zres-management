import React, { useState } from "react";
import "./addCustomer.scss";
import Checkbox from "@mui/material/Checkbox";
import AddAddress from "./AddAddress/AddAddress";

function AddCustomer({ handleCloseCusetomerAdd }) {
  const [addressPic, setAddressPic] = useState("delevery");
  const [customerData, setCustomerData] = useState([
    {
      Name: "Athul",
      PhoneNumber: "9074967403",
      AlternatePhone: "985585466",
      email: "athulpkoffical@gmail.com",
    },
  ]);

  return (
    <div className="AddCustomer">
      <div className="add__customer__wrapper">
        <div className="addCustomer__headder">
          <h1>Create New Customer</h1>
          <div className="headder__chekbox">
            <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
            <h6>Loyality Customer</h6>
          </div>
        </div>

        <div className="general__information">
          <div className="generalInformation__headder">
            <h4>General Information</h4>
            <hr />
          </div>

          <div className="generalInformation__body">
            <div className="generalInformation__body__fields">
              <h6>name</h6>
              <input type="text" name="" id="" />
            </div>
            <div className="generalInformation__body__fields">
              <h6>Phone Number</h6>
              <input type="number" name="" id="" />
            </div>
            <div className="generalInformation__body__fields">
              <h6>Alternate Phone</h6>
              <input type="number" name="" id="" />
            </div>
            <div className="generalInformation__body__fields">
              <h6>Email</h6>
              <input type="email" name="" id="" />
            </div>
          </div>

          <div className="generalInformation__footer">
            <div className="footer__delevery_and_pickup">
              <div
                className={
                  "option__box " + (addressPic === "delevery" && "delevery ")
                }
                onClick={() => setAddressPic("delevery")}
              >
                <h5>Delivery</h5>
              </div>
              <div
                className={
                  "option__box " + (addressPic === "pickup" && "pickup ")
                }
                onClick={() => setAddressPic("pickup")}
              >
                <h5>Pickup Location</h5>
              </div>
              <div className="line_passer"></div>
            </div>
          </div>
        </div>
        {/* ADDRESS SECTION */}

        {addressPic === "delevery" && (
          <AddAddress handleCloseCusetomerAdd={handleCloseCusetomerAdd} />
        )}

        {/* PICUP SECTION */}
        {addressPic === "pickup" && (
          <div className="pickUp__secton">
            <div className="picupp_section__headder">
              <h4>Available Pickup Location</h4>
              <hr />
            </div>
            <div className="picup__section__body">
              <button>
                <h4>Location Name</h4>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddCustomer;
