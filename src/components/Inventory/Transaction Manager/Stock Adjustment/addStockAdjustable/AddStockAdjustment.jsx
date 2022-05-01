import React, { useEffect, useState } from "react";
import "./addStockAdjustable.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditableUpdatablePage from "../editableUpdatablePage/EditableUpdatablePage";
import { inventoryServices } from "../../../../../Services/InventoryServices";
import { walkinServices } from "../../../../../Services/WalkinServices";

const datas = [
  {
    productCode: "101",
    ProductName: "Oil",
    Stock: 5,
    DisPer: 0,
    TaxPer: 5,
    batch: "k15678",
    expiry: "jan/2022",
    OtyAdd: 5,
    QtyDeduct: 0,
    Mrp: 80,
    Amount: 80,
    AmoundDeduct: 0.0,
  },

  {
    productCode: "102",
    ProductName: "Sugar",
    Stock: 2,
    DisPer: 0,
    TaxPer: 2,
    batch: "k15679",
    expiry: "jan/2021",
    OtyAdd: 5,
    QtyDeduct: 0,
    Mrp: 70,
    Amount: 70,
    AmoundDeduct: 0.0,
  },

  {
    productCode: "103",
    ProductName: "Salt",
    Stock: 7,
    DisPer: 0,
    TaxPer: 6,
    batch: "k15678",
    expiry: "jan/2023",
    OtyAdd: 5,
    QtyDeduct: 0,
    Mrp: 80,
    Amount: 80,
    AmoundDeduct: 0.0,
  },
];

function AddStockAdjustment({ setAddNewBtn, setMainTableView }) {
  const [productMoreOption, setProductsMoreOption] = useState(false);
  const [filterData, SetFiterData] = useState([]);
  const [category, setCategory] = useState([])
  const [productdropdown, setProductdropdown] = useState([])
  // if the data in dropdown is selected the abovr tr must be removed and ne tr must be added
  const [dropdownarrayClicked, setDropDownArrayClicked] = useState(false);

  const handleSelectedItem = (productCode) => {
    const dataSorted = datas.find((items) => items.productCode === productCode);
    SetFiterData([...filterData, dataSorted]);
  };

  console.log("THE FILTERED DATA IS ", filterData);

  useEffect(() => {
    inventoryServices.getStockcost()
      .then(data => {
        setProductdropdown(data)
      })

    walkinServices.getAllcategories()
      .then(data => { setCategory(data) })
  }, [])

  return (
    <div className="AddStockAdjustment">
      <div className="headderName">
        <h3>Stock Adjustment</h3>
      </div>

      {/* top form section above table */}
      <div className="top__Section">
        <div className="left__Section">
          <div className="top">
            <div className="input__sections">
              <h5>Ref No</h5>
              <input type="text" />
            </div>
            <div className="input__sections">
              <h5>Category</h5>
              <select name="CategoryId" id="">
                <option disabled selected>Select Category</option>
                {category && category.map((item) => (
                  <option value=""></option>))}
              </select>
            </div>
          </div>
          <div className="bottom">
            <div className="input__sections">
              <h5>To Date</h5>
              <input type="date" />
            </div>
            <div className="input__sections">
              <h5>Product Name</h5>
              <select name="" id="">
                <option selected="true" disabled="disabled">Select Product</option>
                {productdropdown && productdropdown.map((items) => (
                  <option value={items.Cid}>
                    {items.ProductName}
                  </option>))}
              </select>
            </div>
          </div>
        </div>
        <div className="search__Section">
          <button>Search</button>
          <button>Cancel</button>
        </div>
      </div>

      {/* ends */}

      {/* mid table */}
      <div className="mid__section">
        <div className="table__sections">
          {/* pop  */}

          {productMoreOption && (
            <div className="pop__up__table">
              {!dropdownarrayClicked && (
                <table className="table">
                  <thead>
                    <tr>
                      <th className="lefttd">Product Code</th>
                      <th>Product Name</th>
                      <th>Stock</th>
                      <th>Disc Perc</th>
                      <th className="righttd"> Tax Perc</th>
                    </tr>
                  </thead>

                  <tbody>
                    {datas.map((items) => (
                      <tr onClick={() => handleSelectedItem(items.productCode)}>
                        <td className="lefttd">{items.productCode}</td>
                        <td>{items.ProductName}</td>
                        <td>{items.Stock}</td>
                        <td>{items.DisPer}</td>
                        <td className="righttd">{items.TaxPer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* main table */}
          <table className="table">
            <thead>
              <tr>
                <th>SINo</th>
                <th>Product</th>
                <th>Batch</th>
                <th>Expiry</th>
                <th>Stock</th>
                <th>Qty Add</th>
                <th>Qty Deduct</th>
                <th>MRP</th>
                <th>Amount</th>
                <th>Amount Deduct</th>
              </tr>
            </thead>
            <tbody>
              {!dropdownarrayClicked && (
                <tr>
                  <td></td>
                  <td style={{ textAlign: "right" }}>
                    {productMoreOption && (
                      <ArrowDropDownIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => setProductsMoreOption(false)}
                      />
                    )}
                    {!productMoreOption && (
                      <ArrowRightIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => setProductsMoreOption(true)}
                      />
                    )}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )}

              {/* this will view if they clicked on sub Category */}

              {filterData?.map((items, id) => (
                <tr contentEditable="true">
                  <td>{id}</td>
                  <td>{items.ProductName}</td>
                  <td>{items.batch}</td>
                  <td>{items.expiry}</td>
                  <td>{items.Stock}</td>
                  <td>{items.OtyAdd}</td>
                  <td>{items.QtyDeduct}</td>
                  <td>{items.Mrp}</td>
                  <td>{items.Amount}</td>
                  <td>{items.AmoundDeduct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* ends */}

      {/* bottom section */}
      <div className="bottom__sections">
        <div className="bottom__btn__section">
          <button>Save</button>
          <button
            onClick={() => {
              setMainTableView(true);
              setAddNewBtn(false);
            }}
          >
            Exit
          </button>
        </div>
      </div>

      {/* ends */}
    </div>
  );
}

export default AddStockAdjustment;
