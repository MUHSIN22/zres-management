import React, { useEffect, useState } from "react";
import { Outlet,useLocation,useNavigate } from "react-router-dom";
import "./recipeManagement.scss";
// const masterCategiry = [
//   {
//     id: 0,
//     name: "Recipe",
//   },
//   {
//     id: 2,
//     name: "Recipe View",
//   },
//   {
//     id: 3,
//     name: "Recipe Inventory",
//   },
// ];

function RecipeManagement() {
  const [categoryID, setCategoryID] = useState("");
  const [subCategoryCss, setSubCategoryCss] = useState("firstValue");
  const [path,setPath]=useState("")
  // const [selCategory, setSelCategory] = useState(masterCategiry);

  // const [clickedSubCategory, setClickedSubCategory] = useState(
  //   // selCategory[0].name
  // );

  // useEffect(() => {
  //   setSelCategory(masterCategiry);
  //   setClickedSubCategory(masterCategiry[0].name);
  // }, []);
  const location = useLocation()
  const navigate = useNavigate();
  useEffect(()=>{
    if(location.pathname==="/mainPage/inventory/receipe-management"){
      setPath(1)
    }else if(location.pathname==="/mainPage/inventory/receipe-management/inventory"){
      setPath(3)
    }else{
      setPath(2)
    }
  },[location])
  return (
    <div className="RecipeManagement">
      <div className="top__category__section">
        {/*top category section  */}
        <div className="hedder__category">
          <div
            className={
              "option__box " + (path===1&& "firstvalue")
            }
            onClick={()=>navigate("")}
          >
            <h5>Recipe</h5>
          </div>
          <div
                className={
                  // categoryID === cat.id
                  "option__box " +
                      (path === 2 && "restValue ")
                }
                onClick={()=>navigate("recipe-view/1-24")}
              >
                <h5>Recipe View</h5>
              </div>
              <div
                className={
                  // categoryID === cat.id
                  "option__box " +
                      (path === 3 && "restValue ")
                    }
                    onClick={()=>navigate("inventory")}
              >
                <h5>Recipe Inventory</h5>
              </div>

          <div className="line_passer"></div>
        </div>
      </div>

      {/* PRODUCT MASTER SECTION */}

      {/* <div className="master__body__section">
        {clickedSubCategory === "Recipe" && <RecipeDetails />}
        {clickedSubCategory === "Recipe View" && <RecipieView />}
        {clickedSubCategory === "Recipe Inventory" && <RecipeInventory />}
      </div> */}
      <Outlet/>
    </div>
  );
}

export default RecipeManagement;
