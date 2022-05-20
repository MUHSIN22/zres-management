import React, { useEffect, useState } from "react";
import "./addNewCredit.scss";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import FailSnackbars from "../../../../basic components/failSnackBar";
import SucessSnackbars from "../../../../basic components/sucessSidePopup";
import { accountServices } from "../../../../../Services/AccountsServices";

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

function AddNewCredit({ setAddNewBtn, setMainTableView,dataId }) {
  const [dataInTable, setDataInTable] = useState([]);
  const [expiryDate, setExpiryDate] = useState(null);
  const convertDate = moment(expiryDate).format("DD-MM-YYYY");
  const [Mainvalues, setMainValues] = useState(mainData);
  const [creditData, setCreditData] = useState([]);
  const [products, setProducts] = useState([])
  const [suppliers, setSuppliers] = useState([])
  const [creditEntries, setCreditEntries] = useState({
    "CrDate": "",
    "EntryNo": "",
    "EntryDate": "",
    "SupplierID": "",
    "Expiry": "",
    "HSNCode": "",
    "BatchNo": "",
    "Qty": "",
    "FreeQty": "",
    "Rate": "",
    "Discount": "",
    "GST": "",
    "PrdctId": "",
    "TaxParam": "",
    "Total": "",
    "UserID": "1",
    "CMPid": "1"
  })

  const [snackbarSucess, setSnackbarSucess] = useState(false);
  const [snackbarFail, setSnackBarFail] = useState(false);
  const [messageToPassToSnackBar, setMessageToPassToSnackBar] = useState("");

  const handleExpiryDate = (date) => {
    setExpiryDate(date);
  };

  const handleDataforTable = (e) => {
    e.preventDefault();
    setDataInTable([...dataInTable, creditEntries]);
    setCreditEntries(innerTable);
  };

  const handleSaving = () => {
    if(creditData[0]){
      accountServices.uploadCreditNote(creditData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }

  const handleAddDataToTable = (evt) => {
    // const name = evt.target.value;
    // setcreditEntries({
    //   ...creditEntries,
    //   [evt.target.name]: name,
    //   Expiry: convertDate,
    // });
  };

  const handleData = (event, name) => {
    setCreditEntries({ ...creditEntries, [!name ? event.target.name : name]: name ? event : event.target.value })
  }

  const handleAdding = (event) => {
    console.log(creditEntries);
    setCreditData([...creditData,creditEntries])
    setCreditEntries({
      ...creditEntries,
      "CrDate": "",
      "EntryNo": "",
      "EntryDate": "",
      "SupplierID": "",
      "Expiry": "",
      "HSNCode": "",
      "BatchNo": "",
      "Qty": "",
      "FreeQty": "",
      "Rate": "",
      "Discount": "",
      "GST": "",
      "PrdctId": "",
      "TaxParam": "",
      "Total": "",
      "UserID": "1",
      "CMPid": "1"
    })
  }

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


  useEffect(() => {
    accountServices.getProductDropdown()
      .then(res => setProducts(res))
      .catch(err => console.log(err))

    accountServices.getDebitNoteDropdown()
      .then(res => setSuppliers(res))
      .catch(err => console.log(err))

      console.log(dataId);
      if(dataId){
        accountServices.getCreditNoteById(dataId)
        .then(res => console.log(res))
        .err(err => console.log(err))
      }
  }, [])

  return (
    <div className="AddNewCredit">
      <div className="headderName">
        <h3>Credit Note</h3>
      </div>

      {/* top form section above table */}
      <div className="top__Section">
        <div className="left__Section">
          <div className="top">
            <div className="input__sections">
              <h5>Entry No</h5>
              <input name="EntryNo" value={creditEntries.EntryNo} type="text" onChange={handleData} />
            </div>
            <div className="input__sections">
              <h5>Entry Date</h5>
              <input name="EntryDate" value={creditEntries.EntryDate} type="date" onChange={handleData} />
            </div>
          </div>
          <div className="bottom">
            <div className="input__sections">
              <h5>Cr.No</h5>
              <input type="text" value={creditEntries.CrNo} name="CrNo" className="invoiceno" onChange={handleData} />
            </div>
            <div className="input__sections invDate">
              <h5>Cr.Date</h5>
              <input name="CrDate" value={creditEntries.CrDate} type="date" onChange={handleData} />
            </div>
          </div>
        </div>
        <div className="right__section">
          <div className="input__Sections">
            <h5>Supplier</h5>

            <select name="SupplierID" id="" onChange={handleData} value={creditEntries.SupplierID}>
              <option value={creditEntries.SupplierID}>Choose Supplier</option>
              {
                suppliers.map((item, index) => (
                  <option value={item.Value} key={index}>{item.Text}</option>
                ))
              }

            </select>
          </div>

          <div className="input__Sections">
            <input type="text" name="location" placeholder="Location" onChange={handleData} />
          </div>
          <div className="input__Sections">
            <input type="text" name="GSTNo" placeholder="GSTNO" onChange={handleData} />
          </div>

          <div className="radioBtn__Section">
            <div className="radio__sec">
              <input type="radio" id="css" name="fav_language" value="CSS" /> {" "}
              <label for="css">Cash Bill</label>
            </div>

            <div className="radio__sec">
              <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
              <label for="html">Credit Bill</label>
            </div>
          </div>
        </div>
      </div>

      {/* ends */}
      {/* ends */}
      <div className="add__deatils__for__table__section__area">
        <form autoComplete="off" onSubmit={(e) => handleDataforTable(e)}>
          <div className="input__area__Section">
            <div className="left__input__areaa sectionss">
              <select name="PrdctId" id="" value={creditEntries.PrdctId} onChange={handleData}>
                <option value="">Choose product</option>
                {
                  products.map((item, index) => (
                    <option value={item.Value} key={index}>{item.Text}</option>
                  ))
                }
              </select>
              <input
                type="text"
                name="HSNCode"
                placeholder="HSN Code"
                onChange={(event) => {
                  handleAddDataToTable(event)
                  handleData(event)
                }}
                value={creditEntries.HSNCode}
                required
              />
              <input
                type="text"
                name="BatchNo"
                placeholder="Batch No"
                onChange={(event) => {
                  handleAddDataToTable(event)
                  handleData(event)
                }}
                value={creditEntries.BatchNo}
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
                  selected={creditEntries.Expiry}
                  name="Expiry"
                  onChange={(event) => {
                    handleAddDataToTable(event)
                    handleData(event, "Expiry")
                  }}
                  dateFormat={"dd/MM/yyyy"}
                  isClearable
                  required
                />
              </div>

              <input
                type="number"
                name="Qty"
                placeholder="Qty"
                onChange={(event) => {
                  handleAddDataToTable(event)
                  handleData(event)
                }}
                value={creditEntries.Qty}
                required
              />
              <input
                type="number"
                name="FreeQty"
                placeholder="Free Qty"
                onChange={(event) => {
                  handleAddDataToTable(event)
                  handleData(event)
                }}
                value={creditEntries.FreeQty}
                required
              />
            </div>
            <div className="right__input__areaa sectionss">
              <input
                type="number"
                name="Rate"
                placeholder="Rate"
                onChange={(event) => {
                  handleAddDataToTable(event)
                  handleData(event)
                }}
                value={creditEntries.Rate}
              />
              <input
                type="number"
                name="Discount"
                placeholder="Disc"
                onChange={(event) => {
                  handleAddDataToTable(event)
                  handleData(event)
                }}
                value={creditEntries.Discount}
                required
              />
              <input
                type="text"
                name="GST"
                placeholder="GST"
                onChange={(event) => {
                  handleAddDataToTable(event)
                  handleData(event)
                }}
                value={creditEntries.GST}
                required
              />
              <input
                type="number"
                name="TaxParam"
                placeholder="Tax Param"
                onChange={(event) => {
                  handleAddDataToTable(event)
                  handleData(event)
                }}
                value={creditEntries.TaxParam}
                required
              />
              <input
                type="number"
                name="Total"
                placeholder="Total"
                onChange={(event) => {
                  handleAddDataToTable(event)
                  handleData(event)
                }}
                value={creditEntries.Total}
                required
              />
              <div className="button__sectionssss">
                <button type="submit" onClick={handleAdding}>Add Product</button>
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
              {
                creditData.map((item, index) => (
                  <tr>
                    {
                      products.map((product,index) => (
                        <>
                          {
                            item.PrdctId === product.Value &&
                            <td>{product.Text}</td>
                          }
                        </>
                      ))
                    }
                    <td>{item.HSNCode}</td>
                    <td>{item.BatchNo}</td>
                    <td>{new Date(item.Expiry).toLocaleDateString()}</td>
                    <td>{item.Qty}</td>
                    <td>{item.FreeQty}</td>
                    <td>{item.Rate}</td>
                    <td>{item.Discount}</td>
                    <td>{item.GST}%</td>
                    <td>{item.TaxParam}</td>
                    <td>{item.Total}</td>
                  </tr>
                ))
              }
            </tbody>

            {/* <tfoot className="tfootTotal">
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
            </tfoot> */}
          </table>
        </div>
      </div>
      {/* ends */}

      {/* bottom section */}
      <div className="bottom__sections">
        <div className="top__input__section">
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
              handleSaving();
            }}
          >
            Save
          </button>
          {/* <button>Print</button> */}
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

export default AddNewCredit;
