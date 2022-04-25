import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./inventory.scss";
import Master from "./Inventory_Master/Master";
import MenuManagement from "./MenuManagement/MenuManagement";
import Printer from "./printer/Printer";
import RecipeManagement from "./recipe management/RecipeManagement";
import ReportSection from "./ReportsSection/ReportSection";
import TransactionMaster from "./Transaction Manager/TransactionMaster";
function Inventory({ InventoryClick }) {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setSelectedOption("");
  }, [InventoryClick]);

  return (
    <>
      <div className="Inventory">
        {!selectedOption && (
          <>
            <Outlet/> 
          </>
        )}

      </div>
    </>
  );
}

export default Inventory;
