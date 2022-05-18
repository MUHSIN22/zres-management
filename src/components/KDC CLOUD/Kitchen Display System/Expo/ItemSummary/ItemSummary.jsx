import React, { useEffect, useRef, useState } from 'react'
import './ItemSummary.scss'
import Barcode from 'react-barcode';
import ReactToPrint from "react-to-print";

const ItemSummary = ({ selectItem, setItemSummary }) => {
    let ref = useRef()
    const [loading, setLoading] = useState({ status: false, msg: "" })
    const [summaryData, setSummaryData] = useState([])
    useEffect(() => {
        setLoading({ status: true, msg: "Loading..." })
        fetch(`${process.env.REACT_APP_BASE_URL}KDS/ItemSummary?ItemID=${27}&Status=new&CMPid=1`)
            .then(res => res.json()).then(data => {
                setSummaryData(data)
                setLoading({ status: false, msg: "" })
                if (data.length === 0) {
                    setLoading({ status: true, msg: "NO Data found" })
                }
            }).catch(error => {
                setLoading({ status: true, msg: "error" })
            })
    }, [selectItem.itemId])
    console.log(summaryData);
    return (
        <>
            {loading.status ?
                <div className='loading' >
                    <h6>{loading.msg}</h6>
                    <button onClick={() => setItemSummary(false)}>close</button>
                </div>
                :
                summaryData.length > 0 &&
                <div className='itemSummary'>
                    <div className="headingContainer">
                        <div className="heading">
                            <svg onClick={() => setItemSummary(false)} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15" cy="15" r="14" stroke="white" stroke-width="2" />
                                <path d="M11.8867 6.98096L20.7546 15.1531L11.8867 22.83" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h1>Item summary</h1>
                        </div>
                        <ReactToPrint
                            trigger={() => <button>Print this out!</button>}
                            content={() => ref}
                        />
                    </div>
                    <div style={{ marginBottom: "40px" }} className="details">
                        {/* <h3>orderId#</h3> */}
                    </div>


                    {summaryData.map((data) => (
                        <div style={{ padding: "20px 0", borderBottom: "1px solid white" }} >
                            <div className="items">
                                <div className="itemDetailsContainer">
                                    <div className="itemDetails">
                                        <h4>{data.ItemName}</h4>
                                        <p>({data.Modifier})</p>
                                    </div>
                                    <h4>orderid:#{data.OrderID}</h4>
                                </div>
                                <div ref={(el) => (ref = el)} className="printBox">
                                    <div>
                                        <h4>{data.ItemName}</h4>
                                        <p>({data.Modifier})</p>
                                      </div>
                                    <Barcode displayValue={false} width={2} height={50} value={data.OrderID} format="CODE128" />
                                </div>
                            </div>
                            <h4 style={{ margin: " 5px 0" }}>Add notes</h4>
                            <p>{data.AddNotes}</p>
                        </div>
                    ))
                    }
                    <div style={{ display: "none" }}>
                        <div ref={(el) => (ref = el)} className="forPrintingBarcode">
                            {
                                summaryData.map((data) => (
                                    <div className="printBox">
                                        <div>
                                            <h4>{data.ItemName}</h4>
                                            <p>({data.Modifier})</p>
                                        </div>
                                        <Barcode  width={2} height={50} value={data.OrderID} format="CODE128" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            }
        </>
    )
}

export default ItemSummary