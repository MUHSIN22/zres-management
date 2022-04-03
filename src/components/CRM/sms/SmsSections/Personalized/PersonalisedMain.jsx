import React from "react";
import { Outlet } from "react-router-dom";
import "../../sms.scss";


function PersonalisedMain() {
  
  return (
<div>
<Outlet/>
</div>
 
  );
}

export default PersonalisedMain;
