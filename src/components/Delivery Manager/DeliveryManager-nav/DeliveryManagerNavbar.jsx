import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./deliveryManagerNav.scss";
import { Link } from "react-router-dom";

function DeliveryManagerNavbar({
  setSelectedNav,
  selectedNav,
  handlePlaceAnOrder,
}) {
  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <>
      {}
      <div className="delivery__manager__navbar__Section">
        <div className="left__nav__section">
          <h3>November 13 2021</h3>
        </div>
        <div className="right__nav__section">
          <div
            className={
              !menuIcon ? "options__section" : "option__Section__mobile"
            }
          >
            <div
              className={
                "option " + (selectedNav === "homeDeliveryOrder" && "active ")
              }
              onClick={() => {
                setSelectedNav("homeDeliveryOrder");
                setMenuIcon(false);
              }}
            >
              <Link to="">
              <h5>Home Delivery Orders</h5>
              </Link>
            </div>
            <div
              className={
                "option " + (selectedNav === "takeAwayOrder" && "active ")
              }
              onClick={() => {
                setSelectedNav("takeAwayOrder");
                setMenuIcon(false);
              }}
            >
              <h5>Take Away Orders</h5>
            </div>
            <div
              className={
                "option " + (selectedNav === "FutureOrder" && "active ")
              }
              onClick={() => {
                setSelectedNav("FutureOrder");
                setMenuIcon(false);
              }}
            >
              <h5>Future Orders</h5>
            </div>
          </div>

          <div className="other__options">
            {selectedNav === "homeDeliveryOrder" && (
              <div className="placeOrder__section" onClick={handlePlaceAnOrder}>
                <h5>Place an order</h5>
              </div>
            )}

            <div className="time__section">
              <h5>10:26:30 AM</h5>
            </div>
          </div>
          <div className="menu__icon">
            {menuIcon ? (
              <CloseIcon onClick={() => setMenuIcon(false)} />
            ) : (
              <MenuIcon onClick={() => setMenuIcon(true)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryManagerNavbar;
