import React, { useEffect, useState } from "react";
import CategoryMaster from "./CategoryMaster/CategoryMaster";
import "./master.scss";
import MesurementDetails from "./measurementDetails/MesurementDetails";
import ProductMaster from "./productMaster/ProductMaster";
import TaxMaster from "./TaxMater/TaxMaster";

const masterCategiry = [
  {
    id: 0,
    name: "Product Master",
  },
  {
    id: 1,
    name: "Category Master",
  },
  {
    id: 2,
    name: "Measurement Details",
  },
  {
    id: 3,
    name: "Tax Masters",
  },
];

function Master() {
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
    <div className="master">
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
        {clickedSubCategory === "Product Master" && <ProductMaster />}
        {clickedSubCategory === "Category Master" && <CategoryMaster />}
        {clickedSubCategory === "Measurement Details" && <MesurementDetails />}
        {clickedSubCategory === "Tax Masters" && <TaxMaster />}
      </div>
    </div>
  );
}

export default Master;
