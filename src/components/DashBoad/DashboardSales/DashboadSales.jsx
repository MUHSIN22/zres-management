import React, { Fragment, useEffect, useState } from "react";
import "./dashboadSales.scss";

import LineChartSection from "./charts/LineChart";
import PieChartSection from "./charts/PieChartSection";
import SummarizeIcon from "@mui/icons-material/Summarize";
import HourlyBreakdown from "./hourly breakdown By Orders/HourlyBreakdown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoughNutChart from "./charts/doughNutChart";

import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalFolderOption from "../Modal/ModalFolderOption";
import { dashboardServices } from "../../../Services/DashboardServices";

function DashboadSales() {
  const [hourlyBreakdown, setHourlyBreakdown] = useState(false);
  const [open, setOpen] = useState(false);
  const [topGrossingItems, setTopGrossingItems] = useState([])
  const [topSellingItems, setTopSellingItems] = useState([])
  const [chartOfSales, setChartOfSales] = useState([
    { name: "Sales", value: 0 },
    { name: "Purchase", value: 0 },
    { name: "Gross Profit", value: 0 },
  ])

  useEffect(() => {
    dashboardServices.getChartOfSales()
      .then(res => {
        setChartOfSales([
          { name: "Sales", value: res[0].Sale },
          { name: "Purchase", value:  res[0].Purchase },
          { name: "Gross Profit", value:  res[0].GrossProfit },
        ])
      })

    // Get top Grossing Items
    dashboardServices.getTopGrossingItems()
      .then(res => setTopGrossingItems(res))
      .catch(err => console.log(err))

    // Get top Selling items
    dashboardServices.getTopSellingItems()
      .then(data => setTopSellingItems(data))
      .catch(err => console.log(err))
  }, [])

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="dashboard-sales-container">
      <div className="modal__popup">
        {open && (
          <ModalFolderOption setOpen={setOpen} handleClose={handleClose} />
        )}
      </div>

      {/* line chart */}

      {/* {hourlyBreakdown ? (
          <div className="hourly__breakdown">
          <div className="headding__and__back__section">
            <ArrowBackIcon onClick={() => setHourlyBreakdown(false)} />
            <h2>Hourly BreakDown By Orders</h2>
          </div>
          <HourlyBreakdown />
        </div>
        ):null} */}
      <div className="lineChart__section">
        <LineChartSection />
      </div>

      {/* anouncement totla sate ect */}
      <div className="gridBox grid__item__1 anoumcementSection">
        <div className="top__icon__section" onClick={handleOpen}>
          <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
        </div>
        <h4>Announcement</h4>
        <div className="post__section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="47.883"
            viewBox="0 0 51 47.883"
          >
            <g id="surface1" transform="translate(-4 -6)">
              <path
                id="Path_3133"
                data-name="Path 3133"
                d="M18.136,34.231H15V29h5.231l.521,1.962A2.671,2.671,0,0,1,18.136,34.231Z"
                transform="translate(3.385 7.077)"
                fill="#90caf9"
              />
              <path
                id="Path_3134"
                data-name="Path 3134"
                d="M42.538,44.615S27.107,35.462,19,35.462V17.154C26.586,17.154,42.538,8,42.538,8Z"
                transform="translate(4.615 0.615)"
                fill="#90caf9"
              />
              <path
                id="Path_3135"
                data-name="Path 3135"
                d="M17.077,23.538A6.538,6.538,0,1,1,10.538,17,6.538,6.538,0,0,1,17.077,23.538Z"
                transform="translate(0 3.385)"
                fill="#283593"
              />
              <path
                id="Path_3136"
                data-name="Path 3136"
                d="M40.923,19H37v7.846h3.923a3.923,3.923,0,0,0,0-7.846Z"
                transform="translate(10.154 4)"
                fill="#283593"
              />
              <path
                id="Path_3137"
                data-name="Path 3137"
                d="M21.8,46.047a13.637,13.637,0,0,1-6.017,1.834,1.673,1.673,0,0,1-1.829-1.308L8.2,28.654s11.509-8.107,11.509,1.441c0,7.192,1.962,10.983,2.876,12.423a2.553,2.553,0,0,1,0,3.009A2.672,2.672,0,0,1,21.8,46.047Z"
                transform="translate(1.292 5.982)"
                fill="#283593"
              />
              <path
                id="Path_3138"
                data-name="Path 3138"
                d="M9.615,33.308H22.692V15H9.615A2.62,2.62,0,0,0,7,17.615V30.692A2.62,2.62,0,0,0,9.615,33.308Z"
                transform="translate(0.923 2.769)"
                fill="#3f51b5"
              />
              <path
                id="Path_3139"
                data-name="Path 3139"
                d="M38.615,47.846A2.62,2.62,0,0,1,36,45.231V8.615a2.615,2.615,0,0,1,5.231,0V45.231A2.62,2.62,0,0,1,38.615,47.846Z"
                transform="translate(9.846)"
                fill="#42a5f5"
              />
            </g>
          </svg>

          <input type="text" />
          <button>Post</button>
        </div>

        <div className="post__detail__section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80.068"
            height="80"
            viewBox="0 0 123.068 126"
          >
            <g
              id="Group_2524"
              data-name="Group 2524"
              transform="translate(-503 -966)"
            >
              <g id="surface1" transform="translate(502 1019.273)">
                <path
                  id="Path_3140"
                  data-name="Path 3140"
                  d="M1.5,7.937A6.969,6.969,0,0,1,7.937,1.5H63.111a6.969,6.969,0,0,1,6.437,6.437V55.755a6.969,6.969,0,0,1-6.437,6.437H11.285L1.5,70.346Z"
                  transform="translate(0.42 0.42)"
                  fill="#98ccfd"
                />
                <path
                  id="Path_3141"
                  data-name="Path 3141"
                  d="M63.531,2.839a6.066,6.066,0,0,1,5.517,5.517V56.174a6.066,6.066,0,0,1-5.517,5.517H11.367l-.51.424L2.839,68.8V8.357A6.066,6.066,0,0,1,8.357,2.839H63.531m0-1.839H8.357A7.911,7.911,0,0,0,1,8.357v64.37l11.035-9.2h51.5a7.911,7.911,0,0,0,7.357-7.357V8.357A7.911,7.911,0,0,0,63.531,1Z"
                  fill="#4788c7"
                />
                <path
                  id="Path_3142"
                  data-name="Path 3142"
                  d="M24.54,10.376a3.118,3.118,0,1,1-3.118-3.118A3.121,3.121,0,0,1,24.54,10.376Z"
                  transform="translate(14.521 5.251)"
                  fill="#fff"
                />
                <path
                  id="Path_3143"
                  data-name="Path 3143"
                  d="M24.357,35.07V13H17v3.678h3.678V35.07H17v3.678H28.035V35.07Z"
                  transform="translate(13.426 10.07)"
                  fill="#fff"
                />
              </g>
              <g
                id="surface1-2"
                data-name="surface1"
                transform="translate(576 963)"
              >
                <path
                  id="Path_3144"
                  data-name="Path 3144"
                  d="M26.779,10.78l-13,16.254H25.644a1.7,1.7,0,0,1,1.695,1.695v1.695a1.7,1.7,0,0,1-1.695,1.695H8.695A1.7,1.7,0,0,1,7,30.424v-2.5a2.518,2.518,0,0,1,.559-1.586l13-16.254H8.695A1.7,1.7,0,0,1,7,8.39V6.695A1.7,1.7,0,0,1,8.695,5H25.644a1.7,1.7,0,0,1,1.695,1.695v2.5a2.6,2.6,0,0,1-.162.89A2.458,2.458,0,0,1,26.779,10.78Z"
                  transform="translate(-0.153 -0.305)"
                  fill="#85cbf8"
                />
                <path
                  id="Path_3145"
                  data-name="Path 3145"
                  d="M52.254,25H38.695A1.694,1.694,0,0,0,37,26.695V28.39a1.694,1.694,0,0,0,1.695,1.695h8.475L37.612,41.234A2.55,2.55,0,0,0,37,42.889v2.45a1.694,1.694,0,0,0,1.695,1.695H52.254a1.694,1.694,0,0,0,1.695-1.695V43.644a1.694,1.694,0,0,0-1.695-1.695H43.78L53.337,30.8a2.551,2.551,0,0,0,.612-1.655v-2.45A1.694,1.694,0,0,0,52.254,25Z"
                  transform="translate(-4.729 -3.356)"
                  fill="#85cbf8"
                />
                <path
                  id="Path_3146"
                  data-name="Path 3146"
                  d="M17.847,46.39h6.78l-7.193,7.991A1.7,1.7,0,0,0,17,55.513v1.894a.849.849,0,0,0,.847.847H28.017a.849.849,0,0,0,.847-.847V55.712a.849.849,0,0,0-.847-.847h-6.78l7.193-7.991a1.7,1.7,0,0,0,.434-1.132V43.847A.849.849,0,0,0,28.017,43H17.847a.849.849,0,0,0-.847.847v1.695A.849.849,0,0,0,17.847,46.39Z"
                  transform="translate(-1.678 -6.102)"
                  fill="#85cbf8"
                />
                <path
                  id="Path_3147"
                  data-name="Path 3147"
                  d="M24.8,5a5.086,5.086,0,0,1-5.085,5.085H7V5Z"
                  transform="translate(-0.153 -0.305)"
                  fill="#9fddff"
                />
                <path
                  id="Path_3148"
                  data-name="Path 3148"
                  d="M28.407,36.085H19.085A5.086,5.086,0,0,1,14,31H28.407Z"
                  transform="translate(-1.22 -4.271)"
                  fill="#7bbeeb"
                />
                <path
                  id="Path_3149"
                  data-name="Path 3149"
                  d="M47.169,30.085H38.695A1.694,1.694,0,0,1,37,28.39V26.695A1.694,1.694,0,0,1,38.695,25H52.254A5.086,5.086,0,0,1,47.169,30.085Z"
                  transform="translate(-4.729 -3.356)"
                  fill="#9fddff"
                />
                <path
                  id="Path_3150"
                  data-name="Path 3150"
                  d="M53.322,50.085H49.085A5.086,5.086,0,0,1,44,45h9.322a1.694,1.694,0,0,1,1.695,1.695V48.39A1.694,1.694,0,0,1,53.322,50.085Z"
                  transform="translate(-5.797 -6.407)"
                  fill="#7bbeeb"
                />
                <path
                  id="Path_3151"
                  data-name="Path 3151"
                  d="M24.627,46.39H17V43H28.017A3.388,3.388,0,0,1,24.627,46.39Z"
                  transform="translate(-1.678 -6.102)"
                  fill="#9fddff"
                />
                <path
                  id="Path_3152"
                  data-name="Path 3152"
                  d="M29.475,60.39H24.39A3.388,3.388,0,0,1,21,57h8.475Z"
                  transform="translate(-2.288 -8.237)"
                  fill="#7bbeeb"
                />
                <path
                  id="Path_3153"
                  data-name="Path 3153"
                  d="M25.492,4H8.542A2.547,2.547,0,0,0,6,6.542V8.237A2.547,2.547,0,0,0,8.542,10.78h10.1L6.742,25.657A3.416,3.416,0,0,0,6,27.775v2.5a2.547,2.547,0,0,0,2.542,2.542H25.492a2.547,2.547,0,0,0,2.542-2.542V28.576a2.547,2.547,0,0,0-2.542-2.542h-10.1l11.9-14.877a3.416,3.416,0,0,0,.742-2.119v-2.5A2.547,2.547,0,0,0,25.492,4Zm.847,5.038a1.7,1.7,0,0,1-.371,1.059l-13,16.254a.847.847,0,0,0,.662,1.377H25.492a.849.849,0,0,1,.847.847v1.695a.849.849,0,0,1-.847.847H8.542a.849.849,0,0,1-.847-.847v-2.5a1.7,1.7,0,0,1,.371-1.059l13-16.254a.847.847,0,0,0-.662-1.377H8.542a.849.849,0,0,1-.847-.847V6.542a.849.849,0,0,1,.847-.847H25.492a.849.849,0,0,1,.847.847Z"
                  transform="translate(0 -0.153)"
                  fill="#8d6c9f"
                />
                <path
                  id="Path_3154"
                  data-name="Path 3154"
                  d="M54.644,28.992v-2.45A2.547,2.547,0,0,0,52.1,24H38.542A2.547,2.547,0,0,0,36,26.542v1.695a2.547,2.547,0,0,0,2.542,2.542h6.631l-8.355,9.752a3.389,3.389,0,0,0-.818,2.2v2.45a2.547,2.547,0,0,0,2.542,2.542H52.1a2.547,2.547,0,0,0,2.542-2.542V43.492A2.547,2.547,0,0,0,52.1,40.949H45.471L53.826,31.2A3.388,3.388,0,0,0,54.644,28.992Zm-1.695,0a1.7,1.7,0,0,1-.407,1.1L42.985,41.247a.847.847,0,0,0,.642,1.4H52.1a.849.849,0,0,1,.847.847v1.695a.849.849,0,0,1-.847.847H38.542a.849.849,0,0,1-.847-.847v-2.45a1.7,1.7,0,0,1,.407-1.1l9.557-11.153a.847.847,0,0,0-.642-1.4H38.542a.849.849,0,0,1-.847-.847V26.542a.849.849,0,0,1,.847-.847H52.1a.849.849,0,0,1,.847.847Z"
                  transform="translate(-4.576 -3.203)"
                  fill="#8d6c9f"
                />
                <path
                  id="Path_3155"
                  data-name="Path 3155"
                  d="M27.864,42H17.695A1.7,1.7,0,0,0,16,43.695V45.39a1.7,1.7,0,0,0,1.695,1.695h4.876l-5.919,6.578a2.534,2.534,0,0,0-.652,1.7v1.89a1.7,1.7,0,0,0,1.695,1.695H27.864a1.7,1.7,0,0,0,1.695-1.695V55.559a1.7,1.7,0,0,0-1.695-1.695H22.988l5.919-6.578a2.541,2.541,0,0,0,.652-1.7v-1.89A1.7,1.7,0,0,0,27.864,42Zm0,3.585a.838.838,0,0,1-.218.569l-7.19,7.991a.846.846,0,0,0,.629,1.414h6.78v1.695H17.695v-1.89a.838.838,0,0,1,.218-.569L25.1,46.8a.846.846,0,0,0-.629-1.414h-6.78V43.695H27.864Z"
                  transform="translate(-1.525 -5.949)"
                  fill="#8d6c9f"
                />
                <path
                  id="Path_3156"
                  data-name="Path 3156"
                  d="M36.847,4.695h1.695a.847.847,0,1,0,0-1.695H36.847a.847.847,0,0,0,0,1.695Z"
                  transform="translate(-4.576)"
                  fill="#8d6c9f"
                />
                <path
                  id="Path_3157"
                  data-name="Path 3157"
                  d="M36.847,9.695h1.695a.847.847,0,0,0,0-1.695H36.847a.847.847,0,0,0,0,1.695Z"
                  transform="translate(-4.576 -0.763)"
                  fill="#8d6c9f"
                />
                <path
                  id="Path_3158"
                  data-name="Path 3158"
                  d="M36.847,14.695h1.695a.847.847,0,0,0,0-1.695H36.847a.847.847,0,0,0,0,1.695Z"
                  transform="translate(-4.576 -1.525)"
                  fill="#8d6c9f"
                />
                <path
                  id="Path_3159"
                  data-name="Path 3159"
                  d="M36.847,19.695h1.695a.847.847,0,1,0,0-1.695H36.847a.847.847,0,1,0,0,1.695Z"
                  transform="translate(-4.576 -2.288)"
                  fill="#8d6c9f"
                />
                <path
                  id="Path_3160"
                  data-name="Path 3160"
                  d="M10.542,44H8.847a.847.847,0,1,0,0,1.695h1.695a.847.847,0,0,0,0-1.695Z"
                  transform="translate(-0.305 -6.254)"
                  fill="#8d6c9f"
                />
                <path
                  id="Path_3161"
                  data-name="Path 3161"
                  d="M10.542,49H8.847a.847.847,0,1,0,0,1.695h1.695a.847.847,0,0,0,0-1.695Z"
                  transform="translate(-0.305 -7.017)"
                  fill="#8d6c9f"
                />
                <path
                  id="Path_3162"
                  data-name="Path 3162"
                  d="M10.542,54H8.847a.847.847,0,1,0,0,1.695h1.695a.847.847,0,1,0,0-1.695Z"
                  transform="translate(-0.305 -7.78)"
                  fill="#8d6c9f"
                />
                <path
                  id="Path_3163"
                  data-name="Path 3163"
                  d="M10.542,59H8.847a.847.847,0,0,0,0,1.695h1.695a.847.847,0,1,0,0-1.695Z"
                  transform="translate(-0.305 -8.542)"
                  fill="#8d6c9f"
                />
              </g>
            </g>
          </svg>

          <p>I have no announcement</p>
        </div>
      </div>

      <div className="total-sales">
        <div className="top__icon__section">
          <FontAwesomeIcon
            style={{ color: "#fdc307" }}
            icon={faFolder}
            onClick={handleOpen}
          />
        </div>

        <h4 style={{ marginBottom: "20px" }}>Total Sales</h4>

        <h4 style={{ textDecoration: "none", marginRight: "30%" }}>
          OMR
        </h4>

        <h2>10000</h2>
      </div>

      <div className="modification-and-reprint">
        <div className="top__icon__section">
          <FontAwesomeIcon
            style={{ color: "#fdc307" }}
            icon={faFolder}
            onClick={handleOpen}
          />
        </div>
        <h4 style={{ marginBottom: "20px" }}>
          Modification and Reprint
        </h4>

        <h2>0</h2>
      </div>


      {/* Chart of sales */}
      <div className="gridBox grid__item__4">
        <div className="top__icon__section">
          <FontAwesomeIcon
            style={{ color: "#fdc307" }}
            icon={faFolder}
            onClick={handleOpen}
          />
        </div>

        <h4 style={{ marginBottom: "10px" }}>Chart of Sales</h4>

        <div className="" style={{ width: "100%", height: "100%" }}>
          <DoughNutChart chartOfSales={chartOfSales} />
        </div>
      </div>

      <div className="gridBox grid__item__1 order-by-location">
        <div className="top__icon__section">
          <FontAwesomeIcon
            style={{ color: "#fdc307" }}
            icon={faFolder}
            onClick={handleOpen}
          />
        </div>

        <h4>Order By Location</h4>
        <div className="pie__char__section__dashboads">
          <PieChartSection />
        </div>
      </div>

      <div className="gridBox grid__item__1 top-selling-items">
        <div className="top__icon__section">
          <FontAwesomeIcon
            style={{ color: "#fdc307" }}
            icon={faFolder}
            onClick={handleOpen}
          />
        </div>

        <h4>Top Selling Item</h4>

        {
          topSellingItems[0]&&
          <Fragment>
            <h2>{topSellingItems[0].ItemName}</h2>
            <h4>{topSellingItems[0].NoOfSales} Sold</h4>
          </Fragment>
        }
        <hr />
        <ol>
          {
            topSellingItems.map((item, index) => (
              <li>
                <div className="inner__li">
                  <h5>{item.ItemName}</h5> <h5>{item.NoOfSales} sold</h5>{" "}
                </div>
              </li>
            ))
          }

        </ol>
      </div>

      <div className="gridBox grid__item__1 sales-by-location">
        <div className="top__icon__section">
          <FontAwesomeIcon
            style={{ color: "#fdc307" }}
            icon={faFolder}
            onClick={handleOpen}
          />
        </div>

        <h4>Sales By Location</h4>
        <div className="pie__char__section__dashboads">
          <PieChartSection />
        </div>
      </div>


      <div className="div__area__section div__section__one staff-wise-report">
        <div className="top__icon__section">
          <FontAwesomeIcon
            style={{ color: "#fdc307" }}
            icon={faFolder}
            onClick={handleOpen}
          />
        </div>
        <h4>Staff Wise Report</h4>
        <div className="details__sectons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42.558"
            height="97.887"
            viewBox="0 0 42.558 97.887"
          >
            <g id="surface1" transform="translate(-14.883 -1.984)">
              <path
                id="Path_3174"
                data-name="Path 3174"
                d="M36.158,1.984A10.642,10.642,0,1,0,46.8,12.626,10.673,10.673,0,0,0,36.158,1.984Zm0,4.257a6.385,6.385,0,1,1-6.385,6.385A6.351,6.351,0,0,1,36.158,6.241Zm0,19.155A21.3,21.3,0,0,0,14.883,46.671v20.6l7.483,2.991,1.559,29.612H48.4l1.55-29.612,7.491-2.991v-20.6A21.307,21.307,0,0,0,36.158,25.4Zm-2.128,4.391v1.986h4.257V29.787a17,17,0,0,1,14.9,16.884V64.385l-7.34,2.941-1.491,28.3H27.963l-1.491-28.3-7.34-2.941V46.671A17,17,0,0,1,34.029,29.787Zm0,4.114V55.184h4.257V33.9Z"
                transform="translate(0 0)"
                fill="#040153"
              />
            </g>
          </svg>

          <h3>Amer Shan</h3>
          <h4>OMR 97.680</h4>
        </div>
      </div>


      <div
        className="mid__chid__section top__mid__section hourly-breakdown-card"
        onClick={() => setHourlyBreakdown(true)}
      >
        <div className="top__icon__section">
          <FontAwesomeIcon
            style={{ color: "#fdc307" }}
            icon={faFolder}
            onClick={handleOpen}
          />
        </div>
        <div className="inner__section__contaier">
          <SummarizeIcon />
          <h3>Hourly Breakdown Report</h3>
        </div>
      </div>


      <div className="mid__chid__section mid__mid__section cancelled-orders">
        <div className="top__icon__section">
          <FontAwesomeIcon
            style={{ color: "#fdc307" }}
            icon={faFolder}
            onClick={handleOpen}
          />
        </div>

        <h4>Cancelled Orders</h4>
        <div className="inner__section__contaier">
          <h2>0</h2>
          <h5>OMR 0.000</h5>
        </div>
      </div>


      <div className="mid__chid__section bottom__mid__section total-orders">
        <div className="top__icon__section">
          <FontAwesomeIcon
            style={{ color: "#fdc307" }}
            icon={faFolder}
            onClick={handleOpen}
          />
        </div>

        <h4>Total Orders</h4>
        <div className="inner__section__contaier">
          <h2>50</h2>
          <h5>OMR 50.000</h5>
        </div>
      </div>

      <div className="div__area__section div__dection__two top-grossing-items">
        <div className="top__icon__section__details">
          <FontAwesomeIcon
            style={{ color: "#fdc307" }}
            icon={faFolder}
            onClick={handleOpen}
          />
        </div>
        <h4>Top Grossing Items</h4>
        {
          topGrossingItems[0] &&
          <>
            <h2>{topGrossingItems[0].ItemName}</h2>
            <h4>{topGrossingItems[0].NoOfSales} Sold</h4>
          </>
        }
        <hr />
        <ol>
          {
            topGrossingItems.map((item, index) => (
              <li key={index}>
                <div className="inner__li">
                  <h5>{item.ItemName}</h5> <h5>{item.NoOfSales} sold</h5>{" "}
                </div>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  );
}

export default DashboadSales;
