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
import { dashboardServices } from "../../Services/DashboardServices";

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
  const [startDate, setStartDate] = useState(new Date().toDateString());
  const [toDate, setToDate] = useState(new Date().toISOString());

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
  const handleClose = (type) => {
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
        {/* dashboard items appears below on clicking sub categories */}
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoard;
