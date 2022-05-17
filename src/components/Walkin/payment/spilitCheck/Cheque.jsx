import React, { useState } from "react";
import Billgenerated from "../../Bills/Billgenerated";
import "./cheque.scss";
function Cheque({ numberOrder, data, dividedPrice }) {
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
                <h4>458/{numberOrder + 1}</h4> <h4>${Math.round(dividedPrice*100)/100}</h4>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
            {data.map((item,i)=>(
          <tr>
              <td style={{ padding: "0px" }} key={i}>
                <div className="data__wrapper__body active">
                  <p>{item.ItemName}</p>
                  <p>{item.TaxPercentage}</p>
                  <p>{item.ItemPrice}</p>
                  <p>{item.ItemPrice+((item.TaxPercentage/100)*item.ItemPrice)}</p>
                </div>
              </td>
          </tr>
            ))}
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
