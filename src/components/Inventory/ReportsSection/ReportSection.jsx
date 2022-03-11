import React, { useEffect, useState } from "react";
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
        {clickedSubCategory === "Stock Report" && <StockReport />}
        {clickedSubCategory === "Stock Cost" && <StockCost />}
        {clickedSubCategory === "Closing Stock Report" && (
          <ClossingStockReport />
        )}
        {clickedSubCategory === "GP Statement" && <GpStatement />}
      </div>
    </div>
  );
}

export default ReportSection;
