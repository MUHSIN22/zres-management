import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./recervationBooking.scss";
function RecervationBooking({ setRecervation }) {
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
              <h5>14 Dec 2021 12:10pm</h5>
            </div>
          </div>

          <div className="bottom__reservatiom__section">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
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
