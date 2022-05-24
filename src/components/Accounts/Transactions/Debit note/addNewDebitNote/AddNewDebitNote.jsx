import React, { useEffect, useState } from "react";
import "./addNewDebitNote.scss";
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

function AddNewDebitNote({ setAddNewBtn, setMainTableView }) {
  const [subData, setSubdata] = useState(innerTable);
  const [dataInTable, setDataInTable] = useState([]);
  const [expiryDate, setExpiryDate] = useState(null);
  const convertDate = moment(expiryDate).format("DD-MM-YYYY");
  const [Mainvalues, setMainValues] = useState(mainData);
  const [suppliers, setSuppliers] = useState([]);
  const [debitTable,setDebitTable] = useState([]);
  const [products,setProducts] = useState([]);
  const [debitEntries, setDebitEntries] = useState({
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
    "UserID": "",
    "CMPid": ""
  })

  const [debitData,setDebitData] = useState([])

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

  const handleSaving = () => {
    if(debitData[0]){
      accountServices.uploadDebitNote(debitData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }

  const handleAddDataToTable = (evt) => {
    // const name = evt.target.value;
    // setdebitEntries({
    //   ...debitEntries,
    //   [evt.target.name]: name,
    //   Expiry: convertDate,
    // });
  };

  const handleData = (event, name) => {
    setDebitEntries({ ...debitEntries, [!name ? event.target.name : name]: name ? event : event.target.value })
  }

  const handleAdding = (event) => {
    console.log(debitEntries);
    setDebitData([...debitData,debitEntries])
    setDebitEntries({
      ...debitEntries,
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
      "UserID": "",
      "CMPid": ""
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

  const getSupplierDebitNote = (event) => {
    accountServices.getDebitNotebySupplier(event.target.value)
      .then(res => {setDebitTable(res);console.log(res);})
      .catch(err => console.log(err))
  }
  
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
    accountServices.getDebitNoteDropdown()
    .then(res => setSuppliers(res))
    .catch(err => console.log(err))

    accountServices.getProductDropdown()
    .then(res => setProducts(res))
    .catch(err => console.log(err))
  },[])
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
              <input name="EntryNo" value={debitEntries.EntryNo} type="text" onChange={handleData} />
            </div>
            <div className="input__sections">
              <h5>Entry Date</h5>
              <input name="EntryDate" value={debitEntries.EntryDate} type="date" onChange={handleData} />
            </div>
          </div>
          <div className="bottom">
            <div className="input__sections">
              <h5>Cr.No</h5>
              <input type="text" value={debitEntries.CrNo} name="CrNo" className="invoiceno" onChange={handleData} />
            </div>
            <div className="input__sections invDate">
              <h5>Cr.Date</h5>
              <input name="CrDate" value={debitEntries.CrDate} type="date" onChange={handleData} />
            </div>
          </div>
        </div>
        <div className="right__section">
          <div className="input__Sections">
            <h5>Supplier</h5>

            <select name="" id="" onChange={getSupplierDebitNote}>
              <option value="">Select supplier</option>
              {
                suppliers.map((item,index) => (
                  <option value={item.Value} key={index}>{item.Text}</option>
                ))
              }
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
            <select name="PrdctId" id="" value={debitEntries.PrdctId} onChange={handleData}>
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
                value={debitEntries.HSNCode}
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
                value={debitEntries.BatchNo}
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
                  selected={debitEntries.Expiry}
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
                value={debitEntries.Qty}
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
                value={debitEntries.FreeQty}
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
                value={debitEntries.Rate}
              />
              <input
                type="number"
                name="Discount"
                placeholder="Disc"
                onChange={(event) => {
                  handleAddDataToTable(event)
                  handleData(event)
                }}
                value={debitEntries.Discount}
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
                value={debitEntries.GST}
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
                value={debitEntries.TaxParam}
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
                value={debitEntries.Total}
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
              handleSaving()
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
