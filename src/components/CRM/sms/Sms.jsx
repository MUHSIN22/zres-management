import React, { useEffect, useState } from "react";
import "./sms.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import Bulk from "./SmsSections/Bulk/Bulk";
import Personalized from "./SmsSections/Personalized/Personalized";
import { Link, Outlet } from "react-router-dom";
import SmsSuccess from "./SmsSections/SmsSuccess/SmsSuccess";

function Sms() {

  const [SuccessResult, setSuccessResult] = useState(false);
  const [failResult, setFailResult] = useState(false);

  

  const handleExit = () => {
    setSuccessResult(false);
    setFailResult(false);
  };

  return (
    <div className="sms">
      <div className="sms__headder">
        <h2>SMS</h2>
      </div>
      <div className="sms_category">
       <Link to="/mainPage/crm/sms/personalised">
        <div
          className=
            "option__box personalised"  
        >
          <h5>Personalized Message</h5>
        </div>
        </Link>
        <Link to="/mainPage/crm/sms/Bulk">
        <div
          className="option__box bulk" 
        >
          <h5>Bulk Message</h5>
        </div>
        </Link>
        <div className="line_passer"></div>
      </div>
      <div className="sms__body">
        <div className="sms_body__left">
          <div className="different__sections">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32.133"
              height="47.773"
              viewBox="0 0 32.133 47.773"
            >
              <g id="surface1" transform="translate(-6 -3)">
                <path
                  id="Path_3065"
                  data-name="Path 3065"
                  d="M22.066,3A16.1,16.1,0,0,0,6,19.066c0,2.51,1,5.362,2.385,8.507a99.688,99.688,0,0,0,5,9.623c3.605,6.227,7.21,11.443,7.21,11.443l1.471,2.134,1.471-2.134s3.605-5.216,7.21-11.443a101.386,101.386,0,0,0,5.007-9.623c1.381-3.145,2.378-6,2.378-8.507A16.1,16.1,0,0,0,22.066,3Zm0,3.57a12.467,12.467,0,0,1,12.5,12.5,21.645,21.645,0,0,1-2.085,7.071,96.789,96.789,0,0,1-4.811,9.275c-2.8,4.818-4.554,7.329-5.6,8.87-1.046-1.541-2.8-4.051-5.6-8.87a98.543,98.543,0,0,1-4.819-9.275A21.77,21.77,0,0,1,9.57,19.066,12.467,12.467,0,0,1,22.066,6.57Zm0,3.57L14.926,15.5v8.926h5.355V19.066h3.57v5.355h5.355V15.5Z"
                  transform="translate(0 0)"
                  fill="#040153"
                />
              </g>
            </svg>
            <h4>Address</h4>
            <h6>The Oman Avenue, 145/4</h6>
          </div>
          <div className="different__sections">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.726"
              height="34.039"
              viewBox="0 0 31.726 34.039"
            >
              <g id="surface1" transform="translate(-1.16 -0.188)">
                <path
                  id="Path_3066"
                  data-name="Path 3066"
                  d="M29.331,23.879c-2.055-1.76-4.146-2.829-6.175-1.07l-1.212,1.059c-.89.774-2.539,4.373-8.914-2.966s-2.587-8.472-1.691-9.23l1.217-1.064c2.018-1.76,1.254-3.978-.2-6.259l-.88-1.38C10.017.7,8.415-.8,6.392.956l-1.1.959a10.253,10.253,0,0,0-4,6.8C.56,13.543,2.867,19.08,8.146,25.149s10.442,9.13,15.326,9.078a10.353,10.353,0,0,0,7.292-3.019l1.1-.964c2.023-1.749.769-3.54-1.291-5.3Z"
                  transform="translate(0 0)"
                  fill="#040153"
                />
              </g>
            </svg>
            <h4>Phone</h4>

            <h6>+91 111 897 58 25</h6>
          </div>
          <div className="different__sections">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.532"
              height="21.557"
              viewBox="0 0 33.532 21.557"
            >
              <path
                id="Path_3067"
                data-name="Path 3067"
                d="M2.828,5.922l13.5,12.6a2.081,2.081,0,0,0,2.845,0l13.507-12.6ZM.988,7.477V25.786l9.467-9.467Zm33.532,0-9.467,8.842,9.467,9.467ZM12.205,17.954,2.681,27.479H32.828L23.3,17.954l-2.484,2.318a4.51,4.51,0,0,1-6.125,0Z"
                transform="translate(-0.988 -5.922)"
                fill="#040153"
              />
            </svg>
            <h4>E-mail</h4>
            <h6>businessomanaccount145@gmail.com</h6>
          </div>
        </div>
        <div className="sms__body__right">
          <div className="messageSection__container">
        <Outlet ss={handleExit}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sms;
