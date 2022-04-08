import { red } from "@material-ui/core/colors";
import React, { useEffect, useRef, useState } from "react";
import FailSnackbars from "../../../basic components/failSnackBar";
import SucessSnackbars from "../../../basic components/sucessSidePopup";
import { accountServices } from "../../../../Services/AccountsServices";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./cashPayment.scss";
import { toast } from "material-react-toastify";
function CashPayment() {
  const dataJournal = {
    JEntryDate: "",
    DebitAccountId: "",
    CreditAccountId: "",
    JRefNo: "",
    JCredit: 0,
    JNarration: "",
    JDebit: 0,
    FinancialYearID: 1,
    CMPid: 1,
    UserID: 1,
    DebitAccountName: null,
    CreditAccountName: null,
    DebitaccName: null,
    CreditaccName: null,
    AccountName: null,
    ledgerName: null,
  };
  const editCreditRef = useRef(null);
  const editDebitRef = useRef(null);
  const [newJournal, setNewJournal] = useState(false);
  const [dataJournalToSend, setDataJournalToSend] = useState(dataJournal);
  const [startDate, setStartDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [isEdit, setEdit] = useState(false);
  const [dataFromServer, setDataFromServer] = useState([]);
  const [debitCredit, setDebitCredit] = useState(0);
  const [dropdownList, setDropdownList] = useState([]);
  const [messageToPass, setMessageToPass] = useState("");
  const [failSnackbar, setFailSnackBar] = useState(false);
  const [sucessSnackbar, setSucessSnackBar] = useState(false);
  const [snackBarOpen, setSnackbarOpen] = useState(true);
  const [creditDropDown,setCreditDropDown] = useState([])
  const [debitDropDown,setDebitDropDown] = useState([])
  const [journels,setJournels] = useState([])
  const [journelEditData,setJournelEditData] = useState([]);
  const [newData,setNewData] = useState({
    JCredit: 0,
    JDebit: 0,
    CreditAccountId: null,
    DebitAccountId: null,
    JEntryDate: null,
    JNarration: '',
    JRefNo: null
  })

  const handleDataInput = (e) => {
    const value = e.target.value;
    setNewData({...newData,[e.target.name]:value});
  };

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const handleFilterSearch = () => {
    let from = new Date(startDate).toISOString();
    let to = new Date(toDate).toISOString();
    if(startDate && toDate){
      accountServices.getFilteredPayment(new Date(startDate).toISOString(),new Date(toDate).toISOString())
      .then(res => setJournels(res))
      .catch(err => console.log(err))
    }
  }

  const handleNewJournal = () => {
    setNewJournal(true);
    setDebitCredit(0);
    setDataJournalToSend(dataJournal);
  };

  const handleStartDate = (date) => {
    setStartDate(date);
  };

  const handleToDate = (date) => {
    setToDate(date);
  };

  const handleSave = (e) =>{
    e.preventDefault();
    accountServices.uploadPayment(newData)
    .then((res) => {
      if(!res.error){
        toast.success('Successfully added!')
        handleClearALL()
      }else{
        toast.error('Insertion Failed')
      }
    }).catch(err => {
      toast.error('Insertion Failed')
    })
  }
  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(newData);
  }

  const handleJournalSubmit = (e) => {
    console.log(newData);
  };

  const handleClearALL = () => {
    setNewData({
      JCredit: '',
      JDebit: '',
      CreditAccountId: '',
      DebitAccountId: '',
      JEntryDate: '',
      JNarration: '',
      JRefNo: ''
    });
  };

  const handleEditOptions = (id,index) => {
    setEdit(true)
    setJournelEditData([journels[index]])
    setNewData(journels[index])
  };

  const handleExitfun = () => {
    setEdit(false);
    setNewJournal(false);
    setNewData({
      JCredit: '',
      JDebit: '',
      CreditAccountId: '',
      DebitAccountId: '',
      JEntryDate: '',
      JNarration: '',
      JRefNo: ''
    })
  };

  useEffect(() => {
    accountServices.getPaymentCreditDropDown()
    .then(data => setCreditDropDown(data))
    .catch(err => console.log(err))

    accountServices.getPaymentDebitDropDown()
    .then(data => setDebitDropDown(data))
    .catch(err => console.log(err))

    accountServices.getAllPayment()
    .then(data => setJournels(data))
    .catch(err => console.log(err))
  },[])

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

      <div className="Journals">
        <div className="top__header___Section">
          <h2>Payment</h2>
        </div>

        <div className="date__Search__section">
          <div className="input__date___section">
            <DatePicker
              selected={startDate}
              onChange={(date) => handleStartDate(date)}
              dateFormat={"dd/MM/yyyy"}
              isClearable
              placeholderText="from date"
            />
            <DatePicker
              selected={toDate}
              onChange={(date) => handleToDate(date)}
              dateFormat={"dd/MM/yyyy"}
              minDate={startDate}
              isClearable
              placeholderText="to date"
            />
          </div>

          <div className="search__Section">
            <button type="button" onClick={handleFilterSearch}>Search</button>
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
                    {journels.map((data,index) => (
                      <tr key={index} onClick={() => handleEditOptions(data.EntryNo,index)}>
                        <td>{data.JRefNo}</td>
                        <td>{new Date(data.JEntryDate).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="journal__right__section">
            <form onSubmit={handleJournalSubmit}>
              <div className="right__top__section">
                <div className="input__section__container__top">
                  {/* <div className="input__sections">
                    <h5>Entry No</h5>
                    <input
                      name="EntryNo"
                      value={dataJournalToSend.EntryNo}
                      onChange={handleDataInput}
                      type="text"
                      disabled
                      style={{ boxShadow: "0 0 10px grey" }}
                    />
                  </div> */}

                  <div className="input__sections">
                    <h5>Entry Data</h5>
                    <input
                      style={{ marginRight: "35px" }}
                      type="datetime-local"
                      name="JEntryDate"
                      value={newData.JEntryDate}
                      onChange={handleDataInput}
                    />
                  </div>
                </div>
                <div className="input__section__container__bottom">
                  <div className="input__sections">
                    <h5>Ref No</h5>
                    <input
                      required
                      name="JRefNo"
                      value={newData.JRefNo}
                      onChange={handleDataInput}
                      type="text"
                    />
                  </div>

                  <div className="input__sections">
                    <h5>Narration</h5>
                    <input
                      name="JNarration"
                      value={newData.JNarration}
                      onChange={handleDataInput}
                      type="text"
                      style={{ width: "150px", marginRight: "130px" }}
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
                        <th>Debit Account Name</th>
                        <th>Credit Account Name</th>
                        <th>Debit</th>
                        <th>Credit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(newJournal || isEdit) && (
                        <>
                          <tr>
                            <td
                              style={{
                                backgroundColor: "#cdccdd",
                                width: "40px",
                              }}
                            ></td>

                            {/* debit */}
                            <td>
                              {" "}
                              <select
                                name="DebitAccountId"
                                value={newData.DebitAccountId}
                                onChange={handleDataInput}
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  border: "none",
                                  height: "100%",
                                }}
                              >
                                <option value="" disabled selected>
                                  Pic Account Type
                                </option>
                                {debitDropDown?.map((list) => (
                                  <option value={list.Text}>
                                    {list.Text}
                                  </option>
                                ))}
                              </select>{" "}
                            </td>

                            {/* credit */}

                            <td>
                              {" "}
                              <select
                                name="CreditAccountId"
                                value={newData.CreditAccountId}
                                onChange={handleDataInput}
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  border: "none",
                                  height: "100%",
                                }}
                              >
                                <option value="" disabled selected>
                                  Pic Account Type
                                </option>
                                {creditDropDown?.map((list) => (
                                  <option value={list.Value}>
                                    {list.Text}
                                  </option>
                                ))}
                              </select>{" "}
                            </td>

                            {/* narration */}

                            {/* debit */}
                            <td>
                              <input
                                required
                                name="JDebit"
                                value={newData.JDebit}
                                onChange={handleDataInput}
                                style={{
                                  width: "100%",
                                  outline: "none",
                                  border: "none",
                                  height: "100%",
                                }}
                                type="number"
                              />
                            </td>

                            {/* credit */}
                            <td>
                              <input
                                required
                                name="JCredit"
                                value={newData.JCredit}
                                onChange={handleDataInput}
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
                        <td>{newData.JDebit}</td>
                        <td>{newData.JCredit}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="button__section">
                  {(!newJournal && !isEdit)&& 
                    <button onClick={handleNewJournal}>New</button>
                  }
                  {newJournal && <button type="submit" onClick={handleSave}>Save</button>}
                  {isEdit && <button type="submit" onClick={handleUpdate}>Update</button>}
                  <button type="button" onClick={handleClearALL}>Clear</button>
                  <button type="button" onClick={handleExitfun}>Exit</button>
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

export default CashPayment;
