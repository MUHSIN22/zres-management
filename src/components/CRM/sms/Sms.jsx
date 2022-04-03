import React, { useEffect, useState } from "react";
import "./sms.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import Bulk from "./SmsSections/Bulk/Bulk";
import Personalized from "./SmsSections/Personalized/Personalized";
import { Link, Outlet } from "react-router-dom";

function Sms() {

  const [SuccessResult, setSuccessResult] = useState(true);
  const [failResult, setFailResult] = useState(false);

  

  const handleExit = () => {
    setSuccessResult(false);
    setFailResult(false);
  };

  return (
    <div className="sms">
      {/* send result overlayer */}

      {SuccessResult && !failResult && (
        <div className="sendresult__overlayer">
          <div className="greybacground__overlayer"></div>
          <div className="send__result__SUCESS">
            <div className="result__headder"></div>
            <div className="result__details">
              <h3>Yes, Done !</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="155.007"
                height="106.568"
                viewBox="0 0 155.007 106.568"
              >
                <path
                  id="Path_3070"
                  data-name="Path 3070"
                  d="M77.5,5C57.56,5,41.855,20.156,39.66,39.513A23.732,23.732,0,0,0,21.041,55.105C9.12,58.549,0,69.183,0,82.5a29,29,0,0,0,29.064,29.064h96.88a28.677,28.677,0,0,0,18.922-50.559,33.646,33.646,0,0,0-31.789-31.486C107.249,15.331,93.871,5,77.5,5Zm0,9.688a28.838,28.838,0,0,1,27.853,20.739l1.06,3.481h5a24.267,24.267,0,0,1,24.22,24.22V65.55l1.968,1.514a19.712,19.712,0,0,1,7.72,15.44,18.968,18.968,0,0,1-19.376,19.376H29.064a19.3,19.3,0,0,1-3.482-38.3l3.179-.605.605-3.179A14.375,14.375,0,0,1,43.6,48.6H48.44V43.752A28.715,28.715,0,0,1,77.5,14.688ZM72.66,38.908V70.7L61.61,59.646,54.646,66.61,74.022,85.986l3.481,3.33,3.482-3.33L100.361,66.61,93.4,59.646,82.348,70.7V38.908Z"
                  transform="translate(0 -5)"
                  fill="#fcfcfc"
                />
              </svg>
            </div>
            <div className="result__btn" onClick={() => handleExit()}>
              <button>
                <h4>Continue</h4>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* cancel overlay */}
      {!SuccessResult && failResult && (
        <div className="sendresult__overlayer">
          <div className="greybacground__overlayer"></div>
          <div className="send__result__fAIL">
            <div className="result__headder"></div>
            <div className="result__details">
              <h3>Error!</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="155.007"
                height="106.568"
                viewBox="0 0 155.007 106.568"
              >
                <g
                  id="Group_2099"
                  data-name="Group 2099"
                  transform="translate(3036.504 -21026.432)"
                >
                  <path
                    id="Path_3070"
                    data-name="Path 3070"
                    d="M77.5,5C57.56,5,41.855,20.156,39.66,39.513A23.732,23.732,0,0,0,21.041,55.105C9.12,58.549,0,69.183,0,82.5a29,29,0,0,0,29.064,29.064h96.88a28.677,28.677,0,0,0,18.922-50.559,33.646,33.646,0,0,0-31.789-31.486c-5.426-13.212-17.4-23.079-32.523-24.4C79.748,5.049,78.633,5,77.5,5Zm0,9.688a28.838,28.838,0,0,1,27.853,20.739l1.06,3.481h5a24.267,24.267,0,0,1,24.22,24.22V65.55l1.968,1.514a19.712,19.712,0,0,1,7.72,15.44,18.968,18.968,0,0,1-19.376,19.376H29.064a19.3,19.3,0,0,1-3.482-38.3l3.179-.605.605-3.179A14.375,14.375,0,0,1,43.6,48.6H48.44V43.752A28.715,28.715,0,0,1,77.5,14.688ZM54.646,66.61Z"
                    transform="translate(-3036.504 21021.432)"
                    fill="#fcfcfc"
                  />
                  <g id="surface1" transform="translate(-2981.915 21060.086)">
                    <path
                      id="Path_3071"
                      data-name="Path 3071"
                      d="M45.208,40.339l-4.879,4.869a2.3,2.3,0,0,1-3.246,0L24.9,33.026,12.72,45.208a2.31,2.31,0,0,1-3.255,0L4.586,40.339a2.31,2.31,0,0,1,0-3.255L16.768,24.9,4.586,12.72a2.327,2.327,0,0,1,0-3.255L9.464,4.586a2.31,2.31,0,0,1,3.255,0L24.9,16.777,37.083,4.586a2.3,2.3,0,0,1,3.246,0l4.879,4.869a2.33,2.33,0,0,1,.009,3.264L33.026,24.9,45.208,37.083A2.31,2.31,0,0,1,45.208,40.339Z"
                      transform="translate(0 0)"
                      fill="#fcfcfc"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="result__btn" onClick={() => handleExit()}>
              <button>
                <h4>Try Again</h4>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* main sms body  */}

      <div className="sms__headder">
        <h2>SMS</h2>
      </div>
      <div className="sms_category">
        <div
          className=
            "option__box personalised"  
        >
          <h5>Personalized Message</h5>
        </div>
        <div
          className="option__box bulk" 
        >
          <h5>Bulk Message</h5>
        </div>
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
             {/* <Personalized />
             <Bulk /> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Sms;
