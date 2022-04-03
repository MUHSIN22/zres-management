import React, { useEffect, useState } from "react";
import "./customerDetails.scss";

import dummyUserData from "./dummyUserData";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircleIcon from "@mui/icons-material/Circle";
import { crmServices } from "../../../Services/CrmServices";
import LoadingScreen from "../../loadingScreen/LoadingScreen";

function CustomerDetails({ fetchALLDataList, dataList }) {
  const [dataFromServer, setDataFromServer] = useState([]);

  const [loading, setloading] = useState(false);

  console.log("THE OTIGINAL DATA IS", dataFromServer);
  const [cdeatails,setCdeatails] = useState([])
  const pageNumber = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(7);
  const indexOfLastPost = currentPage * postPerPage;

  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = cdeatails.slice(indexOfFirstPost, indexOfLastPost);
  

  for (let i = 1; i <= Math.ceil(cdeatails.length / postPerPage); i++) {
    pageNumber.push(i);
  }
  console.log(currentPost)
useEffect(() => {
 crmServices.getAllcustomer()
 .then(data =>{
   setCdeatails(data)
 })
}, [])


  return (
    <>
      {loading && <LoadingScreen />}

      <div className="customer_details">
        <div className="customerdetails__headder">
          <div className="customerdetails__headder__leftside">
            <h2>Customer Details</h2>
          </div>
          <div className="customerdetails__headder__rightside">
            <div className="status__btn">
              <CircleIcon className="expired" />
              <h5>Expired</h5>
            </div>
            <div className="status__btn">
              <CircleIcon className="activeCustomer" />
              <h5>Active</h5>
            </div>
            <div className="status__btn">
              <CircleIcon className="inActiveCustomer" />
              <h5>Inactive</h5>
            </div>
          </div>
        </div>

        <div className="customerdetails__body">
          <table className="table__three">
            <thead>
              <tr>
                <th>Customer Id</th>
                <th>Customer Name</th>
                <th>Address</th>
                <th>Email Id</th>
                <th>Phone</th>
                <th>Loyality Customer</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentPost && currentPost.map((data, index) => (
                <tr key={index}>
                  <td data-label="Customer Id">{data.CustomerID}</td>
                  <td data-label="Customer Name">{data.CName}</td>
                  <td data-label="Address">{data.Address}</td>
                  <td data-label="Email Id">{data.Email}</td>
                  <td data-label="Phone">{data.Phone}</td>
                  <td data-label="Loyality Customer">{(data.IsLoyaltyCustomer === true)? 'Yes' : 'No'}</td>
               
                  <td
                    data-label="Status"
                    className={`status__icons ${data.Status === 'Expired' && 'expired'} ${data.Status === 'Active' && 'active'} ${data.Status === 'InActive' && 'inactive'}`}
                  >
                    
                    <CircleIcon  />
    
                    <h5>{data.Status}</h5>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* paginate button pops here */}
          <div className="pagination">
            <Stack spacing={2}>
              <Pagination
                count={pageNumber.length}
                shape="rounded"
                color="primary"
                onChange={(e, value) => setCurrentPage(value)}
                defaultPage={currentPage}
              />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerDetails;
