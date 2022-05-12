import React, { useEffect, useState } from "react";
import "./mainPage.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Crm from "../CRM/Crm";
import DeliveryManager from "../Delivery Manager/DeliveryManager";
import {
  useLocation,
  useNavigate,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Inventory from "../Inventory/Inventory";
import Accounts from "../Accounts/Accounts";
import DashBoard from "../DashBoad/DashBoard";
import Walkin from "../Walkin/Walkin";
import DineIn from "../DineIn/DineIn";
import DashboadSales from "../DashBoad/DashboardSales/DashboadSales";
import Marketting from "../DashBoad/Marketing/Marketting";
import DashBoadInventory from "../DashBoad/DashBoadInventory/DashBoadInventory";
import BussinessSummary from "../DashBoad/bussiness summary/BussinessSummary";
import AccountMaster from "../Accounts/Masters/AccountMasters";
import ReportsAccount from "../Accounts/reports/ReportsAccount";
import AccountTransaction from "../Accounts/Transactions/AccountTransaction";
import ChartOfAccountMain from "../Accounts/Chart Of Account/ChartOfAccountMain";
import AccountHead from "../Accounts/Masters/AccountHead/AccountHead";
import AccountGroup from "../Accounts/Masters/AccountGroup/AccountGroup";
import Journals from "../Accounts/Transactions/Journals/Journals";
import DebitNote from "../Accounts/Transactions/Debit note/DebitNote";
import Contra from "../Accounts/Transactions/Contra/Contra";
import SupplyerPayment from "../Accounts/Transactions/Supplyer payment/SupplyerPayment";
import CashRecipt from "../Accounts/Transactions/Cash Recept/CashRecipt";
import CashPayment from "../Accounts/Transactions/Cash Payment/CashPayment";
import OpeningBalance from "../Accounts/Transactions/Opening Balance/OpeningBalance";
import CreditNote from "../Accounts/Transactions/CreditNote/CreditNote";
import Ledger from "../Accounts/reports/Ledger/Ledger";
import CashBook from "../Accounts/reports/Cash Book/CashBook";
import BankBook from "../Accounts/reports/Bank book/BankBook";
import CashFlow from "../Accounts/reports/Cash Flow/CashFlow";
import BalanceSheet from "../Accounts/reports/Balance Sheet/BalanceSheet";
import ProfitAndLose from "../Accounts/reports/Profit and Lose/ProfitAndLose";
import DayBookDetails from "../Accounts/reports/DayBook Details/DayBookDetails";
import TrialBalance from "../Accounts/reports/Trial Balance/TrialBalance";
import AddCustomer from "../CRM/addCustomer/AddCustomer";
import CustomerDetails from "../CRM/customerDetails/CustomerDetails";
import CrmFront from "../CRM/CrmFront";
import Master from '../CRM/../Inventory/Inventory_Master/Master'
import TransactionMaster from '../CRM/../Inventory/Transaction Manager/TransactionMaster'
import MenuManagement from "../Inventory/MenuManagement/MenuManagement";
import RecipeManagement from "../Inventory/recipe management/RecipeManagement";
import ReportSection from "../Inventory/ReportsSection/ReportSection";
import Sms from "../CRM/sms/Sms";
import Personalized from "../CRM/sms/SmsSections/Personalized/Personalized";
import Bulk from "../CRM/sms/SmsSections/Bulk/Bulk";
import StockReport from "../Inventory/Transaction Manager/Reports/StockReport/StockReport";
import StockCost from "../Inventory/Transaction Manager/Reports/Stock Cost/StockCost";
import ClossingStockReport from "../Inventory/Transaction Manager/Reports/clossing Srock Report/ClossingStockReport";
import GpStatement from "../Inventory/Transaction Manager/Gp statement/GpStatement";
import HomeDeliveryOrder from "../Delivery Manager/HomeDeliveryOrder/HomeDeliveryOrder";
import NewOrder from "../Delivery Manager/HomeDeliveryOrder/newOrder/NewOrder";
import WaitingForPicup from '../Delivery Manager/HomeDeliveryOrder/waitingForPicup/WaitingForPicup'
import Delivered from '../Delivery Manager/HomeDeliveryOrder/Delivered/Delivered'
import DeliveryInProgress from '../Delivery Manager/HomeDeliveryOrder/DeliverInProgress/DeliveryInProgress'
import TakeAwayOrders from "../Delivery Manager/TakeAwayOrders/TakeAwayOrders";
import WaitingForCollection from "../Delivery Manager/TakeAwayOrders/waitingForCollection/WaitingForCollection";
import Collected from "../Delivery Manager/TakeAwayOrders/collected/Collected";
import FutureOrder from "../Delivery Manager/FutureOrder/FutureOrder";
import RecipieView from "../Inventory/recipe management/Recipie View/RecipieView";
import RecipeDetails from "../Inventory/recipe management/Recipe Details/RecipeDetails";
import RecipeInventory from "../Inventory/recipe management/Recipie Inventory/RecipeInventory";
import ProductMaster from "../Inventory/Inventory_Master/productMaster/ProductMaster";
import CategoryMaster from "../Inventory/Inventory_Master/CategoryMaster/CategoryMaster";
import MesurementDetails from "../Inventory/Inventory_Master/measurementDetails/MesurementDetails";
import TaxMaster from "../Inventory/Inventory_Master/TaxMater/TaxMaster";

function MainPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [clicked, SetClicked] = useState("Dashboard");
  const [ShrinkNav, setShrikNav] = useState(true);
  const datafromProp = location.state?.detail;
  const [InventoryClick, setInventoryClick] = useState(false);
  const [paths,setPaths] = useState([]);
  // for path locations
  useEffect(() => {
    if (datafromProp) {
      SetClicked(datafromProp);
    }
    setPaths(window.location.pathname.split('/'));
  }, [datafromProp,clicked]);

  const handleBackBtn = () => {
    navigate("./optionSection");
  };

  // useEffect(() => {
  //   SetClicked("inventoryPage");
  // }, [InventoryClick]);

  return (
    <div className="MainPage">
      <div className="more__setting__icon">
        {!ShrinkNav && <ArrowBackIosIcon onClick={() => setShrikNav(true)} />}

        {ShrinkNav && (
          <ArrowForwardIosIcon onClick={() => setShrikNav(false)} />
        )}
      </div>
      <div className={"mainPage__sidenav " + (ShrinkNav && "shrinkNav")}>
        <div className="top__logo__section">
          <div className="back__btn__section">
            <svg
              onClick={handleBackBtn}
              id="reply_black_24dp"
              xmlns="http://www.w3.org/2000/svg"
              width="33.494"
              height="33.494"
              viewBox="0 0 33.494 33.494"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M0,0H33.494V33.494H0Z"
                fill="none"
              />
              <path
                id="Path_2"
                data-name="Path 2"
                d="M12.769,10.582V5L3,14.769l9.769,9.769V18.816c6.978,0,11.862,2.233,15.351,7.117C26.725,18.956,22.538,11.978,12.769,10.582Z"
                transform="translate(1.187 1.978)"
                fill="#fff"
                stroke="#040153"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>

            <h5>Back</h5>
          </div>
          <div className="logo__section">
            <h3>Logo</h3>
          </div>
        </div>
        <div className="mid__main__detail__section">
          <div
            className={
              "detail__section " +
              (paths.includes('dashboard') && "selected__Section")
            }
            onClick={() => {
              SetClicked("Dashboard");
              navigate("/mainPage/dashboard/sales");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.861"
              height="18.861"
              viewBox="0 0 18.861 18.861"
            >
              <g id="surface1" transform="translate(-2.461 -1.473)">
                <path
                  id="Path_93"
                  data-name="Path 93"
                  d="M11.89,1.973a.741.741,0,0,0-.518.212L3.253,8.825l-.027.021L3.2,8.869v0a.742.742,0,0,0,.507,1.287h.742v8.187a1.487,1.487,0,0,0,1.488,1.488h11.91a1.487,1.487,0,0,0,1.488-1.488V10.159h.742a.744.744,0,0,0,.745-.742.755.755,0,0,0-.236-.548l-.012-.009c-.018-.015-.035-.027-.053-.041L17.847,6.63V3.463a.746.746,0,0,0-.745-.745h-.745a.744.744,0,0,0-.742.745V4.8L12.394,2.17A.75.75,0,0,0,11.89,1.973ZM9.66,12.393h4.463v5.954H9.66Z"
                  stroke="#040153"
                  stroke-width="1"
                />
              </g>
            </svg>
            <h5>Dashboard</h5>
          </div>
          <div
            className={
              "detail__section " + (paths.includes("walkin")&& "selected__Section")
            }
            onClick={() => {
              SetClicked("WalkIn");
              navigate("/mainPage/walkin");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.57"
              height="22.496"
              viewBox="0 0 24.57 22.496"
            >
              <path
                id="Path_16"
                data-name="Path 16"
                d="M17.664,6.5c-1.683,0-3.071,1.71-3.071,3.824A3.829,3.829,0,0,0,16.644,13.9l.1.045v7.176h1.843V13.945l.1-.034a3.829,3.829,0,0,0,2.052-3.577c0-2.115-1.376-3.836-3.071-3.836M7.528,10.953,12.442,6.5a.592.592,0,0,0-.614.562V9.874h-.921V7.062a.617.617,0,0,0-1.229,0V9.874H8.757V7.062a.617.617,0,0,0-1.229,0v4.274a2.291,2.291,0,0,0,1.843,2.171v7.615h1.843V13.507a2.291,2.291,0,0,0,1.843-2.171V7.062A.584.584,0,0,0,12.442,6.5ZM24.113,4.25H4.457v18H24.113v-18m0-2.25A2.367,2.367,0,0,1,26.57,4.25v18a2.367,2.367,0,0,1-2.457,2.25H4.457A2.367,2.367,0,0,1,2,22.246v-18A2.367,2.367,0,0,1,4.457,2Z"
                transform="translate(-2 -2)"
              />
            </svg>

            <h5>Walk In</h5>
          </div>

          <div
            className={
              "detail__section " + (paths.includes("dinein") && "selected__Section")
            }
            onClick={() => {
              SetClicked("DineIn");
              navigate("/mainPage/dinein");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="29.5"
              viewBox="0 0 31 29.5"
            >
              <g id="surface1" transform="translate(-1.5 -1.5)">
                <path
                  id="Path_90"
                  data-name="Path 90"
                  d="M15.5,2V5.082C10.461,5.457,7.771,7.643,6.395,9.5H27.6c-1.371-1.857-4.061-4.043-9.1-4.418V2ZM2,12.5v3H3.5A1.5,1.5,0,0,1,5,17v9a4.509,4.509,0,0,0,4.5,4.5h15A4.509,4.509,0,0,0,29,26V17a1.5,1.5,0,0,1,1.5-1.5H32v-3Z"
                  stroke="#040153"
                  stroke-width="1"
                />
              </g>
            </svg>

            <h5>Dine In</h5>
          </div>

          <div
            className={
              "detail__section " + (paths.includes("crm") && "selected__Section")
            }
            onClick={() => {
              SetClicked("CRM");
              navigate("/mainPage/crm");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.386"
              height="20"
              viewBox="0 0 22.386 20"
            >
              <path
                id="Path_92"
                data-name="Path 92"
                d="M8.143,5.926A6.163,6.163,0,0,0,2,12.146a6.117,6.117,0,0,0,1.753,4.366l1.523,1.514a1.687,1.687,0,0,0,1.574,2.3,1.717,1.717,0,0,0,.192-.017,1.678,1.678,0,0,0,1.673,1.883,1.717,1.717,0,0,0,.192-.017,1.678,1.678,0,0,0,1.673,1.883,1.716,1.716,0,0,0,.192-.017,1.688,1.688,0,0,0,2.87,1.389l1.9-1.9a1.75,1.75,0,0,0,.214-.264,1.651,1.651,0,0,0,2.5-1.66,1.63,1.63,0,0,0,1.865-1.865,1.558,1.558,0,0,0,1.389-.477,1.878,1.878,0,0,0,.514-1.223,1.742,1.742,0,0,0-.147-.818l.71-.71a6.26,6.26,0,0,0,0-8.768,6.147,6.147,0,0,0-8.73,0l-.173.173s-.01.006-.015.01-.2.194-.494.478l-.662-.662A6.177,6.177,0,0,0,8.143,5.926Zm10.087.746a5.415,5.415,0,0,1,3.843,1.594,5.571,5.571,0,0,1,1.567,3.88,5.215,5.215,0,0,1-1.6,3.807l-.649.651-3.079-3.078h0l-.752-.751a3.69,3.69,0,0,0-4.56-.536l-1.09.67a2.167,2.167,0,0,1-2.483-.153A.066.066,0,0,1,9.4,12.7a.062.062,0,0,1,.031-.054l.032-.026,2.464-2.068c.751-.63,1.5-1.335,1.922-1.746l.019-.016.061-.06c.171-.166.274-.27.277-.274s.006-.01.01-.015l.173-.173A5.415,5.415,0,0,1,18.23,6.672ZM8.12,6.7a5.336,5.336,0,0,1,3.842,1.6l.646.646c-.351.325-.756.688-1.163,1.029L8.993,12.037a.816.816,0,0,0-.038,1.3,2.914,2.914,0,0,0,3.342.206l1.089-.67a2.953,2.953,0,0,1,3.644.427l0,.006,4.1,4.1a.823.823,0,0,1,.15.589,1.125,1.125,0,0,1-.3.736.968.968,0,0,1-1.336,0L16.815,15.9a.373.373,0,1,0-.528.528l2.836,2.838a.943.943,0,0,1,0,1.338.968.968,0,0,1-1.336,0l-2.838-2.838a.373.373,0,1,0-.528.528l2.836,2.838a.943.943,0,0,1,0,1.338.968.968,0,0,1-1.236.082,1.762,1.762,0,0,0,.022-.217,1.63,1.63,0,0,0-1.884-1.673,1.63,1.63,0,0,0-1.865-1.865,1.63,1.63,0,0,0-1.865-1.865,1.688,1.688,0,0,0-2.871-1.389L5.713,17.384,4.276,15.953a5.448,5.448,0,0,1-1.6-3.843A5.249,5.249,0,0,1,4.313,8.3,5.256,5.256,0,0,1,8.12,6.7Zm-3.6,5.2-.746.038a.373.373,0,0,0,.017.746h.019l.745-.036a.374.374,0,0,0,.356-.391A.379.379,0,0,0,4.524,11.9Zm.449,1.609a.4.4,0,0,0-.14.047l-.647.373a.373.373,0,0,0,.373.647l.647-.373a.373.373,0,0,0-.233-.694Zm1.2,1.328a.366.366,0,0,0-.264.111l-.526.528A.373.373,0,1,0,5.913,16l.528-.529a.374.374,0,0,0-.265-.637Zm2.58.95A.945.945,0,0,1,9.423,17.4l-1.9,1.9A.946.946,0,0,1,6.181,17.97l1.9-1.9A.936.936,0,0,1,8.755,15.788Zm1.865,1.865a.945.945,0,0,1,.667,1.615l-1.9,1.9a.946.946,0,0,1-1.338-1.338l1.9-1.9A.936.936,0,0,1,10.621,17.654Zm1.865,1.865a.945.945,0,0,1,.667,1.615l-1.9,1.9A.946.946,0,1,1,9.912,21.7l1.9-1.9A.936.936,0,0,1,12.486,19.519Zm1.865,1.865A.945.945,0,0,1,15.019,23l-1.9,1.9a.946.946,0,0,1-1.338-1.338l1.9-1.9A.936.936,0,0,1,14.352,21.384Z"
                transform="translate(-2 -5.926)"
              />
            </svg>

            <h5>CRM</h5>
          </div>

          {/* <div
            className={
              "detail__section " + (clicked === "Online" && "selected__Section")
            }
            onClick={() => SetClicked("Online")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="22"
              viewBox="0 0 24 22"
            >
              <g
                id="shopping_bag_black_24dp"
                transform="translate(-0.432 0.283)"
              >
                <rect
                  id="Rectangle_7"
                  data-name="Rectangle 7"
                  width="24"
                  height="22"
                  transform="translate(0.432 -0.283)"
                  fill="none"
                />
                <path
                  id="Path_7"
                  data-name="Path 7"
                  d="M18.252,5.62H16.216A3.865,3.865,0,0,0,12.144,2,3.865,3.865,0,0,0,8.072,5.62H6.036A1.939,1.939,0,0,0,4,7.429V18.288A1.939,1.939,0,0,0,6.036,20.1H18.252a1.939,1.939,0,0,0,2.036-1.81V7.429A1.939,1.939,0,0,0,18.252,5.62ZM12.144,3.81A1.939,1.939,0,0,1,14.18,5.62H10.108A1.939,1.939,0,0,1,12.144,3.81Zm6.108,14.478H6.036V7.429H8.072v1.81a.969.969,0,0,0,1.018.9.969.969,0,0,0,1.018-.9V7.429H14.18v1.81a1.025,1.025,0,0,0,2.036,0V7.429h2.036Z"
                  transform="translate(0.072 -0.19)"
                />
              </g>
            </svg>

            <h5>Online</h5>
          </div> */}

          <div
            className={
              "detail__section " +
              (paths.includes('delivery-manager') &&
                "selected__Section deliveryManagerSelected")
            }
            onClick={() => {
              SetClicked("DeliveryManager");
              navigate("/mainPage/delivery-manager");
            }}
          >
            <svg
              id="delivery_dining_black_24dp_1_"
              data-name="delivery_dining_black_24dp (1)"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="Group_8" data-name="Group 8">
                <rect
                  id="Rectangle_8"
                  data-name="Rectangle 8"
                  width="24"
                  height="24"
                  fill="none"
                />
              </g>
              <g
                id="Group_11"
                data-name="Group 11"
                transform="translate(2.25 4.125)"
              >
                <g id="Group_10" data-name="Group 10">
                  <g id="Group_9" data-name="Group 9">
                    <path
                      id="Path_8"
                      data-name="Path 8"
                      d="M18.125,7.25A2.1,2.1,0,0,0,16.228,5H13.382V7.25h2.846v2.981l-3.3,4.894H9.588V9.5H5.794C3.7,9.5,2,11.514,2,14v3.375H3.9A3.14,3.14,0,0,0,6.743,20.75a3.14,3.14,0,0,0,2.846-3.375h4.249l4.287-6.356ZM3.9,15.125V14a2.1,2.1,0,0,1,1.9-2.25h1.9v3.375ZM6.743,18.5a1.051,1.051,0,0,1-.949-1.125h1.9A1.051,1.051,0,0,1,6.743,18.5Z"
                      transform="translate(-2 -5)"
                    />
                    <rect
                      id="Rectangle_9"
                      data-name="Rectangle 9"
                      width="5"
                      height="2"
                      transform="translate(3.107 1.375)"
                    />
                    <path
                      id="Path_9"
                      data-name="Path 9"
                      d="M19.375,13a3.375,3.375,0,1,0,3.375,3.375A3.37,3.37,0,0,0,19.375,13Zm0,4.5A1.125,1.125,0,1,1,20.5,16.375,1.128,1.128,0,0,1,19.375,17.5Z"
                      transform="translate(-3.25 -4)"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <h5 className="deliveryManager__H5">Delivery Manager</h5>
          </div>

          <div
            className={
              "account-btn detail__section " +
              (paths.includes("inventory") && "selected__Section")
            }
            onClick={() => {
              SetClicked("Inventory");
              setInventoryClick(!InventoryClick);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.099"
              height="19.626"
              viewBox="0 0 15.099 19.626"
            >
              <path
                id="Path_91"
                data-name="Path 91"
                d="M5.974,0A3.025,3.025,0,0,0,2.953,3.018v13.59a3.025,3.025,0,0,0,3.021,3.018h9.057a3.025,3.025,0,0,0,3.021-3.018V6.039c0-.8-.734-1.563-2.054-2.853-.183-.18-.38-.38-.566-.566s-.386-.362-.566-.545C13.576.758,12.816,0,12.013,0Zm0,1.509h5.5c.545.141.542.793.542,1.464V5.285a.755.755,0,0,0,.755.755h2.264c.752,0,1.512,0,1.512.755v9.815a1.511,1.511,0,0,1-1.512,1.509H5.974a1.508,1.508,0,0,1-1.509-1.509V3.018A1.508,1.508,0,0,1,5.974,1.509Zm.614,6.039a.758.758,0,1,0,.141,1.509h7.548a.755.755,0,1,0,0-1.509H6.588Zm0,3.021a.758.758,0,1,0,.141,1.509h6.039a.755.755,0,1,0,0-1.509H6.588Zm0,3.018A.758.758,0,1,0,6.729,15.1h7.548a.755.755,0,1,0,0-1.509H6.588Z"
                transform="translate(-2.953)"
              />
            </svg>

            <h5>Inventory</h5>
            <ul className="accounts-list">
              <li onClick={() => SetClicked("e")}>
                <Link to="/mainPage/inventory/masters">Master</Link>
              </li>
              <li onClick={() => SetClicked("f")}>
                <Link to="/mainPage/inventory/transactions">Transactions</Link>
              </li>
              <li onClick={() => SetClicked("g")}>
                <Link to="/mainPage/inventory/menu-management">Menu Management</Link>
              </li>
              <li onClick={() => SetClicked("h")}>
                <Link to="/mainPage/inventory/receipe-management">Reciepe Management</Link>
              </li>
              <li onClick={() => SetClicked("i")}>
                <Link to="/mainPage/inventory/reports">Reports</Link>
              </li>
            </ul>
          </div>

          <div
            className={
              "account-btn " +
              "detail__section " +
              (paths.includes('accounts') && "selected__Section")
            }
            onClick={() => {
              SetClicked("Accounts");
              setInventoryClick(!InventoryClick);
              // navigate("/mainPage/accounts")
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.764"
              height="24.808"
              viewBox="0 0 25.764 24.808"
            >
              <g id="surface1" transform="translate(-1.973 -1.973)">
                <path
                  id="Path_3034"
                  data-name="Path 3034"
                  d="M13.933,1.973a.934.934,0,0,0-.441.112L3.462,7.359a.875.875,0,0,0-.568.817.9.9,0,0,0,.921.884H5.655v8.862H4.733a.886.886,0,1,0,0,1.771H6.42a.851.851,0,0,0,.3,0H10.1a.831.831,0,0,0,.295,0h2.619V17.922H11.176V9.06h1.839v7.087h1.839V9.06h1.839v7.087h1.843V9.06h1.839v7.087h1.839V9.06h1.839a.9.9,0,0,0,.921-.884.875.875,0,0,0-.568-.817L14.37,2.078A.989.989,0,0,0,13.933,1.973Zm0,2.658a.886.886,0,1,1-.918.887A.906.906,0,0,1,13.933,4.631ZM7.494,9.06H9.333v8.862H7.494Zm8.741,8.862a1.355,1.355,0,0,0-1.38,1.329v.442H27.736v-.442a1.355,1.355,0,0,0-1.38-1.329ZM2.894,21.464a.886.886,0,1,0,0,1.771H13.015V21.464Zm11.96,0v3.987a1.357,1.357,0,0,0,1.38,1.329H26.356a1.357,1.357,0,0,0,1.38-1.329V21.464Z"
                  transform="translate(0 0)"
                />
              </g>
            </svg>

            <h5>Accounts</h5>
            <ul className="accounts-list">
              <li onClick={() => SetClicked("a")}>
                <Link to="/mainPage/accounts/master/head" >Master</Link>
              </li>
              <li onClick={() => SetClicked("b")}>
                <Link to="/mainPage/accounts/transactions/journals" >
                  Transactions
                </Link>
              </li>
              <li onClick={() => SetClicked("c")}>
                <Link to="/mainPage/accounts/chart-of-accounts">
                  Chart of Account
                </Link>
              </li>
              <li onClick={() => SetClicked("d")}> 
                <Link to="/mainPage/accounts/reports/ledger">Reports</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lower__logout__section">
          <svg
            id="logout_black_24dp"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g id="Group_14" data-name="Group 14">
              <path
                id="Path_13"
                data-name="Path 13"
                d="M0,0H24V24H0Z"
                fill="none"
              />
            </g>
            <g id="Group_15" data-name="Group 15">
              <path
                id="Path_14"
                data-name="Path 14"
                d="M17,8,15.59,9.41,17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4ZM5,5h7V3H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2h7V19H5Z"
                fill="#040153"
              />
            </g>
          </svg>
          <h5>Logout</h5>
        </div>
      </div>

      <div className="main__page__right__body">
        <div className="section">
          <Routes>
            <Route path="/dashboard" element={<DashBoard />}>
              <Route path="sales" element={<DashboadSales />} />
              <Route path="marketing" element={<Marketting />} />
              <Route path="inventory" element={<DashBoadInventory />} />
              <Route path="bussiness-summary" element={<BussinessSummary />} />
            </Route>
            <Route path="/walkin" element={<Walkin />} />

            <Route path="/crm" element={<Crm />} >
              <Route path="addCustomer" element={<AddCustomer />} />
              <Route path="sms" element={<Sms />} >
                <Route path="personalised" element={<Personalized />} />
                <Route path="bulk" element={<Bulk/>} />
              </Route>
              <Route path="customerDetail" element={<CustomerDetails />} />
              <Route path="" element={<CrmFront />} />
            </Route>

            <Route path="/delivery-manager" element={<DeliveryManager />} />
            <Route path="/inventory" element={<Inventory />} >
              <Route path="masters" element={<Master />}>
                <Route path="ProductMaster" element={<ProductMaster/>} />
                <Route path="CategoryMaster" element={<CategoryMaster/>} />
                <Route path="MeasurementDetails" element={<MesurementDetails/>} />
                <Route path="TaxMasters" element={<TaxMaster/>} />
                <Route path="" element={<Master/>}/>
              </Route>

              <Route path="transactions" element={<TransactionMaster />} />
              <Route path="menu-management" element={<MenuManagement />} />
              <Route path="receipe-management" element={<RecipeManagement />} >
                <Route path="" element={<RecipeDetails/>}/>
                <Route path="recipe-view/:id" element={<RecipieView/>}/>
                <Route path="inventory" element={<RecipeInventory/>}/>
              </Route>
              <Route path="reports" element={<ReportSection />} >
                <Route path="stock-report" element={<StockReport />}/>
                <Route path="stock-cost" element={<StockCost />}/>
                <Route path="closing-stock-report" element={<ClossingStockReport />}/>
                <Route path="statement" element={<GpStatement />}/>
                <Route path="" element={<StockReport />}/>
              </Route>
            </Route>
            <Route path="/delivery-manager" element={<DeliveryManager />}>
              <Route path="" element={<HomeDeliveryOrder />}>
                <Route path="" element={<NewOrder/>}/>
                <Route path="waiting-for-pickup" element={<WaitingForPicup/>}/>
                <Route path="collection-in-progress" element={<DeliveryInProgress />}/>
                <Route path="delivery-status" element={<Delivered/>}/>
              </Route>
              <Route path="take-away-order" element={<TakeAwayOrders/>}>
                <Route path="" element={<WaitingForCollection/>}/>
                <Route path="collected" element={<Collected/>}/>
              </Route>
              <Route path="future-order" element={<FutureOrder/>}/>
            </Route>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/dinein" element={<DineIn />} />
            <Route path="/accounts" element={<Accounts />}>
              <Route path="master" element={<AccountMaster />}>
                <Route path="head" element={<AccountHead />} />
                <Route path="group" element={<AccountGroup />} />
              </Route>
              <Route path="reports" element={<ReportsAccount />}>
                <Route path="ledger" element={<Ledger />} />
                <Route path="cash-book" element={<CashBook />} />
                <Route path="bank-book" element={<BankBook />} />
                <Route path="cash-flow" element={<CashFlow />} />
                <Route path="balance-sheet" element={<BalanceSheet />} />
                <Route
                  path="profit-and-loss-account"
                  element={<ProfitAndLose />}
                />
                <Route path="daybook" element={<DayBookDetails />} />
                <Route path="trial-balance" element={<TrialBalance />} />
              </Route>
              <Route path="transactions" element={<AccountTransaction />}>
                <Route path="journals" element={<Journals />} />
                <Route path="debit-note" element={<DebitNote />} />
                <Route path="contra" element={<Contra />} />
                <Route path="supplier-payment" element={<SupplyerPayment />} />
                <Route path="cash-receipt" element={<CashRecipt />} />
                <Route path="cash-payment" element={<CashPayment />} />
                <Route path="opening-balance" element={<OpeningBalance />} />
                <Route path="credit-note" element={<CreditNote />} />
              </Route>
              <Route
                path="chart-of-accounts"
                element={<ChartOfAccountMain />}
              />
            </Route>
          </Routes>
        </div>
        {/* {clicked === "CRM" && (
          <div className="section">
            <Crm />
          </div>
        )}

        {clicked === "DeliveryManager" && (
          <div className="section">
            <DeliveryManager />
          </div>
        )}

        {clicked === "Inventory" && (
          <div className="section">
            <Inventory InventoryClick={InventoryClick} />
          </div>
        )}

        {clicked === "Dashboard" && (
          <div className="section">
            <DashBoard />
          </div>
        )}

        {clicked === "WalkIn" && (
          <div className="section">
            <Walkin />
          </div>
        )}

        {clicked === "DineIn" && (
          <div className="section">
            <DineIn SetClicked={SetClicked} />
          </div>
        )}

        {clicked === "Accounts" && (
          <div className="section">
            <Accounts InventoryClick={InventoryClick} />
          </div>
        )} */}
      </div>
    </div>
  );
}

export default MainPage;
