import React, { useEffect, useState } from "react";
import "./accountTransaction.scss";
import CreditNote from "./CreditNote/CreditNote";
import DebitNote from "./Debit note/DebitNote";
import Journals from "./Journals/Journals";
import Contra from "./Contra/Contra";
import OpeningBalance from "./Opening Balance/OpeningBalance";
import SupplyerPayment from "./Supplyer payment/SupplyerPayment";
import CashRecipt from "./Cash Recept/CashRecipt";
import CashPayment from "./Cash Payment/CashPayment";
import ChartOfAcccount from "../Chart Of Account/ChartOfAcccount";
import { Link, Outlet, Route, Routes } from "react-router-dom";
const masterCategiry = [
  {
    id: 0,
    name: "Journal",
    link: 'journals'
  },
  {
    id: 1,
    name: "Contra",
    link: 'contra'
  },
  {
    id: 3,
    name: "Supplier Payment",
    link: 'supplier-payment'
  },
  {
    id: 4,
    name: "Opening Balance",
    link: 'opening-balance'
  },

  {
    id: 5,
    name: "Debit Note",
    link: 'debit-note'
  },
  {
    id: 6,
    name: "Credit Note",
    link: 'credit-note'
  },
  {
    id: 7,
    name: "Cash Receipt",
    link: 'cash-receipt'
  },
  {
    id: 8,
    name: "Cash Payment",
    link: 'cash-payment'
  },
];

function AccountTransaction() {
  const [categoryID, setCategoryID] = useState("");
  const [subCategoryCss, setSubCategoryCss] = useState("firstValue");
  const [selCategory, setSelCategory] = useState(masterCategiry);
  const [activeSubCategory,setActiveSubCategory] = useState(0)

  const [clickedSubCategory, setClickedSubCategory] = useState(
    selCategory[0].name
  );

  useEffect(() => {
    let path = window.location.pathname.split('/')
    setSelCategory(masterCategiry);
    selCategory.forEach(item => {
      if(item.link === (path[path.length-1] === ""?path[path.length-2]:path[path.length-1])){
        setActiveSubCategory(item.id)
      }
    })
  }, []);

  // first section needed

  return (
    <div className="AccountTransaction">
      <div className="top__category__section">
        {/*top category section  */}
        <div className="hedder__category">
          {
            selCategory.map((item) => (
              <Link
                className={
                  "option__box " + (item.id === activeSubCategory && 'active-sub-category')
                }
                to={`/mainPage/accounts/transactions/${item.link}`}
                onClick={() => setActiveSubCategory(item.id)}
              >
                <h5>{item.name}</h5>
              </Link>
            ))
          }

          {/* {selCategory
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
            ))} */}

          <div className="line_passer"></div>
        </div>
      </div>

      {/* PRODUCT MASTER SECTION */}


      <div className="master__body__section">
        <Outlet />
        {/* {clickedSubCategory === "Opening Balance" && <OpeningBalance />}
        {clickedSubCategory === "Debit Note" && <DebitNote />}
        {clickedSubCategory === "Credit Note" && <CreditNote />}
        {clickedSubCategory === "Journal" && <Journals />}
        {clickedSubCategory === "Contra" && <Contra />}
        {clickedSubCategory === "Supplier Payment" && <SupplyerPayment />}
        {clickedSubCategory === "Cash Receipt" && <CashRecipt />}
        {clickedSubCategory === "Cash Payment" && <CashPayment />} */}
      </div>
    </div>
  );
}

export default AccountTransaction;
