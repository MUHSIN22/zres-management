import React from "react";
import "./reorderMapping.scss";
import { useState } from "react";
import { useEffect } from "react";

const Date = [
  {
    id: 1,
    SINO: "1",

    RtnNo: "1",

    RtnDate: "25/11/2021",

    InvNo: "10212",

    InvDate: "25/11/2021",

    Amound: 10000,

    Supplier: "Ram",

    ReturnType: "Direct Return",

    UserName: "vivek",
  },

  {
    id: 2,
    SINO: "2",

    RtnNo: "2",

    RtnDate: "25/11/2021",

    InvNo: "10212",

    InvDate: "25/11/2021",

    Amound: 10000,

    Supplier: "Ram",

    ReturnType: "Expiry Return",

    UserName: "vivek",
  },
];

function ReorderMapping() {
  const [addNewBtn, setAddNewBtn] = useState(false);
  const [mainTableView, setMainTableView] = useState(true);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [clickedTr, SetClickedTr] = useState("");

  const DateFilter = () => {
    var FromdateSplit = fromDate.split("/");
    var toDateSplit = toDate.split("/");
  };

  const [datatoMap, setDatatoMap] = useState([]);
  useEffect(() => {
    setDatatoMap(
      Date.map((d) => {
        return {
          id: d.id,
          select: false,
          SINO: d.SINO,
          RtnNo: d.RtnNo,
          RtnDate: d.RtnDate,
          InvNo: d.InvNo,
          InvDate: d.InvDate,
          Amound: d.Amound,
          Supplier: d.Supplier,
          ReturnType: d.ReturnType,
          UserName: d.UserName,
        };
      })
    );
  }, []);

  return (
    <>
      {/* {addNewBtn && (
        <AddGoodsReport
          setAddNewBtn={setAddNewBtn}
          setMainTableView={setMainTableView}
        />
      )} */}

      {mainTableView && (
        <div className="ReorderMapping">
          {/* ADD NEW SECTION START */}

          {/* ADD NEW SECTION END */}

          <div className="top__section">
            <h2>Reorder Mapping</h2>
          </div>

          <div className="bottom__Section">
            <div className="table__filter">
              <div className="dateSearchWrapper">
                <h5>From Date</h5>{" "}
                <input
                  type="date"
                  name=""
                  id=""
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>

              <div className="dateSearchWrapper">
                <h5>To Date</h5>{" "}
                <input
                  type="date"
                  name=""
                  id=""
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>

              <div className="dateSearchWrapper">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  style={{ marginRight: "5px", height: "25px" }}
                />
                <h5>Supplier Name</h5>
              </div>

              <div className="input__Section">
                <h5>Product Name</h5>
                <select name="" id="">
                  <option value=""></option>
                </select>
              </div>

              <div className="search__Section">
                <button>Search</button>
              </div>
            </div>
            <div className="table__sections">
              <table className="table">
                <thead>
                  <tr>
                    <th>SINo</th>
                    <th>Product Name</th>
                    <th>Supplier Name</th>
                    <th>Oppening (qty)</th>
                    <th>Total Sales(qty)</th>
                    <th>Avg Sales(qty)</th>
                    <th>Stock(qty)</th>
                    <th>Reg Qty</th>
                    <th>Unit</th>
                    <th>Min Reorder</th>
                    <th>Max Reorder</th>
                    <th>
                      Selection{" "}
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        onChange={(e) => {
                          let checked = e.target.checked;
                          setDatatoMap(
                            datatoMap.map((d) => {
                              d.select = checked;
                              return d;
                            })
                          );
                        }}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {datatoMap.map((datas) => (
                    <tr
                      keys={datas.id}
                      className={clickedTr === datas.SINO && "selectedTr "}
                      onClick={() => SetClickedTr(datas.SINO)}
                    >
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.SINO}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.RtnNo}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.RtnDate}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.InvNo}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.InvDate}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.Amound}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.Amound}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.Amound}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.Amound}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.Amound}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.Amound}
                      </td>

                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          checked={datas.select}
                          onChange={(event) => {
                            let checked = event.target.checked;

                            setDatatoMap(
                              datatoMap.map((data) => {
                                if (datas.id === data.id) {
                                  data.select = checked;
                                }
                                return data;
                              })
                            );
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bottom__btn__sectionss">
              <button>Save</button>
              <button>Exit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ReorderMapping;
