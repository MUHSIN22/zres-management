import { red } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import "./cashPayment.scss";
function CashPayment() {
  const [edit, setEdit] = useState(false);
  const [newJournal, setNewJournal] = useState(false);
  const [selectBoxValue, setSelectBoxValue] = useState(""); //account name
  const [narration, setNarration] = useState("");
  const [recipt, setRecipt] = useState(0);
  const [payment, setPayment] = useState(0);
  const [entryNo, setEntryNo] = useState();
  const [refNo, setRefNo] = useState();
  const [entryDate, setEntryDate] = useState();
  const [narrationHeadder, setNarrationHeadder] = useState("");
  const [savedJournal, setSavedJournal] = useState([]);
  const [selectedLeftDataRef, setSelectedLeftDataRef] = useState();

  const handleNewJournal = () => {
    setNewJournal(true);
    setEntryNo(1);
    setRefNo(1);
    setEntryDate("2021-12-20");
  };

  const DatePicker = () => {
    const dateoftoday = new Date();
    const day = dateoftoday.getUTCDate();
    const Month = dateoftoday.getMonth() + 1;
    const Year = dateoftoday.getFullYear();
    const DefaultRefNo = 1;
    const DefaultEntryNo = 1;

    if (newJournal) {
      setEntryDate(`${Year}-${Month}-${day}`);

      if (!savedJournal) {
        setRefNo(DefaultRefNo);
        setEntryNo(DefaultEntryNo);
      } else {
        setRefNo(savedJournal.length + 1);
        setEntryNo(savedJournal.length + 1);
      }
    } else {
      setEntryDate(``);
    }
  };

  useEffect(() => {
    DatePicker();
  }, [newJournal, savedJournal]);

  const handleNewJournalSave = (e) => {
    e.preventDefault();
    setSavedJournal([
      ...savedJournal,
      {
        id: savedJournal.length,
        EntryNo: entryNo,
        refNo: refNo,
        EntryDate: entryDate,
        NarrationHeadder: narrationHeadder,
        AccountName: selectBoxValue,
        Narration: narration,
        Recipt: recipt,
        Payment: payment,
      },
    ]);
    setSelectBoxValue("");
    setNarration("");
    setRecipt(0);
    setPayment(0);

    setEntryNo("");
    setRefNo("");
    setEntryDate("");
    setNarrationHeadder("");
  };

  const handleSelectedLeftItem = (items) => {
    setEdit(true);
    setSelectBoxValue(items.AccountName);
    setNarration(items.Narration);
    setRecipt(items.Recipt);
    setPayment(items.Payment);

    setEntryNo(items.EntryNo);
    setRefNo(items.refNo);
    setEntryDate(items.EntryDate);
    setNarrationHeadder(items.NarrationHeadder);
  };

  const handleEditJournal = () => {
    const selectedRef = selectedLeftDataRef;
  };

  return (
    <div className="CashRecipt">
      <div className="top__header___Section">
        <h2>Cash Payment</h2>
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
                  {savedJournal?.map((items) => (
                    <tr
                      onClick={() => {
                        handleSelectedLeftItem(items);
                        setSelectedLeftDataRef(items.refNo);
                      }}
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
          <form onSubmit={(e) => handleNewJournalSave(e)}>
            <div className="right__top__section">
              <div className="input__section__container__top">
                <div className="input__sections">
                  <h5>Entry No</h5>
                  <input
                    required
                    value={entryNo}
                    onChange={(e) => setEntryNo(e.target.value)}
                    type="text"
                  />
                </div>

                <div className="input__sections">
                  <h5>Entry Data</h5>
                  <input
                    required
                    value={entryDate}
                    onChange={(e) => setEntryDate(e.target.value)}
                    type="date"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="input__section__container__bottom">
                <div className="input__sections">
                  <h5>Ref No</h5>
                  <input
                    required
                    value={refNo}
                    onChange={(e) => setRefNo(e.target.value)}
                    type="text"
                  />
                </div>

                <div className="input__sections">
                  <h5>Narration</h5>
                  <input
                    value={narrationHeadder}
                    onChange={(e) => setNarrationHeadder(e.target.value)}
                    type="text"
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
                      <th>Payment</th>
                      <th>Recipt</th>
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
                              onChange={(e) =>
                                setSelectBoxValue(e.target.value)
                              }
                              required
                              value={selectBoxValue}
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
                              value={narration}
                              onChange={(e) => setNarration(e.target.value)}
                              style={{
                                width: "100%",
                                outline: "none",
                                border: "none",
                                height: "100%",
                              }}
                              type="text"
                            />{" "}
                          </td>

                          {/* Payment */}
                          <td>
                            <input
                              required
                              value={payment}
                              onChange={(e) => setPayment(e.target.value)}
                              style={{
                                width: "100%",
                                outline: "none",
                                border: "none",
                                height: "100%",
                              }}
                              type="number"
                            />
                          </td>

                          {/* Recipt */}
                          <td>
                            <input
                              required
                              value={recipt}
                              onChange={(e) => setRecipt(e.target.value)}
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
                      <td>0</td>
                      <td>0</td>
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

                    <button>Clear</button>
                  </>
                )}

                <button>Exit</button>
              </div>
            </div>
          </form>
          {/* <div className="right__bottom__section"></div> */}
        </div>
      </div>
    </div>
  );
}

export default CashPayment;
