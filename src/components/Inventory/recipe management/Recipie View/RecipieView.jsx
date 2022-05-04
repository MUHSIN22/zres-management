import React, { useEffect, useState } from "react";
import "./recipieView.scss";
import Pagination from "@mui/material/Pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./imageslider/ImageSlider";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecipieView() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState("loding..")
  const location = useParams()
  useEffect(() => {
    setLoading("loading...")
    const menuId = location.id
    console.log(menuId,"id");
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}Recipe/GetPRecipeById?MenuId=${menuId}&CMPid=1`
      )
      .then(res=>{
        setData(res.data);
        if(!res.data[0]){
          setLoading("No data")
        }
      })
  },[])
  if(!data[0]){
    return (
      <h1>{loading}</h1>
    )
  }

  return (
    <div className="RecipieView">
      <div className="RecipieView__headder__Section">
        <h3>Recipe View</h3>
      </div>

      <div className="RecipieView__main__body__section">
        <div className="top__Section">
          <div className="image__section__wrapper">
            <div className="left__wrapper">
              <div className="recipe__name">
               { data[0] && <h2>{data[0].ItemName}</h2>}
              </div>
              { data[0] &&  <img
                src={`data:image/png;base64,${data[0].Image}`}
                alt={data[0].ItemName}
              />}

              <div className="background__div"></div>
            </div>
            <div className="right__wrapper">
              {/* <div className="pagination__section">
                <Pagination count={10} variant="outlined" shape="rounded" />
              </div> */}

              {/* <div className="RecipieView__image__slider">
                <ImageSlider />
              </div> */}

              <div className="image__section__container">
                <div className="background__div"></div>
                { data[0] &&  <img
                src={`data:image/png;base64,${data[0].Image}`}
                alt={data[0].ItemName}
              />}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom__section">
          <div className="section__wrapper__bottom">
            <div className="top__Section">
              <div className="section">
                <h2>Ingredients</h2>
                <p>
                  6 sheets sushi seaweed aka nori 1 batch prepared sushi rice
                  1/2 lb sushi-grade raw salmon or desired raw fish of choice 4
                  oz cream cheese sliced into strips 1 avocado sliced soy sauce
                  for serving
                </p>
              </div>
              <div className="section">
                <h2>Instructions</h2>
               {data[0]&& <p>
                  {data[0].Instructions}
                </p>}
              </div>
            </div>
            <div className="bottom__section">
              <div className="section">
                <h2>Nutrition</h2>
                {data[0] && <p>
                  {data[0].Nutritions}
                </p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipieView;
