import React, { useEffect, useState } from "react";
import "./purchaseReturnAdd.scss";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import DatePicker from "react-datepicker";
import { inventoryServices } from "../../../../../Services/InventoryServices";

function PurchaseReturnAdd({ setAddNewBtn, setMainTableView, editable, status }) {
  const defvalue = {
    Products: "",
    HsnCode: "",
    BatchNo: "",
    Expiry: "",
    Qty: "",
    FreeQty: "",
    Rate: "",
    Disc: "",
    Gst: "",
    TaxParam: "",
    Total: "",
  };

  const mainData = {
    returnNo: "",
    returnDate: "",
    invNo: "",
    invDate: "",
    paymentType: "cash",
    supplier: "",
    address: "",
    gstNo: "",
    discount: "",
    cgst: "",
    adddisc: "",
    grossAmt: "",
    sgst: "",
    writeOf: "",
    creditNote: "",
    totalTax: "",
    netAmt: "",
  };

  const [values, setValues] = useState(defvalue);
  const [mainDataValue, setMainDataVale] = useState(mainData);
  const [datainTable, setDatainTable] = useState([]);
  const [errors, setErrors] = useState({});
  const [returnDate, setReturnDate] = useState(null);
  const [invDate, setInvDate] = useState(null);
  const [subFormErrorHandler, setSubFormErrorHandler] = useState(false);
  const [subFormSucessHandler, setSubFormSucessHandler] = useState(false);
  const [paymetType, setPaymentType] = useState("");
  const [supplier, setSupplier] = useState([])
  const [productmaster, setProductMaster] = useState([])


  const handleMainDataValue = (evt) => {
    const name = evt.target.value;
    setMainDataVale({
      ...mainDataValue,
      [evt.target.name]: name,
      returnDate: returnDate,
      invDate: invDate,
      paymentType: paymetType,
    });
    setValues({
      ...values,
      [evt.target.name]: name,
    });
  };

  console.log(values)

  const handleValidationSubForm = () => {
    let temp = {};
    temp.Products = values.ProductsId.length ? 0 : "This Field is Required.";
    temp.HsnCode = values.HsnCode ? "" : "This Field is Required.";
    temp.BatchNo = values.BatchNo ? "" : "This Field is Required.";
    temp.Expiry = values.Expiry ? "" : "This Field is Required.";
    temp.Qty = values.Qty ? "" : "This Field is Required.";
    temp.FreeQty = values.FreeQty ? "" : "This Field is Required.";
    temp.Rate = values.Rate ? "" : "This Field is Required.";
    temp.Disc = values.Disc ? "" : "This Field is Required.";
    temp.Gst = values.Gst ? "" : "This Field is Required.";
    temp.TaxParam = values.TaxParam ? "" : "This Field is Required.";
    temp.Total = values.Total ? "" : "This Field is Required.";

    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x == "");
  };

  const handleDataforTable = (e) => {
    e.preventDefault();

    if (handleValidationSubForm()) {
      setSubFormSucessHandler(true);
      setSubFormErrorHandler(false);

      setDatainTable([...datainTable, values]);
      setValues(defvalue);
      console.log(datainTable);
    } else {
      setSubFormErrorHandler(true);
      setSubFormSucessHandler(false);
    }
  };

  const handleEditTableData = (data) => {
    setValues(data);
  };

  const HandleUpdateData = (e) => {
    e.preventDefault();
    const code = values;

    const ProductExsit = datainTable.find(
      (items) => items.HsnCode === code.HsnCode
    );

    if (ProductExsit) {
      setDatainTable(
        datainTable.map((item) =>
          item.HsnCode === code.HsnCode ? { ...ProductExsit, code } : item
        )
      );
    }
  };

  const handleMainSubmit = (e) => {
    e.preventDefault();
    console.log("main submit called ", mainDataValue);
  };


  const handlePaymentType = (e) => {
    const activeValue = e.target.checked;
    if (activeValue) {
      setPaymentType(e.target.value);
    }
  };
  console.log(mainDataValue, values)

  const subdataUpdate = () => {
    if (values.ProductsId !== '') {
      const data = productmaster.filter(item => item.ProdctId == values.ProductsId)
      console.log(data)

      setValues({
        HsnCode: data[0].HSNCode,
        BatchNo: data[0].RackNo,
        Qty: data[0].Quantity,
        ProdctsId: data[0].ProdctId,
        Discount: data[0].Discount,
      })
    }
  }

  useEffect(() => {
    inventoryServices.getSuppliers()
      .then(res => {
        setSupplier(res)
      })
    inventoryServices.getProductdetails()
      .then(data => {
        setProductMaster(data)
      }).catch(err => console.log(err))

    if (status) {
      setMainDataVale({
        "returnDate": editable.ReturnDate,
        "returnNo": editable.ReturnNo,
        "invNoInvoiceNo": editable.InvoiceNo,
        "invDate": editable.InvoiceDate,
        "paymentType": editable.PaymentType,
        "supplier": editable.supplierid,
        "address": editable.Address,
        "Gst": editable.GSTNo,
        "netAmt": editable.Total,
        "totalTax": editable.Totaltax
      })
    }
  }, [])

  return (
    <div className="PurchaseReturnAdd">
      <div className="headderName">
        <h3>Purchase Return Entry</h3>
      </div>

      {/* top form section above table */}
      <form action="" onSubmit={handleMainSubmit}>
        <div className="top__Section">
          <div className="left__Section">
            <div className="top">
              <div className="input__sections">
                <h5>Return No</h5>
                <input
                  type="text"
                  name="returnNo"
                  value={mainDataValue.returnNo}
                  onChange={handleMainDataValue}
                  required
                />
              </div>
              <div className="input__sections">
                <h5 style={{ marginRight: "35px" }}>Return Date</h5>
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                  placeholderText="dd/mm/yyyy"
                  value={mainDataValue.returnDate}
                />
              </div>
            </div>
            <div className="bottom">
              <div className="input__sections">
                <h5>Inv.No</h5>
                <input
                  type="text"
                  className="invoiceno"
                  name="invNo"
                  value={mainDataValue.invNo}
                  onChange={handleMainDataValue}
                  required
                />
              </div>
              <div className="input__sections invDate">
                <h5>Inv.Date</h5>
                <DatePicker
                  selected={invDate}
                  onChange={(date) => setInvDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                  placeholderText="dd/mm/yyyy"
                  value={mainDataValue.invDate}
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
                  name="fav_language"
                  onChange={handlePaymentType}
                  value="cash"
                  defaultChecked
                />
                <label for="css">Cash</label>
              </div>

              <div className="radio__sec">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  onChange={handlePaymentType}
                  value="credit"
                />
                <label for="html">Credit</label>
              </div>
            </div>

            <div className="input__Sections">
              <h5>Supplier</h5>
              <select
                id=""
                name="supplier"
                value={mainDataValue.supplier}
                onChange={handleMainDataValue}
                required
              >
                <option disabled="true" selected>Select Supplier</option>
                {supplier && supplier.map((item) => (
                  <option value={item.Value} >
                    {item.Text}
                  </option>))}

              </select>
            </div>

            <div className="input__Sections">
              <h5>Address</h5>{" "}
              <input
                type="text"
                name="address"
                value={mainDataValue.address}
                onChange={handleMainDataValue}
              />
            </div>

            <div className="input__Sections">
              <h5>GST No</h5>{" "}
              <input
                type="text"
                required
                name="gstNo"
                value={mainDataValue.gstNo}
                onChange={handleMainDataValue}
              />
            </div>
          </div>
        </div>

        {/* ends */}
        <div className="add__deatils__for__table__section__area">
          <form autoComplete="off">
            {subFormErrorHandler && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="error">Fill the Form correctly</Alert>
              </Stack>
            )}
            {subFormSucessHandler && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="success">Added Sucessfully</Alert>
              </Stack>
            )}

            <div className="input__area__Section">
              <div className="left__input__areaa sectionss">
                <select
                  name="ProductsId"
                  placeholder="Products"
                  onChange={handleMainDataValue}
                  value={values.ProductsId}
                  required

                >
                  <option disabled="true" selected>Select Product</option>
                  {productmaster && productmaster.map((item) => (
                    <option onClick={subdataUpdate} value={item.ProdctId}>{item.PName}</option>))}
                </select>
                <input
                  type="text"
                  name="HsnCode"
                  placeholder="HSN Code"
                  onChange={handleMainDataValue}
                  value={values.HsnCode}
                />
                <input
                  type="number"
                  name="BatchNo"
                  placeholder="Batch No"
                  onChange={handleMainDataValue}
                  value={values.BatchNo}
                />
                <input
                  type="date"
                  name="Expiry"
                  placeholder="Expiry"
                  onChange={handleMainDataValue}
                  value={values.Expiry}
                />
                <input
                  type="number"
                  name="Qty"
                  placeholder="Qty"
                  onChange={handleMainDataValue}
                  value={values.Qty}
                />
                <input
                  type="number"
                  name="FreeQty"
                  placeholder="Free Qty"
                  onChange={handleMainDataValue}
                  value={values.FreeQty}
                />
              </div>
              <div className="right__input__areaa sectionss">
                <input
                  type="number"
                  name="Rate"
                  placeholder="Rate"
                  onChange={handleMainDataValue}
                  value={values.Rate}
                />
                <input
                  type="number"
                  name="Discount"
                  placeholder="Discount"
                  onChange={handleMainDataValue}
                  value={values.Discount}
                />
                <input
                  type="text"
                  name="Gst"
                  placeholder="GST"
                  onChange={handleMainDataValue}
                  value={values.Gst}
                />
                <input
                  type="number"
                  name="TaxParam"
                  placeholder="Tax Param"
                  onChange={handleMainDataValue}
                  value={values.TaxParam}
                />
                <input
                  type="number"
                  name="Total"
                  placeholder="Total"
                  onChange={handleMainDataValue}
                  value={values.Total}
                />
                <div className="button__sectionssss">
                  <button onClick={handleDataforTable}>Add Product</button>
                  <button onClick={(e) => { HandleUpdateData(e); inventoryServices.postProductmaster(values) }}>Update</button>
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
                {datainTable.map((data, index) => (
                  <tr key={index} onClick={() => handleEditTableData(data)}>
                    <td>{data?.ProductsId}</td>
                    <td>{data?.HsnCode}</td>
                    <td>{data?.BatchNo}</td>
                    <td>{data?.Expiry}</td>
                    <td>{data?.Qty}</td>
                    <td>{data?.FreeQty}</td>
                    <td>{data?.Rate}</td>
                    <td>{data?.Disc}</td>
                    <td>{data?.Gst}</td>
                    <td>{data?.TaxParam}</td>
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
                  <th>Total Disc</th>
                  <th></th>
                  <th></th>
                  <th>Totla</th>
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
              {/* <div className="input__section" style={{ marginRight: "32px" }}>
                <h5>Discount</h5>
                <input
                  type="text"
                  name="discount"
                  value={mainDataValue.discount}
                  onChange={handleMainDataValue}
                />
              </div>

              <div className="input__section">
                <h5>CGST</h5>
                <input
                  type="text"
                  name="cgst"
                  value={mainDataValue.cgst}
                  onChange={handleMainDataValue}
                />
              </div>

              <div className="input__section">
                <h5>Add Disc</h5>
                <input
                  type="text"
                  name="adddisc"
                  value={mainDataValue.adddisc}
                  onChange={handleMainDataValue}
                />
              </div> */}
            </div>
            <div className="sections">
              {/* <div className="input__section" style={{ marginRight: "32px" }}>
                <h5>Gross Amt</h5>
                <input
                  type="text"
                  name="grossAmt"
                  value={mainDataValue.grossAmt}
                  onChange={handleMainDataValue}
                />
              </div>

              <div className="input__section">
                <h5>SGST</h5>
                <input
                  type="text"
                  name="sgst"
                  value={mainDataValue.sgst}
                  onChange={handleMainDataValue}
                />
              </div> */}

              {/* <div className="input__section">
                <h5>Write Off</h5>
                <input
                  type="text"
                  name="writeOf"
                  value={mainDataValue.writeOf}
                  onChange={handleMainDataValue}
                />
              </div>
            </div>
            <div className="sections">
              <div className="input__section">
                <h5>Credit Note</h5>
                <input
                  type="text"
                  name="creditNote"
                  value={mainDataValue.creditNote}
                  onChange={handleMainDataValue}
                />
              </div> */}

              <div className="input__section">
                <h5>Total Tax</h5>
                <input
                  type="text"
                  name="totalTax"
                  value={mainDataValue.totalTax}
                  onChange={handleMainDataValue}
                  required
                />
              </div>

              <div className="input__section">
                <h5 className="netAmt">Net Amt</h5>
                <input
                  type="text"
                  name="netAmt"
                  value={mainDataValue.netAmt}
                  onChange={handleMainDataValue}
                  required
                />
              </div>
            </div>
          </div>
          <div className="bottom__btn__section">
            <button
              type="submit"
              onClick={() => {
                setAddNewBtn(false);
                setMainTableView(true);
                (status) ? inventoryServices.editPurchaseReturn(values) :
                  inventoryServices.postPurchaseReturn(values);
              }}

            >
              Save
            </button>
            <button onClick={() => window.print()}>Print</button>
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
      </form>
      {/* ends */}
    </div>
  );
}

export default PurchaseReturnAdd;
