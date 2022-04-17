import React, { useEffect, useState, useContext } from "react";
import "./dashboadInventory.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import PieChartSection from "../DashboardSales/charts/PieChartSection";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dashboardServices } from "../../../Services/DashboardServices";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { EssentialContext } from "../../../Data manager/EssentialContext";

function DashBoadInventory() {
  const [inventory, setInventory] = useState();
  const [dateTimePopup, setDateTimePopup] = useState(false);
  const [startDate, setStartDate] = useState(new Date().toDateString());
  const [toDate, setToDate] = useState(new Date().toISOString());

  // mui dropdown
  const [selectedDropdown, setSelectedDropdown] = useState("All Order Type");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [essentialData, setEssentialData] = useContext(EssentialContext);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (type) => {
    setAnchorEl(null);
    dashboardServices.getFilteredInventory(startDate, toDate, type)
      .then(data => setInventory(data))
      .catch(err => console.log(err))
  };

  const handleFilter = () => {
    dashboardServices.getFilteredInventory(startDate,toDate)
      .then(data => setInventory(data))
      .catch(err => console.log(err))
      setDateTimePopup(!dateTimePopup)
  }

  const handleStartDate = (date) => {
    setStartDate(date);
    setEssentialData({ ...essentialData, dashboardFromDate: date })
  };

  const handleToDate = (date) => {
    setToDate(date);
    setEssentialData({ ...essentialData, dashboardToDate: date })
  };
  useEffect(() => {
    dashboardServices.getAllInventory()
      .then(res => setInventory(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="headder__div__section">
        {dateTimePopup && (
          <div className="date__popup__section">
            <div className="DATE__SECTION__WRAPPER">
              <div className="left__date dateSectionss">
                <h4>From Date</h4>
                <DatePicker
                  selected={moment(startDate).toDate()}
                  onChange={(date) => handleStartDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                  isClearable
                  placeholderText="DD/MM/YYYY"
                />
              </div>
              <div className="right__date dateSectionss">
                <h4>To Date</h4>
                <DatePicker
                  selected={moment(toDate).toDate()}
                  onChange={(date) => handleToDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                  minDate={startDate}
                  isClearable
                  placeholderText="DD/MM/YYYY"
                />
              </div>
            </div>
            <div className="BTN__SECTIONS">
              <button className="apply__btn" onClick={handleFilter}>Apply</button>
              <button onClick={() => setDateTimePopup(!dateTimePopup)}>
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="left__side__type">
          {/* <select name="" id="">
              <option value="">All Order Types</option>
              <option value=""></option>
              <option value=""></option>
            </select> */}

          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="secondary"
              variant="contained"
            >
              {selectedDropdown}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                disabled={
                  selectedDropdown === "All Order Type" && ("true" || "false")
                }
                defaultValue=""
                onClick={() => {
                  handleClose();
                  setSelectedDropdown("All Order Type");
                }}
              >
                All Order Type
              </MenuItem>
              <MenuItem
                disabled={
                  selectedDropdown === "WalkIn" && ("true" || "false")
                }
                onClick={() => {
                  handleClose('WalkIn');
                  setSelectedDropdown("WalkIn");
                }}
              >
                WalkIn
              </MenuItem>
              <MenuItem
                disabled={
                  selectedDropdown === "DineIn" && ("true" || "false")
                }
                onClick={() => {
                  handleClose('DineIn');
                  setSelectedDropdown("DineIn");
                }}
              >
                DineIn
              </MenuItem>
            </Menu>
          </div>
        </div>

        <div className="right___side__date__section">
          <CalendarTodayIcon />
          <h5>Today:</h5>
          <h5>
            {" "}
            {startDate === null ? " " : moment(startDate).format("LL")} -
            {toDate === null ? "" : moment(toDate).format("LL")}{" "}
          </h5>

          <KeyboardArrowDownIcon
            style={{ cursor: "pointer" }}
            onClick={() => setDateTimePopup(!dateTimePopup)}
          />
        </div>
      </div>
      {
        inventory &&
        <div className="DashBoadInventory">
          <div className="DashBoadInventory__top__headder__div__section">
            <div className="left__section__wrapper">
              <div className="diff__Section__in__left">
                <div className="top__icon__section">
                  <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} onClick={() => console.log(inventory)} />
                </div>

                <h4>Stock on Hand</h4>
                <div className="detail__sections">
                  <h5 style={{ marginRight: "20%" }}>OMR</h5>
                  <h2>{inventory.StockOnHand[0].Amount}</h2>
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
                  <h2>{inventory.TotalPurchase[0].TotalPurchase}</h2>
                </div>
              </div>
              <div className="diff__Section__in__left">
                <div className="top__icon__section">
                  <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
                </div>
                <h4>Stock takes</h4>
                <div className="detail__sections">
                  <h5 style={{ marginRight: "20%" }}>OMR</h5>
                  <h2>{inventory.StockTakes[0].StockTakes}</h2>
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
              {
                inventory.TopProfitableItem[0] ?
                  <>
                    <h2>{inventory.TopProfitableItem[0].ItemName}</h2>
                    <h4 style={{ textDecoration: "none" }}>{inventory.TopProfitableItem[0].GrossProfit} Sold</h4>
                    <hr />
                    <ol>
                      {
                        inventory.TopProfitableItem.map((item, index) => (
                          <li key={index}>
                            <div className="inner__li">
                              <h5>{item.ItemName}</h5> <h5>{item.GrossProfit} sold</h5>{" "}
                            </div>
                          </li>
                        ))
                      }
                    </ol>
                  </>
                  :
                  <div className="detail__sections">
                    <img
                      src="https://cdn0.iconfinder.com/data/icons/flat-field-mono-folder-icon-set/512/folder_no_access-512.png"
                      alt=""
                    />

                    <p>I have no data yet</p>
                  </div>
              }
            </div>
            <div className="dashboadInentory__right_section">
              <div className="dashboadInventory__right__in__Section">
                <div className="top__icon__section">
                  <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
                </div>
                <h4>Low Stock - Ingredients</h4>
                {
                  inventory.LowStockIngredient[0] ?
                    <ol>
                      {
                        inventory.LowStockIngredient.map((item, index) => (
                          <li key={index}>
                            <div className="inner__li">
                              <h5>{item.LowStockIngredient}</h5>{" "}
                            </div>
                          </li>
                        ))
                      }
                    </ol>
                    :
                    <div className="detail__sections">
                      <img
                        src="https://cdn0.iconfinder.com/data/icons/flat-field-mono-folder-icon-set/512/folder_no_access-512.png"
                        alt=""
                      />

                      <p>I have no data yet</p>
                    </div>
                }

              </div>

              <div className="dashboadInventory__right__in__Section">
                <div className="top__icon__section">
                  <FontAwesomeIcon style={{ color: "#fdc307" }} icon={faFolder} />
                </div>
                <h4>Top Inventory Modifier</h4>
                {
                  inventory.TopInventoryModifier[0] ?
                    <>
                      <h2>{inventory.TopInventoryModifier[0].ModifierName}</h2>
                      <h4 style={{ textDecoration: "none" }}>{inventory.TopInventoryModifier[0].Count} Sold</h4>
                      <hr />
                      <ol>
                        {
                          inventory.TopInventoryModifier.map((item, index) => (
                            <li key={index}>
                              <div className="inner__li">
                                <h5>{item.ModifierName}</h5> <h5>{item.Count} sold</h5>{" "}
                              </div>
                            </li>
                          ))
                        }
                      </ol>
                    </>
                    :
                    <div className="detail__sections">
                      <img
                        src="https://cdn0.iconfinder.com/data/icons/flat-field-mono-folder-icon-set/512/folder_no_access-512.png"
                        alt=""
                      />

                      <p>I have no data yet</p>
                    </div>
                }

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
                {
                  inventory.TopPaidModifier[0] ?
                    <>
                      <h2>{inventory.TopPaidModifier[0].ModifierName}</h2>
                      <h4 style={{ textDecoration: "none" }}>{inventory.TopPaidModifier[0].Count} Sold</h4>
                      <hr />
                      <ol>
                        {
                          inventory.TopPaidModifier.map((item, index) => (
                            <li key={index}>
                              <div className="inner__li">
                                <h5>{item.ModifierName}</h5> <h5>{item.Count} sold</h5>{" "}
                              </div>
                            </li>
                          ))
                        }
                      </ol>
                    </>
                    :
                    <div className="detail__sections">
                      <img
                        src="https://cdn0.iconfinder.com/data/icons/flat-field-mono-folder-icon-set/512/folder_no_access-512.png"
                        alt=""
                      />

                      <p>I have no data yet</p>
                    </div>
                }


              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default DashBoadInventory;
