import React, { useEffect, useState } from "react";

import "./accountHeadAdd.scss";

import SucessfullMag from "../../../../Inventory/Transaction Manager/Reports/Stock Cost/clossing stock print/SucessfullMessage/SucessfullMag";

import FailSnackbars from "../../../../basic components/failSnackBar";
import SucessSnackbars from "../../../../basic components/sucessSidePopup";
function AccountHeadAdd({
  setAddNewBtn,
  setMainTableView,
  editTableSelectedID,
}) {
  const data = {
    AHCode: null,
    AccountControlName: null,
    AccountGroupID: null,
    AccountHeadName: null,
    AccountNumber: null,
    Address: null,
    CMPid: 1,
    Place: null,
    UserID: 1,
  };

  const [dataToSend, setDataToSend] = useState(data);
  const [dropdownList, setDropdownList] = useState([]);
  const [sucessfullMsg, setSucessfullmsg] = useState(false);
  const [messageToPass, setMessageToPass] = useState("");
  const [failSnackbar, setFailSnackBar] = useState(false);
  const [sucessSnackbar, setSucessSnackBar] = useState(false);
  const [snackBarOpen, setSnackbarOpen] = useState(true);

  const handleAddCategoryToSend = (e) => {
    const value = e.target.value;
    setDataToSend({
      ...dataToSend,
      [e.target.name]: value,
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  const handleDeletefunctionss = () => {};

  return (
    <>
      {failSnackbar && (
        <FailSnackbars
          MessageToPass={messageToPass}
          open={snackBarOpen}
          setOpen={setSnackbarOpen}
        />
      )}
      {sucessSnackbar && (
        <SucessSnackbars
          MessageToPass={messageToPass}
          open={snackBarOpen}
          setOpen={setSnackbarOpen}
        />
      )}

      {sucessfullMsg && (
        <SucessfullMag
          setPrintSucess={setSucessfullmsg}
          messagetoPrint={"Save Sucessfully"}
        />
      )}
      <div className="AccountHeadAdd">
        <div className="headding__Section">
          <h2>Account Head</h2>
        </div>

        <div className="inner__Section">
          <form
            action=""
            autoComplete="off"
            onSubmit={(e) => submitFormHandler(e)}
          >
            <div className="top__secton">
              <div className="top__headder__section">
                <div className="left__Section">
                  <div className="input__Sections">
                    <h5>Head Code</h5>
                    <input
                      type="text"
                      required
                      onChange={handleAddCategoryToSend}
                      value={dataToSend.AHCode}
                      name="AHCode"
                    />
                  </div>
                </div>

                <div className="right__section">
                  <div className="input__Sections">
                    <h5>Head Id</h5>
                    <input
                      type="text"
                      disabled
                      value={dataToSend.AccountGroupID}
                      name="AccountGroupID"
                    />
                  </div>
                </div>
              </div>

              <div className="rest__Sections">
                <div className="input__Sections">
                  <h5>Head Name</h5>
                  <input
                    type="text"
                    name="AccountHeadName"
                    value={dataToSend.AccountHeadName}
                    onChange={handleAddCategoryToSend}
                    required
                  />
                </div>

                <div className="input__Sections">
                  <h5>Account Type</h5>
                  <select
                    name="AccountGroupID"
                    id=""
                    onChange={handleAddCategoryToSend}
                    value={dataToSend.AccountGroupID}
                    style={{
                      width: "60%",
                      height: "30px",
                      borderRadius: "5px",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    {dropdownList?.map((list) => (
                      <option value={list.Value}>{list.Text}</option>
                    ))}
                  </select>
                </div>

                <div className="input__Sections">
                  <h5>Account Number</h5>
                  <input
                    type="text"
                    required
                    name="AccountNumber"
                    value={dataToSend.AccountNumber}
                    onChange={handleAddCategoryToSend}
                  />
                </div>

                <div className="input__Sections">
                  <h5>Place</h5>
                  <input
                    type="text"
                    required
                    name="Place"
                    value={dataToSend.Place}
                    onChange={handleAddCategoryToSend}
                  />
                </div>

                <div className="input__Sections">
                  <h5>Address</h5>

                  <input
                    type="text"
                    required
                    name="Address"
                    value={dataToSend.Address}
                    onChange={handleAddCategoryToSend}
                  />
                </div>
              </div>
            </div>
            <div className="bottom__btn__section">
              {editTableSelectedID ? (
                <>
                  <button>Update</button>
                  <button onClick={() => handleDeletefunctionss(dataToSend)}>
                    Delete
                  </button>
                </>
              ) : (
                <button type="submit">save</button>
              )}

              <button
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

export default AccountHeadAdd;
