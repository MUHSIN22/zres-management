import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from "react-router-dom";
import "./crm.scss";

import AddCustomer from "./addCustomer/AddCustomer";
import CrmFront from "./CrmFront";
import CustomerDetails from "./customerDetails/CustomerDetails";
import Sms from "./sms/Sms";

function Crm() {
  

  return (
    <div className="Crm">
      <div className="crm__front_body">
        <Outlet />
      </div>
    </div>
  );
}

export default Crm;
