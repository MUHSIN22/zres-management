import React, { useState } from 'react'
import './SmsSuccess.scss'

export default function SmsSuccess() {
    const [SuccessResult, setSuccessResult] = useState(true);
    const [failResult, setFailResult] = useState(false);
  
    
  
    const handleExit = () => {
      setSuccessResult(false);
      setFailResult(false);
    };
  return (

    <div>
    {SuccessResult &&  (
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
  </div>)}
  </div>
  )
}
