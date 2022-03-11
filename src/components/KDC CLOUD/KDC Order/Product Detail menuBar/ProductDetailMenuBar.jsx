import React from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import "./productDetailMenubar.scss";
function ProductDetailMenuBar({ setDetailCliked }) {
  return (
    <div className="ProductDetailMenuBars">
      <div className="closeBtns" onClick={() => setDetailCliked(false)}>
        <CancelOutlinedIcon />
      </div>

      <div className="top__sectionss">
        <div className="headder__Sectioon">
          <h2>Item Summary</h2>
        </div>
        <div className="DateandTime">
          <p>03-01-2022</p>
          <p>10:55 AM</p>
        </div>
      </div>
      <div className="bottom__sections">
        <div className="different__section__areasss">
          <div className="different__Section__area__headder">
            <h4>Appetizer</h4>
          </div>
          <div className="details">
            <div className="details__wrapper">
              <p>Water Melon and Dry Fruit Punch</p>
              <p>2</p>
            </div>
            <div className="details__wrapper">
              <p>Coffee</p>
              <p>2</p>
            </div>
          </div>
        </div>

        <div className="different__section__areasss">
          <div className="different__Section__area__headder">
            <h4>Salads</h4>
          </div>
          <div className="details">
            <div className="details__wrapper">
              <p>Chicken Caesar Salad</p>
              <p>2</p>
            </div>
            <div className="details__wrapper">
              <p>Caser Salad</p>
              <p>2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailMenuBar;
