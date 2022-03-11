import React, { useEffect, useState } from "react";
import "./Accounts.scss";
import ChartOfAccountMain from "./Chart Of Account/ChartOfAccountMain";
import AccountMaster from "./Masters/AccountMasters";
import ReportsAccount from "./reports/ReportsAccount";
import AccountTransaction from "./Transactions/AccountTransaction";
function Accounts({ InventoryClick }) {
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
            <div className="box__container">
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
                onClick={() => setSelectedOption("Reports")}
              >
                <h4>Reports</h4>
              </div>

              <div
                className="sections"
                onClick={() => setSelectedOption("ChartofAccount")}
              >
                <h4>Chart of Account</h4>
              </div>
            </div>
          </>
        )}

        {/* <div className="Inventory__master">
      
      </div> */}
        <div className="Inventory__transaction">
          {selectedOption === "Masters" && <AccountMaster />}
          {selectedOption === "ChartofAccount" && <ChartOfAccountMain />}
          {selectedOption === "Reports" && <ReportsAccount />}
          {selectedOption === "Transactions" && <AccountTransaction />}
        </div>
      </div>
    </>
  );
}

export default Accounts;
