import React from "react";
import "./reorderMapping.scss";
import { useState } from "react";
import { useEffect } from "react";
import { inventoryServices } from "../../../../Services/InventoryServices";



function ReorderMapping() {
  const [addNewBtn, setAddNewBtn] = useState(false);
  const [mainTableView, setMainTableView] = useState(true);
  const [data, setData] = useState([])
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [productname, setProductname] = useState([])
  const [clickedTr, SetClickedTr] = useState("");


  const [datatoMap, setDatatoMap] = useState([]);



  useEffect(() => {
    inventoryServices.getReordermapping()
      .then(data => { setData(data);setProductname(data) })
      .catch(err => console.log(err))
  }, [])

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
                  <option disabled="true" selected>Select product Name</option>
                  {productname && productname.map((item) => (
                    <option value={item.ProductName}>{item.ProductName}</option>
                  ))}
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
                  {data[0] ? data.map((datas, index) => (
                    <tr
                      keys={index + 1}
                      className={clickedTr === index + 1 && "selectedTr "}
                      onClick={() => SetClickedTr(index + 1)}
                    >
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {index + 1}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.ProductName}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.SupplierName}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.OpeningQty}
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
                        {datas.Stock}
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
                        {datas.Unit}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.MinReOrdeROrderLevel}
                      </td>
                      <td
                        className={
                          datas.ReturnType === "Expiry Return" && "Canceled "
                        }
                      >
                        {datas.MaxReOrderLevel}
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
                          checked={datas.Selection}
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
                  )):"No data found"}
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
