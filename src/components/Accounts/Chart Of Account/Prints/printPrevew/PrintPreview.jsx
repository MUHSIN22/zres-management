import React from "react";
import "./printPreview.scss";
import CloseIcon from "@mui/icons-material/Close";
function PrintPreview({ setPrintPreview, setManiPrintSection }) {
  return (
    <div className="printPrieviewChart" style={{ zIndex: "11" }}>
      <div className="top__section">
        <h5>Print Preview</h5>

        <div className="right__head__section">
          <h6>Page 1 of 2</h6>
          <CloseIcon
            onClick={() => {
              setPrintPreview(false);
              setManiPrintSection(true);
            }}
          />
        </div>
      </div>

      <div className="mid__section">
        <h4>Restaurent Enterprise System</h4>
        <h4>Oman Building</h4>
        <h4>Fort road,Oman 147/9</h4>
        <h3>Cash Book As On 11/12/2021</h3>
      </div>

      <div className="bottom__Section">
        <div className="headding__Section">
          <h6>Printed on :11/12/2021 10:50am</h6>
        </div>
      </div>

      <div className="table__sections">
        <div className="midLineBreaker"></div>
        <div className="headding__section">
          <h5>Acc Name</h5>
          <h5>Balance</h5>
        </div>
        <ul id="tree1" class="tree ">
          <li>
            <a href="#">Assets</a>
            <ul>
              <li>
                <a href="#" className="innerHead">
                  Cash and Cash Equipment
                </a>
                <ul>
                  {/* <li>
              <a href="#">for again mapping use this</a>
              <ul>
                <li>
                  <a href="#">Report1</a>
                </li>
                <li>
                  <a href="#">Report2</a>
                </li>
                <li>
                  <a href="#">Report3</a>
                </li>
              </ul>
            </li> */}

                  <div className="li__section">
                    <li>Cash on Hand</li>
                    <h5>500000</h5>
                  </div>

                  <div className="li__section">
                    <li>SBI Bank</li>
                    <h5>500000</h5>
                  </div>
                </ul>
              </li>

              <li>
                <a className="innerHead" href="#">
                  Sundry Debitor
                </a>
                <ul>
                  <div className="li__section">
                    <li>Dr Rajan Tomas</li>
                    <h5>500000</h5>
                  </div>
                </ul>
              </li>

              <li>
                <a className="innerHead" href="#">
                  Inventory
                </a>
                <ul>
                  <div className="li__section">
                    <li>Stock</li>
                    <h5>8000</h5>
                  </div>

                  <div className="li__section">
                    <li>Office</li>
                    <h5>50000</h5>
                  </div>
                </ul>
              </li>

              <li>
                <a className="innerHead" href="#">
                  Fixed Asset
                </a>
                <ul>
                  <li>Cost Of Furniture</li>
                  <li>Cost of Office Equipment</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Liability</li>

          <li>Expence</li>
        </ul>
      </div>
    </div>
  );
}

export default PrintPreview;
