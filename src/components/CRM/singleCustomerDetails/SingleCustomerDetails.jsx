import React from "react";
import "./singleCustomerDetails.scss";
import CustomerProfileSection from "./customerProfileSection/CustomerProfileSection";
import CusomerInsight from "./customerInsightSection/CusomerInsight";
import RunningOrder from "./runningOrder/RunningOrder";
import PastOrder from "./pastOrder/PastOrder";

function SingleCustomerDetails({number}) {
  return (
    <div className="singleCustomer__details">

      {/* main components */}
      <div className="headder__top__section">
        <CustomerProfileSection number={number}/>
        <CusomerInsight />
      </div>
      <RunningOrder />
      <PastOrder />
    </div>
  );
}

export default SingleCustomerDetails;
