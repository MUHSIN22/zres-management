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
                <th>SINo</th>
                <th>Date</th>
                <th>Ref No</th>
                <th colspan="2">Acc Name</th>
                <th>Receipt</th>
                <th>Payment</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ color: "red" }} colspan="2">
                  Opening Balance
                </td>
                <td style={{ color: "red" }}>1580025</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>1</td>
                <td>05/12/2021</td>
                <td>c-1</td>
                <td colspan="2">State Bank Of India</td>
                <td></td>
                <td>500</td>
                <td>157000Dr</td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ color: "red" }} colspan="2">
                  Clossing Balance
                </td>
                <td></td>
                <td style={{ color: "red" }}>157873.000</td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td colspan="2"></td>
                <td style={{ backgroundColor: "#cdccdd", fontWeight: "bold" }}>
                  157375.00
                </td>
                <td style={{ backgroundColor: "#cdccdd", fontWeight: "bold" }}>
                  157375.00
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PrintPreview;
