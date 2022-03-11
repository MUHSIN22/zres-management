import React, { useState } from "react";
import "./gpStatement.scss";

const Date = [
  {
    SINO: "1",

    Date: "01 jan 21",

    MRP: 210,

    SalesPrics: 200,

    CostOfSale: 80,

    GrossProfit: 100,

    GrossProfitPer: "60",
  },

  {
    SINO: "2",

    Date: "01 jan 21",

    MRP: 210,

    SalesPrics: 200,

    CostOfSale: 80,

    GrossProfit: 100,

    GrossProfitPer: "60",
  },

  {
    SINO: "2",

    Date: "01 jan 21",

    MRP: 210,

    SalesPrics: 200,

    CostOfSale: 80,

    GrossProfit: 100,

    GrossProfitPer: "60",
  },
];

function GpStatement() {
  const [addNewBtn, setAddNewBtn] = useState(false);
  const [mainTableView, setMainTableView] = useState(true);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [clickedTr, SetClickedTr] = useState("");

  const DateFilter = () => {
    var FromdateSplit = fromDate.split("/");
    var toDateSplit = toDate.split("/");
  };
  return (
    <>
      {/* {addNewBtn && (
        <PurchaseReturnAdd
          setAddNewBtn={setAddNewBtn}
          setMainTableView={setMainTableView}
        />
      )} */}

      {mainTableView && (
        <div className="GpStatement">
          {/* ADD NEW SECTION START */}

          {/* ADD NEW SECTION END */}

          <div className="top__section">
            <h2>Sales Return Details</h2>
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

              <div className="sales__Type">
                <h5>Sale Type</h5>
                <select name="" id="">
                  <option value=""></option>
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
                    <th>Date</th>
                    <th>MRP</th>
                    <th>Sales Price</th>
                    <th>Cost of Sales</th>
                    <th>Gross Profit</th>
                    <th>Gross profit %</th>
                  </tr>
                </thead>
                <tbody>
                  {Date.map((datas) => (
                    <tr
                      keys={datas.id}
                      className={clickedTr === datas.SINO && "selectedTr "}
                      onClick={() => SetClickedTr(datas.SINO)}
                    >
                      <td>{datas.SINO}</td>

                      <td>{datas.Date}</td>

                      <td>{datas.MRP}</td>

                      <td>{datas.SalesPrics}</td>

                      <td>{datas.CostOfSale}</td>

                      <td>{datas.GrossProfit}</td>

                      <td>{datas.GrossProfitPer}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="grandSummary" colSpan="2">
                      Grand Summary
                    </td>

                    <td>2000</td>
                    <td>1200</td>
                    <td>800</td>
                    <td>1200</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="canceled__and__total__amount">
              <div className="total__amount__section">
                <h5>Total Mrp</h5>

                <div className="amount__holder">
                  <h5>14000.00</h5>
                </div>
              </div>

              <div className="total__amount__section">
                <h5>Total Sales Price</h5>

                <div className="amount__holder">
                  <h5>14000.00</h5>
                </div>
              </div>

              <div className="total__amount__section">
                <h5>Total Cost</h5>

                <div className="amount__holder">
                  <h5>14000.00</h5>
                </div>
              </div>

              <div className="total__amount__section">
                <h5>Total Gp</h5>

                <div className="amount__holder">
                  <h5>14000.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GpStatement;
