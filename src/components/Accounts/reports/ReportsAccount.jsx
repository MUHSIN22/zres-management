import React, { useEffect, useState } from "react";
import Ledger from "./Ledger/Ledger";
import "./repoertAccounts.scss";
import CashBook from "./Cash Book/CashBook";
import BankBook from "./Bank book/BankBook";
import CashFlow from "./Cash Flow/CashFlow";
import BalanceSheet from "./Balance Sheet/BalanceSheet";
import ProfitAndLose from "./Profit and Lose/ProfitAndLose";
import DayBookDetails from "./DayBook Details/DayBookDetails";
import TrialBalance from "./Trial Balance/TrialBalance";
const masterCategiry = [
  {
    id: 0,
    name: "Ledger",
  },
  {
    id: 1,
    name: "Daybook",
  },
  {
    id: 3,
    name: "Trial Balance",
  },
  {
    id: 4,
    name: "Profit and Loss Account",
  },

  {
    id: 5,
    name: "Balance Sheet",
  },
  {
    id: 6,
    name: "Cash Book",
  },
  {
    id: 7,
    name: "Bank Book",
  },
  {
    id: 8,
    name: "Cash Flow",
  },
];

function ReportsAccount() {
  const [categoryID, setCategoryID] = useState("");
  const [subCategoryCss, setSubCategoryCss] = useState("firstValue");
  const [selCategory, setSelCategory] = useState(masterCategiry);

  const [clickedSubCategory, setClickedSubCategory] = useState(
    selCategory[0].name
  );

  useEffect(() => {
    setSelCategory(masterCategiry);
    setClickedSubCategory(masterCategiry[0].name);
  }, []);

  // first section needed

  return (
    <div className="ReportsAccount">
      <div className="top__category__section">
        {/*top category section  */}
        <div className="hedder__category">
          <div
            className={
              "option__box " + (subCategoryCss === "firstValue" && "firstvalue")
            }
            onClick={() => {
              setSubCategoryCss("firstValue");
              setClickedSubCategory(selCategory[0].name);
            }}
          >
            <h5>{selCategory[0].name}</h5>
          </div>

          {selCategory
            .filter((data) => data.id !== 0)
            .map((cat) => (
              <div
                key={cat.id}
                className={
                  categoryID === cat.id
                    ? "option__box " +
                      (subCategoryCss === "restValue" && "restValue ")
                    : "option__box "
                }
                onClick={() => {
                  setSubCategoryCss("restValue");
                  setCategoryID(cat.id);
                  setClickedSubCategory(cat.name);
                }}
              >
                <h5>{cat.name}</h5>
              </div>
            ))}

          <div className="line_passer"></div>
        </div>
      </div>

      {/* PRODUCT MASTER SECTION */}

      <div className="master__body__section">
        {clickedSubCategory === "Ledger" && <Ledger />}
        {clickedSubCategory === "Cash Book" && <CashBook />}
        {clickedSubCategory === "Bank Book" && <BankBook />}
        {clickedSubCategory === "Cash Flow" && <CashFlow />}
        {clickedSubCategory === "Balance Sheet" && <BalanceSheet />}
        {clickedSubCategory === "Profit and Loss Account" && <ProfitAndLose />}
        {clickedSubCategory === "Daybook" && <DayBookDetails />}
        {clickedSubCategory === "Trial Balance" && <TrialBalance />}
      </div>
    </div>
  );
}

export default ReportsAccount;
