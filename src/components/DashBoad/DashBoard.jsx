import React, { useContext, useEffect, useState } from "react";
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
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { EssentialContext } from "../../Data manager/EssentialContext";

const masterCategiry = [
  {
    id: 0,
    name: "Sales",
    link: 'sales'
  },
  {
    id: 1,
    name: "Marketing",
    link: 'marketing'
  },

  {
    id: 2,
    name: "Inventory",
    link: 'inventory'
  },

  {
    id: 3,
    name: "Bussiness Summary",
    link: 'bussiness-summary'
  },
];

function DashBoard() {
  const navigate = useNavigate();
  const [dateTimePopup, setDateTimePopup] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const [categoryID, setCategoryID] = useState("");
  const [subCategoryCss, setSubCategoryCss] = useState("firstValue");
  const [selCategory, setSelCategory] = useState(masterCategiry);
  const [activeSubCategory, setActiveSubCategory] = useState(0)
  const [clickedSubCategory, setClickedSubCategory] = useState(
    selCategory[0].name
  );

  // mui dropdown
  const [selectedDropdown, setSelectedDropdown] = useState("All Order Type");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [essentialData,setEssentialData] = useContext(EssentialContext);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStartDate = (date) => {
    setStartDate(date);
    setEssentialData({...essentialData,dashboardFromDate:date})
  };

  const handleToDate = (date) => {
    setToDate(date);
    setEssentialData({...essentialData,dashboardToDate:date})
  };

  // To handle the clicking on the subcategory [sales,marketing,inventory,bussiness summary]
  const handleSubCategory = (itemId) => {
    setActiveSubCategory(itemId);
  }

  const checkActiveLink = () => {
    let paths = window.location.pathname.split('/');

    switch (paths[paths.length - 1] === "" ? paths[paths.length - 2] : paths[paths.length - 1]) {
      case "sales":
        setActiveSubCategory(0);
        break;
      case "marketing":
        setActiveSubCategory(1);
        break;
      case 'inventory':
        setActiveSubCategory(2);
        break;
      case 'bussiness-summary':
        setActiveSubCategory(3);
        break;
      default:
        return 0
    }

    setEssentialData({...essentialData,dashboardFromDate: new Date().toISOString()})
    setEssentialData({...essentialData,dashboardToDate: new Date().toISOString()})
    console.log(new Date().toISOString());
  }

  useEffect(() => {
    let paths = window.location.pathname.split('/');
    if (paths[paths.length - 1] === "dashboard") {
      navigate('/mainPage/dashboard/sales')
    }
    checkActiveLink()
  }, []);

  return (
    <div className="DashBoard">
      <div className="top__category__section">
        {/*top category section  */}
        <div className="hedder__category">
          {
            selCategory.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className={"option__box " + (item.id === activeSubCategory ? "active-category": null)}
                onClick={() => {handleSubCategory(item.id)}}
              >{item.name}</Link>
            ))
          }
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

        {/* dashboard items appears below on clicking sub categories */}
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoard;
