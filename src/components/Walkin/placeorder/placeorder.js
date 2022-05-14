import React from 'react'
import './placeorder.scss'

export default function Placeorder({status}) {
  return (
    <div className="placeorder_container">
            <h2>Order Successfull</h2>

            <p>Thank you so much  for your order.</p>
        
            <button onClick={status}>Ok</button>
    </div>
  )
}
