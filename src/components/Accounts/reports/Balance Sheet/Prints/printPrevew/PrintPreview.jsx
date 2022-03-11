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
                <th>Acc Name</th>
                <th colspan="2">Assets</th>
                <th colspan="2">Liability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td style={{ fontWeight: "bold" }}>Capital Account</td>
                <td></td>
                <td></td>
                <td>0</td>
                <td>0</td>
              </tr>

              <tr>
                <td></td>
                <td>Capital </td>
                <td></td>
                <td></td>
                <td>150000</td>
                <td>0.00</td>
              </tr>

              <tr>
                <td></td>
                <td style={{ fontWeight: "bold" }}>Loan(Liability) </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td style={{ fontWeight: "bold" }}>Current Liability</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td style={{ fontWeight: "bold" }}>Profit and Loss Account </td>
                <td></td>
                <td></td>
                <td>0.00</td>
                <td>8750</td>
              </tr>

              <tr>
                <td></td>
                <td>Oppening Balance</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td>Current Periods</td>
                <td></td>
                <td></td>
                <td>87930</td>
                <td>0.00</td>
              </tr>

              <tr>
                <td></td>
                <td
                  style={{
                    fontWeight: "700",
                  }}
                ></td>
                <td></td>
                <td></td>
                <td></td>
                <td
                  style={{
                    fontWeight: "700",
                  }}
                >
                  158739
                </td>
              </tr>

              <tr>
                <td></td>
                <td>Current Assets</td>
                <td>0.00</td>
                <td>158000</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td>Closing Stock</td>
                <td>4500</td>
                <td>0.00</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td>Cash in hand</td>
                <td>78000</td>
                <td>0.000</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td>Bank Account</td>
                <td>750000</td>
                <td>0.000</td>
                <td></td>
                <td></td>
              </tr>

              <tr style={{ backgroundColor: "#c7c6d7" }}>
                <td></td>
                <td
                  style={{
                    fontWeight: "700",
                  }}
                ></td>
                <td
                  style={{
                    fontWeight: "700",
                  }}
                >
                  {" "}
                  158739
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td style={{ fontWeight: "bold" }} colspan="2">
                  150000
                </td>
                <td style={{ fontWeight: "bold" }} colspan="2">
                  120000
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PrintPreview;
