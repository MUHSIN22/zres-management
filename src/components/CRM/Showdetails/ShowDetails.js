import React, { useState } from 'react'
import ShowButton from './button/showButton'
import History from './History/History'
import './ShowDetails.scss'

export default function ShowDetails({action}) {
  const [showhistory, setShowhistory] = useState(true)
  return (
    <div className='showdetails_container'>
      <div className="left_side">
        <div className="header">
          <p>#482</p>
          <button>New</button>
        </div>
        <div className="details">

          <div className="details_row">
            <p className="title">Place by:</p>
            <p className="subtitle"> Ameer khan (cashier)</p>
          </div>

          <div className="details_row">
            <p className="title">order Date and time</p>
            <p className="subtitle">22 nov 2021 17:58 AM</p>
          </div>

          <div className="details_row">
            <p className="title">Waiting time</p>
            <p className="subtitle" >10 mins</p>
          </div>

          <div className="details_row">
            <p className="title">Driver</p>
            <p className="subtitle" >Waiting to pick</p>
          </div>

        </div>
        <div className="buttons">
          <ShowButton title="Show history" bg={"#DFA75C"} action={() => setShowhistory(true)} />
          <ShowButton title="Modify Order" bg="#E1870E" />
          <ShowButton title="Cancel Order" bg="#31CDD2" />
          <ShowButton title="Close" action={action} bg="#040153" />
        </div>

      </div>
      <div className="right_side">
        {!showhistory ? <>
          <div style={{ height: "70%" }}>
            <table className="table_main">
              <thead>
                <tr className="theader">
                  <th>Items</th>
                  <th>qty</th>
                  <th>Price</th>
                  <th>Loyality </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>alex</p></td>
                  <td><p>1</p></td>
                  <td><p>100</p></td>
                  <td><p>10</p></td>
                </tr>
              </tbody>
            </table>
          </div >
          <div className="total">
            <div className="loyality">
              <input type="checkbox" />
              <p>Redeem Loyality Points</p>
            </div>
            <div className="total_price">
              <div className="total_price_row">
                <p>Sub-Total:</p>
                <p>21515.00</p>
              </div>
              <div className="total_price_row">
                <p className="coin">Loyality Coins:</p>
                <p>151.50</p>
              </div>
              <div className="total_price_row">
                <p>Tax</p>
                <p>100.00</p>
              </div>
              <div className="total_price_row">
                <p>Total</p>
                <p className='omr'>OMR 15250.25</p>
              </div>
            </div>
          </div>
        </> :  <div>
          <History/>
        </div>}
      </div>
    </div>

  )
}
