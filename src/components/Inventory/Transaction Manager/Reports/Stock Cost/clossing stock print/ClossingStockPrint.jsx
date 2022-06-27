import React, { useState } from "react";
import "./clossingStockPrint.scss";
import SucessfullMag from "./SucessfullMessage/SucessfullMag";

import CancelIcon from "@mui/icons-material/Cancel";
const Date = [
  {
    SINO: "1",

    productCode: 541,
    Amound: 10000,

    productName: "sugar",
    stock: 50,
  },

  {
    SINO: "2",

    productCode: 341,
    Amound: 10000,

    productName: "oil",
    stock: 10,
  },

  {
    SINO: "3",

    productCode: 241,
    Amound: 100000,

    productName: "Potato",
    stock: 30,
  },

  {
    SINO: "4",

    productCode: 341,
    Amound: 10000,

    productName: "Onion",
    stock: 10,
  },
];
function ClossingStockPrint({ setSendingToPrint }) {
  const [printSucsess, setPrintSucess] = useState(false);
  const [totalClosing,setTotalClosing] = useState(0)
  const [totalActual,setTotalActual] = useState(0)

 

  return (
    <>
      {printSucsess && (
        <SucessfullMag
          setPrintSucess={setPrintSucess}
          messagetoPrint={"Print sucessfully"}
        />
      )}

      <div className="ClossingStockPrint">
        <div className="top__section">
          <div className="icons__sections">
            <div
              className="buttons__section"
              onClick={() => setSendingToPrint(false)}
            >
              <CancelIcon />
            </div>
            <div
              className="buttons__section"
              onClick={() => setPrintSucess(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.674"
                height="16.674"
                viewBox="0 0 16.674 16.674"
              >
                <g id="surface1" transform="translate(-4 -3)">
                  <path
                    id="Path_3111"
                    data-name="Path 3111"
                    d="M4,23.585H20.674V20.667A1.666,1.666,0,0,0,19.006,19H5.667A1.666,1.666,0,0,0,4,20.667Z"
                    transform="translate(0 -9.33)"
                    fill="#616161"
                  />
                  <path
                    id="Path_3112"
                    data-name="Path 3112"
                    d="M9,16H21.505v1.251H9Z"
                    transform="translate(-2.916 -7.581)"
                    fill="#424242"
                  />
                  <path
                    id="Path_3113"
                    data-name="Path 3113"
                    d="M5.667,34H19.006a1.666,1.666,0,0,0,1.667-1.667V29H4v3.335A1.666,1.666,0,0,0,5.667,34"
                    transform="translate(0 -15.162)"
                    fill="#424242"
                  />
                  <path
                    id="Path_3114"
                    data-name="Path 3114"
                    d="M39,22.417A.417.417,0,1,0,39.417,22a.418.418,0,0,0-.417.417"
                    transform="translate(-20.41 -11.08)"
                    fill="#00e676"
                  />
                  <path
                    id="Path_3115"
                    data-name="Path 3115"
                    d="M20.88,34.251H9.625a.625.625,0,1,1,0-1.251H20.88a.625.625,0,1,1,0,1.251"
                    transform="translate(-2.916 -17.495)"
                    fill="#242424"
                  />
                  <path
                    id="Path_3116"
                    data-name="Path 3116"
                    d="M11,6H21.838v5.419H11Z"
                    transform="translate(-4.082 -1.749)"
                    fill="#90caf9"
                  />
                  <path
                    id="Path_3117"
                    data-name="Path 3117"
                    d="M11,36H21.838v2.918H11Z"
                    transform="translate(-4.082 -19.244)"
                    fill="#90caf9"
                  />
                  <path
                    id="Path_3118"
                    data-name="Path 3118"
                    d="M11,34H21.838v.834H11Z"
                    transform="translate(-4.082 -18.078)"
                    fill="#42a5f5"
                  />
                  <path
                    id="Path_3119"
                    data-name="Path 3119"
                    d="M16,38h3.752v.834H16Z"
                    transform="translate(-6.998 -20.41)"
                    fill="#1976d2"
                  />
                  <path
                    id="Path_3120"
                    data-name="Path 3120"
                    d="M27,38h2.084v.834H27Z"
                    transform="translate(-13.413 -20.41)"
                    fill="#1976d2"
                  />
                  <path
                    id="Path_3121"
                    data-name="Path 3121"
                    d="M21.084,12.5,19,10h4.168Z"
                    transform="translate(-8.747 -4.082)"
                    fill="#1976d2"
                  />
                  <path
                    id="Path_3122"
                    data-name="Path 3122"
                    d="M22,3h1.667V6.752H22Z"
                    transform="translate(-10.497)"
                    fill="#1976d2"
                  />
                </g>
              </svg>

              <h4>Print</h4>
            </div>
            <div className="buttons__section">
              <svg
                id="surface1"
                xmlns="http://www.w3.org/2000/svg"
                width="16.349"
                height="14.715"
                viewBox="0 0 16.349 14.715"
              >
                <path
                  id="Path_3087"
                  data-name="Path 3087"
                  d="M20.131,6H14.712A.713.713,0,0,0,14,6.712V9.68h6.131Z"
                  transform="translate(-9.913 -6)"
                  fill="#169154"
                />
                <path
                  id="Path_3088"
                  data-name="Path 3088"
                  d="M14,33.055V36a.713.713,0,0,0,.712.712h5.419V33.055Z"
                  transform="translate(-9.913 -21.997)"
                  fill="#18482a"
                />
                <path
                  id="Path_3089"
                  data-name="Path 3089"
                  d="M14,15h6.131v3.679H14Z"
                  transform="translate(-9.913 -11.324)"
                  fill="#0c8045"
                />
                <path
                  id="Path_3090"
                  data-name="Path 3090"
                  d="M14,24h6.131v3.7H14Z"
                  transform="translate(-9.913 -16.645)"
                  fill="#17472a"
                />
                <path
                  id="Path_3091"
                  data-name="Path 3091"
                  d="M34.419,6H29V9.68h6.131V6.712A.713.713,0,0,0,34.419,6Z"
                  transform="translate(-18.782 -6)"
                  fill="#29c27f"
                />
                <path
                  id="Path_3092"
                  data-name="Path 3092"
                  d="M29,33.055v3.656h5.419A.713.713,0,0,0,35.131,36V33.055Z"
                  transform="translate(-18.782 -21.997)"
                  fill="#27663f"
                />
                <path
                  id="Path_3093"
                  data-name="Path 3093"
                  d="M29,15h6.131v3.679H29Z"
                  transform="translate(-18.782 -11.324)"
                  fill="#19ac65"
                />
                <path
                  id="Path_3094"
                  data-name="Path 3094"
                  d="M29,24h6.131v3.7H29Z"
                  transform="translate(-18.782 -16.645)"
                  fill="#129652"
                />
                <path
                  id="Path_3095"
                  data-name="Path 3095"
                  d="M11.488,22.175h-6.8A.688.688,0,0,1,4,21.488v-6.8A.688.688,0,0,1,4.687,14h6.8a.688.688,0,0,1,.687.687v6.8A.688.688,0,0,1,11.488,22.175Z"
                  transform="translate(-4 -10.73)"
                  fill="#0c7238"
                />
                <path
                  id="Path_3096"
                  data-name="Path 3096"
                  d="M9.642,19h.974l.792,1.534L12.245,19h.91L11.9,21.044l1.284,2.044h-.961l-.862-1.606L10.5,23.087H9.527l1.3-2.052Z"
                  transform="translate(-7.268 -13.686)"
                  fill="#fff"
                />
              </svg>

              <h4>Export Excel</h4>
            </div>
          </div>

          <div className="headding__section">
            <h2>Show Name and Address</h2>
          </div>

          <div className="printedby__section">
            <h4>Printed by : Admin,SystemName,02/12/2021 1:40:19 pm </h4>
          </div>
        </div>

        <div className="bottom__sectionss">
          <div className="table__sections">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th colspan="4">According to Stock</th>
                  <th colspan="4">Verified Stock</th>
                </tr>

                <tr>
                  <th>SINo</th>
                  <th>Product Name</th>
                  <th>Batch No</th>
                  <th>Quantity</th>
                  <th>Expiry</th>
                  <th>Mrp</th>

                  <th>Batch No</th>
                  <th>Quantity</th>
                  <th>Expiry</th>
                  <th>Mrp</th>
                </tr>
              </thead>
              <tbody>
                {Date.map((datas) => (
                  <tr keys={datas.id}>
                    <td>{datas.SINO}</td>
                    <td>{datas.productName}</td>
                    <td>{totalClosing}</td>
                    <td>{totalActual}</td>
                    <td>Dec/21</td>
                    <td>1200</td>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="checked___by__section">
            <div className="top__section">
              <h5>Checked By</h5>
              <h5>Verified By</h5>
              <h5>Entered By</h5>
            </div>

            <div className="data__and__other">
              <h5>Date</h5>

              <div className="person__Section">
                <h4>S/d</h4>
                <h4>GENERAL MANAGER</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClossingStockPrint;
