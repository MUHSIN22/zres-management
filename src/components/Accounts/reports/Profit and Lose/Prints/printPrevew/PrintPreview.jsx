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
        <h3>Ledger As On 11/12/2021</h3>
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
                <th>Acc Name</th>
                <th>Expence</th>
                <th>Income</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Opening Stock</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>2</td>
                <td>Purchase Amount</td>
                <td>4580</td>
                <td>0.00</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Gross Profit c/o</td>
                <td style={{ borderBottom: "3px solid #040153" }}>8732</td>
                <td>0.00</td>
              </tr>
              {/* total */}
              <tr>
                <td></td>
                <td></td>
                <td style={{ fontWeight: "bold" }}>13370.0</td>
                <td></td>
              </tr>

              <tr>
                <td>4</td>
                <td>Sales Account</td>
                <td>0.00</td>
                <td>8793.00</td>
              </tr>

              <tr>
                <td>5</td>
                <td>Clossing Stock</td>
                <td>0.00</td>
                <td style={{ borderBottom: "3px solid #040153" }}>4580.00</td>
              </tr>
              {/* total */}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ fontWeight: "bold" }}>8793.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>Net Profit</td>
                <td>8793.00</td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td>Gross Profit b/f</td>
                <td></td>
                <td>8793.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PrintPreview;
