import React from "react";
import "./sucessfullMsg.scss";
function SucessfullMag({ setPrintSucess, messagetoPrint }) {
  return (
    <div className="add___Sucess__message__wrapper">
      <div className="sucess__poppup">
        <div className="headder__Section">
          <h2>{messagetoPrint}</h2>
        </div>
        <div className="footer__Section">
          <button onClick={() => setPrintSucess(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default SucessfullMag;
