import React, { useEffect, useState } from "react";
import { dashboardServices } from "../../../Services/DashboardServices";
import "./businessSummary.scss";
function BussinessSummary() {
  const [data, setData] = useState();
  
  useEffect(() => {
    dashboardServices.getBussinessSummary()
      .then(res => {
        setData(res)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {
        data &&
        <div className="BussinessSummary">
          <h2>Business Summary</h2>

          <div className="hedderr__nav__sections">
            <div className="date__area__section">
              <div className="date__section">
                <p>From Date</p> <input type="date" name="" id="" />
              </div>
              <div className="date__section">
                <p>To Date</p> <input type="date" name="" id="" />
              </div>

              <button>Filter</button>
            </div>

            <div className="printed__area__section">
              <p>Printed on Friday,05January 2022, 04:30 PM By Amer</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38.335"
                height="35.918"
                viewBox="0 0 48.335 45.918"
              >
                <g id="surface1" transform="translate(-4 -5)">
                  <path
                    id="Path_3185"
                    data-name="Path 3185"
                    d="M4,28.292H52.335V19.833A4.831,4.831,0,0,0,47.5,15H8.833A4.831,4.831,0,0,0,4,19.833Z"
                    transform="translate(0 2.084)"
                    fill="#616161"
                  />
                  <path
                    id="Path_3186"
                    data-name="Path 3186"
                    d="M9,12H45.251v3.625H9Z"
                    transform="translate(1.042 1.459)"
                    fill="#424242"
                  />
                  <path
                    id="Path_3187"
                    data-name="Path 3187"
                    d="M8.833,39.5H47.5a4.831,4.831,0,0,0,4.833-4.833V25H4v9.667A4.831,4.831,0,0,0,8.833,39.5"
                    transform="translate(0 4.167)"
                    fill="#424242"
                  />
                  <path
                    id="Path_3188"
                    data-name="Path 3188"
                    d="M39,19.208A1.208,1.208,0,1,0,40.208,18,1.211,1.211,0,0,0,39,19.208"
                    transform="translate(7.293 2.709)"
                    fill="#00e676"
                  />
                  <path
                    id="Path_3189"
                    data-name="Path 3189"
                    d="M43.439,32.625H10.813a1.813,1.813,0,0,1,0-3.625H43.439a1.813,1.813,0,0,1,0,3.625"
                    transform="translate(1.042 5.001)"
                    fill="#242424"
                  />
                  <path
                    id="Path_3190"
                    data-name="Path 3190"
                    d="M11,5H42.418V17.084H11Z"
                    transform="translate(1.459)"
                    fill="#90caf9"
                  />
                  <path
                    id="Path_3191"
                    data-name="Path 3191"
                    d="M11,32H42.418V45.292H11Z"
                    transform="translate(1.459 5.626)"
                    fill="#90caf9"
                  />
                  <path
                    id="Path_3192"
                    data-name="Path 3192"
                    d="M11,30H42.418v2.417H11Z"
                    transform="translate(1.459 5.209)"
                    fill="#42a5f5"
                  />
                  <path
                    id="Path_3193"
                    data-name="Path 3193"
                    d="M16,34H36.542v2.417H16Z"
                    transform="translate(2.5 6.043)"
                    fill="#1976d2"
                  />
                  <path
                    id="Path_3194"
                    data-name="Path 3194"
                    d="M16,38H31.709v2.417H16Z"
                    transform="translate(2.5 6.876)"
                    fill="#1976d2"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className="table__area__wrapper">
            <div className="top__table__wrapper">
              <div className="left__side__table">
                <div className="table__left">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Revenues</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.SP_BSRevenue.map((item, index) => (
                          <tr key={index}>
                            <td>{item.data}</td>
                            <td>{item.value}</td>
                          </tr>
                        ))
                      }
                    </tbody>

                    <tfoot>
                      <tr style={{ borderTop: "2px solid #040153" }}>
                        <td>Net Sales</td>
                        {
                          data.SP_BSRevenue.reduce((total,currentItem) => (
                            <td>{total + parseInt(currentItem.value)}</td>
                          ))
                        }
                      </tr>

                      <tr>
                        <td>Tax</td>
                        <td>6.00</td>
                      </tr>

                      <tr>
                        <td>Net Sales Including Tax</td>
                        <td>16.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="table__left">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Tax</th>
                        <th>Qty</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.Tax.map((item, index) => (
                          <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.Qty}</td>
                            <td>{item.Value}</td>
                          </tr>
                        ))
                      }
                    </tbody>

                    <tfoot>
                      <tr style={{ borderTop: "2px solid #040153" }}>
                        <td>Net Sales</td>
                        <td>86.00</td>
                        <td></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="table__left">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Void</th>
                        <th>Qty</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.Void.map((item, index) => (
                          <tr>
                            <td>{item.data}</td>
                            <td>need this</td>
                            <td>{item.value}</td>
                          </tr>
                        ))
                      }
                    </tbody>

                    <tfoot>
                      <tr style={{ borderTop: "2px solid #040153" }}>
                        <td>Net Sales</td>
                        <td></td>
                        <td>0.000</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="right__side__table">
                <div className="right__top__table__section">
                  <div className="table__right__top">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Order Type</th>
                          <th>Order</th>
                          <th>%</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.OrderType.map((item, index) => (
                            <tr>
                              <td>{item.Ordertype}</td>
                              <td>{item.Order}</td>
                              <td>{item.percentage.toFixed(2)}</td>
                              <td>{item.Value}</td>
                            </tr>
                          ))
                        }
                      </tbody>

                      <tfoot>
                        <tr style={{ borderTop: "2px solid #040153" }}>
                          <td>Net Sales</td>
                          <td></td>
                          <td></td>
                          <td>99.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                <div className="right__mid__table__section">
                  {/* <div className="table__right__mid">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Wastage</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Wastage at POS</td>
                          <td>0.00</td>
                        </tr>
                        <tr>
                          <td>Paid Modifiers</td>
                          <td>0.000</td>
                        </tr>
                        <tr>
                          <td>Surcharges</td>
                          <td>0.00</td>{" "}
                        </tr>
                      </tbody>

                      <tfoot>
                        <tr style={{ borderTop: "2px solid #040153" }}>
                          <td>Net Sales</td>
                          <td>86.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div> */}

                  <div className="table__right__mid">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Cost & Profits</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.CostAndProfit.map((item, index) => (
                            <tr>
                              <td>{item.data}</td>
                              <td>{item.value}</td>
                            </tr>
                          ))
                        }

                        <hr />
                      </tbody>

                      <tfoot>
                        <tr style={{ borderTop: "2px solid #040153" }}>
                          <td>Gross Profit</td>
                          <td>86.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                <div className="table__upper__bottomm__section">
                  <div className="table__right__upper__bottom">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Order Type</th>
                          <th>Qty</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.OrderTypeByPaymentType.map((item, index) => (
                            <tr>
                              <td>{item.Name}</td>
                              <td>{item.Qty}</td>
                              <td>{item.Value}</td>
                            </tr>
                          ))
                        }
                      </tbody>

                      <tfoot>
                        <tr style={{ borderTop: "2px solid #040153" }}>
                          <td>Net Sales</td>

                          <td></td>
                          <td>99.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                <div className="table___right__bottom__sections">
                  <div className="right__bottom__section">
                    <div className="table__right__bottom">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Discount</th>
                            <th>Qty</th>
                            <th>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            data.Discount.map((item, index) => (
                              <tr>
                                <td>{item.Name}</td>
                                <td>{item.Qty}</td>
                                <td style={{ color: "red" }}>({item.Value})</td>
                              </tr>
                            ))
                          }

                        </tbody>
                      </table>
                    </div>

                    <div className="table__right__bottom">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Order Type</th>
                            <th>Qty</th>
                            <th>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Total</td>
                            <td>1</td>
                            <td style={{ color: "red" }}>46.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom__table__wrapper">
              <div className="table__bottom">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sales by Staff</th>
                      <th>Qty</th>
                      <th>%</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.SalesByStaff.map((item, index) => (
                        <tr>
                          <td>{item.Name}</td>
                          <td>{item.Qty}</td>
                          <td>{item.ValuePercentage.toFixed(2)}%</td>
                          <td>{item.Value}</td>
                        </tr>
                      ))
                    }
                  </tbody>

                  <tfoot>
                    <tr style={{ borderTop: "2px solid #040153" }}>
                      <td>Total</td>
                      <td>40</td>
                      <td>99.00%</td>
                      <td>99</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="table__bottom">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sales by Category</th>
                      <th>Qty</th>
                      <th>Qty %</th>
                      <th>Value</th>
                      <th>Value %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.SalesByCategory.map((item, index) => (
                        <tr>
                          <td>{item.Name}</td>
                          <td>{item.Qty}</td>
                          <td>{item.QtyPercentage.toFixed(2)}%</td>
                          <td>{item.Value}</td>
                          <td>{item.ValuePercentage.toFixed(2)}%</td>
                        </tr>
                      ))
                    }
                  </tbody>

                  <tfoot>
                    <tr style={{ borderTop: "2px solid #040153" }}>
                      <td>Total</td>
                      <td>10</td>
                      <td>99.00%</td>
                      <td>99</td>
                      <td>99.00%</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default BussinessSummary;
