import React, { useEffect, useState } from "react";
import ChartOfAcccount from "./ChartOfAcccount";
import "./chartOffAccountMain.scss";

const masterCategiry = [
  {
    id: 0,
    name: "Chart of Account",
  },
];

function ChartOfAccountMain() {
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
    <div className="ChartOfAccountMain">
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
        {clickedSubCategory === "Chart of Account" && <ChartOfAcccount />}
      </div>
    </div>
  );
}

export default ChartOfAccountMain;
