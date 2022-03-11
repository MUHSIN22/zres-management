import React from "react";
import { Link } from "react-router-dom";
import "./addAddress.scss";

function AddAddress({ handleCloseCusetomerAdd }) {
  return (
    <>
      <div className="Add_Address">
        <div className="Addresss__headder">
          <h4>Address</h4>
          <hr />
        </div>

        <div className="Address__body">
          <div className="customer__body__fields">
            <h6>Delivery area</h6>
            <div className="mandory__box">
              <input type="text" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="81"
                viewBox="0 0 26 81"
              >
                <text
                  id="_"
                  data-name="*"
                  transform="translate(0 66)"
                  fill="#c30208"
                  font-size="61"
                  font-family="SegoeUI, Segoe UI"
                >
                  <tspan x="0" y="0">
                    *
                  </tspan>
                </text>
              </svg>
            </div>
          </div>
          <div className="customer__body__fields">
            <h6>Location/Branch</h6>
            <select name="" id="">
              <option value="">Location/Branch</option>
              <option value=""></option>
            </select>
          </div>
          <div className="customer__body__fields">
            <h6>Building/Villa</h6>

            <div className="mandory__box">
              <input type="text" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="81"
                viewBox="0 0 26 81"
              >
                <text
                  id="_"
                  data-name="*"
                  transform="translate(0 66)"
                  fill="#c30208"
                  font-size="61"
                  font-family="SegoeUI, Segoe UI"
                >
                  <tspan x="0" y="0">
                    *
                  </tspan>
                </text>
              </svg>
            </div>
          </div>
          <div className="customer__body__fields">
            <h6>Street</h6>
            <input type="text" />
          </div>

          <div className="customer__body__fields">
            <h6>Flat Number</h6>
            <input type="text" />
          </div>

          <div className="customer__body__fields">
            <h6>Nearest Landmark</h6>
            <input type="text" />
          </div>

          <div className="customer__body__fields">
            <h6>City</h6>

            <div className="mandory__box">
              <input type="text" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="81"
                viewBox="0 0 26 81"
              >
                <text
                  id="_"
                  data-name="*"
                  transform="translate(0 66)"
                  fill="#c30208"
                  font-size="61"
                  font-family="SegoeUI, Segoe UI"
                >
                  <tspan x="0" y="0">
                    *
                  </tspan>
                </text>
              </svg>
            </div>
          </div>

          <div className="customer__body__fields">
            <h6>State</h6>
            <select name="" id="">
              <option value="">Kannur</option>
            </select>
          </div>
        </div>
        <hr />
      </div>

      <div className="save__btn">
        <button className="save__Btn">Save</button>
        <button className="cancel__Btn" onClick={handleCloseCusetomerAdd}>
          Cancel
        </button>
      </div>
    </>
  );
}

export default AddAddress;
