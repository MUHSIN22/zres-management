import React, { useState } from 'react'
import './Smsfailed.scss'

export default function SmsFailed() {
    const [SuccessResult, setSuccessResult] = useState(false);
    const [failResult, setFailResult] = useState(false);
  
    
  
    const handleExit = () => {
        
      setSuccessResult(false);
      setFailResult(false);
    };
  return (
    <div>
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
    </div>
  )
}
