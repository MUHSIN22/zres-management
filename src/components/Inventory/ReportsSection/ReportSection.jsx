import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import GpStatement from "../Transaction Manager/Gp statement/GpStatement";
import ClossingStockReport from "../Transaction Manager/Reports/clossing Srock Report/ClossingStockReport";
import StockCost from "../Transaction Manager/Reports/Stock Cost/StockCost";
import StockReport from "../Transaction Manager/Reports/StockReport/StockReport";

import "./reportSection.scss";

const masterCategiry = [
  {
    id: 0,
    name: "Stock Report",
  },
  {
    id: 1,
    name: "Stock Cost",
  },
  {
    id: 2,
    name: "Closing Stock Report",
  },
  {
    id: 3,
    name: "GP Statement",
  },
];

function ReportSection() {
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
    <div className="ReportSection">
      <div className="top__category__section">
        {/*top category section  */}
        <div className="hedder__category">
          <Link to="/mainPage/inventory/reports/stock-report">
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
          </Link>
          <Link to="/mainPage/inventory/reports/stock-cost">
            <div
              className={
                "option__box " + (subCategoryCss === "firstValue" && "firstvalue")
              }
              onClick={() => {
                setSubCategoryCss("firstValue");
                setClickedSubCategory(selCategory[0].name);
              }}
            >
              <h5>{selCategory[1].name}</h5>
            </div>
          </Link>
          <Link to="/mainPage/inventory/reports/closing-stock-report">
            <div
              className={
                "option__box " + (subCategoryCss === "firstValue" && "firstvalue")
              }
              onClick={() => {
                setSubCategoryCss("firstValue");
                setClickedSubCategory(selCategory[0].name);
              }}
            >
              <h5>{selCategory[2].name}</h5>
            </div>
          </Link>
          <Link to="/mainPage/inventory/reports/statement">
            <div
              className={
                "option__box " + (subCategoryCss === "firstValue" && "firstvalue")
              }
              onClick={() => {
                setSubCategoryCss("firstValue");
                setClickedSubCategory(selCategory[0].name);
              }}
            >
              <h5>{selCategory[3].name}</h5>
            </div>
          </Link>

          <div className="line_passer"></div>
        </div>
      </div>

      {/* PRODUCT MASTER SECTION */}

      <div className="master__body__section">
        <Outlet />
      </div>
    </div>
  );
}

export default ReportSection;
