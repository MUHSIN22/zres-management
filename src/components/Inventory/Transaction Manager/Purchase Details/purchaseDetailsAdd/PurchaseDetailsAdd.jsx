import React, { useState } from "react";
import "./purchaseDetailsAdd.scss";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import FailSnackbars from "../../../../basic components/failSnackBar";
import SucessSnackbars from "../../../../basic components/sucessSidePopup";
const mainData = {
  PrchsId: "",
  ArrivalDate: "",
  ArrivalNo: "",
  InvoiceNo: "",
  InvoiceDate: "",
  PaymentType: "",
  supplierid: "",
  Address: "",
  GSTNo: "",
  GrandTotal: "",
  ProductsTotal: "",
  Status: "",
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
  productArray: [],
};

function PurchaseDetailsAdd({ setAddNewBtn, setMainTableView }) {
  const [invDate, setInventoryDate] = useState(null);
  const [arrivalDate, setArivalDate] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);
  const [Mainvalues, setMainValues] = useState('');
  const [subData, setSubdata] = useState(innerTable);
  const [dataInTable, setDataInTable] = useState([]);
  const convertDate = moment(expiryDate).format("DD-MM-YYYY");
  const convertedArivalDate = moment(arrivalDate).format("DD-MM-YYYY");
  const convertedinvoiceDate = moment(invDate).format("DD-MM-YYYY");

  const [snackbarSucess, setSnackbarSucess] = useState(false);
  const [snackbarFail, setSnackBarFail] = useState(false);
  const [messageToPassToSnackBar, setMessageToPassToSnackBar] = useState("");

  const handleArrivalDate = (date) => {
    setArivalDate(date);
  };

  const handleInventoryDate = (date) => {
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

  const handleAddDataToTable = (evt) => {
    const value = evt.target.value;
    setSubdata({
      ...subData,
      [evt.target.name]: value,
      Expiry: convertDate,
    });
  };

  const handleMainData = (evt) => {
    const value = evt.target.value;
    setMainValues({
      ...Mainvalues,      
      [evt.target.name]: value,
      PaymentType: paymentTypeChecked,
      InvoiceDate: convertedinvoiceDate,
      ArrivalDate: convertedArivalDate,
      productArray: dataInTable,
    });
  };

  const mainFormSubmit = (e) => {
    if (dataInTable.length == 0) {
      setSnackBarFail(true);
      setMessageToPassToSnackBar("Please Add Product");
      return;
    }
    e.preventDefault();
    window.alert("form submited");
    console.log("dataToSend", Mainvalues, dataInTable);
  };

  const handleDataforTable = (e) => {
    e.preventDefault();
    setDataInTable([...dataInTable, subData]);
    setSubdata(innerTable);
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
console.log(mainData)
  return (
    <>
      {snackbarSucess && (
        <SucessSnackbars MessageToPass={messageToPassToSnackBar} />
      )}
      {snackbarFail && (
        <FailSnackbars MessageToPass={messageToPassToSnackBar} />
      )}
      <div className="purchaseDetailsAdds">
        <div className="headderName">
          <h3>Purchase Entry</h3>
        </div>

        {/* top form section above table */}
        <div className="top__Section">
          <div className="left__Section">
            <div className="top">
              <div className="input__sections">
                <h5>Arr.No</h5>
                <input
                  type="number"
                  name="ArrivalNo"
                  value={Mainvalues.ArrivalNo}
                  onChange={handleMainData}
                  required
                />
              </div>
              <div className="input__sections">
                <h5>Arr.Date</h5>
                <DatePicker
                  selected={arrivalDate}
                  onChange={(date) => handleArrivalDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                  isClearable
                  required
                />
              </div>
            </div>
            <div className="bottom">
              <div className="input__sections">
                <h5>Inv.No</h5>
                <input
                  type="number"
                  name="InvoiceNo"
                  value={Mainvalues.InvoiceNo}
                  onChange={handleMainData}
                  required
                />
              </div>
              <div className="input__sections">
                <h5>Inv.Date</h5>
                <DatePicker
                  selected={invDate}
                  onChange={(date) => handleInventoryDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                  isClearable
                  required
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
              <h5>Supplier</h5>

              <select
                id=""
                name= "supplierid"
                value={Mainvalues.supplierid}
                onChange={handleMainData}
                required
              >
                <option value="" disabled selected>
                  pic option
                </option>

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

            <div className="input__Sections">
              <h5>GST No</h5>{" "}
              <input
                type="text"
                name="GSTNo"
                value={Mainvalues.GSTNo}
                onChange={handleMainData}
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
                  required
                />
                <input
                  type="text"
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
                  required
                />
              </div>
              <div className="right__input__areaa sectionss">
                <input
                  type="number"
                  name="Rate"
                  step="0.01"
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
                  required
                />
                <input
                  type="text"
                  name="GST"
                  placeholder="GST"
                  onChange={handleAddDataToTable}
                  value={subData.GST}
                  required
                />
                <input
                  type="number"
                  name="TAX"
                  placeholder="Tax Param"
                  onChange={handleAddDataToTable}
                  value={subData.TAX}
                  required
                />
                <input
                  type="number"
                  name="Total"
                  placeholder="Total"
                  onChange={handleAddDataToTable}
                  value={subData.Total}
                  required
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
                  <tr key={index} onClick={() => handleEditTableData(data)}>
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
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total DISC</td>
                  <td></td>
                  <td></td>
                  <td>Total</td>
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
              {/* <div className="input__section" style={{ marginRight: "30px" }}>
              <h5>Discount</h5>
              <input type="text" />
            </div> */}

              {/* <div className="input__section">
              <h5>CGST</h5>
              <input type="text" />
            </div> */}

              {/* <div className="input__section">
              <h5>Add Disc</h5>
              <input type="text" />
            </div>
          </div>
          <div className="sections">
            <div className="input__section" style={{ marginRight: "30px" }}>
              <h5>Gross Amt</h5>
              <input type="text" />
            </div>

            <div className="input__section">
              <h5>SGST</h5>
              <input type="text" />
            </div> */}

              {/* <div className="input__section">
              <h5>Write Off</h5>
              <input type="text" />
            </div>
          </div>
          <div className="sections">
            <div className="input__section">
              <h5>Credit Note</h5>
              <input type="text" />
            </div> */}

              <div className="input__section">
                <h5>Total Tax</h5>
                <input
                  type="number"
                  name="totalTax"
                  onChange={handleMainData}
                />
              </div>

              <div className="input__section">
                <h5 className="netAmt">Net Amt</h5>
                <input
                  type="number"
                  name="GrandTotal"
                  value={Mainvalues.GrandTotal}
                  onChange={handleMainData}
                />
              </div>
            </div>
          </div>
          <div className="bottom__btn__section">
            <button
              onClick={(e) => {
                mainFormSubmit(e);
                handleMainData(e);
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
    </>
  );
}

export default PurchaseDetailsAdd;
