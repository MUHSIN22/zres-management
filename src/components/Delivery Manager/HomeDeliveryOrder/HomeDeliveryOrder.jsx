import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

function HomeDeliveryOrder({ clickedSubCategory, selectedNav }) {
  const [path,setPath] = useState()
  const location = useLocation()
  useEffect(() => {
    console.log(location.pathname);
    if(location.pathname==="/mainPage/delivery-manager/delivery-status"){
      setPath("deliveryStatus")
    }else if(location.pathname==="/mainPage/delivery-manager"){
      setPath("newOrder")
    }else if(location.pathname==="/mainPage/delivery-manager/waiting-for-pickup"){
      setPath("waiting")
    }else{
      setPath("collection")
    }
  }, [location])
  
  return (
    <>
      <div className="body__top__headder__section">
        <div className="hedder__category">
          <div className="header__items">
            <Link className={path==="newOrder"&&"active"} to=""><h5 >New Order</h5></Link>
            <Link className={path==="waiting"&&"active"} to="waiting-for-pickup"><h5>Waiting for pickup</h5></Link>
            <Link className={path==="collection"&&"active"} to="collection-in-progress"><h5>Collection In Progress</h5></Link>
            <Link className={path==="deliveryStatus"&&"active"} to="delivery-status"><h5 >Delivery Status</h5></Link>
          </div>
          <div className="line_passer">
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
          </div>
        </div>
      </div>
      <div className="body__details__sectiom"></div>
      <Outlet />
    </>
  );
}

export default HomeDeliveryOrder;
