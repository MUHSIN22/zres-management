import React, { useEffect, useState } from "react";
import Walkin from "../Walkin/Walkin";
import DeliveryManagerNavbar from "./DeliveryManager-nav/DeliveryManagerNavbar";
import "./deliveryManager.scss";
import FutureOrder from "./FutureOrder/FutureOrder";
import HomeDeliveryOrder from "./HomeDeliveryOrder/HomeDeliveryOrder";
import NewOrder from "./HomeDeliveryOrder/newOrder/NewOrder";
import TakeAwayOrders from "./TakeAwayOrders/TakeAwayOrders";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Link, Outlet} from 'react-router-dom'
const homeDeliverOrderCategory = [
  {
    id: 0,
    name: "New order",
    link:"new-order"
  },
  {
    id: 1,
    name: "waiting for pickup",
    link:"waiting-for-pickup"
  },
  {
    id: 2,
    name: "Collection In Progress",
    link:"collection-in-progress"
  },
  {
    id: 3,
    name: "Delivery Status",
    link:"delivery-status"
  },
];

const takeAwayOrders = [
  {
    id: 0,
    name: "Waiting for collection",
  },
  {
    id: 1,
    name: "Collected",
  },
];

const futureOrder = [
  {
    id: 0,
    name: "Orders",
  },
];

const dataToSendToWalkin = {
  tableNo: "4",
  guest: "2",
  waiter: "jhon",
  orderType: "HomeDelivery",
  checkNo: "452",
};

function DeliveryManager({ subnav }) {
  const [dataToSendToWlkinPage, setDataToSendToWalkinPage] =
    useState(dataToSendToWalkin);
  const [placeAnOrder, setPlaceAnOrder] = useState(false);
  const [mainMenuView, setMainMenuView] = useState(true);

  const [categoryID, setCategoryID] = useState("");
  const [subCategoryCss, setSubCategoryCss] = useState("firstValue");
  const [selCategory, setSelCategory] = useState(homeDeliverOrderCategory);
  const [selectedNav, setSelectedNav] = useState("homeDeliveryOrder");
  const [clickedSubCategory, setClickedSubCategory] = useState(
    selCategory[0].name
  );

  useEffect(() => {
    if (subnav) {
      setSelectedNav(subnav);
    }
  }, []);

  useEffect(() => {
    if (selectedNav === "homeDeliveryOrder") {
      setSelCategory(homeDeliverOrderCategory);
      setClickedSubCategory(homeDeliverOrderCategory[0].name);
    } else if (selectedNav === "takeAwayOrder") {
      setSelCategory(takeAwayOrders);
      setClickedSubCategory(takeAwayOrders[0].name);
    } else if (selectedNav === "FutureOrder") {
      setSelCategory(futureOrder);
      setClickedSubCategory(futureOrder[0].name);
    }
  }, [selectedNav]);

  console.log("selSub cAT", clickedSubCategory);

  const handlePlaceAnOrder = () => {
    setPlaceAnOrder(true);
    setMainMenuView(false);
  };

  const handleCloseWalkinPage = () => {
    setPlaceAnOrder(false);
    setMainMenuView(true);
  };
  return (
    <>
      {placeAnOrder && (
        <>
          <div
            className="back__btn__section"
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              className="button__area"
              style={{
                width: "50px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#040153",
                borderRadius: "10px",
                boxShadow: "0 0 10px grey",
                cursor: "pointer",
              }}
              onClick={handleCloseWalkinPage}
            >
              <ArrowBackIcon
                style={{
                  fontSize: "20px",
                  color: "#fff",
                }}
              />
            </div>
          </div>
          <Walkin dataToSendToWlkinPage={dataToSendToWlkinPage} />
        </>
      )}

      {mainMenuView && (
        <div className="DeliveryManager">
          <DeliveryManagerNavbar
            setSelectedNav={setSelectedNav}
            selectedNav={selectedNav}
            handlePlaceAnOrder={handlePlaceAnOrder}
          />
          <div className="delivery__manger__body__section">
            <Outlet/>
          </div>
        </div>
      )}
    </>
  );
}

export default DeliveryManager;
