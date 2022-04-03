import React, { useEffect, useState } from "react";
import "./marketting.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import PieChartSection from "../DashboardSales/charts/PieChartSection";

import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { dashboardServices } from "../../../Services/DashboardServices";

function Marketting() {
  const [marketingData,setMarketingData] = useState({})
  
  useEffect(() => {
    dashboardServices.getMarketingData()
    .then(data => {setMarketingData(data);console.log(data);})
    .catch(err => console.log(err))

  },[])

  return (
    <div>
      {/* this targets the top small div and one big div */}
      <div className="top__headder__div__section">
        <div className="left__section__wrapper">
          <div className="diff__Section__in__left">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>

            <h4>Cancelled Items</h4>
            <div className="detail__sections">
              <h2>0</h2>
              <h5>0.000</h5>
            </div>
          </div>
          <div className="diff__Section__in__left">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>
            <h4>New Customers</h4>
            <div className="detail__sections">
              <h2>10</h2>
            </div>
          </div>
          <div className="diff__Section__in__left">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>
            <h4>Total Surcharges</h4>
            <div className="detail__sections">
              <h5 style={{ marginRight: "20%" }}>OMR</h5>
              <h2>0</h2>
            </div>
          </div>
          <div className="diff__Section__in__left">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>
            <h4>Total Discount</h4>
            <div className="detail__sections">
              <h5 style={{ marginRight: "20%" }}>OMR</h5>
              <h2>0</h2>
            </div>
          </div>
          <div className="diff__Section__in__left">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>
            <h4>Delivery Reports</h4>
            <div className="detail__sections">
              <h2>11</h2>
            </div>
          </div>
          <div className="diff__Section__in__left">
            <div className="top__icon__section">
              <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
            </div>

            <div className="detail__sections">
              <img
                src="https://cdn.shopify.com/s/files/1/1061/1924/products/Sleeping_Emoji_large.png?v=1571606036"
                alt=""
              />
              <p>Inactive Customer</p>
            </div>
          </div>
        </div>
        <div className="right__section__wrapper">
          <div className="what__happening__div">
            <div className="top__icon__section">
              <img
                src="https://www.maxpixel.net/static/photo/1x/Live-Internet-Youtube-Button-Online-Streaming-6366830.png"
                alt=""
              />
            </div>

            <h4>What Happening </h4>

            <div className="body__img__section">
              <div
                className="waiting__sections"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
                <h5 style={{ marginTop: "8px", fontWeight: "400" }}>
                  Waiting for Data
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom__div__section__area">
        <div className="bottom__div_items">
          <div className="top__icon__section">
            <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
          </div>
          <h4>Top Combo Items</h4>

          <div className="mid__sections__img">
            <img
              src="https://cdn0.iconfinder.com/data/icons/flat-field-mono-folder-icon-set/512/folder_no_access-512.png"
              alt=""
            />

            <h5>I have no data yet</h5>
          </div>
        </div>
        <div className="bottom__div_items">
          <div className="top__icon__section">
            <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
          </div>
          <h4>Top Customers</h4>

          <div className="mid__sections__img">
            <img
              src="https://cdn0.iconfinder.com/data/icons/flat-field-mono-folder-icon-set/512/folder_no_access-512.png"
              alt=""
            />

            <h5>I have no data yet</h5>
          </div>
        </div>
        <div className="bottom__div_items">
          <div className="top__icon__section">
            <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
          </div>
          <h4>Top Modifiers</h4>

          <h2>Wheat</h2>
          <h4 style={{ textDecoration: "none" }}>100.00 Sold</h4>
          <hr />
          <ol>
            <li>
              <div className="inner__li">
                <h5>Whole Wheat</h5> <h5>500 sold</h5>{" "}
              </div>
            </li>
          </ol>
        </div>
        <div className="bottom__div_items">
          <div className="top__icon__section">
            <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
          </div>
          <h4>Table Wise Sales Report</h4>

          <div className="detail__sections">
            <h2>Table 1</h2>
            <h5>OMR : 100.000</h5>
          </div>
        </div>
        <div className="bottom__div_items">
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
        <div className="bottom__div_items">
          <div className="top__icon__section">
            <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
          </div>
          <h4>Top Paid Modifiers</h4>

          <h2>Wheat</h2>
          <h4 style={{ textDecoration: "none" }}>100.00 Sold</h4>
          <hr />
          <ol>
            <li>
              <div className="inner__li">
                <h5>Whole Wheat</h5> <h5>500 sold</h5>{" "}
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Marketting;
