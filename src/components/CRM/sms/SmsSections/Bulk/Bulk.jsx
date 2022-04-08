import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { crmServices } from "../../../../../Services/CrmServices";
import SmsSuccess from "../SmsSuccess/SmsSuccess";
import "./bulk.scss";

function Bulk() {


  const [selected, setSelected] = useState([]);
  const [success, Setsuccess] = useState(false)
  const [customer, setCustomer] = useState([]);
  
  useEffect(() => {
    crmServices.getAllcustomer()
      .then(data => {setCustomer(data)})
  }, [])


    const options = [
    { label: "Mohan", value: "Mohan" },
    { label: "Ravi", value: "Ravi" },
    { label: "James", value: "James" },
    { label: "Karthik", value: "Karthik" },
    { label: "Roni", value: "Roni" },
    { label: "Sam", value: "Sam" },
  ];
  return (
    <>
      <div className="message__section__hedder_BULK">
        <h3>Bulk Message</h3>
      </div>
      <div className="message__section__body__bulk">
      {
          success && <SmsSuccess />

        }
        <form action="">
          <div className="form__input_section">
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
            />
            <textarea
              name=""
              id=""
              cols="30"
              value="Hi Madam,
 Thank you for signing up for our deals and discounts 
program. Use code 483264 to receive 20% off your next 
purchase online or in-store. Offer expires 5/20. Text STOP 
to opt out."
              rows="10"
            ></textarea>
          </div>
          <div className="form__button">
            <button>Cancel</button>
            <button type="submit" onClick={(event)=>{Setsuccess(true
              );event.preventDefault()}}>Send To All</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Bulk;
