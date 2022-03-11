import React, { useEffect, useState } from "react";
import Walkin from "../Walkin/Walkin";
import DeliveryManagerNavbar from "./DeliveryManager-nav/DeliveryManagerNavbar";
import "./deliveryManager.scss";
import FutureOrder from "./FutureOrder/FutureOrder";
import HomeDeliveryOrder from "./HomeDeliveryOrder/HomeDeliveryOrder";
import NewOrder from "./HomeDeliveryOrder/newOrder/NewOrder";
import TakeAwayOrders from "./TakeAwayOrders/TakeAwayOrders";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const homeDeliverOrderCategory = [
  {
    id: 0,
    name: "New order",
  },
  {
    id: 1,
    name: "waiting for pickup",
  },
  {
    id: 2,
    name: "Collection In Progress",
  },
  {
    id: 3,
    name: "Delivery Status",
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
            <div className="body__top__headder__section">
              <div className="hedder__category">
                <div
                  className={
                    "option__box " +
                    (subCategoryCss === "firstValue" && "firstvalue")
                  }
                  onClick={() => {
                    setSubCategoryCss("firstValue");
                    setClickedSubCategory(selCategory[0].name);
                  }}
                >
                  <h5>{selCategory[0].name}</h5>
                </div>

                {selCategory
                  .filter((data) => data.id !== 0)
                  .map((cat) => (
                    <div
                      key={cat.id}
                      className={
                        categoryID === cat.id
                          ? "option__box " +
                            (subCategoryCss === "restValue" && "restValue ")
                          : "option__box "
                      }
                      onClick={() => {
                        setSubCategoryCss("restValue");
                        setCategoryID(cat.id);
                        setClickedSubCategory(cat.name);
                      }}
                    >
                      <h5>{cat.name}</h5>
                    </div>
                  ))}
                <button>
                  <svg
                    id="surface1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.747"
                    height="17.322"
                    viewBox="0 0 19.747 17.322"
                  >
                    <path
                      id="Path_3026"
                      data-name="Path 3026"
                      d="M4.964,3.016A4.88,4.88,0,0,0,1.536,11.39v6.046A.764.764,0,0,0,2.3,18.2H3.822a2.687,2.687,0,0,1,5.327,0h1.525a.762.762,0,0,0,.761-.761V8.3a.762.762,0,0,0-.761-.761H9.841A4.906,4.906,0,0,0,4.964,3.016Zm0,1.072A3.831,3.831,0,1,1,1.132,7.917,3.838,3.838,0,0,1,4.964,4.088Zm0,.809a.251.251,0,0,0-.263.236L4.583,7.322a.709.709,0,0,0,.381,1.311h.048L6.32,9.75c.063.057.23.1.4-.073a.344.344,0,0,0,.094-.429L5.677,7.917A.714.714,0,0,0,5.32,7.3l-.1-2.165A.255.255,0,0,0,4.964,4.9Zm7.994,4.161a.764.764,0,0,0-.761.761v7.616a.766.766,0,0,0,.761.761,2.689,2.689,0,0,1,5.33,0h.761a.762.762,0,0,0,.761-.761V13.628a3.276,3.276,0,0,0-.595-1.546L17.527,9.819c-.347-.417-.583-.761-1.141-.761Zm1.522,1.525h1.857c.121,0,.308.19.308.19l1.595,2.211a1.367,1.367,0,0,1,.287.643H14.48ZM6.486,16.817a1.761,1.761,0,1,0,1.761,1.761A1.761,1.761,0,0,0,6.486,16.817Zm9.135,0a1.761,1.761,0,1,0,1.764,1.761A1.76,1.76,0,0,0,15.621,16.817Z"
                      transform="translate(-0.063 -3.016)"
                      fill="#040153"
                    />
                  </svg>
                  delivery assistant
                </button>
                <div className="line_passer"></div>
              </div>
            </div>
            <div className="body__details__sectiom">
              {selectedNav === "homeDeliveryOrder" && (
                <HomeDeliveryOrder
                  clickedSubCategory={clickedSubCategory}
                  selectedNav={selectedNav}
                />
              )}

              {selectedNav === "takeAwayOrder" && (
                <TakeAwayOrders
                  clickedSubCategory={clickedSubCategory}
                  selectedNav={selectedNav}
                />
              )}

              {selectedNav === "FutureOrder" && (
                <FutureOrder
                  clickedSubCategory={clickedSubCategory}
                  selectedNav={selectedNav}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeliveryManager;
