import React, { useState, useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./recervationBooking.scss";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { data } from "jquery";
function RecervationBooking({ setRecervation }) {
  const [customers, setCustomers] = useState([])
  const [table, setTable] = useState([])

  const selectedName = useRef()
  const selectedTable = useRef()
  const reason = useRef()
  const fromTime = useRef()
  const toTime = useRef()
  const phoneNumber = useRef()

  const nav = useNavigate()

  const addCustomer = () => {
    nav("/mainPage/crm/addCustomer")
  }
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}DineIn/GetCustomerName?CMPid=1`)
      .then(res => {
        setCustomers(res.data)
      })
    axios.get(`${process.env.REACT_APP_BASE_URL}DineIn/GetTableName?CMPid=1`)
      .then(res => {
        setTable(res.data)
      })
  }, [])

  const handleSubmit = () => {
    let date = new Date().toISOString();
    // const data = {
    //   ReservationDate: `${date}`,
    //   DineInSettingsID: parseInt(selectedTable.current.value),
    //   CustomerID: parseInt(selectedName.current.value),
    //   CMPid: 1,
    //   Reason: reason.current.value,
    //   FromTime: fromTime.current.value,
    //   ToTime: toTime.current.value,
    //   PhoneNumber: phoneNumber.current.value
    // }
    const data = {
      "ReservationDate": date,
      "DineInSettingsID": parseInt(selectedName.current.value),
      "CMPid": 1, 
      "CustomerID": parseInt(selectedTable.current.value),
      "Reason": reason.current.value,
      "FromTime": fromTime.current.value,
      "ToTime": toTime.current.value,
      "PhoneNumber": phoneNumber.current.value
    }
    axios.post(`${process.env.REACT_APP_BASE_URL}DineIn/AddReservationBooking?CMPid=1`, data)
      .then((res) => {
        console.log(res);
        if(res.status === 200)
        alert("the data is added")
        setRecervation(false)
      }).catch(error => {
        console.log(error);
      })
     
  }
  const getDate = () => {
    let date = new Date();
    let today = date.getDate();
    return date.toLocaleString();
  };
  return (
    <div className="RecervationBooking">
      <div className="reservation__nav">
        <h3>Reservation Booking</h3>
        <CloseIcon onClick={() => setRecervation(false)} />
      </div>

      <div className="reservation__form__wrapper">
        <form action="">
          <div className="top__reservation__form__Section">
            <div className="loyality__customer">
              <input type="checkbox" name="" id="" />
              <h5>Loyality Customer</h5>
            </div>
            <div className="date__section">
              <h5>{getDate()}</h5>
            </div>
          </div>

          <div className="bottom__reservatiom__section">
            <select ref={selectedName} name="" id="" placeholder="Table Details">
              {customers.length > 0 ?
                customers.map(data => (
                  <option value={data.Value}>{data.Text}</option>
                ))
                :
                <option>Loading...</option>

              }
            </select>
            <input type="number" ref={phoneNumber} placeholder="Phone" />
            <select ref={selectedTable} name="" id="" placeholder="Table Details">
              {
                table.length > 0 ?
                  table.map(data => (
                    <option value={data.Value}>{data.Text}</option>
                  )) :
                  <option >Loading...</option>

              }
            </select>
            <div className="dateTime__sections">
              <label for="fromDate">From Date</label>
              <input
                ref={fromTime}
                type="time"
                name=""
                id="fromDate"
                placeholder="From Time"
              />
            </div>
            <div className="dateTime__sections">
              <label for="ToDate">To Date</label>
              <input
                ref={toTime}
                type="time"
                name=""
                id="ToDate" />
            </div>

            <textarea
              placeholder="Reason"
              name=""
              id=""
              cols="30"
              rows="5"
              ref={reason}
            ></textarea>
            <div className="bottom__Book__btn">
              <button type="button" onClick={handleSubmit}>Book</button>
            </div>
          </div>
        </form>
        <form style={{"padding":"20px"}} >
          <h3>add new customer</h3>
          <button onClick={addCustomer} style={{padding:"8px 20px"}}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default RecervationBooking;
