import React, { useState } from "react";
import "./addNewDebitNote.scss";
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
};

function AddNewDebitNote({ setAddNewBtn, setMainTableView }) {
  const [subData, setSubdata] = useState(innerTable);
  const [dataInTable, setDataInTable] = useState([]);
  const [expiryDate, setExpiryDate] = useState(null);
  const convertDate = moment(expiryDate).format("DD-MM-YYYY");
  const [Mainvalues, setMainValues] = useState(mainData);

  const [snackbarSucess, setSnackbarSucess] = useState(false);
  const [snackbarFail, setSnackBarFail] = useState(false);
  const [messageToPassToSnackBar, setMessageToPassToSnackBar] = useState("");

  const handleExpiryDate = (date) => {
    setExpiryDate(date);
  };

  const handleDataforTable = (e) => {
    e.preventDefault();
    setDataInTable([...dataInTable, subData]);
    setSubdata(innerTable);
  };

  const handleAddDataToTable = (evt) => {
    const name = evt.target.value;
    setSubdata({
      ...subData,
      [evt.target.name]: name,
      Expiry: convertDate,
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
  return (
    <div className="AddNewDebitNote">
      <div className="headderName">
        <h3>DebitNote</h3>
      </div>

      {/* top form section above table */}
      <div className="top__Section">
        <div className="left__Section">
          <div className="top">
            <div className="input__sections">
              <h5>Entry No</h5>
              <input type="text" />
            </div>
            <div className="input__sections">
              <h5>Entry Date</h5>
              <input type="date" />
            </div>
          </div>
          <div className="bottom">
            <div className="input__sections">
              <h5>Cr.No</h5>
              <input type="text" className="invoiceno" />
            </div>
            <div className="input__sections invDate">
              <h5>Cr.Date</h5>
              <input type="date" />
            </div>
          </div>
        </div>
        <div className="right__section">
          <div className="input__Sections">
            <h5>Supplier</h5>

            <select name="" id="">
              <option value="">ram</option>
              <option value="">revi</option>
              <option value="">kishor</option>
            </select>
          </div>

          <div className="input__Sections">
            <h5>Amount</h5> <input type="text" />
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

            <tfoot className="tfootTotal">
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
            {/* <div className="input__section">
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
            {/* <div className="input__section">
              <h5>Gross Discount</h5>
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

export default AddNewDebitNote;
