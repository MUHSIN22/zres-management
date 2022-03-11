import React from "react";
import "./dashboadInventory.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import PieChartSection from "../DashboardSales/charts/PieChartSection";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function DashBoadInventory() {
  return (
    <div className="DashBoadInventory">
      <div className="DashBoadInventory__top__headder__div__section">
        <div className="left__section__wrapper">
          <div className="diff__Section__in__left">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>

            <h4>Stock on Hand</h4>
            <div className="detail__sections">
              <h5 style={{ marginRight: "20%" }}>OMR</h5>
              <h2>0.00</h2>
            </div>
          </div>
          <div className="diff__Section__in__left">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>
            <h4>Wastage Cost</h4>
            <div className="detail__sections">
              <h5 style={{ marginRight: "20%" }}>OMR</h5>
              <h2>0.00</h2>
            </div>
          </div>
          <div className="diff__Section__in__left">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>
            <h4>Total cogs</h4>
            <div className="detail__sections">
              <h2>0%</h2>
              <h5>OMR : 0.000</h5>
            </div>
          </div>
          <div className="diff__Section__in__left">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>
            <h4>Total Purchase</h4>
            <div className="detail__sections">
              <h5 style={{ marginRight: "20%" }}>OMR</h5>
              <h2>0.00</h2>
            </div>
          </div>
          <div className="diff__Section__in__left">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>
            <h4>Stock takes</h4>
            <div className="detail__sections">
              <h5 style={{ marginRight: "20%" }}>OMR</h5>
              <h2>0.00</h2>
            </div>
          </div>
          <div className="diff__Section__in__left">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>
            <h4>Low stocks- Finished Goods</h4>
            <div className="detail__sections">
              <img
                src="https://cdn0.iconfinder.com/data/icons/flat-field-mono-folder-icon-set/512/folder_no_access-512.png"
                alt=""
              />

              <p>I have no data yet</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboadInentory__bottom_section">
        <div className="dashboadInentory__left_section">
          <div className="top__icon__section">
            <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
          </div>
          <h4>Top Profitable Items</h4>

          <h2>Bottle Water</h2>
          <h4 style={{ textDecoration: "none" }}>100.00 Sold</h4>
          <hr />
          <ol>
            <li>
              <div className="inner__li">
                <h5>Coffer</h5> <h5>500 sold</h5>{" "}
              </div>
            </li>
            <li>
              <div className="inner__li">
                <h5>Grilled Beaf Burger</h5> <h5>500 sold</h5>{" "}
              </div>
            </li>
            <li>
              <div className="inner__li">
                <h5>Pizza</h5> <h5>500 sold</h5>{" "}
              </div>
            </li>
            <li>
              <div className="inner__li">
                <h5>Bottle Water</h5> <h5>500 sold</h5>{" "}
              </div>
            </li>
          </ol>
        </div>
        <div className="dashboadInentory__right_section">
          <div className="dashboadInventory__right__in__Section">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>
            <h4>Low Stock - Ingredients</h4>
            <div className="detail__sections">
              <img
                src="https://cdn0.iconfinder.com/data/icons/flat-field-mono-folder-icon-set/512/folder_no_access-512.png"
                alt=""
              />

              <p>I have no data yet</p>
            </div>
          </div>

          <div className="dashboadInventory__right__in__Section">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>
            <h4>Top Inventory Modifier</h4>
            <div className="detail__sections">
              <img
                src="https://cdn0.iconfinder.com/data/icons/flat-field-mono-folder-icon-set/512/folder_no_access-512.png"
                alt=""
              />

              <p>I have no data yet</p>
            </div>
          </div>
          <div className="dashboadInventory__right__in__Section">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>
            <h4>No of Covers Served</h4>

            <PieChartSection />

            <div className="location__name__section">
              <div className="color__area"></div>
              <p>Location name</p>
            </div>
          </div>
          <div className="dashboadInventory__right__in__Section">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>
            <h4>Top Paid Modifiers</h4>

            <h2>Bottle Water</h2>
            <h4 style={{ textDecoration: "none" }}>100.00 Sold</h4>
            <hr />
            <ol>
              <li>
                <div className="inner__li">
                  <h5>Coffer</h5> <h5>500 sold</h5>{" "}
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoadInventory;
