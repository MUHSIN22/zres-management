import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./recervationBooking.scss";
function RecervationBooking({ setRecervation }) {
  const [reservationBookingData, setReservationBookingData] = useState({
    ReservationDate: "",
    DineInSettingsID: 0,
    CMPid: 0,
    CustomerID: 0,
    Reason: "",
    FromTime: "",
    ToTime: "",
    PhoneNumber: "",
  });
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
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Phone" />
            <select name="" id="" placeholder="Table Details">
              <option value="">Table Details</option>
            </select>
            <div className="dateTime__sections">
              <label for="fromDate">From Date</label>
              <input
                type="datetime-local"
                name=""
                id="fromDate"
                placeholder="From Time"
              />
            </div>
            <div className="dateTime__sections">
              <label for="ToDate">To Date</label>
              <input type="datetime-local" name="" id="ToDate" />
            </div>

            <textarea
              placeholder="Reason"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <div className="bottom__Book__btn">
              <button>Book</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecervationBooking;
