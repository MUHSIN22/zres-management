import React, { useEffect, useState } from "react";
import { inventoryServices } from "../../../../Services/InventoryServices";
import "./gpStatement.scss";


function GpStatement() {
  const [addNewBtn, setAddNewBtn] = useState(false);
  const [mainTableView, setMainTableView] = useState(true);
  const [data,setData] = useState([])
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [totalmrp,setTotalmrp] = useState(0)
  const [totalsales,setTotalsales] = useState(0)
  const [totalcost,setTotalcost] = useState(0)
  const [totalgp,setTotalgp] = useState(0)
  const [clickedTr, SetClickedTr] = useState("");

  const stockStatementFilter = (from,to)=>{
    if(from && to){
      inventoryServices.getStockStatementFilter(from,to)
      .then(data=>{ setData(data);})
      
    }
   }

  useEffect(() => {
  inventoryServices.getGpstatement()
  .then(data =>{ setData(data)})
  }, [])
  
  return (
    <>
   
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

              <div onClick={()=>{stockStatementFilter(fromDate,toDate)}}className="search__Section">
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
                    <th>ItemName</th>
                    <th>Sales Price</th>
                    <th>Cost of Sales</th>
                    <th>Gross Profit</th>
                    <th>Gross profit %</th>
                  </tr>
                </thead>
                <tbody>
                  {data[0] ? data.map((datas,index) => (
                    <tr
                      keys={index+1}
                      className={clickedTr === index+1 && "selectedTr "}
                      onClick={() => SetClickedTr(index+1)}
                    >
                      <td>{index+1}</td>

                      <td>{datas.Date}</td>

                      <td>{datas.Rate}</td>
                      <td>{datas.ItemName}</td>
                      <td>{datas.SalesPrice}</td>

                      <td>{datas.CostOfSale}</td>

                      <td>{datas.GrossProfit}</td>

                      <td>{datas.GPpercentage}</td>
                    </tr>
                  )):"No data found"}
                </tbody>
                <tfoot>
                  {/* <tr>
                    <td className="grandSummary" colSpan="2">
                      Grand Summary
                    </td>

                    <td>2000</td>
                    <td>1200</td>
                    <td>800</td>
                    <td>1200</td>
                    <td></td>
                  </tr> */}
                </tfoot>
              </table>
            </div>

            <div className="canceled__and__total__amount">
              <div className="total__amount__section">
                <h5>Total Mrp</h5>

                <div className="amount__holder">
                  <h5>{totalmrp}</h5>
                </div>
              </div>

              <div className="total__amount__section">
                <h5>Total Sales Price</h5>

                <div className="amount__holder">
                  <h5>{totalsales}</h5>
                </div>
              </div>

              <div className="total__amount__section">
                <h5>Total Cost</h5>

                <div className="amount__holder">
                  <h5>{totalcost}</h5>
                </div>
              </div>

              <div className="total__amount__section">
                <h5>Total Gp</h5>

                <div className="amount__holder">
                  <h5>{totalgp}</h5>
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
