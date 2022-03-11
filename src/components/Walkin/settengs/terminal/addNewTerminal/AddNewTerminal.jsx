import React, { useState } from "react";
// import SucessfullMag from "../../../Transaction Manager/Reports/Stock Cost/clossing stock print/SucessfullMessage/SucessfullMag";
import "./addNewTerminal.scss";
function AddNewTerminal({ setAddNewBtn, setMainTableView }) {
  const [addSucessfull, setAddSucessfull] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddSucessfull(true);
  };
  return (
    <>
      {/* {addSucessfull && (
        <SucessfullMag
          setPrintSucess={setAddSucessfull}
          messagetoPrint={"Saved Sucessfully"}
        />
      )} */}
      <div className="AddNewTerminal">
        <div className="headding__Section">
          <h2>Terminal Master</h2>
        </div>

        <div className="inner__Section">
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="top__secton">
              <div className="lef__Side__form">
                <div className="input__Sections">
                  <h5> Code</h5>
                  <input type="text" />
                </div>
                <div className="input__Sections">
                  <h5>Terminal Namw</h5>
                  <input type="text" />
                </div>
                <div className="input__Sections">
                  <h5>Compute Name</h5>
                  <input type="text" />
                </div>

                <div className="input__Sections">
                  <h5>Discription</h5>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="bottom__btn__section">
              <button type="submit">save</button>
              <button type="submit">Delete</button>
              <button type="submit">clear</button>
              <button
                onClick={() => {
                  setAddNewBtn(false);
                  setMainTableView(true);
                }}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewTerminal;
