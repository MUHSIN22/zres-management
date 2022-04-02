import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./inventory.scss";
import Master from "./Inventory_Master/Master";
import MenuManagement from "./MenuManagement/MenuManagement";
import Printer from "./printer/Printer";
import RecipeManagement from "./recipe management/RecipeManagement";
import ReportSection from "./ReportsSection/ReportSection";
import TransactionMaster from "./Transaction Manager/TransactionMaster";
function Inventory({ InventoryClick }) {
 

  useEffect(() => {
  }, [InventoryClick]);

  return (
    <>
      <div className="Inventory">
     
          <>
            <div className="overlayer__black"></div>
          </>
        

        {/* <div className="Inventory__master">
      
      </div> */}
        <div className="Inventory__transaction">
          {/* {"Masters" && <Master />}
          { "Transactions" && <TransactionMaster />}
          { "Menu Management" && <MenuManagement />}
          {"Recipe Management" && <RecipeManagement />}
          { "Reports" && <ReportSection />} */}
        </div>
      </div>
    </>
  );
}

export default Inventory;
