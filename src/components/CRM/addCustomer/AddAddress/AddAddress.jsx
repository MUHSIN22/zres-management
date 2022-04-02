import React, { useState } from "react";
import { crmServices } from "../../../../Services/CrmServices"; 
import "./addAddress.scss";

function AddAddress({handleCloseCusetomerAdd,form}) {
 
  const [addressData, updateaddressData] = useState(
    {
      deliveryArea:'',
      location: "",
      building: "",
      street:"",
      flatNumber: "",
      NearestLandmark: "",
      city: "",
      state: "",

    }
  );

  const handleChange = (e) => {
    updateaddressData({
      ...addressData, [e.target.name]: e.target.value 
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault()
   let customerData = {
      ...form,
      ...addressData
    }

    console.log(customerData)
    crmServices.AddCustomer(customerData)

  };
  return (
    <>
      <div className="Add_Address">
        <div className="Addresss__headder">
          <h4>Address</h4>
          <hr />
        </div>

        <div className="Address__body">
          <div className="customer__body__fields">
            <h6>Delivery area</h6>
            <div className="mandory__box">
              <input name="deliveryArea" type="text"  value={addressData.deliveryArea} onChange={handleChange}/>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="81"
                viewBox="0 0 26 81"
              >
                <text
                  id="_"
                  data-name="*"
                  transform="translate(0 66)"
                  fill="#c30208"
                  font-size="61"
                  font-family="SegoeUI, Segoe UI"
                >
                  <tspan x="0" y="0">
                    *
                  </tspan>
                </text>
              </svg>
            </div>
          </div>
          <div className="customer__body__fields">
            <h6>Location/Branch</h6>
            <select name="location"  value={addressData.location} id="">
              <option value="">Location/Branch</option>
              <option value=""></option>
            </select>
          </div>
          <div className="customer__body__fields">
            <h6>Building/Villa</h6>

            <div className="mandory__box">
              <input name="building" type="text" value={addressData.building} onChange={handleChange}/>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="81"
                viewBox="0 0 26 81"
              >
                <text
                  id="_"
                  data-name="*"
                  transform="translate(0 66)"
                  fill="#c30208"
                  font-size="61"
                  font-family="SegoeUI, Segoe UI"
                >
                  <tspan x="0" y="0">
                    *
                  </tspan>
                </text>
              </svg>
            </div>
          </div>
          <div className="customer__body__fields">
            <h6>Street</h6>
            <input name="street" type="text" value={addressData.street} onChange={handleChange}/>
          </div>

          <div className="customer__body__fields">
            <h6>Flat Number</h6>
            <input name="flatNumber" type="text" value={addressData.flatNumber} onChange={handleChange}/>
          </div>

          <div className="customer__body__fields">
            <h6>Nearest Landmark</h6>
            <input name="NearestLandmark" type="text" value={addressData.NearestLandmark} onChange={handleChange}/>
          </div>

          <div className="customer__body__fields">
            <h6>City</h6>

            <div className="mandory__box">
              <input name="city" type="text" value={addressData.city} onChange={handleChange}/>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="81"
                viewBox="0 0 26 81"
              >
                <text
                  id="_"
                  data-name="*"
                  transform="translate(0 66)"
                  fill="#c30208"
                  font-size="61"
                  font-family="SegoeUI, Segoe UI"
                >
                  <tspan x="0" y="0">
                    *
                  </tspan>
                </text>
              </svg>
            </div>
          </div>

          <div className="customer__body__fields">
            <h6>State</h6>
            <select name="state" value={addressData.state} id="">
              <option value="">Kannur</option>
            </select>
          </div>
        </div>
        <hr />
        <div className="save__btn">
        <button onClick={handleSubmit} className="save__Btn">Save</button>
        <button className="cancel__Btn" onClick={handleCloseCusetomerAdd}>
          Cancel
        </button>
      </div>
      </div>

      
    </>
  );
}

export default AddAddress;
