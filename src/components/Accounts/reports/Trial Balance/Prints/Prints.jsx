import React, { useState } from "react";
import "./prints.scss";
import CloseIcon from "@mui/icons-material/Close";
import PrintPreview from "./printPrevew/PrintPreview";
function Prints({ closePrintActive }) {
  const [printPreview, setPrintPreview] = useState(false);
  const [mainPrintSection, setManiPrintSection] = useState(true);

  return (
    <div className="Prints">
      <div className="overlay__black"></div>
      {printPreview && (
        <PrintPreview
          setPrintPreview={setPrintPreview}
          setManiPrintSection={setManiPrintSection}
        />
      )}
      {mainPrintSection && (
        <div className="popup__section">
          <div className="top__section">
            <h2>Print</h2>

            <CloseIcon onClick={() => closePrintActive(false)} />
          </div>
          <div className="mid__Section">
            <div className="headder__section">
              <h3>Page</h3>
            </div>

            <div className="radio__button__section">
              <h4>All</h4>
              <div className="radio__warpper">
                <div className="radio__top">
                  <div className="radio__sec">
                     {" "}
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="CSS"
                    />
                     {" "}
                    <label for="css">
                      <input type="text" placeholder="1-1" />
                    </label>
                  </div>

                  <div className="radio__sec">
                     {" "}
                    <input type="radio" id="css" name="fav_language" value="" />
                     {" "}
                    <label for="css">
                      <input type="text" placeholder="eg 1-5" />
                    </label>
                  </div>
                </div>

                <div className="radio__bottom__sectionn">
                  <div className="radio__sec">
                      <input type="radio" id="bottom" name="bottom" value="" /> {" "}
                    <label for="bottom">
                      <h5>Odd Page</h5>
                    </label>
                  </div>

                  <div className="radio__sec">
                      <input type="radio" id="bottom" name="bottom" value="" /> {" "}
                    <label for="bottom">
                      <h5>Even Page</h5>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="input__Section"></div>
          </div>

          <div className="bottom__section">
            <div className="sections">
              <button
                onClick={() => {
                  setPrintPreview(true);
                  setManiPrintSection(false);
                }}
              >
                Preview
              </button>
            </div>
            <div className="sections">
              <button>Ok</button>
              <button onClick={() => closePrintActive(false)}>Exit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Prints;
