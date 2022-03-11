import React, { useState } from "react";
import Cheque from "./Cheque";
import "./splitCheck.scss";

const cartIten = [
  {
    id: 1,
    name: "Bobsbarn Burger",
    qty: 2,
    price: "250",
  },
  {
    id: 2,
    name: "pizzza",
    qty: 2,
    price: "400",
  },

  {
    id: 3,
    name: "juice",
    qty: 2,
    price: "200",
  },
];

function SplitCheck({ setSplitCheck }) {
  const [noOfSplits, setNoOfSplits] = useState(null);
  const [dataStore, setDataStore] = useState([]);
  const [clickedTr, setClickedTr] = useState("");
  const handleSplitCheck = () => {
    const SplitNo = window.prompt("Type No of Splits");

    setNoOfSplits(parseInt(SplitNo));
  };
  console.log("no of splits", noOfSplits);

  const handleDataStore = (id) => {
    const filterId = cartIten.find((item) => item.id === id);
    if (filterId) {
      setDataStore([...dataStore, { ...filterId, clicked: "true" }]);
    }
  };
  console.log("THE SELECTED DATA", dataStore);

  return (
    <div className="SpitCheck">
      <div className="splitCheckHeadder__Section">
        <h3>Split check</h3>
        <p>25/11/2021 9:10:36 AM</p>
      </div>

      <div className="checkque__sections">
        <div className="table__sections">
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
                    <h4>458</h4> <h4>$30.058</h4>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {cartIten.map((item) => (
                <tr
                  onClick={() => {
                    setClickedTr(item.id);
                    handleDataStore(item.id);
                  }}
                  className={dataStore?.includes((d) => d.id === item.id)}
                >
                  <td style={{ padding: "0px" }}>
                    <p>{item.name}</p>
                  </td>
                  <td>
                    {" "}
                    <p>{item.qty}</p>
                  </td>
                  <td>
                    {" "}
                    <p>{item.price}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {noOfSplits && (
          <div className="check__add">
            {[...Array(noOfSplits)].map((elementInArray, index) => (
              <Cheque numberOrder={index} />
            ))}
          </div>
        )}
      </div>

      <div className="bottom__spiltcheck__btn__section">
        <div className="spilt__btn__section">
          <button
            style={{ backgroundColor: "#DFA75C" }}
            onClick={handleSplitCheck}
          >
            Add Check
          </button>
          <button style={{ backgroundColor: "#31CDD2" }}> Share Check</button>
          <button style={{ backgroundColor: "#E1870E" }}>Clear Check</button>
          <button style={{ backgroundColor: "#040153" }}>Remove Check</button>
        </div>
        <div className="spilt__btn__section">
          <button
            style={{ backgroundColor: "#E1870E" }}
            onClick={() => setSplitCheck(false)}
          >
            Cancel
          </button>
          <button style={{ backgroundColor: "#040153" }}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default SplitCheck;
