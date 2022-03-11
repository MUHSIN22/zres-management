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
const masterCategiry = [
  {
    id: 0,
    name: "Journal",
  },
  {
    id: 1,
    name: "Contra",
  },
  {
    id: 3,
    name: "Supplier Payment",
  },
  {
    id: 4,
    name: "Opening Balance",
  },

  {
    id: 5,
    name: "Debit Note",
  },
  {
    id: 6,
    name: "Credit Note",
  },
  {
    id: 7,
    name: "Cash Receipt",
  },
  {
    id: 8,
    name: "Cash Payment",
  },
];

function AccountTransaction() {
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
    <div className="AccountTransaction">
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
        {clickedSubCategory === "Opening Balance" && <OpeningBalance />}
        {clickedSubCategory === "Debit Note" && <DebitNote />}
        {clickedSubCategory === "Credit Note" && <CreditNote />}
        {clickedSubCategory === "Journal" && <Journals />}
        {clickedSubCategory === "Contra" && <Contra />}
        {clickedSubCategory === "Supplier Payment" && <SupplyerPayment />}
        {clickedSubCategory === "Cash Receipt" && <CashRecipt />}
        {clickedSubCategory === "Cash Payment" && <CashPayment />}
      </div>
    </div>
  );
}

export default AccountTransaction;
