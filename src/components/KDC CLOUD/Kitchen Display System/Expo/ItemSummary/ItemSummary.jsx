import React from 'react'
import './ItemSummary.scss'

const ItemSummary = () => {
    return (
        <div className='itemSummaryWraper'>
            <div className='itemSummary'>
                <div className="headingContainer">
                    <div className="heading">
                        <h1>Item summary</h1>
                    </div>
                    <button>
                        Label Print
                    </button>
                </div>
                <div style={{ marginBottom: "40px" }} className="details">
                    <h3>Table#1</h3>
                    <h3>name</h3>
                </div>
                
                <div className="items">
                    <div className="itemDetailsContainer">
                        <div className="itemDetails">
                            <h4>Burger</h4>
                            <p>(chicken burger)</p>
                        </div>
                        <h4>1</h4>
                    </div>
                    <div className="itemPrice">
                        <h4>190</h4>
                    </div>
                </div>
                
            </div>
            <div className="calculationPart">
                <hr />
                <div className="subtotal total">
                    <h4>Sub total</h4>
                    <h4>100</h4>
                </div><div className="subtotal total">
                    <h4>Sub total</h4>
                    <h4>100</h4>
                </div>
                <div className="subtotal total">
                    <h4>Sub total</h4>
                    <h4>100</h4>
                </div>
            </div>
        </div>
    )
}

export default ItemSummary