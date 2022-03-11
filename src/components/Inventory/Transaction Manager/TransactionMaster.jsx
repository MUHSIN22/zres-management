import React, { useEffect, useState } from "react";
import GoodsReport from "./goodsReport/GoodsReport";
import GpStatement from "./Gp statement/GpStatement";
import PurchaseDetails from "./Purchase Details/PurchaseDetails";
import PurchaseDetailsAdd from "./Purchase Details/purchaseDetailsAdd/PurchaseDetailsAdd";
import PurchaseOrder from "./Purchase Order/PurchaseOrder";
import PurchaseReturn from "./Purchase Return/PurchaseReturn";
import ReorderMapping from "./Reorder Mapping/ReorderMapping";
import Reports from "./Reports/Reports";
import StockReport from "./Reports/StockReport/StockReport";
import Sales from "./Sales/Sales";
import SalesReturn from "./salesReturn/SalesReturn";
import AddStockAdjustment from "./Stock Adjustment/addStockAdjustable/AddStockAdjustment";
import StockAdjustment from "./Stock Adjustment/StockAdjustment";
import StockTransfer from "./Stock Transfer/StockTransfer";
import "./transactionMaster.scss";

const masterCategiry = [
  {
    id: 0,
    name: "Purchase Details",
  },
  {
    id: 1,
    name: "Purchase Return",
  },
  {
    id: 2,
    name: "Sales",
  },
  {
    id: 3,
    name: "Sales Return",
  },
  // {
  //   id: 5,
  //   name: "GP Statement",
  // },
  // {
  //   id: 6,
  //   name: "Opening Stock",
  // },
  {
    id: 4,
    name: "Stock Adjustment",
  },
  {
    id: 5,
    name: "Purchase Order",
  },
  {
    id: 6,
    name: "Stock Transfer",
  },

  {
    id: 7,
    name: "Goods Receipt",
  },
  {
    id: 8,
    name: "Reorder Mapping",
  },
];

function TransactionMaster() {
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
  return (
    <div className="TransactionMaster">
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
        {clickedSubCategory === "Purchase Details" && <PurchaseDetails />}
        {clickedSubCategory === "Purchase Return" && <PurchaseReturn />}
        {clickedSubCategory === "Sales" && <Sales />}
        {clickedSubCategory === "Sales Return" && <SalesReturn />}
        {/* {clickedSubCategory === "GP Statement" && <GpStatement />} */}
        {clickedSubCategory === "Stock Adjustment" && <StockAdjustment />}
        {clickedSubCategory === "Purchase Order" && <PurchaseOrder />}

        {clickedSubCategory === "Stock Transfer" && <StockTransfer />}
        {clickedSubCategory === "Goods Receipt" && <GoodsReport />}
        {clickedSubCategory === "Reorder Mapping" && <ReorderMapping />}
      </div>
    </div>
  );
}

export default TransactionMaster;
