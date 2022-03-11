import React from "react";
import Orders from "./Orders/Orders";

function FutureOrder({ clickedSubCategory, selectedNav }) {
  return (
    <>
      {selectedNav === "FutureOrder" && clickedSubCategory === "Orders" && (
        <Orders />
      )}
    </>
  );
}

export default FutureOrder;
