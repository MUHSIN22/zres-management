import React, { useEffect, useState } from "react";
import "./editableUpdatablePage.scss";
function EditableUpdatablePage({ setEditableUpdatable, setMainTableView,editable,status }) {
  console.log(editable)

const [editabledata,setEditableData] = useState([])
const [total,setTotal] = useState ({
  Amount: 0,
  AmountDeduct: 0,
})


 const handleChange =(e)=>{
    const name = e.target.name
    setEditableData({
      ...editabledata,
      [name]:e.target.value
    })

  }

  useEffect(() => {
    if(status){
    setEditableData({
      refNo:editable.RefNo,
      toDate:editable.ToDate
    })
  }

  },[])

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
              <input name="refNo" onChange={handleChange} value={editabledata.refNo} type="text" />
            </div>
          </div>
          <div className="bottom">
            <div className="input__sections">
              <h5>To Date</h5>
              <input name="toDate" onChange={handleChange} value={editabledata.toDate} type="date" />
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
                <td>{editable.ProductName}</td>
                  <td>{editable.BatchNo}</td>
                  <td>{editable.Expiry}</td>
                  <td>{editable.Stock}</td>
                  <td>{editable.QtyAdd}</td>
                  <td>{editable.QtyDeduct}</td>
                  <td>{editable.Mrp}</td>
                  <td>{editable.Gst}</td>
                  <td>{editable.Amount}</td>
                  <td>{editable.DeductAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="total__section">
          <div className="totalss disc">Amount : {total.Amount}</div>
          <div className="totalss">Amount Deduct : {total.AmountDeduct}</div>
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
