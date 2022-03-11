import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./crm.scss";

import AddCustomer from "./addCustomer/AddCustomer";
import CrmFront from "./CrmFront";
import CustomerDetails from "./customerDetails/CustomerDetails";
import Sms from "./sms/Sms";

function Crm() {
  const [smsCategory, setSmsCategory] = useState("personalised");

  return (

    <Router>

      <div className="Crm">
        <Switch>


          <Route path="/addCustomer">
            <div className="crm__front_body">
              <AddCustomer />
            </div>
          </Route>


          <Route path="/sms">
            <div className="crm__front_body">
              <Sms smsType={smsCategory} />
            </div>
          </Route>


          <Route path="/customerDetail">
            <div className="crm__front_body">
              <CustomerDetails />
            </div>
          </Route>


          <Route path="/">
            <div className="crm__front_body">
              <CrmFront setSmsCategory={setSmsCategory} />
            </div>
          </Route>

          
        </Switch>
      </div>


    </Router>
  );
}

export default Crm;
