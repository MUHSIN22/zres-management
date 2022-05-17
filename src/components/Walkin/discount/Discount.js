import React, { useState } from 'react'
import './Discount.scss'

export default function Discount({status}) {

    const [discountData,setDiscountData] = useState('')
  return (
    <div className="discount_container">
        <h2>Discount</h2>
        <input type="number" value={discountData} onChange={(e)=>setDiscountData(e.target.value)} name="discount" placeholder="Enter The discount amount"/> 

        <button onClick={discountData !== '' && status}>Apply</button>  
    </div>
  )
}
