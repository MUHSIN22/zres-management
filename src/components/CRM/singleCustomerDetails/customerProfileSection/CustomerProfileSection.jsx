import React, { useEffect, useState } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddIcon from "@mui/icons-material/Add";
import "./customerProfileSection.scss";
import { crmServices } from "../../../../Services/CrmServices";
import { Link } from "react-router-dom";
function CustomerProfileSection({ number }) {
  const [customer, setCustomer] = useState([])

  useEffect(() => {
    crmServices.getAllcustomer()
      .then(data => { setCustomer(data) })
  }, [])

  return (
    <>
      <div className="top__left">
        {customer && customer.filter(customer => customer.Phone === number)
        .map((customer) =>(
          <div className="top__left__headder">

            <div className="hedder__left">
              <div className="accoount__profile_pic">
                <AccountBoxIcon />
                <svg className="svg__top__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="30"
                  viewBox="0 0 44 30"
                >
                  <g id="surface1" transform="translate(-2 -9)">
                    <path
                      id="Path_3045"
                      data-name="Path 3045"
                      d="M46,36a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V12A3,3,0,0,1,5,9H43a3,3,0,0,1,3,3Z"
                      fill="#31cdd2"
                    />
                    <path
                      id="Path_3046"
                      data-name="Path 3046"
                      d="M28,33H38v2H28Z"
                      fill="#1976d2"
                    />
                    <path
                      id="Path_3047"
                      data-name="Path 3047"
                      d="M28,29H42v2H28Z"
                      fill="#1976d2"
                    />
                    <path
                      id="Path_3048"
                      data-name="Path 3048"
                      d="M16.5,14,20,20.5l7,1-5,5L23,34l-6.5-3.5L10,34l1-7.5-5-5,7-1Z"
                      fill="#ffea00"
                    />
                  </g>
                </svg>
              </div>
              <div>

              </div>
              <div className="name__section">
                <h4>{customer.CName}</h4>
                <p>Not {customer.CName} ?</p>
              </div>
            <Link to="/mainPage/crm/addCustomer">
              <div className="create__new__acc">
                <h5>Create New Customer</h5>
              </div>
              </Link>
            </div>

            <div className="headder__right">
              <p>Phone Number</p>
              <h4>{customer.Phone}</h4>
              <p>Alt.number : {customer.AlternativePhone}</p>
            </div>

          </div>))}

        <hr className="hr_headder" />

        <div className="top__left__mid">

          {customer.Address&&customer.Place === '' && <div className="main__section">
            <h5>There is no address created for this customer.</h5>
           <Link to="/mainPage/crm/addCustomer">
            <button>
              Add Address
            </button>
            </Link>
          </div>}

          <hr />

          <div className="main__footer">
            <div className="left_section">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.093"
                height="16.684"
                viewBox="0 0 18.093 16.684"
              >
                <path
                  id="Path_133"
                  data-name="Path 133"
                  d="M7.029,2.961A2.782,2.782,0,0,0,4.349,5c-.206.748-.449,1.651-.641,2.427-.1.388-.179.746-.239,1.04a.443.443,0,0,0-.011.052H2.665a.695.695,0,1,0,0,1.39h.7v8.343a1.39,1.39,0,0,0,2.779,0V18a44.123,44.123,0,0,0,4.865.259A44.137,44.137,0,0,0,15.873,18v.259a1.39,1.39,0,0,0,2.779,0V9.912h.7a.7.7,0,0,0,.611-.344.709.709,0,0,0,0-.7.7.7,0,0,0-.611-.344h-.792a.444.444,0,0,0-.011-.052c-.061-.294-.143-.652-.239-1.04-.193-.776-.435-1.679-.641-2.427a2.781,2.781,0,0,0-2.68-2.042Zm0,1.39h7.955a1.38,1.38,0,0,1,1.343,1.021c.2.743.443,1.635.63,2.391.091.38.173.724.228.991.047.242.066.41.069.421a.69.69,0,0,0,.008.151v.19a.692.692,0,0,1-.567.685,34.129,34.129,0,0,1-5.691.407A33.627,33.627,0,0,1,5.32,10.2a.687.687,0,0,1-.57-.682V9.334a.786.786,0,0,0,.008-.16c.006-.014.022-.179.069-.421.055-.267.138-.611.231-.988.184-.757.427-1.651.63-2.394A1.379,1.379,0,0,1,7.029,4.351Zm3.976.7A1.043,1.043,0,1,0,12.048,6.09,1.042,1.042,0,0,0,11.005,5.047ZM7.53,6.436a1.391,1.391,0,1,0,1.392,1.39A1.389,1.389,0,0,0,7.53,6.436Zm6.954,0a1.391,1.391,0,1,0,1.39,1.39A1.39,1.39,0,0,0,14.483,6.436Zm-8.69,6.951A1.043,1.043,0,1,1,4.751,14.43,1.044,1.044,0,0,1,5.793,13.387Zm10.426,0a1.043,1.043,0,1,1-1.043,1.043A1.044,1.044,0,0,1,16.22,13.387Zm-7.3.7h4.169a.695.695,0,1,1,0,1.39H8.922a.695.695,0,1,1,0-1.39Z"
                  transform="translate(-1.959 -2.961)"
                  fill="#040153"
                />
              </svg>
              <h5>Pickup Location</h5>
            </div>
            <div className="right__section">
              <div className="placeorder__btn">
                <AddIcon />
                <h4>Place new order</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default CustomerProfileSection;
