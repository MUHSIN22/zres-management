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
        <h3>DayBook As On 11/12/2021</h3>
      </div>

      <div className="bottom__Section">
        <div className="headding__Section">
          <h6>Printed on :11/12/2021 10:50am</h6>
        </div>
        <div className="table__sections">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>

                <th colspan="2">Acc Name</th>
                <th>Type</th>

                <th>Debit</th>
                <th>Credit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>05/12/21</td>
                <td colspan="2">Oppening Balance</td>
                <td></td>
                <td>145000</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>.</td>
                <td colspan="2">Purchase</td>
                <td>Purchase</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>.</td>
                <td colspan="2">Cash Purchase</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>.</td>
                <td colspan="2">Sales</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>.</td>
                <td colspan="2">Clossing Balance</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{ fontWeight: "bolder", backgroundColor: "#cdccdd" }}
                ></td>
                <td
                  colspan="2"
                  style={{ fontWeight: "bolder", backgroundColor: "#cdccdd" }}
                >
                  Total
                </td>
                <td
                  style={{ fontWeight: "bolder", backgroundColor: "#cdccdd" }}
                ></td>
                <td
                  style={{
                    fontWeight: "bolder",
                    backgroundColor: "#cdccdd",
                    textDecoration: "underline",
                  }}
                >
                  158000
                </td>
                <td
                  style={{
                    fontWeight: "bolder",
                    backgroundColor: "#cdccdd",
                    textDecoration: "underline",
                  }}
                >
                  158000
                </td>
              </tr>
              <tr>
                <td>04/12/2021</td>
                <td colspan="2">Oppening Balance</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td colspan="2">Metro Super Market</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td colspan="2">Jv-1-cash</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td colspan="2">cash</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td colspan="2">Jv-1-metro-supermarket</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td colspan="2">Clossing Balance</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{ fontWeight: "bolder", backgroundColor: "#cdccdd" }}
                ></td>
                <td
                  colspan="2"
                  style={{ fontWeight: "bolder", backgroundColor: "#cdccdd" }}
                >
                  Total
                </td>
                <td
                  style={{ fontWeight: "bolder", backgroundColor: "#cdccdd" }}
                ></td>
                <td
                  style={{
                    fontWeight: "bolder",
                    backgroundColor: "#cdccdd",
                    textDecoration: "underline",
                  }}
                >
                  158000
                </td>
                <td
                  style={{
                    fontWeight: "bolder",
                    backgroundColor: "#cdccdd",
                    textDecoration: "underline",
                  }}
                >
                  158000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PrintPreview;
