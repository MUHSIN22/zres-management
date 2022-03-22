import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./Accounts.scss";

function Accounts({ InventoryClick }) {
  return (
    <>
      <div className="Inventory">
        <div className="Inventory__transaction">
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default Accounts;
