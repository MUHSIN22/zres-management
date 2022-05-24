import React, { useEffect } from "react";
import "./billgenerator.scss";
function Billgenerated({ printNow, dinein,items}) {
  useEffect(() => {
    if (printNow === true) {
      printData();
    }
  }, [printNow]);
  
  const subTotal = items.reduce((price, item) => price + item.quantity * item.ItemPrice,0);
  const totalNumberOfPrdts = items.reduce((total,item)=>total+item?.quantity,0);
  const totalTaxPercent = items.reduce((tax, item) => tax + item?.quantity *item?.TaxPercentage,0)
  const taxAmount = Math.round((((totalTaxPercent/totalNumberOfPrdts)/100)*subTotal)*100)/100 || 0;
  const today = new Date()

  const printData = () => {
    window.frames["print_frame"].document.body.innerHTML =
      document.getElementById("printableTable").innerHTML;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
  };

  return (
    <>
      <div className="BillGenerator" id="printableTable" hidden>
        <div className="bill__headding__section">
          <table width="100%">
            <tr>
              <th style={{ textAlign: "center" }}>
                {" "}
                <h3>CULTIVA</h3>
              </th>
            </tr>
          </table>
        </div>
        <div className="bill__top__headding__Section">
          <table width="100%">
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>INVOICE COPY</th>
                <th style={{ textAlign: "right" }}>{dinein?"DINEIN":"WALKIN"}</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Customer</td>
                <td style={{ textAlign: "right" }}>Staff - Athul</td>
              </tr>
              <tr>
                <td>{today.getDate()}/{today.getMonth()+1}/{today.getFullYear()}</td>
                <td style={{ textAlign: "right" }}>{today.getHours()}:{today.getMinutes()}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bill__table__section">
          <table width="100%">
            <thead>
              <tr>
                <th>Oty</th>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items && items.map((d,i)=>(
              <tr>
                <td style={{ textAlign: "center" }}>{d.quantity}</td>
                <td style={{ textAlign: "center" }}>{d.ItemName}</td>
                <td style={{ textAlign: "center" }}>{d.ItemPrice*d.quantity+.00}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bottom__total__area__section">
          <table width="100%">
            <tr>
              <th style={{ textAlign: "right", paddingRight: "10px" }}>Tax:</th>
              <td style={{ textAlign: "left" }}>{totalTaxPercent}%</td>
            </tr>
            <tr>
              <th style={{ textAlign: "right", paddingRight: "10px" }}>
                Total:
              </th>
              <td style={{ textAlign: "left" }}>{subTotal+taxAmount+.00}</td>
            </tr>
            <tr>
              <th style={{ textAlign: "right", paddingRight: "10px" }}>
                Amount Recived:
              </th>
              <td style={{ textAlign: "left" }}>0.00</td>
            </tr>
            <tr>
              <th style={{ textAlign: "right", paddingRight: "10px" }}>
                Balance
              </th>
              <td style={{ textAlign: "left" }}>0.00</td>
            </tr>
          </table>
        </div>
      </div>

      <iframe
        name="print_frame"
        width="0"
        height="0"
        frameborder="0"
        src="about:blank"
      ></iframe>
    </>
  );
}

export default Billgenerated;
