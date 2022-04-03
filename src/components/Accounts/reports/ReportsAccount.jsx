import React, { useEffect, useState } from "react";
import Ledger from "./Ledger/Ledger";
import {Link, Outlet} from 'react-router-dom'
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
    link: 'ledger'
  },
  {
    id: 1,
    name: "Daybook",
    link: 'daybook'
  },
  {
    id: 3,
    name: "Trial Balance",
    link: 'trial-balance'
  },
  {
    id: 4,
    name: "Profit and Loss Account",
    link: 'profit-and-loss-account'
  },

  {
    id: 5,
    name: "Balance Sheet",
    link: 'balance-sheet'
  },
  {
    id: 6,
    name: "Cash Book",
    link: 'cash-book'
  },
  {
    id: 7,
    name: "Bank Book",
    link: 'bank-book'
  },
  {
    id: 8,
    name: "Cash Flow",
    link: 'cash-flow'
  },
];

function ReportsAccount() {
  const [categoryID, setCategoryID] = useState("");
  const [subCategoryCss, setSubCategoryCss] = useState("firstValue");
  const [selCategory, setSelCategory] = useState(masterCategiry);
  const [activeCategory, setActiveCategory] = useState(0);

  const [clickedSubCategory, setClickedSubCategory] = useState(
    selCategory[0].name
  );

  const handleSubCategory = () => {
    let path = window.location.pathname.split('/')
    selCategory.forEach((item) => {
      if(item.link === (path[path.length -1] === "" ? path[path.length - 2] : path[path.length -1])){
        setActiveCategory(item.id);
      }
    })
  }

  useEffect(() => {
    setSelCategory(masterCategiry);
    handleSubCategory();
  }, []);

  // first section needed

  return (
    <div className="ReportsAccount">
      <div className="top__category__section">
        {/*top category section  */}
        <div className="hedder__category">
          {
            selCategory.map((item) => (
              <Link
                className={
                  "option__box " + (activeCategory === item.id && "active-category")
                }
                to={`/mainPage/accounts/reports/${item.link}`}
                onClick={() => {
                  setActiveCategory(item.id)
                  setClickedSubCategory(selCategory[0].name);
                }}
              >
                <h5>{item.name}</h5>
              </Link>
            ))
          }
          <div className="line_passer"></div>
        </div>
      </div>

      {/* PRODUCT MASTER SECTION */}

      <div className="master__body__section">
        <Outlet/>
      </div>
    </div>
  );
}

export default ReportsAccount;
