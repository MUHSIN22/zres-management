import React, { useEffect, useState } from "react";
import "./recipieView.scss";
import Pagination from "@mui/material/Pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./imageslider/ImageSlider";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecipieView() {
  const [data, setData] = useState({})
  const location = useParams()
  useEffect(() => {
    const [groupId, menuId] = location.id.split('-')
    console.log(menuId, groupId);
    axios
      .get(
        `https://zres.clubsoft.co.in/WalkIn/GetAllMenuItemByMenuGroupID?MenuGroupID=${groupId}&CMPid=1`
      )
      .then((res) => {
        const filteredData = res.data.filter(data => {
          return data.MenuID === parseInt(menuId)
        })
        setData(filteredData[0])
        console.log(data);
      });
  }, [])

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
                <h2>{data.ItemName}</h2>
              </div>
              <img
                src={`data:image/png;base64,${data.Image}`}
                alt={data.ItemName}
              />

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
                <img
                  src={`data:image/png;base64,${data.Image}`}
                  alt={data.ItemName}
                />
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
                <p>
                  Place the seaweed on a bamboo mat, then cover the sheet of
                  seaweed with an even layer of prepared sushi rice. Smooth
                  gently with the rice paddle. Layer salmon, cream cheese, and
                  avocado on the rice, and roll it up tightly. Slice with a
                  sharp knife, and enjoy with soy sauce.
                </p>
              </div>
            </div>
            <div className="bottom__section">
              <div className="section">
                <h2>Nutrition</h2>
                <p>
                  calories: 190kcal, carbohydrates: 11g, protein: 10g, fat: 12g,
                  saturated fat: 5g, cholesterol: 40mg, sodium: 92mg, fiber: 2g,
                  sugar: 1g Nutrition is estimated using a food database and is
                  only intended to be used as a guideline for informational
                  purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipieView;
