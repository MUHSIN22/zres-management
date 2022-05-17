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
        fetch(`${process.env.REACT_APP_BASE_URL}KDS/ItemSummary?ItemID=${selectItem.itemId}&Status=NEW&CMPid=1`)
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
                summaryData.map((data, i) => (
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
                            <h3>orderId#</h3>
                        </div>


                        <div className="items">
                            <div className="itemDetailsContainer">
                                <div className="itemDetails">
                                    <h4>Burger</h4>
                                    <p>(chicken burger)</p>
                                </div>
                                <h4>1</h4>
                            </div>
                            <div ref={(el) => (ref = el)} className="printBox">
                                <div>
                                    <h4>Burger</h4>
                                    <p>(chicken burger)</p>
                                </div>
                                <Barcode displayValue={false} width={2} height={50} value={"hello"} format="CODE128" />
                            </div>
                        </div>
                        <div style={{ display: "none" }}>
                            <div ref={(el) => (ref = el)} className="forPrintingBarcode">
                                <div className="printBox">
                                    <div>
                                        <h4>Burger</h4>
                                        <p>(chicken burger)</p>
                                    </div>
                                    <Barcode displayValue={false} width={2} height={50} value={"hello"} format="CODE128" />
                                </div>
                                <div className="printBox">
                                    <div>
                                        <h4>Burger</h4>
                                        <p>(chicken burger)</p>
                                    </div>
                                    <Barcode displayValue={false} width={2} height={50} value={"how are you"} format="CODE128" />
                                </div>
                                <div className="printBox">
                                    <div>
                                        <h4>Burger</h4>
                                        <p>(chicken burger)</p>
                                    </div>
                                    <Barcode displayValue={false} width={2} height={50} value={"how"} format="CODE128" />
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </>
    )
}

export default ItemSummary