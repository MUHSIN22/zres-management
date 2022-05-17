import React, { useEffect, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import "./loyalityPoup.scss";
import {BiSearchAlt} from 'react-icons/bi'
import { walkinServices } from "../../../Services/WalkinServices";

function LoyalityPopup({ setLoyalityPopup }) {
  const [searchCustomer, setSearchCustomer] = useState([])
  const [filterdCustomer, setFilteredCustomer] = useState([]);
  const [filtValue, setFiltValue] = useState("");
  var today = new Date();

  useEffect(()=>{
    searchCustmer();
  },[])

  const searchCustmer = () => {
    walkinServices.getCustomer().then((res) => {
      setSearchCustomer(res);
    });
  }


  const handleCustomerSearch = async() => {
    const filterData = await searchCustomer.filter((data) => {
      if (filtValue) {
        return (
          data.Phone.toString().includes(filtValue) ||
          data.CName.toLocaleLowerCase().includes(filtValue)
        );
      }
      return "";
    });
    setFilteredCustomer(filterData);
  };

  return (
    <div className="LoyalityPopup">
      <div className="loyality__Popup__headder">
        <h3>Loyality</h3>
        <div
          className="close__icon__loyality__opoup"
          onClick={() => setLoyalityPopup(false)}
        >
          <CancelIcon />
        </div>
      </div>
      <div className="date">
        <p>{`${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`}</p>
      </div>
      <div className="search_bar">
        <div className="search">
          <BiSearchAlt/>
        <input type="text" placeholder="search by customer name or Contact no."  onChange={e=>setFiltValue(e.target.value)} />
        </div>
        <button onClick={handleCustomerSearch} >Search</button>
      </div>

      <div className="loyal_table">
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Contact No</th> 
              <th>Total Loyality Points</th>
              <th>Loyality Used</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {
            filterdCustomer.length?
            filterdCustomer?.map((d,i)=>(
              <tr key={i} >
                <td>{d.CName}</td>
                <td>{d.Phone}</td>
                <td>{d.LoyaltyPoint?d.LoyaltyPoint:0}</td>
                <td>{d.IsRedemed?d.IsRedemed:0}</td>
                <td>{d.LoyaltyPoint - d.IsRedemed}</td>
              </tr>
              ))
            :searchCustomer?.map((d,i)=>(
            <tr key={i} >
              <td>{d.CName}</td>
              <td>{d.Phone}</td>
              <td>{d.LoyaltyPoint?d.LoyaltyPoint:0}</td>
              <td>{d.IsRedemed?d.IsRedemed:0}</td>
              <td>{d.LoyaltyPoint - d.IsRedemed}</td>
            </tr>
            ))
            }
          </tbody>
        </table>
      </div>
      <div  onClick={() => setLoyalityPopup(false)}className="button">
        <button >Ok</button>
      </div>
    </div>
  );
}

export default LoyalityPopup;
