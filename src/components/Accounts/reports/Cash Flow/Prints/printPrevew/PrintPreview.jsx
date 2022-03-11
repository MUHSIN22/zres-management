import React from "react";
import "./printPreview.scss";
import CloseIcon from "@mui/icons-material/Close";
function PrintPreview({ setPrintPreview, setManiPrintSection }) {
  return (
    <div className="printPrieview">
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
        <h3>Balance Sheet As On 11/12/2021</h3>
      </div>

      <div className="bottom__Section">
        <div className="headding__Section">
          <h6>Printed on :11/12/2021 10:50am</h6>
        </div>
        <div className="table__sections">
          <table className="table">
            <thead>
              <tr>
                <th>SINO</th>
                <th>Date</th>
                <th>Opening</th>
                <th>Closing</th>
                <th>Difference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>05/12/2021</td>
                <td>1500000</td>
                <td>1580000</td>
                <td>0</td>
              </tr>

              <tr>
                <td>2</td>
                <td>05/12/2021</td>
                <td>1500000</td>
                <td>1580000</td>
                <td>0</td>
              </tr>

              <tr>
                <td>3</td>
                <td>05/12/2021</td>
                <td>1500000</td>
                <td>1580000</td>
                <td>0</td>
              </tr>

              <tr>
                <td>4</td>
                <td>05/12/2021</td>
                <td>1500000</td>
                <td>1580000</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PrintPreview;
