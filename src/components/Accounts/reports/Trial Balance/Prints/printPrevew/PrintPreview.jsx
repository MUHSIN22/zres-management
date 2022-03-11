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
        <h3>Trial Balance As On 11/12/2021</h3>
      </div>

      <div className="bottom__Section">
        <div className="table__sections">
          <table className="table">
            <thead>
              <tr>
                <th>SINO</th>
                <th>Acc Name</th>

                <th>Debit</th>
                <th>Credit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>

                <td style={{ textAlign: "left", fontWeight: "bold" }}>
                  Capital Account
                </td>
                <td>0.00</td>
                <td>1500000</td>
              </tr>

              <tr>
                <td>2</td>
                <td style={{ textAlign: "left", fontWeight: "bold" }}>
                  Assets
                </td>
                <td>1540000</td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td
                  style={{
                    textAlign: "left",

                    paddingLeft: "50px",
                  }}
                >
                  Opening Stocks
                </td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td
                  style={{
                    textAlign: "left",

                    paddingLeft: "50px",
                  }}
                >
                  Cash In Hand
                </td>
                <td>78725</td>
                <td>0.00</td>
              </tr>

              <tr>
                <td></td>
                <td
                  style={{
                    textAlign: "left",

                    paddingLeft: "50px",
                  }}
                >
                  Bank Account
                </td>
                <td>7500000</td>
                <td>0.000</td>
              </tr>

              <tr>
                <td>3</td>
                <td style={{ textAlign: "left", fontWeight: "bold" }}>
                  Sales Account
                </td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td
                  style={{
                    textAlign: "left",

                    paddingLeft: "50px",
                  }}
                >
                  Sales
                </td>
                <td>0.00</td>
                <td>8400</td>
              </tr>

              <tr>
                <td>4</td>
                <td style={{ textAlign: "left", fontWeight: "bold" }}>
                  Purchase Account
                </td>
                <td>0.00</td>
                <td>8400</td>
              </tr>

              <tr>
                <td></td>
                <td
                  style={{
                    textAlign: "left",

                    paddingLeft: "50px",
                  }}
                >
                  Purchase
                </td>
                <td>45000</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td style={{ fontWeight: "bolder" }}>Total</td>
                <td>115825</td>
                <td>125488</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PrintPreview;
