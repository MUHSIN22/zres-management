import React, { useEffect, useState } from "react";
import RecipeDetails from "./Recipe Details/RecipeDetails";
import "./recipeManagement.scss";
import RecipeInventory from "./Recipie Inventory/RecipeInventory";
import RecipieView from "./Recipie View/RecipieView";
const masterCategiry = [
  {
    id: 0,
    name: "Recipe",
  },
  {
    id: 2,
    name: "Recipe View",
  },
  {
    id: 3,
    name: "Recipe Inventory",
  },
];

function RecipeManagement() {
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
    <div className="RecipeManagement">
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
        {clickedSubCategory === "Recipe" && <RecipeDetails />}
        {clickedSubCategory === "Recipe View" && <RecipieView />}
        {clickedSubCategory === "Recipe Inventory" && <RecipeInventory />}
      </div>
    </div>
  );
}

export default RecipeManagement;
