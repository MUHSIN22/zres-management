import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./crm.scss";

import AddCustomer from "./addCustomer/AddCustomer";
import CrmFront from "./CrmFront";
import CustomerDetails from "./customerDetails/CustomerDetails";
import Sms from "./sms/Sms";

function Crm() {
  const [smsCategory, setSmsCategory] = useState("personalised");

  return (
      <div className="Crm">
        <div className="crm__front_body">
          <Routes>
            <Route path="/addCustomer" element={<AddCustomer />}/>
            <Route path="/sms" element={<Sms smsType={smsCategory} />}/>
            <Route path="/customerDetail" element={<CustomerDetails />}/>
            <Route path="/" element={<CrmFront setSmsCategory={setSmsCategory} />}/>
          </Routes>
        </div>
      </div>
  );
}

export default Crm;
