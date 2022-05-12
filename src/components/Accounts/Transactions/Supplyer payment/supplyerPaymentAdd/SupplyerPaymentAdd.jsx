import React, { useEffect, useState } from "react";
import { accountServices } from "../../../../../Services/AccountsServices";
import "./supplyerPaymentAdd.scss";
function SupplyerPaymentAdd() {
  const [suppliers,setSuppliers]  = useState([])
  const [supplierPayments,setSupplierPayments] = useState([])

  const handleSupplierSelect = (event) => {
    accountServices.getSupplierPaymentList(event.target.value)
      .then(res => {setSupplierPayments(res);console.log(res);})
      .catch(err => console.log(err))
  }

  useEffect(() => {
    accountServices.getSuppliers()
      .then(res => {setSuppliers(res);console.log(res);})
      .catch(err => console.log(err))
  },[])

  return (
    <div className="SupplyerPaymentAdd">
      <div className="headder__Section">
        <h2>Supplier Payment</h2>
      </div>

      <div className="main__body__container">
        <div className="left__Side__container">
          <div className="top__Section">
            <div className="RefNoPayment">
              <div className="input__Section">
                <h5>Ref No</h5>
                <input type="text" />
              </div>

              <div className="radioBtn__Section">
                <div className="headding__Section">
                  <h5>Payment Type</h5>
                </div>

                <div className="radio__sec">
                   {" "}
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                    <label for="css">Cash</label>
                </div>

                <div className="radio__sec">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                    <label for="html">Bank</label>
                </div>
                <div className="radio__sec">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                    <label for="html">Adj</label>
                </div>
              </div>
            </div>
          </div>
          <div className="diff__input__Section">
            <div className="input__Section">
              <h5>Supplier</h5>
              <select name="" id="" onChange={handleSupplierSelect}>
                <option>Select supplier</option>
                <>
                {
                  suppliers.map((item,index) => (
                    <option key={index} value={item.Value}>{item.Text}</option>
                  ))
                }
                </>
              </select>
            </div>

            <div className="input__Section">
              <h5>Particulars</h5>
              <input type="text"></input>
            </div>
          </div>

          <div className="supplyer__balance__Section">
            <div className="headder__Section">
              <h3>Supplier Balance</h3>
            </div>

            <div className="amount__Section">
              <h5>Amount</h5>
              <input
                type="text"
                style={{
                  boxShadow: "0 0 10px rgb(146, 146, 146)",
                }}
              />
              <input type="checkbox" className="Checkbox" name="" id="" />
            </div>
            <div className="mid__section">
              <div className="table__sectionsss">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Inv No</th>
                      <th>Inv Amt</th>
                      <th>Amt Paid</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12/2021</td>
                      <td>Suger</td>
                      <td>40000</td>
                      <td>25000</td>
                      <td>
                        <input type="checkbox"></input>
                      </td>
                    </tr>
                    <tr>
                      <td>12/2021</td>
                      <td>Suger</td>
                      <td>3004104</td>
                      <td>e201200</td>
                      <td>
                        <input type="checkbox"></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="total__section">
                <h5>Total</h5>
                <input type="text"></input>
                <input type="text"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="Right__Side__container">
          <div className="top__Section">
            <div className="RefNoPayment">
              <div className="input__Section">
                <h5>Entry No</h5>
                <input type="text" />
              </div>

              <div className="input__Section">
                <h5>Date</h5>
                <input type="date" />
              </div>
            </div>
          </div>
          <div className="diff__input__Section">
            <div className="input__Section input__right__section">
              <h5>Bank</h5>
              <select name="" id="">
                <option value="">South Indian Bank</option>
                <option value=""></option>
              </select>
            </div>

            <div className="input__Section">
              <h5>Bank Charge</h5>
              <input type="text"></input>
            </div>
          </div>

          <div className="supplyer__balance__Section">
            <div className="headder__Section">
              <h3>Debit Note</h3>
            </div>

            <div className="amount__Section">
              <h5>Amount</h5>
              <input type="text" />
            </div>
            <div className="mid__section">
              <div className="table__sectionsss">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Dr.Note.No</th>
                      <th>Dr.Note.Amt</th>
                      <th>Adjusted Amt</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12/2021</td>
                      <td>Suger</td>
                      <td>40000</td>
                      <td>25000</td>
                      <td>
                        <input type="checkbox"></input>
                      </td>
                    </tr>
                    <tr>
                      <td>12/2021</td>
                      <td>Suger</td>
                      <td>3004104</td>
                      <td>e201200</td>
                      <td>
                        <input type="checkbox"></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="total__section">
                <h5>Total</h5>
                <input type="text"></input>
                <input type="text"></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom__btn__section">
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default SupplyerPaymentAdd;
