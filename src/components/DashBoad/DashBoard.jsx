import React, { useEffect, useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import "./dashboad.scss";
import DashboadSales from "./DashboardSales/DashboadSales";
import Marketting from "./Marketing/Marketting";
import DashBoadInventory from "./DashBoadInventory/DashBoadInventory";
import BussinessSummary from "./bussiness summary/BussinessSummary";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const masterCategiry = [
  {
    id: 0,
    name: "Sales",
  },
  {
    id: 1,
    name: "Marketing",
  },

  {
    id: 2,
    name: "Inventory",
  },

  {
    id: 3,
    name: "Bussiness Summary",
  },
];

function DashBoard() {
  const [dateTimePopup, setDateTimePopup] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const [categoryID, setCategoryID] = useState("");
  const [subCategoryCss, setSubCategoryCss] = useState("firstValue");
  const [selCategory, setSelCategory] = useState(masterCategiry);

  const [clickedSubCategory, setClickedSubCategory] = useState(
    selCategory[0].name
  );

  // mui dropdown
  const [selectedDropdown, setSelectedDropdown] = useState("All Order Type");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStartDate = (date) => {
    setStartDate(date);
    setToDate(null);
  };

  const handleToDate = (date) => {
    setToDate(date);
  };

  useEffect(() => {
    setSelCategory(masterCategiry);
    setClickedSubCategory(masterCategiry[0].name);
  }, []);

  // first section needed

  console.log(startDate, toDate);

  return (
    <div className="DashBoard">
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
        <div className="headder__div__section">
          {dateTimePopup && (
            <div className="date__popup__section">
              <div className="DATE__SECTION__WRAPPER">
                <div className="left__date dateSectionss">
                  <h4>From Date</h4>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => handleStartDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    isClearable
                    placeholderText="DD/MM/YYYY"
                  />
                </div>
                <div className="right__date dateSectionss">
                  <h4>To Date</h4>
                  <DatePicker
                    selected={toDate}
                    onChange={(date) => handleToDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    minDate={startDate}
                    isClearable
                    placeholderText="DD/MM/YYYY"
                  />
                </div>
              </div>
              <div className="BTN__SECTIONS">
                <button className="apply__btn">Apply</button>
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
                    handleClose();
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
                    handleClose();
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

        {clickedSubCategory === "Sales" && <DashboadSales />}
        {clickedSubCategory === "Marketing" && <Marketting />}
        {clickedSubCategory === "Inventory" && <DashBoadInventory />}
        {clickedSubCategory === "Bussiness Summary" && <BussinessSummary />}
      </div>
    </div>
  );
}

export default DashBoard;
