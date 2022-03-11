import React from "react";
import "./runningOrder.scss";
function RunningOrder() {
  const data = [
    {
      tableNo: 1,
      id: 1,
      orderNo: "#4324",
      status: "done Soon",
      diningFor: "2hrs",
    },
    {
      tableNo: 2,
      id: 2,
      orderNo: "#3324",
      status: "Running Order",
      diningFor: "1hrs",
    },

    {
      tableNo: 3,
      id: 3,
      orderNo: "#1324",
      status: "done Soon",
      diningFor: "2hrs",
    },
  ];

  return (
    <div className="RunningOrder">
      <div className="runningOrder__headder">
        <h3>Running Order</h3>
      </div>

      <div className="TableSection">
        <table className="table">
          <thead>
            <tr>
              <th className="orderNuber__th">Table No</th>
              <th>Order No</th>
              <th>Amound</th>
              <th>Status</th>
              <th>Dining For</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr>
                <td data-label="Order Number">{d.tableNo}</td>
                <td data-label="Order Taken At">
                  {d.orderNo} <h6>Burger</h6>
                </td>
                <td data-label="Elapsed Time">OMR 15.00</td>
                <td data-label="Delivery Area">
                  {" "}
                  <a
                    href="#"
                    className={
                      "button " +
                      ((d.status === "done Soon" && "doneSoon ") ||
                        (d.status === "Running Order" && "Running__order"))
                    }
                  >
                    {d.status}
                  </a>
                </td>
                <td data-label="Amount">About 2 Hrs</td>
                <td data-label="" colSpan={"2"}>
                  {d.status === "done Soon" && (
                    <>
                      <a href="#" className="button">
                        <svg
                          id="surface1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.172"
                          height="20.172"
                          viewBox="0 0 29.172 29.172"
                        >
                          <path
                            id="Path_112"
                            data-name="Path 112"
                            d="M7.819,0A3.382,3.382,0,0,0,4.455,3.364V8.976H3.364A3.367,3.367,0,0,0,0,12.341v6.733a3.365,3.365,0,0,0,3.364,3.364h1.09v3.369a3.382,3.382,0,0,0,3.364,3.365H21.281a3.386,3.386,0,0,0,3.369-3.365V22.438h1.157a3.365,3.365,0,0,0,3.365-3.364V12.341a3.367,3.367,0,0,0-3.365-3.364H24.65V3.364A3.386,3.386,0,0,0,21.281,0Zm0,2.243H21.281a1.112,1.112,0,0,1,1.126,1.121V8.976H6.7V3.364A1.108,1.108,0,0,1,7.819,2.243Zm16.306,8.976A1.684,1.684,0,1,1,22.438,12.9,1.687,1.687,0,0,1,24.125,11.219ZM6.7,16.831h15.71v8.976a1.11,1.11,0,0,1-1.126,1.122H7.819A1.106,1.106,0,0,1,6.7,25.807Zm2.279,2.243v2.243H20.2V19.074Zm0,3.364v2.247h7.855V22.438Z"
                            fill="#fff"
                          />
                        </svg>
                        Reprint
                      </a>
                      <a href="#" className="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.513"
                          height="20.258"
                          viewBox="0 0 37.513 26.258"
                        >
                          <path
                            id="Path_111"
                            data-name="Path 111"
                            d="M15.007,3.949a2.5,2.5,0,0,0-2.5,2.5V7.7h-.351c-2.222,0-5.024.213-6.915,1.866C3.767,10.849,0,14.042,0,14.042v3.212s5.385-4.494,6.875-5.806c1.381-1.2,3.905-1.247,5.276-1.247H12.5v9.573l7.3-4.1,0,0a2.473,2.473,0,0,1,2.1-.391,2.5,2.5,0,0,1,.742,4.494l-3.8,2.925-4.469,3.44A7.506,7.506,0,0,1,9.81,27.707H0v2.5H9.81a10.027,10.027,0,0,0,6.1-2.084l5.425-4.168h16.18V3.949Zm0,2.5h3.747A4.8,4.8,0,0,1,15.007,10.2Zm15,1.247c2.767,0,5,2.8,5,6.256s-2.237,6.251-5,6.251-5-2.8-5-6.251S27.248,7.7,30.01,7.7Z"
                            transform="translate(0 -3.949)"
                            fill="#fff"
                          />
                        </svg>
                        Pay
                      </a>
                    </>
                  )}

                  {d.status === "Running Order" && (
                    <>
                      <a href="#" className="button prntBill">
                        <svg
                          id="surface1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.172"
                          height="20.172"
                          viewBox="0 0 29.172 29.172"
                        >
                          <path
                            id="Path_112"
                            data-name="Path 112"
                            d="M7.819,0A3.382,3.382,0,0,0,4.455,3.364V8.976H3.364A3.367,3.367,0,0,0,0,12.341v6.733a3.365,3.365,0,0,0,3.364,3.364h1.09v3.369a3.382,3.382,0,0,0,3.364,3.365H21.281a3.386,3.386,0,0,0,3.369-3.365V22.438h1.157a3.365,3.365,0,0,0,3.365-3.364V12.341a3.367,3.367,0,0,0-3.365-3.364H24.65V3.364A3.386,3.386,0,0,0,21.281,0Zm0,2.243H21.281a1.112,1.112,0,0,1,1.126,1.121V8.976H6.7V3.364A1.108,1.108,0,0,1,7.819,2.243Zm16.306,8.976A1.684,1.684,0,1,1,22.438,12.9,1.687,1.687,0,0,1,24.125,11.219ZM6.7,16.831h15.71v8.976a1.11,1.11,0,0,1-1.126,1.122H7.819A1.106,1.106,0,0,1,6.7,25.807Zm2.279,2.243v2.243H20.2V19.074Zm0,3.364v2.247h7.855V22.438Z"
                            transform="translate(0 0)"
                            fill="#fff"
                          />
                        </svg>
                        Print Bill
                      </a>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RunningOrder;
