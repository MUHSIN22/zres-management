import React, { useEffect, useState } from "react";
import "./dinein.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import DineDummyData from "./DummyData";
import ProfileHeadder from "../profile Headder and Settings/ProfileHeadder";
import RunningOrder from "./DineIn RunningOrder/RunningOrder";
import CompleatedOrder from "./dineIn Compleated Order/CompleatedOrder";
import RecervationBooking from "./reservationBooking/RecervationBooking";
import Walkin from "../Walkin/Walkin";
import SeatSectionPopup from "./SeatSectionPopup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import TwoSeater from "./dinein svg/Round/TwoSeaterRound";
import SixSeater from "./dinein svg/Round/SixSeaterRound";
import FourSeater from "./dinein svg/Round/FourSeaterRound";
import TwoSeaterSquare from "./dinein svg/Square/TwoSeaterSquare";
import FourSeaterSquare from "./dinein svg/Square/FourSeaterSquare";
import SixSeaterSquare from "./dinein svg/Square/SixSeaterSquare";
import TwoSeaterCorner from "./dinein svg/Corner/TwoSeaterCorner";

const dataToSendToWalkin = {
  tableNo: "4",
  guest: "2",
  waiter: "jhon",
  orderType: "dineIn",
  checkNo: "452",
};

function DineIn({ SetClicked }) {
  const [selectedAvialbilityTabel, setSelectedAvialibilityTable] = useState("");
  const [DineIn, setDineIn] = useState(true);
  const [filterOption, setFilterOption] = useState("all");
  const [mainTableArea, setMainTableArea] = useState(true);
  const [compleateOrder, setCompleateOrder] = useState(false);
  const [runningOrder, setRunningOrder] = useState(false);
  const [reservation, setRecervation] = useState(false);
  const [dataToWalkin, setDatatoWalkin] = useState(false);
  const pageNumber = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const [totalTablesLength, setTotalTablesLength] = useState(0);
  const [dataToSendToWlkinPage, setDataToSendToWalkinPage] =
    useState(dataToSendToWalkin);
  const [getAllTableData, setGetAllTableData] = useState({});
  const [allTableData, setAllTableData] = useState({});
  const [allTableAvailability, setAllTableAvailability] = useState({});
  const [getTableAvailability, setGetTableAvailability] = useState({});
  const [firstIndexPagination,setFirstIndexPagination] = useState(0);
  const [lastIndexPagination,setLastIndexPagination] = useState(4);
  const [loading,setLoading] = useState(false)

  for (let i = 1; i <= Math.ceil(totalTablesLength  / postPerPage); i++) {
    pageNumber.push(i); 
  }
 useEffect(() => {  
   setLoading(true)
   const firstNumber = postPerPage*(currentPage-1)
   const lastNumber = (currentPage*postPerPage)-1 
    axios
      .get(`${process.env.REACT_APP_BASE_URL}DineIn/GetAllTablesInDine?CMPid=1`)
      .then((res) => {
        const filteredData = res.data.filter((data,index)=>{
          return index >= firstNumber && index <= lastNumber  
        })
        setGetAllTableData(filteredData);
        setTotalTablesLength(res.data.length);
        setAllTableData(filteredData);
        setLoading(false )
      });
  }, [currentPage]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}DineIn/GetAvailableTables?CMPid=1`)
      .then((res) => {
        setGetTableAvailability(res.data);
        setAllTableAvailability(res.data);
      });
  }, []);

  const handleDineInFunction = () => {
    setDineIn(false);
    setDatatoWalkin(true);
  };

  const handleBottomNav = (condition) => {
    if (condition === "RunningOrder") {
      setMainTableArea(false);
      setCompleateOrder(false);
      setRunningOrder(true);
      setRecervation(false);
    } else if (condition === "CompleatedOrder") {
      setMainTableArea(false);
      setCompleateOrder(true);
      setRunningOrder(false);
      setRecervation(false);
    } else if (condition === "Cancel") {
      setMainTableArea(true);
      setCompleateOrder(false);
      setRunningOrder(false);
      setRecervation(false);
    } else if (condition === "Reservation") {
      setMainTableArea(true);
      setCompleateOrder(false);
      setRunningOrder(false);
      setRecervation(true);
    }
  };
  const getStatusLength = (type) => {
    if (getTableAvailability.length > 0) {
      return getTableAvailability.filter((data) => {
        return data.TableStatus === type;
      }).length;
    }
  };
  const filterHandlerForArea = (area) => {
    // if (allTableData.length > 0) {
      if (area !== "all") {
        const newTableData = allTableData.filter((data) => {
          return data.DineInAreaName === area;
        });
        setGetAllTableData(newTableData);
      } else {
        setGetAllTableData(allTableData);
      }
    // }
    if (allTableAvailability.length > 0) {
      if (area !== "all") {
        const newAvailabilityData = allTableAvailability.filter((data) => {
          return data.DineInAreaName === area;
        });
        setGetTableAvailability(newAvailabilityData);
      } else {
        setGetTableAvailability(allTableAvailability);
      } 
    }
  };

  const handleCloseWalkinPage = () => {
    setDineIn(true);
    setDatatoWalkin(false);
  };
  const svgFilter = (seat, shape, id) => {
    if (getTableAvailability.length > 0) {
      var checkAvailbility = getTableAvailability.filter((data) => {
        if (data.DineInSettingsID === id) {
          return data;
        }
      })[0].TableStatus;
    }
    if (shape === "Round") {
      switch (seat) {
        case 2:
          return <TwoSeater availability={checkAvailbility} />;
        case 4:
          return <FourSeater availability={checkAvailbility} />;
        case 6:
          return <SixSeater availability={checkAvailbility} />;
        default:
          return null;
      }
    } else if (shape === "Square") {
      switch (seat) {
        case 2:
          return <TwoSeaterSquare availability={checkAvailbility} />;
        case 4:
          return <FourSeaterSquare availability={checkAvailbility} />;
        case 6:
          return <SixSeaterSquare availability={checkAvailbility} />;
        default:
          return null;
      }
    } else {
      return <TwoSeaterCorner availability={checkAvailbility} />;
    }
  };
  if (getAllTableData.length < 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        {dataToWalkin && (
          <>
            <div
              className="back__btn__section"
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className="button__area"
                style={{
                  width: "50px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#040153",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px grey",
                  cursor: "pointer",
                }}
                onClick={handleCloseWalkinPage}
              >
                <ArrowBackIcon
                  style={{
                    fontSize: "20px",
                    color: "#fff",
                  }}
                />
              </div>
            </div>
            <Walkin dataToSendToWlkinPage={dataToSendToWlkinPage} />
          </>
        )}
        {DineIn && (
          <>
            <div className="DineIn">
              {reservation && (
                <div
                  className={
                    "reservation__booking__wrapper " +
                    (reservation === true && "active")
                  }
                >
                  <div className="recervation__booking__dive">
                    <RecervationBooking setRecervation={setRecervation} />
                  </div>
                </div>
              )}

              <ProfileHeadder />
              <div className="Dinein__top__nav__section">
                <div className="left__dinein__section__nav">
                  <div
                    className="dinein__nav__left__btn"
                    onClick={() => filterHandlerForArea("all")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.255"
                      height="20.337"
                      viewBox="0 0 30.255 24.337"
                    >
                      <g id="surface1" transform="translate(-1.984 -6.945)">
                        <path
                          id="Path_94"
                          data-name="Path 94"
                          d="M6.26,6.945a2.3,2.3,0,1,0,2.3,2.3A2.306,2.306,0,0,0,6.26,6.945Zm21.705,0a2.3,2.3,0,1,0,2.3,2.3A2.306,2.306,0,0,0,27.966,6.945ZM6.26,12.208a2.3,2.3,0,0,0-2.3,2.3l.01,6.77A2.311,2.311,0,0,0,6.26,23.388H8.213L8.7,20.1H8.563l0-5.625A2.368,2.368,0,0,0,6.26,12.208Zm21.705,0a2.365,2.365,0,0,0-2.3,2.266l0,5.625h-.145l.495,3.289h1.953a2.313,2.313,0,0,0,2.292-2.111l.01-6.77A2.3,2.3,0,0,0,27.966,12.208Zm-25.334.647a.66.66,0,0,0-.647.666v9.4A2.59,2.59,0,0,0,3.264,25l-.616,5.555a.657.657,0,1,0,1.305.142l.6-5.335.021,0H9.246L8.57,29.868a.686.686,0,0,0,.08.43c.135.23.741.984,2.882.984a4.311,4.311,0,0,0,2.289-.508V26.019a.658.658,0,0,1,1.316,0v4.8a3.757,3.757,0,0,0,1.973.461,3.756,3.756,0,0,0,1.973-.461V27.335a.658.658,0,1,1,1.316,0v3.413a4.777,4.777,0,0,0,2.346.533,3.717,3.717,0,0,0,2.732-.865.644.644,0,0,0,.176-.549l-.676-4.506h4.675l.023,0,.593,5.335a.659.659,0,1,0,1.31-.142L30.962,25a2.587,2.587,0,0,0,1.277-2.072v-9.4a.657.657,0,1,0-1.313,0v9.331a1.264,1.264,0,0,1-1.272,1.194H24.783l-1.1-7.332a.66.66,0,0,0-.65-.562H11.191a.655.655,0,0,0-.647.562l-1.1,7.332H4.569A1.262,1.262,0,0,1,3.3,22.852V13.521a.658.658,0,0,0-.194-.474A.651.651,0,0,0,2.632,12.855Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <h4>All Table</h4>
                  </div>
                  <div
                    className="dinein__nav__left__btn"
                    onClick={() => filterHandlerForArea("Main Area")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.255"
                      height="20.337"
                      viewBox="0 0 30.255 24.337"
                    >
                      <g id="surface1" transform="translate(-1.984 -6.945)">
                        <path
                          id="Path_94"
                          data-name="Path 94"
                          d="M6.26,6.945a2.3,2.3,0,1,0,2.3,2.3A2.306,2.306,0,0,0,6.26,6.945Zm21.705,0a2.3,2.3,0,1,0,2.3,2.3A2.306,2.306,0,0,0,27.966,6.945ZM6.26,12.208a2.3,2.3,0,0,0-2.3,2.3l.01,6.77A2.311,2.311,0,0,0,6.26,23.388H8.213L8.7,20.1H8.563l0-5.625A2.368,2.368,0,0,0,6.26,12.208Zm21.705,0a2.365,2.365,0,0,0-2.3,2.266l0,5.625h-.145l.495,3.289h1.953a2.313,2.313,0,0,0,2.292-2.111l.01-6.77A2.3,2.3,0,0,0,27.966,12.208Zm-25.334.647a.66.66,0,0,0-.647.666v9.4A2.59,2.59,0,0,0,3.264,25l-.616,5.555a.657.657,0,1,0,1.305.142l.6-5.335.021,0H9.246L8.57,29.868a.686.686,0,0,0,.08.43c.135.23.741.984,2.882.984a4.311,4.311,0,0,0,2.289-.508V26.019a.658.658,0,0,1,1.316,0v4.8a3.757,3.757,0,0,0,1.973.461,3.756,3.756,0,0,0,1.973-.461V27.335a.658.658,0,1,1,1.316,0v3.413a4.777,4.777,0,0,0,2.346.533,3.717,3.717,0,0,0,2.732-.865.644.644,0,0,0,.176-.549l-.676-4.506h4.675l.023,0,.593,5.335a.659.659,0,1,0,1.31-.142L30.962,25a2.587,2.587,0,0,0,1.277-2.072v-9.4a.657.657,0,1,0-1.313,0v9.331a1.264,1.264,0,0,1-1.272,1.194H24.783l-1.1-7.332a.66.66,0,0,0-.65-.562H11.191a.655.655,0,0,0-.647.562l-1.1,7.332H4.569A1.262,1.262,0,0,1,3.3,22.852V13.521a.658.658,0,0,0-.194-.474A.651.651,0,0,0,2.632,12.855Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <h4>Main Area</h4>
                  </div>
                  <div
                    className="dinein__nav__left__btn"
                    onClick={() => filterHandlerForArea("Patio Area")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.255"
                      height="20.337"
                      viewBox="0 0 30.255 24.337"
                    >
                      <g id="surface1" transform="translate(-1.984 -6.945)">
                        <path
                          id="Path_94"
                          data-name="Path 94"
                          d="M6.26,6.945a2.3,2.3,0,1,0,2.3,2.3A2.306,2.306,0,0,0,6.26,6.945Zm21.705,0a2.3,2.3,0,1,0,2.3,2.3A2.306,2.306,0,0,0,27.966,6.945ZM6.26,12.208a2.3,2.3,0,0,0-2.3,2.3l.01,6.77A2.311,2.311,0,0,0,6.26,23.388H8.213L8.7,20.1H8.563l0-5.625A2.368,2.368,0,0,0,6.26,12.208Zm21.705,0a2.365,2.365,0,0,0-2.3,2.266l0,5.625h-.145l.495,3.289h1.953a2.313,2.313,0,0,0,2.292-2.111l.01-6.77A2.3,2.3,0,0,0,27.966,12.208Zm-25.334.647a.66.66,0,0,0-.647.666v9.4A2.59,2.59,0,0,0,3.264,25l-.616,5.555a.657.657,0,1,0,1.305.142l.6-5.335.021,0H9.246L8.57,29.868a.686.686,0,0,0,.08.43c.135.23.741.984,2.882.984a4.311,4.311,0,0,0,2.289-.508V26.019a.658.658,0,0,1,1.316,0v4.8a3.757,3.757,0,0,0,1.973.461,3.756,3.756,0,0,0,1.973-.461V27.335a.658.658,0,1,1,1.316,0v3.413a4.777,4.777,0,0,0,2.346.533,3.717,3.717,0,0,0,2.732-.865.644.644,0,0,0,.176-.549l-.676-4.506h4.675l.023,0,.593,5.335a.659.659,0,1,0,1.31-.142L30.962,25a2.587,2.587,0,0,0,1.277-2.072v-9.4a.657.657,0,1,0-1.313,0v9.331a1.264,1.264,0,0,1-1.272,1.194H24.783l-1.1-7.332a.66.66,0,0,0-.65-.562H11.191a.655.655,0,0,0-.647.562l-1.1,7.332H4.569A1.262,1.262,0,0,1,3.3,22.852V13.521a.658.658,0,0,0-.194-.474A.651.651,0,0,0,2.632,12.855Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <h4>Patio Area</h4>
                  </div>
                  <div
                    className="dinein__nav__left__btn"
                    onClick={() => filterHandlerForArea("Family Area")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.255"
                      height="20.337"
                      viewBox="0 0 30.255 24.337"
                    >
                      <g id="surface1" transform="translate(-1.984 -6.945)">
                        <path
                          id="Path_94"
                          data-name="Path 94"
                          d="M6.26,6.945a2.3,2.3,0,1,0,2.3,2.3A2.306,2.306,0,0,0,6.26,6.945Zm21.705,0a2.3,2.3,0,1,0,2.3,2.3A2.306,2.306,0,0,0,27.966,6.945ZM6.26,12.208a2.3,2.3,0,0,0-2.3,2.3l.01,6.77A2.311,2.311,0,0,0,6.26,23.388H8.213L8.7,20.1H8.563l0-5.625A2.368,2.368,0,0,0,6.26,12.208Zm21.705,0a2.365,2.365,0,0,0-2.3,2.266l0,5.625h-.145l.495,3.289h1.953a2.313,2.313,0,0,0,2.292-2.111l.01-6.77A2.3,2.3,0,0,0,27.966,12.208Zm-25.334.647a.66.66,0,0,0-.647.666v9.4A2.59,2.59,0,0,0,3.264,25l-.616,5.555a.657.657,0,1,0,1.305.142l.6-5.335.021,0H9.246L8.57,29.868a.686.686,0,0,0,.08.43c.135.23.741.984,2.882.984a4.311,4.311,0,0,0,2.289-.508V26.019a.658.658,0,0,1,1.316,0v4.8a3.757,3.757,0,0,0,1.973.461,3.756,3.756,0,0,0,1.973-.461V27.335a.658.658,0,1,1,1.316,0v3.413a4.777,4.777,0,0,0,2.346.533,3.717,3.717,0,0,0,2.732-.865.644.644,0,0,0,.176-.549l-.676-4.506h4.675l.023,0,.593,5.335a.659.659,0,1,0,1.31-.142L30.962,25a2.587,2.587,0,0,0,1.277-2.072v-9.4a.657.657,0,1,0-1.313,0v9.331a1.264,1.264,0,0,1-1.272,1.194H24.783l-1.1-7.332a.66.66,0,0,0-.65-.562H11.191a.655.655,0,0,0-.647.562l-1.1,7.332H4.569A1.262,1.262,0,0,1,3.3,22.852V13.521a.658.658,0,0,0-.194-.474A.651.651,0,0,0,2.632,12.855Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <h4>Family Area</h4>
                  </div>
                </div>
                <div className="right__dinein__section__nav ">
                  <div className="popup__details__section">
                    {selectedAvialbilityTabel !== "" && (
                      <SeatSectionPopup
                        selectedAvialbilityTabel={selectedAvialbilityTabel}
                        setSelectedAvialibilityTable={
                          setSelectedAvialibilityTable
                        }
                        dataToDisplay={getTableAvailability}
                      />
                    )}
                  </div>

                  <button
                    style={{ backgroundColor: "#009751", color: "#fff" }}
                    onClick={() => setSelectedAvialibilityTable("Available")}
                  >
                    {getStatusLength("Available")} Available
                  </button>
                  <button
                    style={{ backgroundColor: "#c8c8cf", color: "#040153" }}
                    onClick={() => setSelectedAvialibilityTable("Occupied")}
                  >
                    {getStatusLength("Occupied")} Occupied
                  </button>
                  <button
                    style={{ backgroundColor: "#040153", color: "#fff" }}
                    onClick={() => setSelectedAvialibilityTable("DoneSoon")}
                  >
                    {getStatusLength("DoneSoon")} Done Soon
                  </button>
                  <button
                    style={{ backgroundColor: "#e1870e", color: "#040153" }}
                    onClick={() => setSelectedAvialibilityTable("Reservation")}
                  >
                    {getStatusLength("Reservation")} Reservation
                  </button>
                  <div
                    className="right__dine__refresh__btn"
                    onClick={() => {
                      window.location.reload(false);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27.501"
                      height="27.546"
                      viewBox="0 0 27.501 27.546"
                    >
                      <g id="surface1" transform="translate(-0.018 0)">
                        <path
                          id="Path_97"
                          data-name="Path 97"
                          d="M14.631,0C8.344,0,4.323,4.547,4.235,10.594H.528c-.21,0-.429.122-.429.332a.461.461,0,0,0,0,.529L6.453,19.6a.561.561,0,0,0,.433.2.545.545,0,0,0,.429-.2l6.358-8.144a.461.461,0,0,0,0-.529.611.611,0,0,0-.429-.332H9.534C9.6,2.61,13.69.836,14.631.1,14.845-.008,14.845,0,14.631,0Zm6.026,7.783a.614.614,0,0,0-.429.164L13.87,16.09a1.127,1.127,0,0,0-.1.529.6.6,0,0,0,.429.332h3.807c-.071,7.984-4.156,9.758-5.1,10.5-.214.105-.214.1,0,.1,6.287,0,10.308-4.547,10.4-10.594h3.605c.214,0,.433-.122.433-.332.21-.21.206-.42.1-.529L21.09,7.946A.617.617,0,0,0,20.657,7.783Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <h4>Refresh</h4>
                  </div>
                </div>
              </div>
              <div className="bottom__dine__table__section">
                {runningOrder&& <RunningOrder/>}
                {compleateOrder && <CompleatedOrder />}

                {mainTableArea && (
                  <>
                    <div className="dine__table__wrapper">
                      {
                        loading ? <h1>loading...</h1>:
                        getAllTableData.length > 0 &&
                        getAllTableData.map((data) => (
                          <div
                            className="dine__in__table"
                            onClick={() => handleDineInFunction()}
                          >
                            <div
                              className={
                                "table__background " +
                                ((filterOption === "all" && "") ||
                                  (filterOption === "Main Area" &&
                                    data.DineInArea !== "Main Area" &&
                                    "active ") ||
                                  (filterOption === "patioArea" &&
                                    data.DineInArea !== "patioArea" &&
                                    "active ") ||
                                  (filterOption === "Family Area" &&
                                    data.DineInArea !== "Family Area" &&
                                    "active "))
                              }
                            >
                              <div className=" tableInResturent">
                                {svgFilter(
                                  data.NoOfSeat,
                                  data.ShapeOfTable,
                                  data.DineInSettingsID
                                )}
                              </div>
                            </div>

                            <button
                              className={
                                "btnmaindine " +
                                (data.tableInfo && `${data.tableInfo}`)
                              }
                            >
                              Table {data.DineInSettingsID}
                            </button>
                          </div>
                        ))}
                    </div>

                    <div className="pagination">
                      <Stack spacing={2}>
                        <Pagination
                          count={pageNumber.length}
                          shape="rounded"
                          color="primary"
                          onChange={(e, value) => setCurrentPage(value)}
                          defaultPage={currentPage}
                        />
                      </Stack>
                    </div>
                  </>
                )}
              </div>

              <div className="bottom__nav__section">
                <div className="left__dinein__section__nav">
                  <button onClick={() => handleBottomNav("Cancel")}>
                    Cancel
                  </button>
                </div>
                <div className="left__dinein__section__nav">
                  <div
                    className="dinein__nav__left__btn"
                    onClick={() => handleBottomNav("RunningOrder")}
                    style={{ width: "calc(100%/3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25.069"
                      height="16.647"
                      viewBox="0 0 26.069 26.647"
                    >
                      <g id="surface1" transform="translate(-4.96 -3.969)">
                        <path
                          id="Path_95"
                          data-name="Path 95"
                          d="M17.7,3.969c-4.8,0-6.95,3.054-6.95,6.084a5.77,5.77,0,0,0,.415,2.058,1.941,1.941,0,0,0-.415,1.2,1.847,1.847,0,0,0,.007.224,2.611,2.611,0,0,0,1.063,2.021,5.438,5.438,0,0,0,1.246,2.58v2.245c-.335.846-1.521,1.3-2.888,1.836-2.242.867-5.03,1.946-5.221,5.475a.593.593,0,0,0,.157.429.58.58,0,0,0,.422.182H17.125v1.736a.58.58,0,0,0,.579.579H30.449a.58.58,0,0,0,.579-.579V17.872a.58.58,0,0,0-.579-.579H20.6a7.28,7.28,0,0,0,.648-1.7c.427-.189.969-.691,1.09-2.014,0-.066,0-.128,0-.192a1.9,1.9,0,0,0-.4-1.229,5.232,5.232,0,0,0,.4-2.1c-.009-2.34-1.159-4.7-3.691-4.909l-.427-.851A.577.577,0,0,0,17.7,3.969Zm.579,14.482H29.87V29.457H18.284Zm3.476,1.159a.579.579,0,1,0,0,1.159H26.4a.579.579,0,1,0,0-1.159Z"
                          fill="#fcfcfc"
                        />
                      </g>
                    </svg>

                    <h4>Running Order</h4>
                  </div>

                  <div
                    className="dinein__nav__left__btn"
                    onClick={() => handleBottomNav("CompleatedOrder")}
                    style={{ width: "calc(100%/3)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25.15"
                      height="16.849"
                      viewBox="0 0 28.15 25.849"
                    >
                      <g id="surface1" transform="translate(0 -1.984)">
                        <path
                          id="Path_96"
                          data-name="Path 96"
                          d="M5.62,1.984a4.5,4.5,0,1,0,4.494,4.5A4.5,4.5,0,0,0,5.62,1.984ZM21.864,7.217a1.009,1.009,0,0,0-1.018,1,.989.989,0,0,0,.192.6A5.614,5.614,0,0,0,16.3,14.347H16.19a.562.562,0,1,0,0,1.124h11.4a.562.562,0,1,0,0-1.124h-.035a.558.558,0,0,0-.018-.122A5.612,5.612,0,0,0,22.707,8.8a1.032,1.032,0,0,0-.843-1.58ZM2.81,12.1a23.181,23.181,0,0,0-2.337.23A.565.565,0,0,0,0,12.891V27.273a.561.561,0,0,0,.562.56H11.8a.561.561,0,0,0,.562-.56V20.617l1.511,1.7a2.2,2.2,0,0,0,1.58,1.02c.71,0,1.073-.323,1.633-1.071.2-.272,2.587-3.06,4.109-4.83a6.861,6.861,0,0,1,1.6-.562,9.915,9.915,0,0,0,2.3-.843H17.139l-1.6,1.547L12.38,12.906a.645.645,0,0,0-.071-.086c-.69-.693-3.352-.721-3.879-.721a.567.567,0,0,0-.547.44l-2.264,9.5-2.266-9.5A.567.567,0,0,0,2.81,12.1Z"
                          fill="#fcfcfc"
                        />
                      </g>
                    </svg>

                    <h4>Completed Order</h4>
                  </div>

                  <div
                    className="dinein__nav__left__btn"
                    onClick={() => handleBottomNav("Reservation")}
                    style={{
                      backgroundColor: "#E1870E",
                      width: "calc(100%/3)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25.531"
                      height="16"
                      viewBox="0 0 28.531 16"
                    >
                      <g id="surface1" transform="translate(-1.719 -8)">
                        <path
                          id="Path_3117"
                          data-name="Path 3117"
                          d="M5.219,8l-3.5,14H6.844L7,23.156,7.125,24H30.25l-.281-1.219-3-14L26.813,8Zm1.938,2H25.188l2.594,12H8.875ZM5.719,14.219,6.563,20H4.281ZM12,15v2H23V15Z"
                          fill="#fcfcfc"
                        />
                      </g>
                    </svg>

                    <h4>Reservation Booking</h4>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default DineIn;
