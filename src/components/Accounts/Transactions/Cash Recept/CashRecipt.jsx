import { red } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import "./cashrecipt.scss";
import FailSnackbars from "../../../basic components/failSnackBar";
import SucessSnackbars from "../../../basic components/sucessSidePopup";
const ADDCASHRECIPT = {
  EntryNo: "",
  EntryDate: "",
  Narration: "",
  AccountName: "",
  Reciept: "",
  Payment: "",
  PaymentType: "",
  RefNo: "",
  CMPid: "",
  UserID: "",
  FinancialYearID: "",
};
function CashRecipt() {
  const [cashReciptData, setCashReciptData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [newJournal, setNewJournal] = useState(false);
  const [dataInCashRecipt, setDataInCashRecipt] = useState([]);
  const [keyvalue, setKeyvalue] = useState(ADDCASHRECIPT);
  const [reciptPayment, setReciptPayment] = useState(0);
  const [messageToPass, setMessageToPass] = useState("");
  const [failSnackbar, setFailSnackBar] = useState(false);
  const [sucessSnackbar, setSucessSnackBar] = useState(false);

  const [sucessAdded, setSucessAdded] = useState(true);
  const [snackBarOpen, setSnackbarOpen] = useState(true);
  const HandleAddDatatToKeyvalue = (e) => {
    const value = e.target.value;

    setKeyvalue({
      ...keyvalue,
      [e.target.name]: value,
      Reciept: reciptPayment,
      Payment: reciptPayment,
    });
  };

  // form submission to add a product

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFailSnackBar(false);
    setSucessSnackBar(false);

    const url = "http://localhost:5000/api/v1/Reciepts";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(keyvalue),
    })
      .then((response) => response.json())
      .then((latestPostFromServer) => {
        setCashReciptData(latestPostFromServer);
        setSucessSnackBar(true);
        setMessageToPass("Sucessfully Added Cash Recipt");
        setSnackbarOpen(true);
      })
      .catch((error) => {
        console.log(error);
        setMessageToPass("Error Occure While Adding Cash Recipt");
        setSnackbarOpen(true);
        setFailSnackBar(true);
      });

    setReciptPayment(0);
    setKeyvalue(ADDCASHRECIPT);
  };

  // old start

  const handleNewJournal = () => {
    setNewJournal(true);
  };

  const handleeditCashRecipt = (items) => {
    setEdit(true);
    setNewJournal(true);
    setKeyvalue("");
  };

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
      <div className="CashRecipt">
        <div className="top__header___Section">
          <h2>Cash Recipt</h2>
        </div>

        <div className="date__Search__section">
          <div className="input__date___section">
            <input type="date" name="" id="" />
            <input type="date" name="" id="" />
          </div>

          <div className="search__Section">
            <button>Search</button>
          </div>
        </div>
        <div className="journal__container">
          <div className="journal__left__section">
            <div className="left__top__section">
              <input type="text" />
            </div>

            <div className="left__bottom__section">
              <div className="table__sections">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Ref No</th>
                      <th>Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataInCashRecipt?.map((items, index) => (
                      <tr
                        onClick={() => {
                          handleeditCashRecipt(items.id);
                        }}
                        key={index}
                      >
                        <td>{items.refNo}</td>
                        <td>{items.EntryDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="journal__right__section">
            <form onSubmit={handleFormSubmit}>
              <div className="right__top__section">
                <div className="input__section__container__top">
                  <div className="input__sections">
                    <h5>Entry No</h5>
                    <input
                      required
                      name="EntryNo"
                      value={keyvalue.EntryNo}
                      onChange={HandleAddDatatToKeyvalue}
                      type="number"
                    />
                  </div>

                  <div className="input__sections">
                    <h5>Entry Data</h5>
                    <input
                      required
                      name="EntryDate"
                      value={keyvalue.EntryDate}
                      onChange={HandleAddDatatToKeyvalue}
                      type="date"
                      id=""
                    />
                  </div>
                </div>
                <div className="input__section__container__bottom">
                  <div className="input__sections">
                    <h5>Ref No</h5>
                    <input
                      required
                      name="RefNo"
                      value={keyvalue.RefNo}
                      onChange={HandleAddDatatToKeyvalue}
                      type="number"
                      style={{
                        marginRight: 15,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="right__mid__section">
                <div className="table__sections">
                  <table className="table">
                    <thead>
                      <tr>
                        <th
                          style={{ backgroundColor: "#a09ebd", width: "40px" }}
                        ></th>
                        <th>Account Name</th>
                        <th>Narration</th>
                        <th>Recipt</th>
                        <th>Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newJournal && (
                        <>
                          <tr>
                            <td
                              style={{
                                backgroundColor: "#cdccdd",
                                width: "40px",
                              }}
                            ></td>
                            <td>
                              {" "}
                              <select
                                name="AccountName"
                                value={keyvalue.AccountName}
                                onChange={HandleAddDatatToKeyvalue}
                                required
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  border: "none",
                                  height: "100%",
                                }}
                              >
                                <option value="" disabled>
                                  select
                                </option>
                                <option value="one">Dr Rajan Tomas</option>
                                <option value="two">James Abraham</option>
                              </select>{" "}
                            </td>

                            {/* narration */}
                            <td>
                              {" "}
                              <input
                                name="Narration"
                                value={keyvalue.Narration}
                                onChange={HandleAddDatatToKeyvalue}
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  border: "none",
                                  height: "100%",
                                }}
                                type="text"
                              />{" "}
                            </td>

                            {/* Recipt */}
                            <td>
                              <input
                                required
                                name="RefNo"
                                value={reciptPayment}
                                onChange={(e) =>
                                  setReciptPayment(e.target.value)
                                }
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  border: "none",
                                  height: "100%",
                                }}
                                type="number"
                              />
                            </td>

                            {/* Payment */}
                            <td>
                              <input
                                required
                                value={reciptPayment}
                                onChange={(e) =>
                                  setReciptPayment(e.target.value)
                                }
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  border: "none",
                                  height: "100%",
                                }}
                                type="number"
                              />
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>

                    <tfoot>
                      <tr>
                        <td style={{ border: "none" }}></td>
                        <td style={{ border: "none" }}></td>
                        <td style={{ border: "none" }}></td>
                        <td>{reciptPayment}</td>
                        <td>{reciptPayment}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="button__section">
                  {!newJournal && (
                    <button onClick={() => handleNewJournal()}>New</button>
                  )}

                  {edit && <button type="submit">Edit</button>}

                  {newJournal && (
                    <>
                      {!edit && <button type="submit">Save</button>}

                      {/* <button>Clear</button> */}
                    </>
                  )}

                  {newJournal && (
                    <button type="button" onClick={() => setNewJournal(false)}>
                      {" "}
                      Exit
                    </button>
                  )}
                </div>
              </div>
            </form>
            {/* <div className="right__bottom__section"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CashRecipt;
