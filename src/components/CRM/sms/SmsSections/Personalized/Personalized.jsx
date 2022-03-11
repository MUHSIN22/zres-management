import React, { useState } from "react";
import "./personalized.scss";
import Select from "react-select";

const options = [
  { label: "Mohan", value: "Mohan" },
  { label: "Ravi", value: "Ravi" },
  { label: "James", value: "James" },
  { label: "Karthik", value: "Karthik" },
  { label: "Roni", value: "Roni" },
  { label: "Sam", value: "Sam" },
];
function Personalized() {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <div className="message__section__hedder_PERSONALIZED">
        <h3>Personalized Message</h3>
      </div>
      <div className="message__section__body__personalized">
        <form action="">
          <div className="form__input_pesonalize newforms">
            <Select options={options} />
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
            <button>Cancel</button>
            <button>Send</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Personalized;
