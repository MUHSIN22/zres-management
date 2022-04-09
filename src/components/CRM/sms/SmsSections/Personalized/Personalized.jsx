import React, { useEffect, useState } from "react";
import "./personalized.scss";
import Select from "react-select";
import SmsSuccess from "../SmsSuccess/SmsSuccess"
import SmsFailed from "../SmsFailed/SmsFailed.js"
import { crmServices } from "../../../../../Services/CrmServices";

const options = [
  { label: "Mohan", value: "Mohan" },
  { label: "Ravi", value: "Ravi" },
  { label: "James", value: "James" },
  { label: "Karthik", value: "Karthik" },
  { label: "Roni", value: "Roni" },
  { label: "Sam", value: "Sam" },
];
function Personalized() {
  const [customer, setCustomer] = useState([]);
  const [success, Setsuccess] = useState(false)
  const [failed, Setfailed] = useState(false)
 
  const handleSubmit = (event) => {
    event.preventDefault()
    Setsuccess(true)
  }

  useEffect(() => {
    crmServices.getAllcustomer()
      .then(data => {setCustomer(data)})
  }, [])

  return (
    <>
      <div className="message__section__hedder_PERSONALIZED">
        <h3>Personalized Message</h3>
      </div>
      <div className="message__section__body__personalized">
        {
          success && <SmsSuccess />

        }
        {
          failed && <SmsFailed />
        }
        <form onSubmit="return false" action="">
          <div className="form__input_pesonalize newforms">

            <select >
            <option selected="true" disabled="disabled">Select The Customer</option>
              {customer && customer.map((customers) => (
                
                <option value={customers.CName} >{customers.CName}</option>
              ))
              }
            </select>
            <input
              className="form__input__section__personalize"
              type="text"
              placeholder="Phone"
            />
            <input
              className="form__input__section__personalize"
              type="email"
              placeholder="Email"
              name=""
              id=""
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Message"
            ></textarea>
          </div>
          <div className="form__button">
            <button onClick={() => { Setfailed(true) }} >Cancel</button>
            <button onClick={handleSubmit} type="submit" >Send</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Personalized;
