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
        <div className="table__sections">
          <table className="table">
            <thead>
              <tr>
                <th>SINo</th>

                <th colspan="2">Acc Name</th>
                <th>Place</th>

                <th>Debit</th>
                <th>Credit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td colspan="2">Metro Super Market</td>
                <td>Ernakulam</td>
                <td>8000</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>.</td>
                <td colspan="2"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>.</td>
                <td colspan="2"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>.</td>
                <td colspan="2"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>.</td>
                <td colspan="2"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>.</td>
                <td colspan="2"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>.</td>
                <td colspan="2"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>.</td>
                <td colspan="2"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td> </td>
                <td colspan="2"> </td>
                <td> </td>
                <td>80000 </td>
                <td>0.00 </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PrintPreview;
