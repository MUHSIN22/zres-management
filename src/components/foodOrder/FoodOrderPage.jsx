import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./foodOrderPage.scss";
import { display } from "@mui/system";

const foodAvialable = [
  {
    name: "Chicken Biriyani",
    id: 1,
    price: 250,
    img: "https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__1200_0_0_0_auto.jpg",
    weight: "200",
  },
  {
    name: "Ramen",
    id: 2,
    price: 350,
    img: "https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen.jpg",
    weight: "150",
  },
  {
    name: "Grilled Corn",
    id: 3,
    price: 250,
    img: "https://assets.epicurious.com/photos/54af5217c4a891cc44cce500/5:4/w_910,h_728,c_limit/51179080_grilled-corn_1x1.jpg",
    weight: "100",
  },
  {
    name: "shezwan noodles",
    id: 4,
    price: 250,
    img: "https://www.cookwithmanali.com/wp-content/uploads/2021/08/Schezwan-Noodles-500x500.jpg",
    weight: "300",
  },
  {
    name: "Chilly Chicken",
    id: 5,
    price: 250,
    img: "https://media.vogue.in/wp-content/uploads/2020/11/Chilli-chicken-1920x1080.jpg",
    weight: "200",
  },
];

function FoodOrderPage() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const [ItemsTodisplay, setItemToDisplay] = useState();

  useEffect(() => {
    if (screenSize.dynamicWidth <= 768) {
      setItemToDisplay(3);
    } else {
      setItemToDisplay(7);
    }
  }, [screenSize]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: ItemsTodisplay,
    slidesToScroll: 1,
  };
  const [CartItem, setCartItem] = useState([]);

  const HandleAddToCart = (Product) => {
    const ProductExsit = CartItem.find((items) => items.id === Product.id);
    if (ProductExsit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === Product.id
            ? { ...ProductExsit, quantity: ProductExsit.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...Product, quantity: 1 }]);
    }
  };

  // delete item from cart

  const handleDeleteFromCart = (product) => {
    console.log("function trigered");
    setCartItem(CartItem.filter((item) => item.id !== product.id));
  };

  // Decrease Quantity
  const handleDecreaseQuantity = (data) => {
    const ProductExsit = CartItem.find((items) => items.id === data.id);

    if (ProductExsit.quantity === 1) {
      setCartItem(CartItem.filter((item) => item.id !== data.id));
    } else {
      setCartItem(
        CartItem.map((d) =>
          d.id === data.id
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

  const handleDeleteAllCartItems = () => {
    setCartItem([]);
  };

  const subTotal = CartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  console.log("Cart Items.", CartItem);

  return (
    <div className="foodOrderPage">
      <div className="leftFoodOrder__Section">
        <div className="top__foodOrder__search__section">
          <h4>Choose Category</h4>
          <div className="input__section__wrapper">
            <input type="text" placeholder="Search Category" />
            <svg
              id="search"
              xmlns="http://www.w3.org/2000/svg"
              width="28.715"
              height="28.715"
              viewBox="0 0 28.715 28.715"
            >
              <path
                id="Path_19"
                data-name="Path 19"
                d="M0,0H28.715V28.715H0Z"
                fill="none"
              />
              <path
                id="Path_20"
                data-name="Path 20"
                d="M17.956,16.161h-.945l-.335-.323a7.789,7.789,0,1,0-.838.838l.323.335v.945l5.982,5.97,1.783-1.783Zm-7.179,0a5.384,5.384,0,1,1,5.384-5.384A5.377,5.377,0,0,1,10.777,16.161Z"
                transform="translate(0.589 0.589)"
                fill="rgba(102,100,100,0.4)"
              />
            </svg>
          </div>
        </div>

        <div className="foodOrder__category__section">
          <div className="right__slide__section">
            <Slider {...settings} className="sliderss" easing="ease">
              <div className="each-slide">
                <div className="the__food__cat__wrapper">
                  <img
                    src="https://pngimg.com/uploads/cocacola/cocacola_PNG24.png"
                    alt=""
                  />

                  <h5>Drinks</h5>
                </div>
              </div>
              <div className="each-slide">
                <div className="the__food__cat__wrapper">
                  <img
                    src="https://pngimg.com/uploads/cocacola/cocacola_PNG24.png"
                    alt=""
                  />

                  <h5>Drinks</h5>
                </div>
              </div>
              <div className="each-slide">
                <div className="the__food__cat__wrapper">
                  <img
                    src="https://pngimg.com/uploads/cocacola/cocacola_PNG24.png"
                    alt=""
                  />

                  <h5>Drinks</h5>
                </div>
              </div>
              <div className="each-slide">
                <div className="the__food__cat__wrapper">
                  <img
                    src="https://pngimg.com/uploads/cocacola/cocacola_PNG24.png"
                    alt=""
                  />

                  <h5>Drinks</h5>
                </div>
              </div>
              <div className="each-slide">
                <div className="the__food__cat__wrapper">
                  <img
                    src="https://pngimg.com/uploads/cocacola/cocacola_PNG24.png"
                    alt=""
                  />

                  <h5>Drinks</h5>
                </div>
              </div>
              <div className="each-slide">
                <div className="the__food__cat__wrapper">
                  <img
                    src="https://pngimg.com/uploads/cocacola/cocacola_PNG24.png"
                    alt=""
                  />

                  <h5>Drinks</h5>
                </div>
              </div>
              <div className="each-slide">
                <div className="the__food__cat__wrapper">
                  <img
                    src="https://pngimg.com/uploads/cocacola/cocacola_PNG24.png"
                    alt=""
                  />

                  <h5>Drinks</h5>
                </div>
              </div>
              <div className="each-slide">
                <div className="the__food__cat__wrapper">
                  <img
                    src="https://pngimg.com/uploads/cocacola/cocacola_PNG24.png"
                    alt=""
                  />

                  <h5>Drinks</h5>
                </div>
              </div>
              <div className="each-slide">
                <div className="the__food__cat__wrapper">
                  <img
                    src="https://pngimg.com/uploads/cocacola/cocacola_PNG24.png"
                    alt=""
                  />

                  <h5>Drinks</h5>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="foodorder__food__wrapper">
          {foodAvialable.map((food) => (
            <div
              className="food__sections"
              onClick={() => HandleAddToCart(food)}
            >
              <div className="food__section__left">
                <h5>{food.name}</h5>
                <p>{food.weight} g</p>

                <h5 style={{ color: "#524DCC" }}>{food.price}$</h5>
              </div>
              <div className="food__section__right">
                <img src={food.img} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className="bottom__foodOrder__btn__section">
          <div className="button__btn" style={{ backgroundColor: "#dfa75c" }}>
            <h4>Loyality</h4>
          </div>

          <div className="button__btn" style={{ backgroundColor: "#e1870e" }}>
            <h4>Notes</h4>
          </div>

          <div className="button__btn" style={{ backgroundColor: "#31cdd2" }}>
            <h4>Add Discount</h4>
          </div>
        </div>
      </div>
      <div className="rightFoodOrder__Section">
        <div className="headder__right__foodorder">
          <div className="headder__left">
            <h2>Zacks Burger</h2>
          </div>
          <div className="headder__right">
            <div className="img__div"></div>
          </div>
        </div>

        <div className="food__cart__Section">
          <div className="cart__headder__setting">
            <div className="left__cart__headder">
              <h3>Current Order</h3>
            </div>
            <div className="right__cart__headder">
              <button onClick={handleDeleteAllCartItems}>Clear All</button>

              <div className="setting__btn">
                <svg
                  id="settings_black_24dp"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_32"
                    data-name="Path 32"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_33"
                    data-name="Path 33"
                    d="M19.43,12.98A7.793,7.793,0,0,0,19.5,12a7.793,7.793,0,0,0-.07-.98l2.11-1.65a.5.5,0,0,0,.12-.64l-2-3.46a.5.5,0,0,0-.44-.25.467.467,0,0,0-.17.03l-2.49,1a7.306,7.306,0,0,0-1.69-.98l-.38-2.65A.488.488,0,0,0,14,2H10a.488.488,0,0,0-.49.42L9.13,5.07a7.683,7.683,0,0,0-1.69.98l-2.49-1a.566.566,0,0,0-.18-.03.5.5,0,0,0-.43.25l-2,3.46a.493.493,0,0,0,.12.64l2.11,1.65A7.931,7.931,0,0,0,4.5,12a7.931,7.931,0,0,0,.07.98L2.46,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.44.25.467.467,0,0,0,.17-.03l2.49-1a7.306,7.306,0,0,0,1.69.98l.38,2.65A.488.488,0,0,0,10,22h4a.488.488,0,0,0,.49-.42l.38-2.65a7.683,7.683,0,0,0,1.69-.98l2.49,1a.566.566,0,0,0,.18.03.5.5,0,0,0,.43-.25l2-3.46a.5.5,0,0,0-.12-.64Zm-1.98-1.71a5.343,5.343,0,0,1,.05.73c0,.21-.02.43-.05.73l-.14,1.13.89.7,1.08.84-.7,1.21-1.27-.51-1.04-.42-.9.68a5.857,5.857,0,0,1-1.25.73l-1.06.43-.16,1.13L12.7,20H11.3l-.19-1.35-.16-1.13-1.06-.43a5.674,5.674,0,0,1-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7L4.72,8.6l.7-1.21,1.27.51,1.04.42.9-.68a5.857,5.857,0,0,1,1.25-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35.16,1.13,1.06.43a5.674,5.674,0,0,1,1.23.71l.91.7,1.06-.43,1.27-.51.7,1.21-1.07.85-.89.7.14,1.13ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2.006,2.006,0,0,1,12,14Z"
                    fill="rgba(102,100,100,0.59)"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="main__cart__wrapper">
            {CartItem.length < 1 && (
              <div
                className="cart__empty__situatiom"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <img
                  src="https://careerindex.co.in/assets/images/emptycart.png"
                  alt=""
                  style={{ width: "150px" }}
                />
              </div>
            )}

            {CartItem?.map((Item) => (
              <div className="orderd__food__incart">
                <div className="left__order__food__in__cart">
                  <img src={Item.img} alt="" />
                  <h4>{Item.name}</h4>
                </div>
                <div className="right__order__food__in__cart">
                  <button onClick={() => handleIncreaseQuantity(Item)}>
                    {" "}
                    +{" "}
                  </button>
                  <h4>{Item?.quantity}</h4>
                  <button onClick={() => handleDecreaseQuantity(Item)}>
                    {" "}
                    -{" "}
                  </button>

                  <h4>{Item.price}$</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="totalAmound__Section">
          <div className="foodorder__amount">
            <div className="left__amount">
              <h4>Subtotal</h4>
            </div>
            <div className="right__amount">
              <h4>{subTotal}$</h4>
            </div>
          </div>

          <div className="foodorder__amount">
            <div className="left__amount">
              <h4>Discount</h4>
            </div>
            <div className="right__amount">
              <h4>45.5$</h4>
            </div>
          </div>

          <div className="foodorder__amount">
            <div className="left__amount">
              <h4>Sales Tax</h4>
            </div>
            <div className="right__amount">
              <h4>45.5$</h4>
            </div>
          </div>

          <div className="foodorder__amount totalSection">
            <div className="left__amount">
              <h4>Total</h4>
            </div>
            <div className="right__amount">
              <h4>33.75$</h4>
            </div>
          </div>
        </div>

        <div className="cashlessCredit">
          <div className="left__cashlessCredit">
            <h4>CASHLESS CREDIT</h4>
            <h4 style={{ fontSize: "20px", color: "#58577b" }}>28.56$</h4>
            <p>Avialable</p>
          </div>
          <div className="right__cashlessCredit">
            <button>Cancel</button>
          </div>
        </div>

        <div className="place__order__btn__section">
          <button>Place Order</button>

          <div className="balance__due__section">
            <h5>Balance Due</h5>
            <h5>5$</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodOrderPage;
