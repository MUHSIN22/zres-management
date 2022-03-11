import React, { useEffect } from "react";
import "./billgenerator.scss";
function Billgenerated({ printNow, setPrintNow }) {
  useEffect(() => {
    if (printNow === true) {
      printData();
    }
  }, [printNow]);

  const printData = () => {
    window.frames["print_frame"].document.body.innerHTML =
      document.getElementById("printableTable").innerHTML;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
    setPrintNow(false);
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
                <th style={{ textAlign: "right" }}>WALKIN</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Customer</td>
                <td style={{ textAlign: "right" }}>Staff - Athul</td>
              </tr>
              <tr>
                <td>20/12/2020</td>
                <td style={{ textAlign: "right" }}>8:50pm</td>
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
              <tr>
                <td style={{ textAlign: "center" }}>2</td>
                <td style={{ textAlign: "center" }}>Margerita pizza</td>
                <td style={{ textAlign: "center" }}>250</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>2</td>
                <td style={{ textAlign: "center" }}>Burger</td>
                <td style={{ textAlign: "center" }}>250</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>2</td>
                <td style={{ textAlign: "center" }}>Lime</td>
                <td style={{ textAlign: "center" }}>250</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>2</td>
                <td style={{ textAlign: "center" }}>Coke</td>
                <td style={{ textAlign: "center" }}>250</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>2</td>
                <td style={{ textAlign: "center" }}>pizza</td>
                <td style={{ textAlign: "center" }}>250</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>2</td>
                <td style={{ textAlign: "center" }}>Margerita pizza</td>
                <td style={{ textAlign: "center" }}>250</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bottom__total__area__section">
          <table width="100%">
            <tr>
              <th style={{ textAlign: "right", paddingRight: "10px" }}>Tax:</th>
              <td style={{ textAlign: "left" }}> 5%</td>
            </tr>
            <tr>
              <th style={{ textAlign: "right", paddingRight: "10px" }}>
                Total:
              </th>
              <td style={{ textAlign: "left" }}>575</td>
            </tr>
            <tr>
              <th style={{ textAlign: "right", paddingRight: "10px" }}>
                Amount Recived:
              </th>
              <td style={{ textAlign: "left" }}>5002</td>
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
