import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./deliveryManagerNav.scss";
import { Link, useLocation } from "react-router-dom";

function DeliveryManagerNavbar({
  setSelectedNav,
  selectedNav,
  handlePlaceAnOrder,
}) {
  const [menuIcon, setMenuIcon] = useState(false);
  const [path, setPath] = useState();
  const location = useLocation()

  useEffect(() => {
    const myArray = location.pathname.split("/");
    console.log(myArray.includes("take-away-order"));
    if(myArray.includes("future-order")){
      setPath("future")
    }
    else if(myArray.includes("take-away-order")){
      setPath("takeAway")
    }else {
      setPath("home")
    }
  }, [location])
  
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
                "option " + (path === "home" && "active ")
              }
            >
              <Link to="">
                <h5
                  onClick={() => {
                    setSelectedNav("homeDeliveryOrder");
                    setMenuIcon(false);
                  }}
                >
                  Home Delivery Orders
                </h5>
              </Link>
            </div>
            <div
              className={
                "option " + (path === "takeAway" && "active ")
              }
            >
              <Link to="take-away-order">
                <h5
                  onClick={() => {
                    setSelectedNav("takeAwayOrder");
                    setMenuIcon(false);
                  }}
                >
                  Take Away Orders
                </h5>
              </Link>
            </div>
            <div
              className={
                "option " + (path === "future" && "active ")
              }
            >
              <Link to="future-order">
                <h5
                  onClick={() => {
                    setSelectedNav("FutureOrder");
                    setMenuIcon(false);
                  }}
                >
                  Future Orders
                </h5>
              </Link>
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
