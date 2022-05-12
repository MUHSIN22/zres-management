import React, { useEffect, useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import "./productDetailMenubar.scss";
import { kdcServices } from "../../../../Services/kdcServices";
function ProductDetailMenuBar({ setDetailCliked }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    kdcServices.getItemSummary()
      .then(res => setData(res))
      .catch(err => console.log(err))
  }, [])
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
        {
          data.map((item, index) => (
            <div className="different__section__areasss" key={index}>
              <div className="different__Section__area__headder">
                <h4>{item.CategoryName}</h4>
              </div>
              <div className="details">
                {
                  item.Items.map((product, index) => (
                    <div className="details__wrapper">
                      <p>{product.ItemName}</p>
                      <p>{product.CountOfItems}</p>
                    </div>
                  ))
                }

              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ProductDetailMenuBar;
