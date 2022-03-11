import React, { useEffect, useState } from "react";
import Company from "./Company/Company";
import Counter from "./counter/Counter";
import SettingMakker from "./setting Maker/SettingMakker";
import SettingManager from "./Setting Manager/SettingManager";
import "./setting.scss";
import Terminal from "./terminal/Terminal";

const masterCategiry = [
  {
    id: 0,
    name: "Setting Manager",
  },
  {
    id: 1,
    name: "Setting Marker",
  },
  {
    id: 2,
    name: "Company",
  },
  {
    id: 3,
    name: "Terminal",
  },
  {
    id: 4,
    name: "Counter",
  },
];

function Settings() {
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
    <div className="Settings">
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

      <div className="Settings__body__section">
        {clickedSubCategory === "Setting Manager" && <SettingManager />}
        {clickedSubCategory === "Terminal" && <Terminal />}
        {clickedSubCategory === "Counter" && <Counter />}
        {clickedSubCategory === "Company" && <Company />}
        {clickedSubCategory === "Setting Marker" && <SettingMakker />}
      </div>
    </div>
  );
}

export default Settings;
