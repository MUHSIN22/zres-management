import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PhoneNumber from "./dummyData";
import { Link } from "react-router-dom";
import SingleCustomerDetails from "./singleCustomerDetails/SingleCustomerDetails";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import  {crmServices} from "../../Services/CrmServices"



function CrmFront({ setSmsCategory }) {
  const [smsClick, setSmsClick] = useState(false);
  const [number, setNumber] = useState("");
  const [searchStoredData, setSearchStoredData] = useState([" "]);
  const [avilable, setNotAvilable] = useState(false);
  const [userFound, setUserFound] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [customer,setCustomer]= useState([]);



  useEffect(() => {
    if (number === "") {
      setNotAvilable(false);
      setUserFound(false);
    }
  }, [number]);

  useEffect(() => {
    setNotAvilable(false);
    setUserFound(false);
    crmServices.getAllcustomer()
    .then(data =>{setCustomer(data)})
  }, [number]);

  const handleSearch = () => {
    if (customer.find((data) => data.Phone === number)) {
      const SearchData = customer.filter((dta) => dta.Phone === number);
      setSearchStoredData(SearchData);
      setUserFound(true);
    } else {
      setNotAvilable(true);
    }
  };

  // loading useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* {Loading === true && <LoadingScreen />} */}

      {!number && (
        <>
          {/* overlay sms section */}
          {smsClick && (
            <div className="overlay__sms__section">
              <div
                className="greyOverlayer"
                onClick={() => setSmsClick(false)}
              ></div>
              <div className="data__onOverlayer">
                <div
                  className="data_contaner"
                >
                  <Link to="/mainPage/crm/sms/personalised">
                    {" "}
                    <h4>Personalized Messages</h4>
                  </Link>

                  <ArrowRightIcon />
                </div>
                <div
                  className="data_contaner"
                
                >
                  <Link to="/mainPage/crm/sms/bulk">
                    {" "}
                    <h4> Bulk Messages</h4>
                  </Link>

                  <ArrowRightIcon />
                </div>
              </div>
            </div>
          )}

          <div className="Crm__headder__Part">
            {/* main body starts here */}

            <div className="headderSections">
              <h4 onClick={() => setSmsClick(true)}>Sms</h4>
              <svg
                id="surface1"
                xmlns="http://www.w3.org/2000/svg"
                width="44.633"
                height="41.664"
                viewBox="0 0 44.633 41.664"
              >
                <path
                  id="Path_3062"
                  data-name="Path 3062"
                  d="M6.837,7.938A4.924,4.924,0,0,0,1.984,12.9V36.707a4.927,4.927,0,0,0,4.852,4.961h3.97a7.848,7.848,0,0,1-.18,3.223,5.072,5.072,0,0,1-2.334,2.883,1,1,0,0,0-.416,1.1.972.972,0,0,0,.9.73c4.115,0,8.833-2.2,11.217-7.934H41.769a4.926,4.926,0,0,0,4.848-4.961V12.9a4.924,4.924,0,0,0-4.848-4.961Zm0,1.984H41.769A2.946,2.946,0,0,1,44.68,12.9V36.707a2.949,2.949,0,0,1-2.911,2.977H19.449a.971.971,0,0,0-.909.648c-1.509,4.211-4.2,6.215-7,6.945a7.052,7.052,0,0,0,.94-1.766,10.429,10.429,0,0,0,.153-5.023.978.978,0,0,0-.94-.8H6.837a2.946,2.946,0,0,1-2.911-2.977V12.9A2.944,2.944,0,0,1,6.837,9.922Zm7.764,11.9A2.977,2.977,0,1,0,17.508,24.8,2.961,2.961,0,0,0,14.6,21.824Zm9.7,0A2.977,2.977,0,1,0,27.212,24.8,2.964,2.964,0,0,0,24.3,21.824Zm9.7,0A2.977,2.977,0,1,0,36.917,24.8,2.961,2.961,0,0,0,34.005,21.824ZM14.6,23.809a.992.992,0,1,1-.97.992A.968.968,0,0,1,14.6,23.809Zm9.7,0a.992.992,0,1,1-.97.992A.968.968,0,0,1,24.3,23.809Zm9.7,0a.992.992,0,1,1-.97.992A.968.968,0,0,1,34.005,23.809Z"
                  transform="translate(-1.984 -7.938)"
                  fill="#040153"
                />
              </svg>
            </div>
            <div className="headderSections">
              <Link to="/mainPage/crm/addCustomer">
                <h4>Add Cust</h4>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33.444"
                height="39.876"
                viewBox="0 0 33.444 39.876"
              >
                <g id="surface1" transform="translate(-14 -9)">
                  <path
                    id="Path_3080"
                    data-name="Path 3080"
                    d="M29.9,9c-3.113,0-5.912,1.7-7.942,3.359a23.3,23.3,0,0,0-3.324,3.321l-.58.744.907.266a1.964,1.964,0,0,1,.774.53,3.416,3.416,0,0,1,.869,2.553,18.255,18.255,0,0,0,.415,3.872,1.763,1.763,0,0,0-.59,1.306,3.842,3.842,0,0,0,.229,1.123c.05.176.1.339.133.462s.04.244.04.151a1.627,1.627,0,0,0,1.6,1.588,8.327,8.327,0,0,0,3.145,6.143v2.4a41.652,41.652,0,0,0-5.419,2.07,18.549,18.549,0,0,0-4.125,2.537A4.924,4.924,0,0,0,14,45.017v3.859H47.444V45.017a4.924,4.924,0,0,0-2.033-3.593,18.549,18.549,0,0,0-4.125-2.537,41.652,41.652,0,0,0-5.419-2.07v-2.4a8.327,8.327,0,0,0,3.145-6.145,1.627,1.627,0,0,0,1.6-1.588c0,.093.008-.028.04-.151s.083-.286.133-.462a3.842,3.842,0,0,0,.229-1.123,1.77,1.77,0,0,0-.605-1.322A39.274,39.274,0,0,0,41.013,18a6.429,6.429,0,0,0-2.03-4.995,5.668,5.668,0,0,0-3.369-1.367,4.662,4.662,0,0,0-1.133-1.221A7.3,7.3,0,0,0,29.9,9Zm0,1.286a5.9,5.9,0,0,1,3.784,1.151,3.433,3.433,0,0,1,.962,1.063l.176.359h.4a4.575,4.575,0,0,1,2.907,1.118A5.039,5.039,0,0,1,39.726,18a36.678,36.678,0,0,1-.553,5.145h-.01c-.055,0-.045.013-.08.018V21.22a6.173,6.173,0,0,0-1.8-4.557,5.522,5.522,0,0,0-1.852-1.2l-.367-.123-.281.269a5.2,5.2,0,0,1-1.382.844,10.976,10.976,0,0,1-4.605.907A7.319,7.319,0,0,0,24.785,18.7a5.41,5.41,0,0,0-2.422,4.475c-.035-.005-.028-.02-.083-.02-.015,0-.03.005-.045.005a16.582,16.582,0,0,1-.342-3.382,4.817,4.817,0,0,0-1.234-3.449c-.269-.276-.329-.229-.563-.367a19.974,19.974,0,0,1,2.678-2.6C24.688,11.8,27.27,10.286,29.9,10.286Zm5.321,6.532a3.042,3.042,0,0,1,1.161.766A4.774,4.774,0,0,1,37.8,21.22v4.055l.967-.568c.166-.1.319-.181.427-.236.013-.008.018-.008.03-.015a.519.519,0,0,1,.505.492v0a6.131,6.131,0,0,1-.176.761c-.05.166-.1.334-.143.487a1.566,1.566,0,0,0-.083.487.335.335,0,0,1-.362.322H37.8v.879a7.067,7.067,0,0,1-5.826,6.959l-.183.03-.138.128a1.362,1.362,0,0,1-1.854,0l-.138-.128-.183-.03a7.067,7.067,0,0,1-5.826-6.959v-.879H22.482a.335.335,0,0,1-.362-.322,1.49,1.49,0,0,0-.085-.487c-.043-.153-.093-.322-.143-.487a5.936,5.936,0,0,1-.173-.761.52.52,0,0,1,.505-.495c.013.008.018.008.03.015.108.055.261.141.427.236l.967.568V23.182a4.017,4.017,0,0,1,1.874-3.432,6.328,6.328,0,0,1,3.271-1.1,12.306,12.306,0,0,0,5.14-1.022A4.51,4.51,0,0,0,35.224,16.818Zm-8.04,7.617a.965.965,0,1,0,.965.965A.965.965,0,0,0,27.185,24.436Zm7.075,0a.965.965,0,1,0,.965.965A.965.965,0,0,0,34.26,24.436Zm-7.4,10.821a8.3,8.3,0,0,0,2.213.794,2.533,2.533,0,0,0,3.284,0,8.182,8.182,0,0,0,2.221-.794v3.769a4.2,4.2,0,0,1-3.859,2.13,4.2,4.2,0,0,1-3.859-2.13Zm-1.286,2.914v1.208l.068.138a5.867,5.867,0,0,0,10.155,0l.068-.138V38.171a39.335,39.335,0,0,1,4.871,1.882A17.61,17.61,0,0,1,44.573,42.4a3.755,3.755,0,0,1,1.585,2.618V47.59H15.286V45.017A3.755,3.755,0,0,1,16.872,42.4a17.61,17.61,0,0,1,3.834-2.347A39.335,39.335,0,0,1,25.577,38.171Zm-7.718,6.846a.643.643,0,1,0,.643.643A.644.644,0,0,0,17.859,45.017Zm2.573,0a.643.643,0,1,0,.643.643A.644.644,0,0,0,20.432,45.017Zm2.573,0a.643.643,0,1,0,.643.643A.644.644,0,0,0,23,45.017Zm2.573,0a.643.643,0,1,0,.643.643A.644.644,0,0,0,25.577,45.017Zm2.573,0a.643.643,0,1,0,.643.643A.644.644,0,0,0,28.15,45.017Zm2.573,0a.643.643,0,1,0,.643.643A.644.644,0,0,0,30.722,45.017Zm2.573,0a.643.643,0,1,0,.643.643A.644.644,0,0,0,33.295,45.017Zm2.573,0a.643.643,0,1,0,.643.643A.644.644,0,0,0,35.867,45.017Zm2.573,0a.643.643,0,1,0,.643.643A.644.644,0,0,0,38.44,45.017Zm2.573,0a.643.643,0,1,0,.643.643A.644.644,0,0,0,41.013,45.017Zm2.573,0a.643.643,0,1,0,.643.643A.644.644,0,0,0,43.585,45.017Z"
                    fill="#040153"
                  />
                </g>
              </svg>
            </div>

            <div className="headderSections">
              <Link to="/mainPage/crm/customerDetail">
                <h4>Show all Cust</h4>
              </Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="27"
                viewBox="0 0 30 27"
              >
                <path
                  id="Path_3081"
                  data-name="Path 3081"
                  d="M29,3H5A3.006,3.006,0,0,0,2,6V27a3.006,3.006,0,0,0,3,3H29a3.006,3.006,0,0,0,3-3V6A3.006,3.006,0,0,0,29,3ZM7.25,27H5.75A.748.748,0,0,1,5,26.25v-1.5A.748.748,0,0,1,5.75,24h1.5a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,7.25,27Zm0-6H5.75A.748.748,0,0,1,5,20.25v-1.5A.748.748,0,0,1,5.75,18h1.5a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,7.25,21Zm0-6H5.75A.748.748,0,0,1,5,14.25v-1.5A.748.748,0,0,1,5.75,12h1.5a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,7.25,15Zm0-6H5.75A.748.748,0,0,1,5,8.25V6.75A.748.748,0,0,1,5.75,6h1.5A.748.748,0,0,1,8,6.75v1.5A.748.748,0,0,1,7.25,9Zm6,18h-3a.748.748,0,0,1-.75-.75v-1.5a.748.748,0,0,1,.75-.75h3a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,13.25,27Zm0-6h-3a.748.748,0,0,1-.75-.75v-1.5a.748.748,0,0,1,.75-.75h3a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,13.25,21Zm0-6h-3a.748.748,0,0,1-.75-.75v-1.5a.748.748,0,0,1,.75-.75h3a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,13.25,15Zm0-6h-3a.748.748,0,0,1-.75-.75V6.75A.748.748,0,0,1,10.25,6h3a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,13.25,9Zm9,18h-1.5a.748.748,0,0,1-.75-.75v-1.5a.748.748,0,0,1,.75-.75h1.5a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,22.25,27Zm0-6h-1.5a.748.748,0,0,1-.75-.75v-1.5a.748.748,0,0,1,.75-.75h1.5a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,22.25,21Zm0-6h-1.5a.748.748,0,0,1-.75-.75v-1.5a.748.748,0,0,1,.75-.75h1.5a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,22.25,15Zm0-6h-1.5A.748.748,0,0,1,20,8.25V6.75A.748.748,0,0,1,20.75,6h1.5a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,22.25,9Zm6,18h-3a.748.748,0,0,1-.75-.75v-1.5a.748.748,0,0,1,.75-.75h3a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,28.25,27Zm0-6h-3a.748.748,0,0,1-.75-.75v-1.5a.748.748,0,0,1,.75-.75h3a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,28.25,21Zm0-6h-3a.748.748,0,0,1-.75-.75v-1.5a.748.748,0,0,1,.75-.75h3a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,28.25,15Zm0-6h-3a.748.748,0,0,1-.75-.75V6.75A.748.748,0,0,1,25.25,6h3a.748.748,0,0,1,.75.75v1.5A.748.748,0,0,1,28.25,9Z"
                  transform="translate(-2 -3)"
                  fill="#040153"
                />
              </svg>
            </div>
          </div>
        </>
      )}

      <div className="Crm__logoAndSearch__Part">
        <div className="logo__section">
          {!avilable && !userFound && (
            <div className="Crm__logo__section">
              <h3>Logo</h3>
            </div>
          )}
        </div>
        <div className="search__section">
          <div className="serch__and__btn__wrapper">
            <div className="search__section__wrapper">
              <div className="search__box">
                <SearchIcon />
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Enter Customer Mobile or Telephone Number"
                />
              </div>
            </div>
            {number ? (
              <button onClick={handleSearch}>
                <h3>Search !</h3>
              </button>
            ) : (
              <button style={{ cursor: "not-allowed" }}>
                <h3>Search !</h3>
              </button>
            )}
          </div>
        </div>

        <div className="result">
          {userFound && <SingleCustomerDetails  number={number}/>}

          {!userFound && avilable && (
            <div className="noResultfound__and__addCustomer">
              <h1>Not Found</h1>
              <p>
                Sorry,we cant find a customer with this telephone number, click
                the button below to create a new customer.
              </p>
              <div className="Create__new_customer__button">
                <AccountBoxIcon />
                <Link to="/mainPage/crm/addCustomer">
                  <h4>New Customer</h4>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CrmFront;
