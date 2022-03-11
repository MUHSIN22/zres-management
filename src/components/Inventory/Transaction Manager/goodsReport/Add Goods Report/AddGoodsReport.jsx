import React, { useState } from "react";
import "./addGoodsReport.scss";
import DatePicker from "react-datepicker";
import SucessSnackbars from "../../../../basic components/sucessSidePopup";
import FailSnackbars from "../../../../basic components/failSnackBar";
import moment from "moment";
const mainData = {
  PrchsId: "",
  RefNo: "",
  RefDate: "",
  TransDate: "",
  TransNo: "",
  Discription: "",
  BrachId: "",
  Address: "",
  GSTNo: "",
  GrandTotal: "",
  ProductsTotal: "",
  Status: "",
  PaymentType: "cash",
  CMPid: "1",
  UserID: "1",
  totalTax: "",
};

const innerTable = {
  HSNCode: "",
  BatchNo: "",
  Qty: "",
  Total: "",
  Expiry: "",
  ProdctId: "",
  FreeQty: "",
  Rate: "",
  Discount: "",
  GST: "",
  TAX: "",
  Name: "",
};
function AddGoodsReport({ setAddNewBtn, setMainTableView }) {
  const [invDate, setInventoryDate] = useState(null);
  const [arrivalDate, setArivalDate] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);
  const [Mainvalues, setMainValues] = useState(mainData);
  const [subData, setSubdata] = useState(innerTable);
  const [dataInTable, setDataInTable] = useState([]);
  const convertDate = moment(expiryDate).format("DD-MM-YYYY");
  const convertedArivalDate = moment(arrivalDate).format("DD-MM-YYYY");
  const convertedinvoiceDate = moment(invDate).format("DD-MM-YYYY");
  const [messageToPassToSnackbar, setMessageToPassToSnackbar] = useState("");

  const [snackbarSucess, setSnackbarSucess] = useState(false);
  const [snackbarFail, setSnackBarFail] = useState(false);

  const handleReflDate = (date) => {
    setArivalDate(date);
  };

  const handleTransDate = (date) => {
    setInventoryDate(date);
  };

  const handleExpiryDate = (date) => {
    setExpiryDate(date);
  };

  const [paymentTypeChecked, setPaymentTypeChecked] = useState("cash");
  const handlePaymentType = (e) => {
    const checked = e.target.checked;
    const name = e.target.value;
    if (name && checked === true) {
      setPaymentTypeChecked(name);
    }
  };
  console.log("pAYMENYtYPE cHECKK", paymentTypeChecked);

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
      PaymentType: paymentTypeChecked,
      RefDate: convertedinvoiceDate,
      TransDate: convertedArivalDate,
    });
  };

  const mainFormSubmit = (e) => {
    e.preventDefault();
    if (dataInTable.length == 0) {
      setSnackBarFail(true);
      setMessageToPassToSnackbar("Please Add Product");
      return;
    }
    window.alert("form submited");
    console.log("dataToSend", Mainvalues, dataInTable);
  };

  const handleDataforTable = (e) => {
    e.preventDefault();
    setDataInTable([...dataInTable, subData]);
  };

  const handleEditTableData = (data) => {
    // setValues(data);
  };

  const HandleUpdateData = (e) => {
    e.preventDefault();
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

  console.log("MAIN VALUES", Mainvalues);

  return (
    <>
      {snackbarSucess && (
        <SucessSnackbars MessageToPass={messageToPassToSnackbar} />
      )}
      {snackbarFail && (
        <FailSnackbars MessageToPass={messageToPassToSnackbar} />
      )}

      <div className="AddGoodsReport">
        <div className="headderName">
          <h3>Goods Receipt</h3>
        </div>

        {/* top form section above table */}
        <div className="top__Section">
          <div className="left__Section">
            <div className="top">
              <div className="input__sections">
                <h5 style={{ marginRight: "30px" }}>Ref No</h5>
                <input
                  type="number"
                  name="RefNo"
                  value={Mainvalues.RefNo}
                  onChange={handleMainData}
                  required
                />
              </div>
              <div className="input__sections" style={{ marginLeft: "50px" }}>
                <h5 style={{ marginRight: "30px" }}>Ref Date</h5>
                <DatePicker
                  selected={arrivalDate}
                  onChange={(date) => handleReflDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                />
              </div>
            </div>
            <div className="bottom">
              <div className="input__sections">
                <h5>Trans NO</h5>
                <input
                  type="number"
                  className="invoiceno"
                  value={Mainvalues.TransNo}
                  name="TransNo"
                  onChange={handleMainData}
                  required
                />
              </div>
              <div className="input__sections invDate">
                <h5>Trans.Date</h5>
                <DatePicker
                  selected={invDate}
                  onChange={(date) => handleTransDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                />
              </div>
            </div>

            <div
              className="bottom"
              style={{ marginTop: "15px", alignItems: "center" }}
            >
              <div className="input__sections">
                <h5 style={{ marginRight: "0px" }}>Description</h5>
                <input
                  type="text"
                  style={{ width: "400px", marginLeft: "5%" }}
                  name="Discription"
                  value={Mainvalues.Discription}
                  onChange={handleMainData}
                />
              </div>
            </div>
          </div>
          <div className="right__section">
            <div className="radioBtn__Section">
              <h5>Payment Type</h5>
              <div className="radio__sec">
                 {" "}
                <input
                  type="radio"
                  id="css"
                  name="paymentType"
                  value="cash"
                  onChange={handlePaymentType}
                  defaultChecked
                />
                  <label for="css">Cash</label>
              </div>

              <div className="radio__sec">
                <input
                  type="radio"
                  id="html"
                  name="paymentType"
                  value="credit"
                  onChange={handlePaymentType}
                />
                  <label for="html">Credit</label>
              </div>
            </div>

            <div className="input__Sections">
              <h5>Branch</h5>

              <select
                name=""
                id=""
                value={Mainvalues.BrachId}
                name="BrachId"
                onChange={handleMainData}
                required
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
                value={Mainvalues.Address}
                name="Address"
                onChange={handleMainData}
                required
              />
            </div>
          </div>
        </div>

        {/* ends */}
        <div className="add__deatils__for__table__section__area">
          <form autoComplete="off" onSubmit={(e) => handleDataforTable(e)}>
            <div className="input__area__Section">
              <div className="left__input__areaa sectionss">
                <input
                  type="text"
                  name="Name"
                  placeholder="Products"
                  onChange={handleAddDataToTable}
                  value={subData.Name}
                  required
                />
                <input
                  type="text"
                  name="HSNCode"
                  placeholder="HSN Code"
                  onChange={handleAddDataToTable}
                  value={subData.HSNCode}
                />
                <input
                  type="number"
                  name="BatchNo"
                  placeholder="Batch No"
                  onChange={handleAddDataToTable}
                  value={subData.BatchNo}
                  required
                />
                <div
                  className="input___datepickerrs"
                  style={{
                    width: "90%",
                  }}
                >
                  <DatePicker
                    placeholderText="Expiry"
                    selected={expiryDate}
                    onChange={(date) => handleExpiryDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    isClearable
                    required
                  />
                </div>

                <input
                  type="number"
                  name="Qty"
                  placeholder="Qty"
                  onChange={handleAddDataToTable}
                  value={subData.Qty}
                  required
                />
                <input
                  type="number"
                  name="FreeQty"
                  placeholder="Free Qty"
                  onChange={handleAddDataToTable}
                  value={subData.FreeQty}
                />
              </div>
              <div className="right__input__areaa sectionss">
                <input
                  type="number"
                  name="Rate"
                  placeholder="Rate"
                  onChange={handleAddDataToTable}
                  value={subData.Rate}
                />
                <input
                  type="number"
                  name="Discount"
                  placeholder="Disc"
                  onChange={handleAddDataToTable}
                  value={subData.Discount}
                />
                <input
                  type="text"
                  name="GST"
                  placeholder="GST"
                  onChange={handleAddDataToTable}
                  value={subData.GST}
                />
                <input
                  type="number"
                  name="TAX"
                  placeholder="Tax Param"
                  onChange={handleAddDataToTable}
                  value={subData.TAX}
                />
                <input
                  type="number"
                  name="Total"
                  placeholder="Total"
                  onChange={handleAddDataToTable}
                  value={subData.Total}
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
                {dataInTable.map((data, index) => (
                  <tr key={index}>
                    <td>{data?.Name}</td>
                    <td>{data?.HSNCode}</td>
                    <td>{data?.BatchNo}</td>
                    <td>{data?.Expiry}</td>
                    <td>{data?.Qty}</td>
                    <td>{data?.FreeQty}</td>
                    <td>{data?.Rate}</td>
                    <td>{data?.Discount}</td>
                    <td>{data?.GST}</td>
                    <td>{data?.TAX}</td>
                    <td>{data?.Total}</td>
                  </tr>
                ))}
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
              {/* <div className="input__section" style={{ marginRight: "33px" }}>
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
            </div> */}
            </div>
            <div className="sections">
              {/* <div className="input__section" style={{ marginRight: "33px" }}>
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
            </div> */}
            </div>
            <div className="sections">
              {/* <div className="input__section">
              <h5>Credit Note</h5>
              <input type="text" />
            </div> */}

              <div className="input__section">
                <h5>Total Tax</h5>
                <input
                  type="text"
                  value={Mainvalues.totalTax}
                  name="totalTax"
                  onChange={handleMainData}
                />
              </div>

              <div className="input__section">
                <h5 className="netAmt">Net Amt</h5>
                <input
                  type="text"
                  value={Mainvalues.GrandTotal}
                  name="GrandTotal"
                  onChange={handleMainData}
                />
              </div>
            </div>
          </div>
          <div className="bottom__btn__section">
            <button onClick={mainFormSubmit}>Save</button>
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
    </>
  );
}

export default AddGoodsReport;
