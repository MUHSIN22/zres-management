import React, { useEffect, useState } from "react";
import { kdcServices } from "../../../Services/kdcServices";
import "./kdcOrder.scss";
import ProductDetailMenuBar from "./Product Detail menuBar/ProductDetailMenuBar";
function KdcOrder() {
  const [detailClicked, setDetailCliked] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [blikerOn, setBlinkerOn] = useState(false);
  const [pressItem, setPressItem] = useState(false);
  const [pressDone, setPressDone] = useState(false);
  const [orders, setOrders] = useState([])
  const status = ['COOKING', 'PENDING', 'PRIORITY', 'DONE'];


  let data = [
    {
      category: "Appetizer",
      items : [
        {
          name: 'abc',
          quantity: 1
        },
        {
          name: 'abc',
          quantity: 1
        },
        {
          name: 'abc',
          quantity: 1
        },
      ]
    },
    {
      category: "Appetizer",
      items : [
        {
          name: 'abc',
          quantity: 1
        },
        {
          name: 'abc',
          quantity: 1
        },
        {
          name: 'abc',
          quantity: 1
        },
      ]
    },
    {
      category: "Appetizer",
      items : [
        {
          name: 'abc',
          quantity: 1
        },
        {
          name: 'abc',
          quantity: 1
        },
        {
          name: 'abc',
          quantity: 1
        },
      ]
    },
    {
      category: "Appetizer",
      items : [
        {
          name: 'abc',
          quantity: 1
        },
        {
          name: 'abc',
          quantity: 1
        },
        {
          name: 'abc',
          quantity: 1
        },
      ]
    },
  ]

  useEffect(() => {
    kdcServices.getAllOrders()
      .then(res => setOrders(res))
      .catch(err => console.log(err))
  }, [])

  const handleDoneBtn = () => {
    setPressItem(false);
  };

  return (
    <div className="kdcorder">
      <div className={"menu__selider__bat " + (detailClicked && "active ")}>
        <ProductDetailMenuBar setDetailCliked={setDetailCliked} />
      </div>
      {
        orders &&
        <div className="top__Section">
          {orders.map((item, index) => (
            <>
              {
                status.includes(item.Status) &&
                <div
                  key={index}
                  className={
                    "differnt__oder__list " +
                    (item.Status === "PRIORITY" ? "order-card-priority " : (item.Status === "PENDING") ? "order-card-pending " : (item.Status === "COOKING") ? 'order-card-cooking ' : '') +
                    (selectedId === index && blikerOn && "bliker__active")
                  }
                  onClick={() => {
                    setDetailCliked(true);
                    setSelectedId(index);
                    setPressItem(true);
                  }}
                >
                  {/* overlayer section */}

                  {selectedId === index && pressItem !== false && (
                    <div className="overLayer__section">
                      <button className="startBtn">Start</button>
                      <button
                        onClick={() => {
                          handleDoneBtn();
                        }}
                      >
                        Done
                      </button>
                    </div>
                  )}

                  <div className="headder">
                    <h3>{item.OrderType}</h3>
                  </div>

                  <hr />

                  <div className="inner__details__section">
                    <div className="infosections">
                      <p>18:27</p>
                      <p>Tom S</p>
                    </div>

                    <div className="infosections">
                      <p>Table 4</p>
                      <p>#{item.OrderID}</p>
                    </div>

                    <p className="served__by">Served by Jerry(Server)</p>
                  </div>

                  <div className="product__info__section">
                    <div className="product__wrapp">
                      {
                        item.Items && item.Items.map((res, index) => (
                          <div className="productssss">
                            {" "}
                            <p>{index + 1}* {res.ItemName}</p>
                            <p className="p__extra__details">
                              Cheese, Chicken ,Wheat ,Caramelize onion
                            </p>
                          </div>
                        ))
                      }
                    </div>
                  </div>

                  <div className="bottom__area__sections">
                    <div className="svg__and__details">
                      <svg
                        id="surface1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28.348"
                        height="28.348"
                        viewBox="0 0 28.348 28.348"
                      >
                        <path
                          id="Path_3"
                          data-name="Path 3"
                          d="M16.158,1.984A14.174,14.174,0,1,0,30.332,16.158,14.189,14.189,0,0,0,16.158,1.984Zm0,16.023a1.84,1.84,0,0,1-.791-.184l-3.7,3.7a.617.617,0,0,1-.871-.874l3.7-3.7a1.823,1.823,0,0,1,1.046-2.529V5.683a.616.616,0,0,1,1.233,0v8.741a1.844,1.844,0,0,1-.616,3.584Z"
                          transform="translate(-1.984 -1.984)"
                          fill="#fff"
                        />
                      </svg>

                      <p> {item.WaitTime} - {item.Status}</p>
                    </div>

                    <div className="svg__and__details">
                      <svg
                        id="surface1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                      >
                        <path
                          id="Path_4"
                          data-name="Path 4"
                          d="M12,0a8,8,0,1,0,8,8A8,8,0,0,0,12,0ZM6.656,10.656H17.344a5.942,5.942,0,0,1-10.688,0Zm.719,6.719C4.4,18.156,2.07,20.016,1,24H23c-1.07-3.984-3.4-5.844-6.375-6.625a9.828,9.828,0,0,1-9.25,0Z"
                          transform="translate(-1)"
                          fill="#fff"
                        />
                      </svg>

                      <p> 2</p>
                    </div>
                  </div>
                </div>
              }
            </>
          ))}
        </div>
      }

      <div className="bottom__section">
        <button>
          {" "}
          <h5>Priority</h5>
        </button>
        <button style={{ backgroundColor: "#009751" }}>
          <h5>Done</h5>
        </button>
        <button style={{ backgroundColor: "#E1870E" }}>
          <h5>Cooking</h5>
        </button>
        <button style={{ backgroundColor: "#858181" }}>
          <h5>Pending</h5>
        </button>
        <button style={{ backgroundColor: "#31CDD2" }}>
          <h5>Print</h5>
        </button>
      </div>
    </div>
  );
}

export default KdcOrder;
