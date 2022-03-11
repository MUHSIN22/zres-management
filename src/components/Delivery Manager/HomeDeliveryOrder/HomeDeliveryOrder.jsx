import React from "react";
import Delivered from "./Delivered/Delivered";
import DeliveryInProgress from "./DeliverInProgress/DeliveryInProgress";
import NewOrder from "./newOrder/NewOrder";
import WaitingForPicup from "./waitingForPicup/WaitingForPicup";
function HomeDeliveryOrder({ clickedSubCategory, selectedNav }) {
  // homeDeliveryOrder
  return (
    <>
      {selectedNav === "homeDeliveryOrder" &&
        clickedSubCategory === "New order" && <NewOrder />}
      {selectedNav === "homeDeliveryOrder" &&
        clickedSubCategory === "waiting for pickup" && <WaitingForPicup />}
      {selectedNav === "homeDeliveryOrder" &&
        clickedSubCategory === "Collection In Progress" && (
          <DeliveryInProgress />
        )}
      {selectedNav === "homeDeliveryOrder" &&
        clickedSubCategory === "Delivery Status" && <Delivered />}
    </>
  );
}

export default HomeDeliveryOrder;
