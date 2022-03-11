import React, { useState, useEffect } from "react";

import SucessfullMag from "../../../Transaction Manager/Reports/Stock Cost/clossing stock print/SucessfullMessage/SucessfullMag";
import "./addnewMesurement.scss";

import SucessSnackbars from "../../../../basic components/sucessSidePopup";
import FailSnackbars from "../../../../basic components/failSnackBar";
function AddNewMeasurement({
  setAddNewBtn,

  setMainTableView,

  editMesure,
}) {
  const data = {
    Unit: "",
    Symbol: "",
    Discription: "",
    userID: 1,
    CMPid: 1,
  };

  const [snackbarSucess, setSnackbarSucess] = useState(false);
  const [snackbarFail, setSnackBarFail] = useState(false);

  const [DataToSend, setDataToSend] = useState(data);

  const [addSucessfull, setAddSucessfull] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddDataToSend = (evt) => {
    const name = evt.target.value;
    setDataToSend({
      ...DataToSend,
      [evt.target.name]: name,
    });
  };

  const handleDeletefunctionss = () => {};

  return (
    <>
      {snackbarSucess && <SucessSnackbars />}
      {snackbarFail && <FailSnackbars />}
      {addSucessfull && (
        <SucessfullMag
          setPrintSucess={setAddSucessfull}
          messagetoPrint={"Saved Sucessfully"}
        />
      )}
      <div className="add__new__measurement">
        <div className="headding__Section">
          <h2>Unit Measurement</h2>
        </div>

        <div className="inner__Section">
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="top__secton">
              <div className="lef__Side__form">
                <div className="input__Sections">
                  <h5>Unit</h5>
                  <input
                    type="number"
                    name="Unit"
                    onChange={handleAddDataToSend}
                    value={DataToSend.Unit}
                  />
                </div>
                <div className="input__Sections">
                  <h5>Unit symbol</h5>
                  <input
                    type="text"
                    name="Symbol"
                    onChange={handleAddDataToSend}
                    value={DataToSend.Symbol}
                  />
                </div>
                <div className="input__Sections">
                  <h5>Unit Description</h5>
                  <input
                    type="text"
                    name="Discription"
                    onChange={handleAddDataToSend}
                    value={DataToSend.Discription}
                  />
                </div>
              </div>
            </div>
            <div className="bottom__btn__section">
              {editMesure > 0 ? (
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

export default AddNewMeasurement;
