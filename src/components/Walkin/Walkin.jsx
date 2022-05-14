import React, { useEffect, useState } from "react";
import "./walkin.scss";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import CancelIcon from "@mui/icons-material/Cancel";
import { walkinServices } from "../../Services/WalkinServices";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import BurgerOptionSection from "./Choose Options for food/BurgerOptionSection";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Payment from "./payment/Payment";
import PaymentSucessfull from "./payment/PaymentSucessFullpage/PaymentSucessfull";
import ProfileHeadder from "../profile Headder and Settings/ProfileHeadder";
import SplitCheck from "./payment/spilitCheck/SplitCheck";
import AddNotes from "./addNotes/AddNotes";
// import Clock from "react-live-clock";
import LoyalityPopup from "./loyality/LoyalityPopup";
import AddCustomer from "../CRM/addCustomer/AddCustomer";
import dummyUser from "./dummyUser";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import Placeorder from "./placeorder/placeorder";
import Discount from "./discount/Discount";


function Walkin({ dataToSendToWlkinPage }) {
  const [CartItem, setCartItem] = useState([]);
  const [switchOn, setSwichOn] = useState(false);
  const [mainCategoryPic, setMainCategoryPic] = useState("");
  const [itemDetailsClick, setItemDetailsClick] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const [paymentSucessfull, setPaymentSUcessfull] = useState(false);
  const [dateTime, setDateTime] = useState();
  const [addNotes, setAddNotes] = useState(false);
  const [notes, SetNotes] = useState([]);
  const [loyalityPopup, setLoyalityPopup] = useState(false);
  const [allmenu, setAllmenu] = useState([])
  const [searchCustomer, setSearchCustomer] = useState([])
  const [food, setFood] = useState([])
  const [item, setItem] = useState('all')
  const [beverage, setBeverage] = useState([])
  const [itembymenu, setItembymenu] = useState([])
  const [menubyid, setMenubyid] = useState('')
  const [discount,setDiscount] = useState(false)
 
  const [placeorder,setPlaceorder] = useState(false)
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     const current = new Date().toLocaleString();
  //     setDateTime(current);
  //   }, 1000);

  //   return () => clearTimeout(timeout);
  // }, [dateTime]);

  const handleCloseNote = () => {
    setAddNotes(false);
  };

  const HandleSwitchONorOFF = (e, value) => {
    if (value === true) {

      setSwichOn(true);
    } else if (value === false) {
      setSwichOn(false);
    }

    console.log("switch", switchOn);
  };

  // add items to cart

  const HandleAddToCart = (Product) => {
    console.log(Product)
    const ProductExist = CartItem.find((items) => items.MenuID === Product.MenuID);
    if (ProductExist) {
      setCartItem(
        CartItem.map((item) =>
          item.MenuID === Product.MenuID
            ? { ...ProductExist, quantity: ProductExist.quantity + 1,subitems:true }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...Product, quantity: 1 ,subitems:true}]);
    }

  };

  // delete item from cart

  const handleDeleteFromCart = (product) => {
    console.log("function trigered");
    setCartItem(CartItem.filter((item) => item.MenuID !== product.MenuID));
  };

  // Decrease Quantity
  const handleDecreaseQuantity = (data) => {
    const ProductExsit = CartItem.find((items) => items.MenuID === data.MenuID);

    if (ProductExsit.quantity === 1) {
      setCartItem(CartItem.filter((item) => item.MenuID !== data.MenuID));
    } else {
      setCartItem(
        CartItem.map((d) =>
          d.id === data.MenuID
            ? { ...ProductExsit, quantity: ProductExsit.quantity - 1 }
            : d
        )
      );
    }
  };

  // increase Quantity

  const handleIncreaseQuantity = (data) => {
    const ProductExsit = CartItem.find((items) => items.id === data.id);

    if (ProductExsit) {
      setCartItem(
        CartItem.map((d) =>
          d.id === data.id
            ? { ...ProductExsit, quantity: ProductExsit.quantity + 1 }
            : d
        )
      );
    }
  };
  const datetoday = new Date();
  const [manualQty, setManualQty] = useState("");
  const handleAddManualQuantity = (e) => {
    setManualQty(manualQty.concat(e.target.innerText));

    if (manualQty === 0) {
      console.log("ereeor qty");
    } else {
      console.log("good qty");
    }
  };


  const subTotal = CartItem.reduce(
    (price, item) => price + item.quantity * item.ItemPrice,
    0
  );

  const [splitCheck, setSplitCheck] = useState(false);
  const [walikinView, setWalkinView] = useState(true);


  const searchCustmer = () => {
    walkinServices.getCustomer().then((res) => {
      setSearchCustomer(res);
    });
  }
  

  const [filterdCustomer, setFilteredCustomer] = useState([]);
  const [filtValue, setFiltValue] = useState("");
  const handleCustomerSearch = (e) => {
    const searchedValue = e.target.value;
    searchCustmer()
    setFiltValue(searchedValue);
    const filterData = searchCustomer.filter((data) => {
      if (searchedValue) {
        return (
          data.Phone.toString().includes(searchedValue) ||
          data.CName.toLocaleLowerCase().includes(searchedValue)
        );
      }
      return "";
    });
    setFilteredCustomer(filterData);
  };
  const [selectedCusetomer, setSelectedCustomer] = useState({});
  const handleSelectedCustomer = (id) => {
    const customerDetails = searchCustomer.find((data) => data.CustomerID === id);
    setSelectedCustomer(customerDetails);
    setFiltValue("");
  };

  const [changeQtyPopup, setChangeQtyPopup] = useState(false);
  const [qtyIdSelected, setSelectedIdSelected] = useState();
  const handleEditQtyPopup = () => {
    setChangeQtyPopup(true);
  };

  const [newQty, setNewQty] = useState();
  const [errorQtymsg, setErrorQtyMsg] = useState("");

  const handleQuantityUpdate = (data) => {
    const ProductExsit = CartItem.find((items) => items.MenuID === data.MenuID);

    if (newQty === "") {
      setErrorQtyMsg("Quantity cant be empty");
    } else if (newQty <= 0) {
      setErrorQtyMsg("Invalid Quantity, Quantity should be greater than 0");
    } else if (ProductExsit) {
      setCartItem(
        CartItem.map((d) =>
          d.MenuID === data.MenuID ? { ...ProductExsit, quantity: + newQty } : d
        )
      );
      setNewQty("");
      setChangeQtyPopup(false);
    }
  };
  
  useEffect(() => {
    walkinServices.getAllcategories()
    .then(data=>{ setAllmenu(data)})

  }, [])

  return (
    <>
      {/* payment sucessfull popup */}
      {/* choose option for food section */}
      {itemDetailsClick && (
        <div className="Burger__option__selection__section__container">
          <div className="burger__option__sections__inner__div">
            <BurgerOptionSection  setItemDetailsClick={setItemDetailsClick} productName={mainCategoryPic} />
          </div>
        </div>
      )}


      {/* main body starts here */}

      {walikinView && (
        <div className="Walkin">
          {loyalityPopup && (
            <div className="loyality__popup__area">
              <LoyalityPopup setLoyalityPopup={setLoyalityPopup} />
            </div>
          )}

          {paymentOption && (
            <div className="Burger__option__selection__section__container ">
              <div className="burger__option__sections__inner__div payment__area">
                <Payment
                  setPaymentSUcessfull={setPaymentSUcessfull}
                  setPaymentOption={setPaymentOption}
                  paymentOption={paymentOption}
                />
              </div>
            </div>
          )}

          {splitCheck && (
            <div className="Burger__option__selection__section__container ">
              <div className="burger__option__sections__inner__div SplitCheckArea">
                <SplitCheck setSplitCheck={setSplitCheck} />
              </div>
            </div>
          )}

          {paymentSucessfull && (
            <div className="payment__sucessfull">
              <PaymentSucessfull setPaymentSUcessfull={setPaymentSUcessfull} />
            </div>
          )}

          <div className="walkin__headder__nav">
            <ProfileHeadder />
            <div className="bottom__nav__section" >
              <div className="left__bottom__nav__section">
                <div className="buttons btnOrange" onClick={() => {
                  walkinServices.getFood()
                    .then(data => {
                      setFood(data)
                    })
                    .catch(err => {
                      console.log(err);
                    }); setItem('food'); setMainCategoryPic('Foods');

                }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.607"
                    height="20.098"
                    viewBox="0 0 19.607 20.098"
                  >
                    <g id="surface1" transform="translate(-4 -4)">
                      <path
                        id="Path_3086"
                        data-name="Path 3086"
                        d="M25.392,12.98C24.9,12.685,23.579,12,20,12v6.863h5.392V14.941a.868.868,0,0,0,.98-.833C26.372,13.568,25.882,13.275,25.392,12.98Z"
                        transform="translate(-8.157 -4.079)"
                        fill="#ffa000"
                      />
                      <path
                        id="Path_3087"
                        data-name="Path 3087"
                        d="M20.176,35H4.49a.527.527,0,0,0-.49.49v2.941a.527.527,0,0,0,.49.49h.98v.49a.527.527,0,0,0,.49.49h.98a.527.527,0,0,0,.49-.49v-.49h9.8v.49a.527.527,0,0,0,.49.49h.98a.527.527,0,0,0,.49-.49v-.49h.98a.527.527,0,0,0,.49-.49V35.49A.527.527,0,0,0,20.176,35Z"
                        transform="translate(0 -15.804)"
                        fill="#546e7a"
                      />
                      <path
                        id="Path_3088"
                        data-name="Path 3088"
                        d="M17.823,12.98a8.333,8.333,0,0,0-7.843,0c-.49.295-.98.588-.98,1.128a.868.868,0,0,0,.98.833v3.921h7.843V14.941a.868.868,0,0,0,.98-.833C18.8,13.568,18.314,13.275,17.823,12.98Z"
                        transform="translate(-2.549 -4.079)"
                        fill="#ffc107"
                      />
                      <path
                        id="Path_3089"
                        data-name="Path 3089"
                        d="M37,26h1.471v.98H37Z"
                        transform="translate(-16.824 -11.216)"
                        fill="#9fa8da"
                      />
                      <path
                        id="Path_3090"
                        data-name="Path 3090"
                        d="M4,29.823V25.412A4.425,4.425,0,0,1,8.412,21h7.843a4.393,4.393,0,0,1,4.412,4.412v4.412Z"
                        transform="translate(0 -8.667)"
                        fill="#cfd8dc"
                      />
                      <path
                        id="Path_3091"
                        data-name="Path 3091"
                        d="M41.451,26.961H39V25h1.471a.982.982,0,0,1,.98.98Z"
                        transform="translate(-17.844 -10.706)"
                        fill="#b0bec5"
                      />
                      <path
                        id="Path_3092"
                        data-name="Path 3092"
                        d="M33.471,34.735A.735.735,0,1,1,32.735,34,.753.753,0,0,1,33.471,34.735Z"
                        transform="translate(-14.275 -15.294)"
                        fill="#ff1744"
                      />
                      <path
                        id="Path_3093"
                        data-name="Path 3093"
                        d="M15.85,7.431,15.212,6.7c.393-.343.393-.393.147-.735S14.625,4.883,15.7,4l.638.735c-.393.295-.343.343-.147.638A1.44,1.44,0,0,1,15.85,7.431Zm2.256-2.011c-.245-.343-.245-.343.147-.636L17.615,4a1.293,1.293,0,0,0-.343,1.961c.245.343.245.393-.147.735l.638.735C18.841,6.5,18.351,5.765,18.106,5.421Zm1.961,0c-.245-.343-.245-.343.147-.636L19.576,4a1.293,1.293,0,0,0-.343,1.961c.245.343.245.393-.147.735l.638.735C20.8,6.5,20.311,5.765,20.066,5.421Z"
                        transform="translate(-5.625)"
                        fill="#bcaaa4"
                      />
                    </g>
                  </svg>

                  <h5>Food</h5>
                </div>
                <div className="buttons btnBlue" onClick={() => {
                  walkinServices.getBeverage()
                    .then(data => {
                      setBeverage(data)
                    })
                    .catch(err => {
                      console.log(err);
                    }); setItem('beverage'); setMainCategoryPic('Beverages');

                }}>
                  <img
                    src="https://www.freepnglogos.com/uploads/drinks-png/drinks-and-cocktails-14.png"
                    alt=""
                  />
                  <h5>Beverage</h5>
                </div>

              </div>
              <div className="right__bottom__nav__section">
                <div onClick={()=>{setDiscount(true)}} className="buttons btnBlue">
                  <AddIcon />
                  <h5>Discounts</h5>
                </div>
                <div onClick={()=>{setPlaceorder(true)}} className="buttons btnsBig">
                  <h4>Place Order</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="Walkin__mid__section">
            {/* section begin */}
            <div className="walkin__left__mid__section">
              <div className="top__walkin__left__mid__Section">
                <div className="sections">
                  <h4>Check No : {dataToSendToWlkinPage?.checkNo} </h4>
                  <h4>
                    Order Type : {dataToSendToWlkinPage?.orderType || "walkin"}
                  </h4>
                  {dataToSendToWlkinPage &&
                    dataToSendToWlkinPage.orderType === "dineIn" && (
                      <h4>Table No: {dataToSendToWlkinPage?.tableNo}</h4>
                    )}
                </div>
                <div className="sections">
                  {/* <Clock
                format={"HH:mm:ss"}
                ticking={true}
                timezone={"US/Pacific"}
              /> */}

                  {dataToSendToWlkinPage &&
                    (dataToSendToWlkinPage.orderType === "dineIn" ||
                      dataToSendToWlkinPage.orderType === "HomeDelivery") && (
                      <>
                        <h4>Waiter : {dataToSendToWlkinPage?.waiter}</h4>
                        <h4>Guest: {dataToSendToWlkinPage?.guest}</h4>
                      </>
                    )}
                  <h4>Customer: {selectedCusetomer?.CName} </h4>
                </div>
              </div>
              <div className="customer__search__area">
                <input
                  type="text"
                  placeholder="Search For Customer ..."
                  value={filtValue}
                  onChange={handleCustomerSearch}
                />{" "}
                {/* <button>Search</button> */}
                {filtValue !== "" && (
                  <div className="searchResultBox">
                    {filterdCustomer?.map((searchCustomer) => (
                      <div
                        className="customerss"
                        onClick={() => handleSelectedCustomer(searchCustomer.CustomerID)}
                      >
                        <h6>{searchCustomer.CName}</h6>
                        <h6>{searchCustomer.Phone}</h6>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mid__walkin__left__mid__Section">
                <div className="table__left">
                  <table className="table">
                    <thead>
                      <tr>
                        <th colspan="3">Item Name</th>
                        <th></th>
                        <th></th>

                        <th>Qty</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {CartItem.length === 0 && (
                        <div className="NoItemInCart">
                          <img
                            src="https://sethisbakery.com/assets/website/images/empty-cart.png"
                            alt=""
                          />
                        </div>
                      )}
                      {CartItem?.map((items) => (
                        <>
                          <tr>
                            <td colspan="3" style={{ textAlign: "left" }}>
                              <td></td>
                              <td> </td>

                              <div className="item_in__cart__details">
                                <h5>{items.ItemName}</h5>
                                {changeQtyPopup && qtyIdSelected === items.MenuID && (
                                  <div className="QuantityPopups">
                                    <div className="top__qty__section">
                                      <div className="closeBtn">
                                        <CancelIcon
                                          onClick={() =>
                                            setChangeQtyPopup(false)
                                          }
                                        />
                                      </div>
                                      <h4>Change Qty</h4>
                                    </div>

                                    <div className="inputField__qty">
                                      <input
                                        type="number"
                                        placeholder="Type Quantity"

                                        value={newQty}
                                        onChange={(e) =>
                                          setNewQty(e.target.value)
                                        }
                                      />
                                      <button
                                        onClick={() =>
                                          handleQuantityUpdate(items)
                                        }
                                      >
                                        Change Qty
                                      </button>
                                    </div>
                                    <div className="error__msg__Section">
                                      {errorQtymsg && <h6>* {errorQtymsg}</h6>}
                                    </div>
                                  </div>
                                )}

                                {items?.subitems && (
                                  <div className="sub__items__details">
                                    <div className="diff__sections">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30.043"
                                        height="30.203"
                                        viewBox="0 0 354.043 311.203"
                                      >
                                        <g
                                          id="Group_2944"
                                          data-name="Group 2944"
                                          transform="translate(-23149.584 23957.395)"
                                        >
                                          <rect
                                            id="Rectangle_1151"
                                            data-name="Rectangle 1151"
                                            width="26"
                                            height="311"
                                            transform="translate(23149.584 -23957.395)"
                                            fill="#2e2c60"
                                          />
                                          <rect
                                            id="Rectangle_1152"
                                            data-name="Rectangle 1152"
                                            width="352"
                                            height="23"
                                            transform="translate(23151.627 -23669.191)"
                                            fill="#2e2c60"
                                          />
                                        </g>
                                      </svg>
                                      <div className="detaills">
                                        <h6>Cheese</h6>
                                        <p
                                          style={{
                                            fontSize: "8px",
                                            marginLeft: "5px",
                                          }}
                                        >
                                          + 1 OMR
                                        </p>
                                      </div>
                                    </div>

                                    <div className="diff__sections">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30.043"
                                        height="30.203"
                                        viewBox="0 0 354.043 311.203"
                                      >
                                        <g
                                          id="Group_2944"
                                          data-name="Group 2944"
                                          transform="translate(-23149.584 23957.395)"
                                        >
                                          <rect
                                            id="Rectangle_1151"
                                            data-name="Rectangle 1151"
                                            width="26"
                                            height="311"
                                            transform="translate(23149.584 -23957.395)"
                                            fill="#2e2c60"
                                          />
                                          <rect
                                            id="Rectangle_1152"
                                            data-name="Rectangle 1152"
                                            width="352"
                                            height="23"
                                            transform="translate(23151.627 -23669.191)"
                                            fill="#2e2c60"
                                          />
                                        </g>
                                      </svg>
                                      <div className="detaills">
                                        <h6>Wheat</h6>
                                        <p
                                          style={{
                                            fontSize: "8px",
                                            marginLeft: "5px",
                                          }}
                                        >
                                          + 1 OMR
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </td>
                            <td></td>
                            <td></td>

                            <td>
                              <div className="quantity__change__section">
                                <button
                                  style={{ minWidth: "20px" }}
                                  onClick={() => {
                                    handleEditQtyPopup();
                                    setSelectedIdSelected(items.MenuID);
                                  }}
                                >
                                  {items.quantity}
                                </button>
                              </div>
                            </td>
                            <td style={{ textAlign: "right" }}>
                              {items.price}
                            </td>
                            <td>{items.quantity * items.ItemPrice}</td>
                            <td>
                              <CancelIcon
                                onClick={() => handleDeleteFromCart(items)}
                                style={{ color: "red", cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr></tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
             

              <div className="bottom__walkin__left__mid__Section">
              <div className="buttons btnOrange addNotess">
                  {addNotes && <AddNotes SetNotes={SetNotes} notes={notes} />}

                  <svg
                    onClick={() => setAddNotes(!addNotes)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.444"
                    height="22.444"
                    viewBox="0 0 22.444 22.444"
                  >
                    <path
                      id="Path_24"
                      data-name="Path 24"
                      d="M18.8,9.28,10.084.562A1.925,1.925,0,0,0,8.718,0H1.937A1.943,1.943,0,0,0,0,1.937V8.718a1.933,1.933,0,0,0,.572,1.376L9.29,18.812a1.925,1.925,0,0,0,1.366.562,1.894,1.894,0,0,0,1.366-.572L18.8,12.022a1.894,1.894,0,0,0,.572-1.366A1.957,1.957,0,0,0,18.8,9.28Zm-8.147,8.166L1.937,8.718V1.937H8.718v-.01l8.718,8.718Z"
                      transform="matrix(0.174, 0.985, -0.985, 0.174, 19.08, 0)"
                      fill="#fff"
                    />
                  </svg>

                  <h5 onClick={() => setAddNotes(!addNotes)}>Add Notes</h5>
                </div> 
                <div>
                <h3>Sub Total :{subTotal}</h3>
                <h3>Tax : 5000</h3>
                <h2>Total : 15000.00</h2>
                </div>
              </div>

            </div>
            {/* <div className="walkin__mid__mid__section">
              <div className="top__mid__mid__section">
                <h4>Qty</h4>
              </div>
              <div className="bottom__mid__mid__section">
                <button name="1" onClick={handleAddManualQuantity}>
                  <h4>1</h4>
                </button>
                <button name="2" onClick={handleAddManualQuantity}>
                  <h4>2</h4>
                </button>
                <button name="3" onClick={handleAddManualQuantity}>
                  <h4>3</h4>
                </button>
                <button name="4" onClick={handleAddManualQuantity}>
                  <h4>4</h4>
                </button>
                <button name="5" onClick={handleAddManualQuantity}>
                  <h4>5</h4>
                </button>
                <button name="6" onClick={handleAddManualQuantity}>
                  <h4>6</h4>
                </button>
                <button name="7" onClick={handleAddManualQuantity}>
                  <h4>7</h4>
                </button>
                <button name="8" onClick={handleAddManualQuantity}>
                  <h4>8</h4>
                </button>
                <button name="9" onClick={handleAddManualQuantity}>
                  <h4>9</h4>
                </button>
                <button name="0" onClick={handleAddManualQuantity}>
                  <h4>0</h4>
                </button>
              </div>
            </div> */}
            <div className="walkin__right__mid__section">
              <div className="walkin__right__mid__headder">
                <div className="left__section__headdr">
                  <div
                    className="menuCategory"
                    onClick={() => { setMainCategoryPic("") }}
                  >
                     {placeorder && <Placeorder status={()=>setPlaceorder(false)} /> }
                     {discount && <Discount status={()=>setDiscount(false)} />}
                    <svg
                      id="house_black_24dp"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 36 36"
                    >
                      <g id="Group_176" data-name="Group 176">
                        <rect
                          id="Rectangle_77"
                          data-name="Rectangle 77"
                          width="36"
                          height="36"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Group_177"
                        data-name="Group 177"
                        transform="translate(2.969 4.454)"
                      >
                        <path
                          id="Path_64"
                          data-name="Path 64"
                          d="M27.237,12.353V4.485H22.784v3.86L16.845,3,2,16.361H6.454V28.237h7.423V19.33h5.938v8.907h7.423V16.361h4.454ZM13.876,13.392a2.969,2.969,0,1,1,5.938,0Z"
                          transform="translate(-2 -3)"
                          fill="#040153"
                        />
                      </g>
                    </svg>
                    <h5>Menu Category</h5>
                  </div>

                  {mainCategoryPic && (
                    <div className="selected__subCate__name">
                  
                      <svg
                        id="Group_1915"
                        data-name="Group 1915"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15.208"
                        height="15.691"
                        viewBox="0 0 23.208 19.691"
                      >
                        <g id="Group_63" data-name="Group 63">
                          <path
                            id="Path_47"
                            data-name="Path 47"
                            d="M17.329,5H11l7.033,9.846L11,24.691h6.329l7.033-9.846Z"
                            transform="translate(-1.154 -5)"
                            fill="#040153"
                          />
                          <path
                            id="Path_48"
                            data-name="Path 48"
                            d="M10.329,5H4l7.033,9.846L4,24.691h6.329l7.033-9.846Z"
                            transform="translate(-4 -5)"
                            fill="#040153"
                          />
                        </g>
                      </svg>

                      <h5>{mainCategoryPic}</h5>
                    </div>
                  )}
                </div>
                <div className="right__section__headdr">
                  <Tooltip title={switchOn ? "Show Name Only" : "Show Image"}>
                    <Switch onChange={HandleSwitchONorOFF} />
                  </Tooltip>
                </div>
              </div>

              {/* the product list  */}

              <div className="product__list__wrapper">
                <>
                  {mainCategoryPic === "" &&
                    allmenu.map((mainCat, index) => (
                      <div
                        className="single__product"
                        onClick={() => {walkinServices.getItembyMenu()
                          .then(data => {
                            setItembymenu(data)
                          })
                          .catch(err => {
                            console.log(err);
                          }); setMainCategoryPic(mainCat.MenuGroupName); setMenubyid(mainCat.MenuGroupId); setItem('') }}
                      >
                        {" "}
                        {switchOn && (
                          <img
                            src={`data:image/png;base64,${mainCat.Image}`}
                            alt=""
                          />
                        )}
                        {
                          <h6>{mainCat.MenuGroupName}</h6>
                        }

                      </div>
                    ))}

                  {
                    (item === 'food' && mainCategoryPic === 'Foods') &&
                    food.map((foods) => (
                      <div
                        className="single__product"
                        onClick={() => {
                           setMainCategoryPic(foods.MenuGroupName); setMenubyid(foods.MenuGroupId); setItem('')
                        }}
                      >
                        {" "}
                        {switchOn && (
                          <img
                            src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4114.png"
                            alt=""
                          />
                        )}
                        {
                          <h6>{foods.MenuGroupName}</h6>
                        }

                      </div>
                    ))
                  }

                  {
                    (item === 'beverage' && mainCategoryPic === 'Beverages') &&
                    beverage.map((beverages) => (
                      <div
                        className="single__product"
                        onClick={() => { setMainCategoryPic(beverages.MenuGroupName); setMenubyid(beverages.MenuGroupId); setItem('') }}
                      >
                        {" "}
                        {switchOn && (
                          <img
                            src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4114.png"
                            alt=""
                          />
                        )}
                        {
                          <h6>{beverages.MenuGroupName}</h6>
                        }

                      </div>
                    ))
                  }
                  {/* subCategory Section */}

                  {(mainCategoryPic !== "Beverages" && mainCategoryPic !== "Foods" && mainCategoryPic !== "") &&
                    itembymenu
                      .filter(items => items.MenuGroupID === menubyid)

                      .map((categ) => (
                        <div
                          className="single__product"
                          onClick={() => {
                            // setItemDetailsClick(true);
                            setMainCategoryPic(categ.ItemName)
                            categ.IsAddOn === true
                              ? setItemDetailsClick(true)
                              : HandleAddToCart(categ)
                          }}
                        >
                          {switchOn && (
                            <>
                              <img
                                src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4114.png"
                                alt=""
                              />
                            </>
                          )}

                          <h6>{categ.ItemName}</h6>
                        </div>
                      ))

                  }
                </>
              </div>
            </div>
          </div>

          <div className="walkin__headder__nav">
            <div className="bottom__nav__section">
              <div className="left__bottom__nav__section">
                <div className="buttons" style={{ backgroundColor: "#dfa75c" }}>
                  <h5>Cancel</h5>
                </div>
                <div
                  className="buttons btnBlue"
                  onClick={() => setSplitCheck(true)}
                >
                  <h5>Split Check</h5>
                </div>
                <div
                  className="buttons btnOrange"
                  onClick={() => setLoyalityPopup(true)}
                >
                  <h5>Loyality</h5>
                </div>
                <div
                  className="buttons"
                  style={{ backgroundColor: "#040153" }}
                  onClick={() => setPaymentOption(true)}
                >
                  <h5>Payment</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Walkin;
