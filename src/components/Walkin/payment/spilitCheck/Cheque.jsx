import React, { useState } from "react";
import Billgenerated from "../../Bills/Billgenerated";
import "./cheque.scss";
function Cheque({ numberOrder }) {
  const [printNow, setPrintNow] = useState(false);

  return (
    <div className="table__sections__cheque">
      <table className="table">
        <thead>
          <tr>
            <th>
              <div
                className="data__wrapperssss"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h4>458/{numberOrder + 1}</h4> <h4>$30.058</h4>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "0px" }}>
              <div className="data__wrapper__body active">
                <p>Bobs Barn Burger</p>
                <p>2</p>
                <p>15.0</p>
                <p>15.0</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="bill__print__section">
        <h3>Bill No : {numberOrder + 1}</h3>
        <button onClick={() => setPrintNow(true)}>Print</button>
      </div>

      <div className="print__bill__bill">
        <Billgenerated printNow={printNow} setPrintNow={setPrintNow} />
      </div>
    </div>
  );
}

export default Cheque;
