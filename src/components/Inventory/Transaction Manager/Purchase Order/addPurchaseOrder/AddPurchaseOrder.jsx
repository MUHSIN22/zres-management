import React, { useState } from "react";
import "./AddPurchaseOrder.scss";
import DatePicker from "react-datepicker";
import moment from "moment";
import SucessSnackbars from "../../../../basic components/sucessSidePopup";
import FailSnackbars from "../../../../basic components/failSnackBar";
import { inventoryServices } from "../../../../../Services/InventoryServices";

const mainData = {
  OrderDate: "",
  OrderNo: "",
  supplierid: "",
  Address: "",
  POid: "",
  UserID: "",
  CMPid: "",
};

const innerTable = {
  PrdctId: "",
  Rate: "",
  Qty: "",
  Remarks: "",
  Expiry: "",
  Amount: "",
};

function PurchaseDetailsAdd({ setAddNewBtn, setMainTableView }) {
  const [datainTable, setDatainTable] = useState([]);
  const [OrderDate, setOrderDate] = useState(null);
  const [expyryDate, setExpiryDate] = useState(null);
  const [Mainvalues, setMainValues] = useState('');
  const [subData, setSubdata] = useState('');
  const convertDate = moment(OrderDate).format("DD-MM-YYYY");
  const cnvertedExpiry = moment(expyryDate).format("DD-MM-YYYY");
  const [messageToPassToSnackbar, setMessageToPassToSnackbar] = useState("");

  const [snackbarSucess, setSnackbarSucess] = useState(false);
  const [snackbarFail, setSnackBarFail] = useState(false);

  const handleOrderDate = (date) => {
    setOrderDate(date);
  };
  const handleExpiryrDate = (date) => {
    setOrderDate(date);
  };

  const handleAddDataToTable = (evt) => {
    const name = evt.target.value;
    setSubdata({
      ...subData,
      [evt.target.name]: name,
      Expiry: convertDate,
    });
  };

  const handleMainData = (evt) => {
    const name = evt.target.value;
    setMainValues({
      ...Mainvalues,
      [evt.target.name]: name,
      OrderDate: convertDate,
    });

    console.log("main valuess", Mainvalues,subData);
  };

  const handleDataforTable = (e) => {
    e.preventDefault();

    setDatainTable([...datainTable, subData]);
    console.log("subdata", datainTable, subData);
  };

  const handleEditTableData = (data) => {};

  const HandleUpdateData = (e) => {
    // e.preventDefault();
    // const code = values;
    // const ProductExsit = datainTable.find(
    //   (items) => items.HsnCode === code.HsnCode
    // );
    // if (ProductExsit) {
    //   setDatainTable(
    //     datainTable.map((item) =>
    //       item.HsnCode === code.HsnCode ? { ...ProductExsit, code } : item
    //     )
    //   );
    // }
  };

  const mainFormSubmit = (e,main,sub) => {
    e.preventDefault();
    inventoryServices.postPurchaseorder(main,sub)
    window.alert("form submited");
    console.log("dataToSend", Mainvalues, datainTable);
  };

  return (
    <>
      {snackbarSucess && (
        <SucessSnackbars MessageToPass={messageToPassToSnackbar} />
      )}
      {snackbarFail && (
        <FailSnackbars MessageToPass={messageToPassToSnackbar} />
      )}
      <div className="purchaseDetailsAdds">
        <div className="headderName">
          <h3>Purchase Order</h3>
        </div>

        {/* top form section above table */}
        <div className="top__Section">
          <div className="left__Section">
            <div className="top">
              <div className="input__sections">
                <h5>Order.No</h5>
                <input
                  type="number"
                  name="OrderNo"
                  value={Mainvalues.OrderNo}
                  onChange={handleMainData}
                />
              </div>
              <div className="input__sections">
                <h5>Order.Date</h5>
                <DatePicker
                  selected={OrderDate}
                  onChange={(date) => handleOrderDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                  isClearable
                  placeholderText="dd/mm/yyyy"
                />
              </div>
            </div>
          </div>
          <div className="right__section">
            <div className="input__Sections">
              <h5>Supplier Name</h5>

              <select
              
                id=""
                name="supplierid"
                value={Mainvalues.supplierid}
                onChange={handleMainData}
              >
                <option value="1">ram</option>
                <option value="2">revi</option>
                <option value="3">kishor</option>
              </select>
            </div>

            <div className="input__Sections">
              <h5>Address</h5>{" "}
              <input
                type="text"
                name="Address"
                value={Mainvalues.Address}
                onChange={handleMainData}
              />
            </div>
          </div>
        </div>

        {/* ends */}

        <div className="add__deatils__for__table__section__area">
          <form autoComplete="off" onSubmit={handleDataforTable}>
            <div className="input__area__Section">
              <div className="left__input__areaa sectionss">
                <input
                  type="text"
                  name="PrdctId"
                  placeholder="Products"
                  onChange={handleAddDataToTable}
                  value={subData.PrdctId}
                />
                <input
                  type="number"
                  name="Qty"
                  placeholder="Qty"
                  onChange={handleAddDataToTable}
                  value={subData.Qty}
                />
                <input
                  type="number"
                  name="Rate"
                  placeholder="Rate"
                  onChange={handleAddDataToTable}
                  value={subData.Rate}
                />
              </div>
              <div className="right__input__areaa sectionss">
                <input
                  type="number"
                  name="Amount"
                  placeholder="Amound"
                  onChange={handleAddDataToTable}
                  value={subData.Amount}
                />
                <input
                  type="text"
                  name="Remarks"
                  placeholder="Remark"
                  onChange={handleAddDataToTable}
                  value={subData.Remarks}
                />
                <div className="button__sectionssss">
                  <button type="submit">Add Product</button>
                  <button type="button" onClick={HandleUpdateData}>
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* mid table */}
        <div className="mid__section">
          <div className="table__sectionsss">
            <table className="table">
              <thead>
                <tr>
                  <th>SINO</th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Rate</th>
                  <th>Amound</th>
                  <th>Remark</th>
                </tr>
              </thead>
              <tbody>
                {datainTable.map((data, index) => (
                  <tr key={index} onClick={() => handleEditTableData(data)}>
                    <td>{index + 1}</td>
                    <td>{data?.PrdctId}</td>
                    <td>{data?.Qty}</td>
                    <td>{data?.Rate}</td>
                    <td>{data?.Amount}</td>
                    <td>{data?.Remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* ends */}

        {/* bottom section */}
        <div className="bottom__sections">
          <div className="bottom__btn__section">
            <button onClick={(e)=>mainFormSubmit(e,Mainvalues,subData)}>Save</button>

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
    </>
  );
}

export default PurchaseDetailsAdd;
