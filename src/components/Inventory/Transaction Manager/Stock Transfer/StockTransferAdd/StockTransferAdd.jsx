import React from "react";
import "./stockTransferAdd.scss";
function StockTransferAdd({ setAddNewBtn, setMainTableView }) {
  return (
    <div className="StockTransferAdd">
      <div className="headderName">
        <h3>Stock Transfer</h3>
      </div>

      {/* top form section above table */}
      <div className="top__Section">
        <div className="left__Section">
          <div className="top">
            <div className="input__sections">
              <h5>Return No</h5>
              <input type="text" />
            </div>
            <div className="input__sections">
              <h5>Return Date</h5>
              <input type="date" />
            </div>
          </div>
          <div className="bottom">
            <div className="input__sections">
              <h5>Description</h5>
              <input type="text" className="invoiceno" />
            </div>
          </div>
        </div>
        <div className="right__section">
          <div className="radioBtn__Section">
            <h5>Payment Type</h5>
            <div className="radio__sec">
                <input type="radio" id="css" name="fav_language" value="CSS" /> {" "}
              <label for="css">Cash</label>
            </div>

            <div className="radio__sec">
              <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
              <label for="html">Credit</label>
            </div>
          </div>

          <div className="input__Sections">
            <h5>Branch</h5>

            <select name="" id="">
              <option value="">ram</option>
              <option value="">revi</option>
              <option value="">kishor</option>
            </select>
          </div>

          <div className="input__Sections">
            <h5>Address</h5> <input type="text" />
          </div>

          <div className="input__Sections">
            <input type="text" />
          </div>
        </div>
      </div>

      {/* ends */}

      {/* mid table */}
      <div className="mid__section">
        <div className="table__sectionsss">
          <table className="table">
            <thead>
              <tr>
                <th>Products</th>
                <th>HSN Code</th>
                <th>BatchNo</th>
                <th>Expiry</th>
                <th>Qty</th>
                <th>Free Qty</th>
                <th>Rate</th>
                <th>Disc</th>
                <th>GST</th>
                <th>Tax Param</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Suger</td>
                <td>3004104</td>
                <td>e201200</td>
                <td>12/2021</td>
                <td>20kg</td>
                <td>0</td>
                <td>100</td>
                <td>0</td>
                <td>12%</td>
                <td>qty</td>
                <td>1000</td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Disc total</th>
                <th></th>
                <th></th>
                <th>Total</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      {/* ends */}

      {/* bottom section */}
      <div className="bottom__sections">
        <div className="top__input__section">
          <div className="sections">
            <div className="input__section" style={{ marginRight: "35px" }}>
              <h5>Discount</h5>
              <input type="text" />
            </div>

            <div className="input__section">
              <h5>CGST</h5>
              <input type="text" />
            </div>

            <div className="input__section">
              <h5>Add Disc</h5>
              <input type="text" />
            </div>
          </div>
          <div className="sections">
            <div className="input__section" style={{ marginRight: "33px" }}>
              <h5>Gross Amt</h5>
              <input type="text" />
            </div>

            <div className="input__section">
              <h5>SGST</h5>
              <input type="text" />
            </div>

            <div className="input__section">
              <h5>Write Off</h5>
              <input type="text" />
            </div>
          </div>
          <div className="sections">
            <div className="input__section">
              <h5>Credit Note</h5>
              <input type="text" />
            </div>

            <div className="input__section">
              <h5>Total Tax</h5>
              <input type="text" />
            </div>

            <div className="input__section">
              <h5 className="netAmt">Net Amt</h5>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="bottom__btn__section">
          <button
            onClick={() => {
              setAddNewBtn(false);
              setMainTableView(true);
            }}
          >
            Save
          </button>
          <button>Print</button>
          <button
            onClick={() => {
              setAddNewBtn(false);
              setMainTableView(true);
            }}
          >
            Exit
          </button>
        </div>
      </div>

      {/* ends */}
    </div>
  );
}

export default StockTransferAdd;
