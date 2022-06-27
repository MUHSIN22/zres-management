import React, { useEffect, useState } from "react";
import "./addNewTax.scss";
import SucessfullMag from "../../../Transaction Manager/Reports/Stock Cost/clossing stock print/SucessfullMessage/SucessfullMag";
import SucessSnackbars from "../../../../basic components/sucessSidePopup";
import FailSnackbars from "../../../../basic components/failSnackBar";
import { inventoryServices } from '../../../../../Services/InventoryServices'

function AddNewTax({ setAddNewBtn, setMainTableView, editTax,status,editable }) {


  // tax category id

  const [hideText, setHideText] = useState(false);
  const [dataToSend, setDataToSend] = useState('');
  const [addSucessfull, setAddSucessfull] = useState(false);
  const [snackbarSucess, setSnackbarSucess] = useState(false);
  const [snackbarFail, setSnackBarFail] = useState(false);
  const [taxdrop, setTaxdrop] = useState([])

  console.log(dataToSend)
  const handleDatatoSend = (e) => {
    const value = e.target.value;
    setDataToSend({
      ...dataToSend,
      [e.target.name]: value,
      Taxable: e.target.checked,
    });
  };

  const handleSubmit = (e,data) =>{
    e.preventDefault();
    inventoryServices.postTaxmaster(data)
    console.log(data)
  }

  const handleEditTax = (e,data) =>{
    e.preventDefault();
    inventoryServices.editTaxmaster(data)
    console.log(data)
  }

  const handleDeletefunctionss = () => { };

  useEffect(() => {
    inventoryServices.getTaxtypedropdown().then(
      res => {
        setTaxdrop(res)
      })
if(status){
  setDataToSend({
    TaxCode: editable.TaxCode, 
    Taxable: editable.Taxable, 
    TaxPercentage:editable.TaxPercentage, 
    TypeOfTax: editable.TypeName,
  
  })
}
  }, [])


  return (
    <>
      {snackbarSucess && <SucessSnackbars />}
      {snackbarFail && <FailSnackbars />}
      {addSucessfull && (
        <SucessfullMag
          setPrintSucess={setAddSucessfull}
          messagetoPrint={"Save Sucessfully"}
        />
      )}
      <div className="add__new__tax">
        <div className="headding__Section">
          <h2>Tax Master</h2>
        </div>

        <div className="inner__Section">
          <form action="" onSubmit={(e) => (!status) ?  handleSubmit(e,dataToSend) : handleEditTax(e,dataToSend)}>
            <div className="top__section">
              <div className="tax__code__Section">
                <div className="input__Section__tax">
                  <h5>Tax Code</h5>
                  <input
                    required
                    type={hideText ? "password" : "text"}
                    style={{
                      marginLeft: "30px",
                    }}
                    value={dataToSend.TaxCode}
                    name="TaxCode"
                    onChange={handleDatatoSend}
                  />
                </div>

                <div className="tax__checkbox__view">
                  <input
                    type="checkbox"
                    id="Discount"
                    name="fav_language"
                    checked={hideText}
                    onChange={(e) => setHideText(e.target.checked)}
                  />
                  <label for="html">Hide</label>
                </div>
              </div>

              <div className="input__Section">
                <h5>Tax Percentage</h5>
                <input
                  name="TaxPercentage"
                  value={dataToSend.TaxPercentage}
                  onChange={handleDatatoSend}
                  type="text"
                  style={{
                    marginLeft: "20px",
                    paddingLeft: 10,
                    width: "30%",
                  }}
                />
              </div>

              <div className="input__Section">
                <h5>Type of Tax</h5>

                <select
                  required
                  name="TypeOfTax"
                  id=""
                  value={dataToSend.TypeOfTax}
                  className="type__of__tax"
                  onChange={handleDatatoSend}
                  style={{
                    width: "50%",
                    marginLeft: "35px",
                    height: "30px",
                    border: "none",
                    outline: "none",
                    borderRadius: "8px",
                    paddingLeft: "10px",
                    boxShadow: "0 0 10px rgb(146, 146, 146)",
                  }}
                >
                  {" "}
                  <option value="" disabled selected>
                    Choose Tax
                  </option>
                  {taxdrop && taxdrop.map((item) => (

                    <option value={item.Typeid} >{item.Name}</option>))}
                </select>
              </div>

              <div className="input__section__wrapper">
                <div className="input__section__left__section">
                  <div className="with_checkbox">
                    <div className="checkbox_section">
                      <input
                        type="checkbox"
                        id="Taxable"
                        name="Taxable"
                        checked={dataToSend.Taxable}
                        onChange={handleDatatoSend}
                      />
                      <label for="Taxable">Taxable</label>
                    </div>
                  </div>
                </div>

                <div className="input__Section__right__section"></div>
              </div>
            </div>

            <div className="bottom__btn__section">
              {editTax > 0 ? (
                <>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#040153",
                      color: "#ffff",
                    }}
                  >
                    Update
                  </button>

                  <button
                    type="button"
                    style={{
                      backgroundColor: "#040153",
                      color: "#ffff",
                    }}
                    onClick={handleDeletefunctionss}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#040153",
                    color: "#ffff",
                  }}
                >
                  save
                </button>
              )}

              <button
                type="button"
                style={{
                  backgroundColor: "#ffff",
                  color: "#040153",
                }}
                onClick={() => {
                  setAddNewBtn(false);
                  setMainTableView(true);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewTax;
