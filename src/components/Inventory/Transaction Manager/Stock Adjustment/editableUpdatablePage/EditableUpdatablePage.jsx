import React from "react";
import "./editableUpdatablePage.scss";
function EditableUpdatablePage({ setEditableUpdatable, setMainTableView }) {
  return (
    <div className="EditableUpdatablePage">
      <div className="headderName">
        <h3>Stock Adjustment</h3>
      </div>

      {/* top form section above table */}
      <div className="top__Section">
        <div className="left__Section">
          <div className="top">
            <div className="input__sections">
              <h5>Ref No</h5>
              <input type="text" />
            </div>
          </div>
          <div className="bottom">
            <div className="input__sections">
              <h5>To Date</h5>
              <input type="date" />
            </div>
          </div>
        </div>
      </div>

      {/* ends */}

      {/* mid table */}
      <div className="mid__section">
        <div className="table__sections">
          <table className="table">
            <thead>
              <tr>
                <th>SINo</th>
                <th>Product</th>
                <th>Batch</th>
                <th>Expiry</th>
                <th>Stock</th>
                <th>Qty Add</th>
                <th>Qty Deduct</th>
                <th>MRP</th>
                <th>GST</th>
                <th>Amount</th>
                <th>Amount Deduct</th>
              </tr>
            </thead>
            <tbody>
              <tr contenteditable="true">
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
          </table>
        </div>
        <div className="total__section">
          <div className="totalss disc">Amount : 0.000</div>
          <div className="totalss">Amount Deduct : 1000</div>
        </div>
      </div>
      {/* ends */}

      {/* bottom section */}
      <div className="bottom__sections">
        <div className="bottom__btn__section">
          <button>Update</button>
          <button>Delete</button>
          <button
            onClick={() => {
              setMainTableView(true);
              setEditableUpdatable(false);
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

export default EditableUpdatablePage;
