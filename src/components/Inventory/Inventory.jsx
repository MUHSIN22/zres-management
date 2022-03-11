import React, { useEffect, useState } from "react";
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
            <div className="overlayer__black"></div>
            <div className="box__containers">
              <div
                className="sections"
                onClick={() => setSelectedOption("Masters")}
              >
                <h4>Masters</h4>
              </div>
              <div
                className="sections"
                onClick={() => setSelectedOption("Transactions")}
              >
                <h4>Transactions</h4>
              </div>

              <div
                className="sections"
                onClick={() => setSelectedOption("Menu Management")}
              >
                <h4>Menu Management</h4>
              </div>

              <div
                className="sections"
                onClick={() => setSelectedOption("Recipe Management")}
              >
                <h4>Recipe Management</h4>
              </div>

              <div
                className="sections"
                onClick={() => setSelectedOption("Reports")}
              >
                <h4>Reports</h4>
              </div>
            </div>
          </>
        )}

        {/* <div className="Inventory__master">
      
      </div> */}
        <div className="Inventory__transaction">
          {selectedOption === "Masters" && <Master />}
          {selectedOption === "Transactions" && <TransactionMaster />}
          {selectedOption === "Menu Management" && <MenuManagement />}
          {selectedOption === "Recipe Management" && <RecipeManagement />}
          {selectedOption === "Reports" && <ReportSection />}
        </div>
      </div>
    </>
  );
}

export default Inventory;
