import React, { useState } from "react";
import "./recipeDetails.scss";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import AddRecipie from "./addrecipie/AddRecipie";
function RecipeDetails() {
  const [addProducts, setAddProducts] = useState(false);
  const [recipeDataView, setRecipieDataView] = useState(true);
  return (
    <>
      {addProducts && (
        <div className="add__recipe__section">
          <AddRecipie
            setRecipieDataView={setRecipieDataView}
            setAddProducts={setAddProducts}
          />
        </div>
      )}
      {recipeDataView && (
        <div className="RecipeDetails">
          <div className="headder__headding__section">
            <h2>Recipe Details</h2>
          </div>
          <div className="mid">
            <div
              className="add__product__wrapper"
              style={{ cursor: "pointer" }}
              //   onClick={() => {
              //     setAddProducts(true);
              //     setMainPage(false);
              //   }}
              onClick={() => {
                setAddProducts(true);
                setRecipieDataView(false);
              }}
            >
              <AddIcon />
              <h4>Add Product</h4>
            </div>

            <div className="searchWrapper">
              <input
                type="text"
                placeholder="Search.."
                // onChange={(e) => setSearch(e.target.value)}
              />
              <SearchIcon />
            </div>
          </div>
          <div className="main__body__section">
            <div className="recipe__category__Section">
              <div className="hedding__Section">
                <h3>Recipe Categories</h3>
              </div>
              <div className="image__wrapper__section__section">
                <div className="image__holder__conrtainer">
                  <div className="black__overlayer"></div>
                  <div className="overlay__Section">
                    <h3>Mexicon food</h3>
                    <p>More than 30 recipes</p>
                  </div>

                  <img
                    src="https://i.ndtvimg.com/i/2016-09/taco-625_625x350_51474624224.jpg"
                    alt=""
                  />
                </div>

                <div className="image__holder__conrtainer">
                  <div className="black__overlayer"></div>
                  <div className="overlay__Section">
                    <h3>Pizza</h3>
                    <p>More than 30 recipes</p>
                  </div>

                  <img
                    src="https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"
                    alt=""
                  />
                </div>

                <div className="image__holder__conrtainer">
                  <div className="black__overlayer"></div>
                  <div className="overlay__Section">
                    <h3>Burger</h3>
                    <p>More than 30 recipes</p>
                  </div>

                  <img
                    src="https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg"
                    alt=""
                  />
                </div>

                <div className="image__holder__conrtainer">
                  <div className="black__overlayer"></div>
                  <div className="overlay__Section">
                    <h3>Steak</h3>
                    <p>More than 30 recipes</p>
                  </div>

                  <img
                    src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="mid__section__contaner">
              <div className="left__Side__section">
                <div className="headder__section">
                  <h3>Latest Recipe </h3>
                </div>
                <div className="latest__recipe__section">
                  <div className="recipe__wrapper">
                    <div className="image__and__details__section__wrapper">
                      <div className="image__container">
                        <img
                          src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F19%252F2014%252F07%252F10%252Fpepperoni-pizza-ck-x.jpg&q=85"
                          alt=""
                        />
                      </div>
                      <div className="detais__container">
                        <div className="top__details">
                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12.146"
                              height="16.195"
                              viewBox="0 0 12.146 16.195"
                            >
                              <g id="surface1" transform="translate(-3)">
                                <path
                                  id="Path_3068"
                                  data-name="Path 3068"
                                  d="M3,0V2.024h.7A8.835,8.835,0,0,0,6.733,8.182,8.958,8.958,0,0,0,3.7,14.171H3V16.2H15.146V14.171h-.7a8.958,8.958,0,0,0-3.037-5.989,8.667,8.667,0,0,0,3.037-6.158h.7V0ZM5.067,2.024H13.08a6.856,6.856,0,0,1-2.994,5.483l-.865.506.78.612a9.243,9.243,0,0,1,3.079,5.546h-.105c-.559-1.474-2.625-3.374-3.9-3.374s-3.342,1.9-3.9,3.374H5.067A9.243,9.243,0,0,1,8.145,8.625L8.9,8.013l-.844-.485A7.044,7.044,0,0,1,5.067,2.024ZM7.724,5.4c0,.606.743,2.024,1.35,2.024S10.423,6,10.423,5.4Z"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>20 minutes</p>
                          </div>

                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11.241"
                              height="18.689"
                              viewBox="0 0 11.241 18.689"
                            >
                              <g id="surface1" transform="translate(-9.922 0)">
                                <path
                                  id="Path_3069"
                                  data-name="Path 3069"
                                  d="M12.849,0c-.109,0-.212,0-.312,0V4.486a.373.373,0,1,1-.746,0V.056a2.87,2.87,0,0,0-1.347.393l-.125.094L10.3.7c-.015.125-.377,3.038-.377,4.907a2.875,2.875,0,0,0,1.4,2.511c.252.188.47.35.47.478,0,.308-.059,1.013-.128,1.829-.11,1.325-.247,2.972-.246,4.152,0,3.073.377,4.109,1.492,4.111h.007a1.1,1.1,0,0,0,1.117-.784,9.573,9.573,0,0,0,.372-3.326c0-1.179-.135-2.823-.244-4.145-.069-.82-.13-1.529-.13-1.837,0-.127.215-.283.462-.465A2.863,2.863,0,0,0,15.9,5.607c0-1.233-.361-4.749-.375-4.9L15.506.524l-.159-.1A3.534,3.534,0,0,0,14.033.07V4.486a.374.374,0,0,1-.748,0V.01C13.147,0,13,0,12.849,0Zm4.888,0a.379.379,0,0,0-.172.06A.373.373,0,0,0,17.4.374V4.486c0,.077,0,.484.01,1.021.01,1.052.026,2.607.026,3.147,0,.334-.077,1.435-.159,2.6-.119,1.675-.252,3.573-.252,4.445,0,2.065.106,2.972,1.122,2.973.852,0,1.869-.776,1.869-4.468a8.316,8.316,0,0,0-.508-2.751,3.48,3.48,0,0,1-.24-.988,4.655,4.655,0,0,1,.754-1.887A6.95,6.95,0,0,0,21.163,5.26,5.565,5.565,0,0,0,17.917.031.357.357,0,0,0,17.737,0Z"
                                  transform="translate(0 0)"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>10 Persons</p>
                          </div>
                        </div>
                        <div className="bottom_details">
                          <h3>Beef Steak</h3>
                        </div>
                      </div>
                    </div>

                    <div className="image__and__details__section__wrapper">
                      <div className="image__container">
                        <img
                          src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg"
                          alt=""
                        />
                      </div>
                      <div className="detais__container">
                        <div className="top__details">
                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12.146"
                              height="16.195"
                              viewBox="0 0 12.146 16.195"
                            >
                              <g id="surface1" transform="translate(-3)">
                                <path
                                  id="Path_3068"
                                  data-name="Path 3068"
                                  d="M3,0V2.024h.7A8.835,8.835,0,0,0,6.733,8.182,8.958,8.958,0,0,0,3.7,14.171H3V16.2H15.146V14.171h-.7a8.958,8.958,0,0,0-3.037-5.989,8.667,8.667,0,0,0,3.037-6.158h.7V0ZM5.067,2.024H13.08a6.856,6.856,0,0,1-2.994,5.483l-.865.506.78.612a9.243,9.243,0,0,1,3.079,5.546h-.105c-.559-1.474-2.625-3.374-3.9-3.374s-3.342,1.9-3.9,3.374H5.067A9.243,9.243,0,0,1,8.145,8.625L8.9,8.013l-.844-.485A7.044,7.044,0,0,1,5.067,2.024ZM7.724,5.4c0,.606.743,2.024,1.35,2.024S10.423,6,10.423,5.4Z"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>20 minutes</p>
                          </div>

                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11.241"
                              height="18.689"
                              viewBox="0 0 11.241 18.689"
                            >
                              <g id="surface1" transform="translate(-9.922 0)">
                                <path
                                  id="Path_3069"
                                  data-name="Path 3069"
                                  d="M12.849,0c-.109,0-.212,0-.312,0V4.486a.373.373,0,1,1-.746,0V.056a2.87,2.87,0,0,0-1.347.393l-.125.094L10.3.7c-.015.125-.377,3.038-.377,4.907a2.875,2.875,0,0,0,1.4,2.511c.252.188.47.35.47.478,0,.308-.059,1.013-.128,1.829-.11,1.325-.247,2.972-.246,4.152,0,3.073.377,4.109,1.492,4.111h.007a1.1,1.1,0,0,0,1.117-.784,9.573,9.573,0,0,0,.372-3.326c0-1.179-.135-2.823-.244-4.145-.069-.82-.13-1.529-.13-1.837,0-.127.215-.283.462-.465A2.863,2.863,0,0,0,15.9,5.607c0-1.233-.361-4.749-.375-4.9L15.506.524l-.159-.1A3.534,3.534,0,0,0,14.033.07V4.486a.374.374,0,0,1-.748,0V.01C13.147,0,13,0,12.849,0Zm4.888,0a.379.379,0,0,0-.172.06A.373.373,0,0,0,17.4.374V4.486c0,.077,0,.484.01,1.021.01,1.052.026,2.607.026,3.147,0,.334-.077,1.435-.159,2.6-.119,1.675-.252,3.573-.252,4.445,0,2.065.106,2.972,1.122,2.973.852,0,1.869-.776,1.869-4.468a8.316,8.316,0,0,0-.508-2.751,3.48,3.48,0,0,1-.24-.988,4.655,4.655,0,0,1,.754-1.887A6.95,6.95,0,0,0,21.163,5.26,5.565,5.565,0,0,0,17.917.031.357.357,0,0,0,17.737,0Z"
                                  transform="translate(0 0)"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>10 Persons</p>
                          </div>
                        </div>
                        <div className="bottom_details">
                          <h3>Beef Steak</h3>
                        </div>
                      </div>
                    </div>

                    <div className="image__and__details__section__wrapper">
                      <div className="image__container">
                        <img
                          src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/03/14/964088-fast-food.jpg"
                          alt=""
                        />
                      </div>
                      <div className="detais__container">
                        <div className="top__details">
                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12.146"
                              height="16.195"
                              viewBox="0 0 12.146 16.195"
                            >
                              <g id="surface1" transform="translate(-3)">
                                <path
                                  id="Path_3068"
                                  data-name="Path 3068"
                                  d="M3,0V2.024h.7A8.835,8.835,0,0,0,6.733,8.182,8.958,8.958,0,0,0,3.7,14.171H3V16.2H15.146V14.171h-.7a8.958,8.958,0,0,0-3.037-5.989,8.667,8.667,0,0,0,3.037-6.158h.7V0ZM5.067,2.024H13.08a6.856,6.856,0,0,1-2.994,5.483l-.865.506.78.612a9.243,9.243,0,0,1,3.079,5.546h-.105c-.559-1.474-2.625-3.374-3.9-3.374s-3.342,1.9-3.9,3.374H5.067A9.243,9.243,0,0,1,8.145,8.625L8.9,8.013l-.844-.485A7.044,7.044,0,0,1,5.067,2.024ZM7.724,5.4c0,.606.743,2.024,1.35,2.024S10.423,6,10.423,5.4Z"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>20 minutes</p>
                          </div>

                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11.241"
                              height="18.689"
                              viewBox="0 0 11.241 18.689"
                            >
                              <g id="surface1" transform="translate(-9.922 0)">
                                <path
                                  id="Path_3069"
                                  data-name="Path 3069"
                                  d="M12.849,0c-.109,0-.212,0-.312,0V4.486a.373.373,0,1,1-.746,0V.056a2.87,2.87,0,0,0-1.347.393l-.125.094L10.3.7c-.015.125-.377,3.038-.377,4.907a2.875,2.875,0,0,0,1.4,2.511c.252.188.47.35.47.478,0,.308-.059,1.013-.128,1.829-.11,1.325-.247,2.972-.246,4.152,0,3.073.377,4.109,1.492,4.111h.007a1.1,1.1,0,0,0,1.117-.784,9.573,9.573,0,0,0,.372-3.326c0-1.179-.135-2.823-.244-4.145-.069-.82-.13-1.529-.13-1.837,0-.127.215-.283.462-.465A2.863,2.863,0,0,0,15.9,5.607c0-1.233-.361-4.749-.375-4.9L15.506.524l-.159-.1A3.534,3.534,0,0,0,14.033.07V4.486a.374.374,0,0,1-.748,0V.01C13.147,0,13,0,12.849,0Zm4.888,0a.379.379,0,0,0-.172.06A.373.373,0,0,0,17.4.374V4.486c0,.077,0,.484.01,1.021.01,1.052.026,2.607.026,3.147,0,.334-.077,1.435-.159,2.6-.119,1.675-.252,3.573-.252,4.445,0,2.065.106,2.972,1.122,2.973.852,0,1.869-.776,1.869-4.468a8.316,8.316,0,0,0-.508-2.751,3.48,3.48,0,0,1-.24-.988,4.655,4.655,0,0,1,.754-1.887A6.95,6.95,0,0,0,21.163,5.26,5.565,5.565,0,0,0,17.917.031.357.357,0,0,0,17.737,0Z"
                                  transform="translate(0 0)"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>10 Persons</p>
                          </div>
                        </div>
                        <div className="bottom_details">
                          <h3>Beef Steak</h3>
                        </div>
                      </div>
                    </div>

                    <div className="image__and__details__section__wrapper">
                      <div className="image__container">
                        <img
                          src="https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg"
                          alt=""
                        />
                      </div>
                      <div className="detais__container">
                        <div className="top__details">
                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12.146"
                              height="16.195"
                              viewBox="0 0 12.146 16.195"
                            >
                              <g id="surface1" transform="translate(-3)">
                                <path
                                  id="Path_3068"
                                  data-name="Path 3068"
                                  d="M3,0V2.024h.7A8.835,8.835,0,0,0,6.733,8.182,8.958,8.958,0,0,0,3.7,14.171H3V16.2H15.146V14.171h-.7a8.958,8.958,0,0,0-3.037-5.989,8.667,8.667,0,0,0,3.037-6.158h.7V0ZM5.067,2.024H13.08a6.856,6.856,0,0,1-2.994,5.483l-.865.506.78.612a9.243,9.243,0,0,1,3.079,5.546h-.105c-.559-1.474-2.625-3.374-3.9-3.374s-3.342,1.9-3.9,3.374H5.067A9.243,9.243,0,0,1,8.145,8.625L8.9,8.013l-.844-.485A7.044,7.044,0,0,1,5.067,2.024ZM7.724,5.4c0,.606.743,2.024,1.35,2.024S10.423,6,10.423,5.4Z"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>20 minutes</p>
                          </div>

                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11.241"
                              height="18.689"
                              viewBox="0 0 11.241 18.689"
                            >
                              <g id="surface1" transform="translate(-9.922 0)">
                                <path
                                  id="Path_3069"
                                  data-name="Path 3069"
                                  d="M12.849,0c-.109,0-.212,0-.312,0V4.486a.373.373,0,1,1-.746,0V.056a2.87,2.87,0,0,0-1.347.393l-.125.094L10.3.7c-.015.125-.377,3.038-.377,4.907a2.875,2.875,0,0,0,1.4,2.511c.252.188.47.35.47.478,0,.308-.059,1.013-.128,1.829-.11,1.325-.247,2.972-.246,4.152,0,3.073.377,4.109,1.492,4.111h.007a1.1,1.1,0,0,0,1.117-.784,9.573,9.573,0,0,0,.372-3.326c0-1.179-.135-2.823-.244-4.145-.069-.82-.13-1.529-.13-1.837,0-.127.215-.283.462-.465A2.863,2.863,0,0,0,15.9,5.607c0-1.233-.361-4.749-.375-4.9L15.506.524l-.159-.1A3.534,3.534,0,0,0,14.033.07V4.486a.374.374,0,0,1-.748,0V.01C13.147,0,13,0,12.849,0Zm4.888,0a.379.379,0,0,0-.172.06A.373.373,0,0,0,17.4.374V4.486c0,.077,0,.484.01,1.021.01,1.052.026,2.607.026,3.147,0,.334-.077,1.435-.159,2.6-.119,1.675-.252,3.573-.252,4.445,0,2.065.106,2.972,1.122,2.973.852,0,1.869-.776,1.869-4.468a8.316,8.316,0,0,0-.508-2.751,3.48,3.48,0,0,1-.24-.988,4.655,4.655,0,0,1,.754-1.887A6.95,6.95,0,0,0,21.163,5.26,5.565,5.565,0,0,0,17.917.031.357.357,0,0,0,17.737,0Z"
                                  transform="translate(0 0)"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>10 Persons</p>
                          </div>
                        </div>
                        <div className="bottom_details">
                          <h3>Beef Steak</h3>
                        </div>
                      </div>
                    </div>

                    <div className="image__and__details__section__wrapper">
                      <div className="image__container">
                        <img
                          src="https://img.onmanorama.com/content/dam/mm/en/food/recipe/images/2021/2/14/alfaham.jpg"
                          alt=""
                        />
                      </div>
                      <div className="detais__container">
                        <div className="top__details">
                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12.146"
                              height="16.195"
                              viewBox="0 0 12.146 16.195"
                            >
                              <g id="surface1" transform="translate(-3)">
                                <path
                                  id="Path_3068"
                                  data-name="Path 3068"
                                  d="M3,0V2.024h.7A8.835,8.835,0,0,0,6.733,8.182,8.958,8.958,0,0,0,3.7,14.171H3V16.2H15.146V14.171h-.7a8.958,8.958,0,0,0-3.037-5.989,8.667,8.667,0,0,0,3.037-6.158h.7V0ZM5.067,2.024H13.08a6.856,6.856,0,0,1-2.994,5.483l-.865.506.78.612a9.243,9.243,0,0,1,3.079,5.546h-.105c-.559-1.474-2.625-3.374-3.9-3.374s-3.342,1.9-3.9,3.374H5.067A9.243,9.243,0,0,1,8.145,8.625L8.9,8.013l-.844-.485A7.044,7.044,0,0,1,5.067,2.024ZM7.724,5.4c0,.606.743,2.024,1.35,2.024S10.423,6,10.423,5.4Z"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>20 minutes</p>
                          </div>

                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11.241"
                              height="18.689"
                              viewBox="0 0 11.241 18.689"
                            >
                              <g id="surface1" transform="translate(-9.922 0)">
                                <path
                                  id="Path_3069"
                                  data-name="Path 3069"
                                  d="M12.849,0c-.109,0-.212,0-.312,0V4.486a.373.373,0,1,1-.746,0V.056a2.87,2.87,0,0,0-1.347.393l-.125.094L10.3.7c-.015.125-.377,3.038-.377,4.907a2.875,2.875,0,0,0,1.4,2.511c.252.188.47.35.47.478,0,.308-.059,1.013-.128,1.829-.11,1.325-.247,2.972-.246,4.152,0,3.073.377,4.109,1.492,4.111h.007a1.1,1.1,0,0,0,1.117-.784,9.573,9.573,0,0,0,.372-3.326c0-1.179-.135-2.823-.244-4.145-.069-.82-.13-1.529-.13-1.837,0-.127.215-.283.462-.465A2.863,2.863,0,0,0,15.9,5.607c0-1.233-.361-4.749-.375-4.9L15.506.524l-.159-.1A3.534,3.534,0,0,0,14.033.07V4.486a.374.374,0,0,1-.748,0V.01C13.147,0,13,0,12.849,0Zm4.888,0a.379.379,0,0,0-.172.06A.373.373,0,0,0,17.4.374V4.486c0,.077,0,.484.01,1.021.01,1.052.026,2.607.026,3.147,0,.334-.077,1.435-.159,2.6-.119,1.675-.252,3.573-.252,4.445,0,2.065.106,2.972,1.122,2.973.852,0,1.869-.776,1.869-4.468a8.316,8.316,0,0,0-.508-2.751,3.48,3.48,0,0,1-.24-.988,4.655,4.655,0,0,1,.754-1.887A6.95,6.95,0,0,0,21.163,5.26,5.565,5.565,0,0,0,17.917.031.357.357,0,0,0,17.737,0Z"
                                  transform="translate(0 0)"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>10 Persons</p>
                          </div>
                        </div>
                        <div className="bottom_details">
                          <h3>Beef Steak</h3>
                        </div>
                      </div>
                    </div>

                    <div className="image__and__details__section__wrapper">
                      <div className="image__container">
                        <img
                          src="https://images.indianexpress.com/2020/08/onam-sadhya_1200.jpg"
                          alt=""
                        />
                      </div>
                      <div className="detais__container">
                        <div className="top__details">
                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12.146"
                              height="16.195"
                              viewBox="0 0 12.146 16.195"
                            >
                              <g id="surface1" transform="translate(-3)">
                                <path
                                  id="Path_3068"
                                  data-name="Path 3068"
                                  d="M3,0V2.024h.7A8.835,8.835,0,0,0,6.733,8.182,8.958,8.958,0,0,0,3.7,14.171H3V16.2H15.146V14.171h-.7a8.958,8.958,0,0,0-3.037-5.989,8.667,8.667,0,0,0,3.037-6.158h.7V0ZM5.067,2.024H13.08a6.856,6.856,0,0,1-2.994,5.483l-.865.506.78.612a9.243,9.243,0,0,1,3.079,5.546h-.105c-.559-1.474-2.625-3.374-3.9-3.374s-3.342,1.9-3.9,3.374H5.067A9.243,9.243,0,0,1,8.145,8.625L8.9,8.013l-.844-.485A7.044,7.044,0,0,1,5.067,2.024ZM7.724,5.4c0,.606.743,2.024,1.35,2.024S10.423,6,10.423,5.4Z"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>20 minutes</p>
                          </div>

                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11.241"
                              height="18.689"
                              viewBox="0 0 11.241 18.689"
                            >
                              <g id="surface1" transform="translate(-9.922 0)">
                                <path
                                  id="Path_3069"
                                  data-name="Path 3069"
                                  d="M12.849,0c-.109,0-.212,0-.312,0V4.486a.373.373,0,1,1-.746,0V.056a2.87,2.87,0,0,0-1.347.393l-.125.094L10.3.7c-.015.125-.377,3.038-.377,4.907a2.875,2.875,0,0,0,1.4,2.511c.252.188.47.35.47.478,0,.308-.059,1.013-.128,1.829-.11,1.325-.247,2.972-.246,4.152,0,3.073.377,4.109,1.492,4.111h.007a1.1,1.1,0,0,0,1.117-.784,9.573,9.573,0,0,0,.372-3.326c0-1.179-.135-2.823-.244-4.145-.069-.82-.13-1.529-.13-1.837,0-.127.215-.283.462-.465A2.863,2.863,0,0,0,15.9,5.607c0-1.233-.361-4.749-.375-4.9L15.506.524l-.159-.1A3.534,3.534,0,0,0,14.033.07V4.486a.374.374,0,0,1-.748,0V.01C13.147,0,13,0,12.849,0Zm4.888,0a.379.379,0,0,0-.172.06A.373.373,0,0,0,17.4.374V4.486c0,.077,0,.484.01,1.021.01,1.052.026,2.607.026,3.147,0,.334-.077,1.435-.159,2.6-.119,1.675-.252,3.573-.252,4.445,0,2.065.106,2.972,1.122,2.973.852,0,1.869-.776,1.869-4.468a8.316,8.316,0,0,0-.508-2.751,3.48,3.48,0,0,1-.24-.988,4.655,4.655,0,0,1,.754-1.887A6.95,6.95,0,0,0,21.163,5.26,5.565,5.565,0,0,0,17.917.031.357.357,0,0,0,17.737,0Z"
                                  transform="translate(0 0)"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>10 Persons</p>
                          </div>
                        </div>
                        <div className="bottom_details">
                          <h3>Beef Steak</h3>
                        </div>
                      </div>
                    </div>

                    <div className="image__and__details__section__wrapper">
                      <div className="image__container">
                        <img
                          src="https://static.toiimg.com/thumb/61203720.cms?width=1200&height=900"
                          alt=""
                        />
                      </div>
                      <div className="detais__container">
                        <div className="top__details">
                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12.146"
                              height="16.195"
                              viewBox="0 0 12.146 16.195"
                            >
                              <g id="surface1" transform="translate(-3)">
                                <path
                                  id="Path_3068"
                                  data-name="Path 3068"
                                  d="M3,0V2.024h.7A8.835,8.835,0,0,0,6.733,8.182,8.958,8.958,0,0,0,3.7,14.171H3V16.2H15.146V14.171h-.7a8.958,8.958,0,0,0-3.037-5.989,8.667,8.667,0,0,0,3.037-6.158h.7V0ZM5.067,2.024H13.08a6.856,6.856,0,0,1-2.994,5.483l-.865.506.78.612a9.243,9.243,0,0,1,3.079,5.546h-.105c-.559-1.474-2.625-3.374-3.9-3.374s-3.342,1.9-3.9,3.374H5.067A9.243,9.243,0,0,1,8.145,8.625L8.9,8.013l-.844-.485A7.044,7.044,0,0,1,5.067,2.024ZM7.724,5.4c0,.606.743,2.024,1.35,2.024S10.423,6,10.423,5.4Z"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>20 minutes</p>
                          </div>

                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11.241"
                              height="18.689"
                              viewBox="0 0 11.241 18.689"
                            >
                              <g id="surface1" transform="translate(-9.922 0)">
                                <path
                                  id="Path_3069"
                                  data-name="Path 3069"
                                  d="M12.849,0c-.109,0-.212,0-.312,0V4.486a.373.373,0,1,1-.746,0V.056a2.87,2.87,0,0,0-1.347.393l-.125.094L10.3.7c-.015.125-.377,3.038-.377,4.907a2.875,2.875,0,0,0,1.4,2.511c.252.188.47.35.47.478,0,.308-.059,1.013-.128,1.829-.11,1.325-.247,2.972-.246,4.152,0,3.073.377,4.109,1.492,4.111h.007a1.1,1.1,0,0,0,1.117-.784,9.573,9.573,0,0,0,.372-3.326c0-1.179-.135-2.823-.244-4.145-.069-.82-.13-1.529-.13-1.837,0-.127.215-.283.462-.465A2.863,2.863,0,0,0,15.9,5.607c0-1.233-.361-4.749-.375-4.9L15.506.524l-.159-.1A3.534,3.534,0,0,0,14.033.07V4.486a.374.374,0,0,1-.748,0V.01C13.147,0,13,0,12.849,0Zm4.888,0a.379.379,0,0,0-.172.06A.373.373,0,0,0,17.4.374V4.486c0,.077,0,.484.01,1.021.01,1.052.026,2.607.026,3.147,0,.334-.077,1.435-.159,2.6-.119,1.675-.252,3.573-.252,4.445,0,2.065.106,2.972,1.122,2.973.852,0,1.869-.776,1.869-4.468a8.316,8.316,0,0,0-.508-2.751,3.48,3.48,0,0,1-.24-.988,4.655,4.655,0,0,1,.754-1.887A6.95,6.95,0,0,0,21.163,5.26,5.565,5.565,0,0,0,17.917.031.357.357,0,0,0,17.737,0Z"
                                  transform="translate(0 0)"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>10 Persons</p>
                          </div>
                        </div>
                        <div className="bottom_details">
                          <h3>Beef Steak</h3>
                        </div>
                      </div>
                    </div>

                    <div className="image__and__details__section__wrapper">
                      <div className="image__container">
                        <img src="https://i.redd.it/u9hfn7nn5c751.jpg" alt="" />
                      </div>
                      <div className="detais__container">
                        <div className="top__details">
                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12.146"
                              height="16.195"
                              viewBox="0 0 12.146 16.195"
                            >
                              <g id="surface1" transform="translate(-3)">
                                <path
                                  id="Path_3068"
                                  data-name="Path 3068"
                                  d="M3,0V2.024h.7A8.835,8.835,0,0,0,6.733,8.182,8.958,8.958,0,0,0,3.7,14.171H3V16.2H15.146V14.171h-.7a8.958,8.958,0,0,0-3.037-5.989,8.667,8.667,0,0,0,3.037-6.158h.7V0ZM5.067,2.024H13.08a6.856,6.856,0,0,1-2.994,5.483l-.865.506.78.612a9.243,9.243,0,0,1,3.079,5.546h-.105c-.559-1.474-2.625-3.374-3.9-3.374s-3.342,1.9-3.9,3.374H5.067A9.243,9.243,0,0,1,8.145,8.625L8.9,8.013l-.844-.485A7.044,7.044,0,0,1,5.067,2.024ZM7.724,5.4c0,.606.743,2.024,1.35,2.024S10.423,6,10.423,5.4Z"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>20 minutes</p>
                          </div>

                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11.241"
                              height="18.689"
                              viewBox="0 0 11.241 18.689"
                            >
                              <g id="surface1" transform="translate(-9.922 0)">
                                <path
                                  id="Path_3069"
                                  data-name="Path 3069"
                                  d="M12.849,0c-.109,0-.212,0-.312,0V4.486a.373.373,0,1,1-.746,0V.056a2.87,2.87,0,0,0-1.347.393l-.125.094L10.3.7c-.015.125-.377,3.038-.377,4.907a2.875,2.875,0,0,0,1.4,2.511c.252.188.47.35.47.478,0,.308-.059,1.013-.128,1.829-.11,1.325-.247,2.972-.246,4.152,0,3.073.377,4.109,1.492,4.111h.007a1.1,1.1,0,0,0,1.117-.784,9.573,9.573,0,0,0,.372-3.326c0-1.179-.135-2.823-.244-4.145-.069-.82-.13-1.529-.13-1.837,0-.127.215-.283.462-.465A2.863,2.863,0,0,0,15.9,5.607c0-1.233-.361-4.749-.375-4.9L15.506.524l-.159-.1A3.534,3.534,0,0,0,14.033.07V4.486a.374.374,0,0,1-.748,0V.01C13.147,0,13,0,12.849,0Zm4.888,0a.379.379,0,0,0-.172.06A.373.373,0,0,0,17.4.374V4.486c0,.077,0,.484.01,1.021.01,1.052.026,2.607.026,3.147,0,.334-.077,1.435-.159,2.6-.119,1.675-.252,3.573-.252,4.445,0,2.065.106,2.972,1.122,2.973.852,0,1.869-.776,1.869-4.468a8.316,8.316,0,0,0-.508-2.751,3.48,3.48,0,0,1-.24-.988,4.655,4.655,0,0,1,.754-1.887A6.95,6.95,0,0,0,21.163,5.26,5.565,5.565,0,0,0,17.917.031.357.357,0,0,0,17.737,0Z"
                                  transform="translate(0 0)"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>10 Persons</p>
                          </div>
                        </div>
                        <div className="bottom_details">
                          <h3>Beef Steak</h3>
                        </div>
                      </div>
                    </div>

                    <div className="image__and__details__section__wrapper">
                      <div className="image__container">
                        <img
                          src="https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1-500x375.jpg"
                          alt=""
                        />
                      </div>
                      <div className="detais__container">
                        <div className="top__details">
                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12.146"
                              height="16.195"
                              viewBox="0 0 12.146 16.195"
                            >
                              <g id="surface1" transform="translate(-3)">
                                <path
                                  id="Path_3068"
                                  data-name="Path 3068"
                                  d="M3,0V2.024h.7A8.835,8.835,0,0,0,6.733,8.182,8.958,8.958,0,0,0,3.7,14.171H3V16.2H15.146V14.171h-.7a8.958,8.958,0,0,0-3.037-5.989,8.667,8.667,0,0,0,3.037-6.158h.7V0ZM5.067,2.024H13.08a6.856,6.856,0,0,1-2.994,5.483l-.865.506.78.612a9.243,9.243,0,0,1,3.079,5.546h-.105c-.559-1.474-2.625-3.374-3.9-3.374s-3.342,1.9-3.9,3.374H5.067A9.243,9.243,0,0,1,8.145,8.625L8.9,8.013l-.844-.485A7.044,7.044,0,0,1,5.067,2.024ZM7.724,5.4c0,.606.743,2.024,1.35,2.024S10.423,6,10.423,5.4Z"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>20 minutes</p>
                          </div>

                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11.241"
                              height="18.689"
                              viewBox="0 0 11.241 18.689"
                            >
                              <g id="surface1" transform="translate(-9.922 0)">
                                <path
                                  id="Path_3069"
                                  data-name="Path 3069"
                                  d="M12.849,0c-.109,0-.212,0-.312,0V4.486a.373.373,0,1,1-.746,0V.056a2.87,2.87,0,0,0-1.347.393l-.125.094L10.3.7c-.015.125-.377,3.038-.377,4.907a2.875,2.875,0,0,0,1.4,2.511c.252.188.47.35.47.478,0,.308-.059,1.013-.128,1.829-.11,1.325-.247,2.972-.246,4.152,0,3.073.377,4.109,1.492,4.111h.007a1.1,1.1,0,0,0,1.117-.784,9.573,9.573,0,0,0,.372-3.326c0-1.179-.135-2.823-.244-4.145-.069-.82-.13-1.529-.13-1.837,0-.127.215-.283.462-.465A2.863,2.863,0,0,0,15.9,5.607c0-1.233-.361-4.749-.375-4.9L15.506.524l-.159-.1A3.534,3.534,0,0,0,14.033.07V4.486a.374.374,0,0,1-.748,0V.01C13.147,0,13,0,12.849,0Zm4.888,0a.379.379,0,0,0-.172.06A.373.373,0,0,0,17.4.374V4.486c0,.077,0,.484.01,1.021.01,1.052.026,2.607.026,3.147,0,.334-.077,1.435-.159,2.6-.119,1.675-.252,3.573-.252,4.445,0,2.065.106,2.972,1.122,2.973.852,0,1.869-.776,1.869-4.468a8.316,8.316,0,0,0-.508-2.751,3.48,3.48,0,0,1-.24-.988,4.655,4.655,0,0,1,.754-1.887A6.95,6.95,0,0,0,21.163,5.26,5.565,5.565,0,0,0,17.917.031.357.357,0,0,0,17.737,0Z"
                                  transform="translate(0 0)"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>10 Persons</p>
                          </div>
                        </div>
                        <div className="bottom_details">
                          <h3>Beef Steak</h3>
                        </div>
                      </div>
                    </div>

                    <div className="image__and__details__section__wrapper">
                      <div className="image__container">
                        <img
                          src="https://static.toiimg.com/thumb/61048461.cms?imgsize=1981854&width=800&height=800"
                          alt=""
                        />
                      </div>
                      <div className="detais__container">
                        <div className="top__details">
                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12.146"
                              height="16.195"
                              viewBox="0 0 12.146 16.195"
                            >
                              <g id="surface1" transform="translate(-3)">
                                <path
                                  id="Path_3068"
                                  data-name="Path 3068"
                                  d="M3,0V2.024h.7A8.835,8.835,0,0,0,6.733,8.182,8.958,8.958,0,0,0,3.7,14.171H3V16.2H15.146V14.171h-.7a8.958,8.958,0,0,0-3.037-5.989,8.667,8.667,0,0,0,3.037-6.158h.7V0ZM5.067,2.024H13.08a6.856,6.856,0,0,1-2.994,5.483l-.865.506.78.612a9.243,9.243,0,0,1,3.079,5.546h-.105c-.559-1.474-2.625-3.374-3.9-3.374s-3.342,1.9-3.9,3.374H5.067A9.243,9.243,0,0,1,8.145,8.625L8.9,8.013l-.844-.485A7.044,7.044,0,0,1,5.067,2.024ZM7.724,5.4c0,.606.743,2.024,1.35,2.024S10.423,6,10.423,5.4Z"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>20 minutes</p>
                          </div>

                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11.241"
                              height="18.689"
                              viewBox="0 0 11.241 18.689"
                            >
                              <g id="surface1" transform="translate(-9.922 0)">
                                <path
                                  id="Path_3069"
                                  data-name="Path 3069"
                                  d="M12.849,0c-.109,0-.212,0-.312,0V4.486a.373.373,0,1,1-.746,0V.056a2.87,2.87,0,0,0-1.347.393l-.125.094L10.3.7c-.015.125-.377,3.038-.377,4.907a2.875,2.875,0,0,0,1.4,2.511c.252.188.47.35.47.478,0,.308-.059,1.013-.128,1.829-.11,1.325-.247,2.972-.246,4.152,0,3.073.377,4.109,1.492,4.111h.007a1.1,1.1,0,0,0,1.117-.784,9.573,9.573,0,0,0,.372-3.326c0-1.179-.135-2.823-.244-4.145-.069-.82-.13-1.529-.13-1.837,0-.127.215-.283.462-.465A2.863,2.863,0,0,0,15.9,5.607c0-1.233-.361-4.749-.375-4.9L15.506.524l-.159-.1A3.534,3.534,0,0,0,14.033.07V4.486a.374.374,0,0,1-.748,0V.01C13.147,0,13,0,12.849,0Zm4.888,0a.379.379,0,0,0-.172.06A.373.373,0,0,0,17.4.374V4.486c0,.077,0,.484.01,1.021.01,1.052.026,2.607.026,3.147,0,.334-.077,1.435-.159,2.6-.119,1.675-.252,3.573-.252,4.445,0,2.065.106,2.972,1.122,2.973.852,0,1.869-.776,1.869-4.468a8.316,8.316,0,0,0-.508-2.751,3.48,3.48,0,0,1-.24-.988,4.655,4.655,0,0,1,.754-1.887A6.95,6.95,0,0,0,21.163,5.26,5.565,5.565,0,0,0,17.917.031.357.357,0,0,0,17.737,0Z"
                                  transform="translate(0 0)"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>10 Persons</p>
                          </div>
                        </div>
                        <div className="bottom_details">
                          <h3>Beef Steak</h3>
                        </div>
                      </div>
                    </div>

                    <div className="image__and__details__section__wrapper">
                      <div className="image__container">
                        <img
                          src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F19%252F2014%252F07%252F10%252Fpepperoni-pizza-ck-x.jpg&q=85"
                          alt=""
                        />
                      </div>
                      <div className="detais__container">
                        <div className="top__details">
                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12.146"
                              height="16.195"
                              viewBox="0 0 12.146 16.195"
                            >
                              <g id="surface1" transform="translate(-3)">
                                <path
                                  id="Path_3068"
                                  data-name="Path 3068"
                                  d="M3,0V2.024h.7A8.835,8.835,0,0,0,6.733,8.182,8.958,8.958,0,0,0,3.7,14.171H3V16.2H15.146V14.171h-.7a8.958,8.958,0,0,0-3.037-5.989,8.667,8.667,0,0,0,3.037-6.158h.7V0ZM5.067,2.024H13.08a6.856,6.856,0,0,1-2.994,5.483l-.865.506.78.612a9.243,9.243,0,0,1,3.079,5.546h-.105c-.559-1.474-2.625-3.374-3.9-3.374s-3.342,1.9-3.9,3.374H5.067A9.243,9.243,0,0,1,8.145,8.625L8.9,8.013l-.844-.485A7.044,7.044,0,0,1,5.067,2.024ZM7.724,5.4c0,.606.743,2.024,1.35,2.024S10.423,6,10.423,5.4Z"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>20 minutes</p>
                          </div>

                          <div className="sections">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11.241"
                              height="18.689"
                              viewBox="0 0 11.241 18.689"
                            >
                              <g id="surface1" transform="translate(-9.922 0)">
                                <path
                                  id="Path_3069"
                                  data-name="Path 3069"
                                  d="M12.849,0c-.109,0-.212,0-.312,0V4.486a.373.373,0,1,1-.746,0V.056a2.87,2.87,0,0,0-1.347.393l-.125.094L10.3.7c-.015.125-.377,3.038-.377,4.907a2.875,2.875,0,0,0,1.4,2.511c.252.188.47.35.47.478,0,.308-.059,1.013-.128,1.829-.11,1.325-.247,2.972-.246,4.152,0,3.073.377,4.109,1.492,4.111h.007a1.1,1.1,0,0,0,1.117-.784,9.573,9.573,0,0,0,.372-3.326c0-1.179-.135-2.823-.244-4.145-.069-.82-.13-1.529-.13-1.837,0-.127.215-.283.462-.465A2.863,2.863,0,0,0,15.9,5.607c0-1.233-.361-4.749-.375-4.9L15.506.524l-.159-.1A3.534,3.534,0,0,0,14.033.07V4.486a.374.374,0,0,1-.748,0V.01C13.147,0,13,0,12.849,0Zm4.888,0a.379.379,0,0,0-.172.06A.373.373,0,0,0,17.4.374V4.486c0,.077,0,.484.01,1.021.01,1.052.026,2.607.026,3.147,0,.334-.077,1.435-.159,2.6-.119,1.675-.252,3.573-.252,4.445,0,2.065.106,2.972,1.122,2.973.852,0,1.869-.776,1.869-4.468a8.316,8.316,0,0,0-.508-2.751,3.48,3.48,0,0,1-.24-.988,4.655,4.655,0,0,1,.754-1.887A6.95,6.95,0,0,0,21.163,5.26,5.565,5.565,0,0,0,17.917.031.357.357,0,0,0,17.737,0Z"
                                  transform="translate(0 0)"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>10 Persons</p>
                          </div>
                        </div>
                        <div className="bottom_details">
                          <h3>Beef Steak</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right__side__section">
                <div className="top__Section">
                  <div className="search__box">
                    <input
                      type="text"
                      placeholder="Press and type enter....."
                    />
                  </div>

                  <div className="lattest__post__section">
                    <div className="headdimg__Section">
                      <h3>Latest posts </h3>
                    </div>

                    <div className="post__wrapper">
                      <div className="posts">
                        <div className="left">
                          <img
                            src="https://i.ytimg.com/vi/3dWf6BNZPfo/maxresdefault.jpg"
                            alt=""
                          />
                        </div>
                        <div className="right">
                          <h3>Vermicelli pasta</h3>
                          <p>
                            Ribbon of pasta approximately 6.5 millimeters wide.
                            Larger and thicker than tagliatelle.
                          </p>

                          <div className="food__and__coments__wrapper">
                            <div className="section">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.842"
                                height="12.545"
                                viewBox="0 0 14.842 12.545"
                              >
                                <g
                                  id="surface1"
                                  transform="translate(-1.951 -2.961)"
                                >
                                  <path
                                    id="Path_3070"
                                    data-name="Path 3070"
                                    d="M9.376,2.961A1.718,1.718,0,0,0,7.667,4.672a1.645,1.645,0,0,0,.183.747,6.839,6.839,0,0,0-5.315,6.665v1.14H16.219v-1.14A6.842,6.842,0,0,0,10.9,5.419a1.646,1.646,0,0,0,.183-.747A1.718,1.718,0,0,0,9.376,2.961Zm0,1.14a.57.57,0,1,1-.569.571A.563.563,0,0,1,9.376,4.1Zm0,2.708.713.713h1v1l.713.713-.713.713v1h-1l-.713.713-.711-.713h-1v-1l-.713-.713.713-.713v-1h1ZM2.53,14.366a.57.57,0,1,0,0,1.14H16.214a.573.573,0,0,0,.5-.284.569.569,0,0,0-.5-.855Z"
                                    fill="#009751"
                                  />
                                </g>
                              </svg>

                              <p>food</p>
                            </div>

                            <div className="section">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.433"
                                height="13.806"
                                viewBox="0 0 14.433 13.806"
                              >
                                <g
                                  id="surface1"
                                  transform="translate(67.016 427.031)"
                                >
                                  <path
                                    id="Path_3071"
                                    data-name="Path 3071"
                                    d="M9.2,3.969c-3.985,0-7.217,2.824-7.217,6.275A5.946,5.946,0,0,0,4.809,15.2a4.63,4.63,0,0,1-.88,2.071l-.343.5h.628a4.555,4.555,0,0,0,3.231-1.443A8.118,8.118,0,0,0,9.2,16.52c3.985,0,7.217-2.824,7.217-6.276S13.186,3.969,9.2,3.969Zm-3.137,6.9a.628.628,0,1,1,.626-.628A.629.629,0,0,1,6.064,10.872Zm3.137,0a.628.628,0,1,1,.628-.628A.629.629,0,0,1,9.2,10.872Zm3.138,0a.628.628,0,1,1,.628-.628A.629.629,0,0,1,12.339,10.872Z"
                                    transform="translate(-69 -431)"
                                    fill="#009751"
                                  />
                                </g>
                              </svg>
                              <p>Comments</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="posts">
                        <div className="left">
                          <img
                            src="https://www.licious.in/blog/wp-content/uploads/2020/12/Tripple-Dipped-Broasted-Chicken.jpg"
                            alt=""
                          />
                        </div>
                        <div className="right">
                          <h3>Vermicelli pasta</h3>
                          <p>
                            Ribbon of pasta approximately 6.5 millimeters wide.
                            Larger and thicker than tagliatelle.
                          </p>

                          <div className="food__and__coments__wrapper">
                            <div className="section">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.842"
                                height="12.545"
                                viewBox="0 0 14.842 12.545"
                              >
                                <g
                                  id="surface1"
                                  transform="translate(-1.951 -2.961)"
                                >
                                  <path
                                    id="Path_3070"
                                    data-name="Path 3070"
                                    d="M9.376,2.961A1.718,1.718,0,0,0,7.667,4.672a1.645,1.645,0,0,0,.183.747,6.839,6.839,0,0,0-5.315,6.665v1.14H16.219v-1.14A6.842,6.842,0,0,0,10.9,5.419a1.646,1.646,0,0,0,.183-.747A1.718,1.718,0,0,0,9.376,2.961Zm0,1.14a.57.57,0,1,1-.569.571A.563.563,0,0,1,9.376,4.1Zm0,2.708.713.713h1v1l.713.713-.713.713v1h-1l-.713.713-.711-.713h-1v-1l-.713-.713.713-.713v-1h1ZM2.53,14.366a.57.57,0,1,0,0,1.14H16.214a.573.573,0,0,0,.5-.284.569.569,0,0,0-.5-.855Z"
                                    fill="#009751"
                                  />
                                </g>
                              </svg>

                              <p>food</p>
                            </div>

                            <div className="section">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.433"
                                height="13.806"
                                viewBox="0 0 14.433 13.806"
                              >
                                <g
                                  id="surface1"
                                  transform="translate(67.016 427.031)"
                                >
                                  <path
                                    id="Path_3071"
                                    data-name="Path 3071"
                                    d="M9.2,3.969c-3.985,0-7.217,2.824-7.217,6.275A5.946,5.946,0,0,0,4.809,15.2a4.63,4.63,0,0,1-.88,2.071l-.343.5h.628a4.555,4.555,0,0,0,3.231-1.443A8.118,8.118,0,0,0,9.2,16.52c3.985,0,7.217-2.824,7.217-6.276S13.186,3.969,9.2,3.969Zm-3.137,6.9a.628.628,0,1,1,.626-.628A.629.629,0,0,1,6.064,10.872Zm3.137,0a.628.628,0,1,1,.628-.628A.629.629,0,0,1,9.2,10.872Zm3.138,0a.628.628,0,1,1,.628-.628A.629.629,0,0,1,12.339,10.872Z"
                                    transform="translate(-69 -431)"
                                    fill="#009751"
                                  />
                                </g>
                              </svg>
                              <p>Comments</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom__section">
                  <div className="search__box">
                    <input
                      type="text"
                      placeholder="Press and type enter....."
                    />
                  </div>

                  <div className="lattest__post__section">
                    <div className="headdimg__Section">
                      <h3>Latest posts </h3>
                    </div>

                    <div className="post__wrapper">
                      <div className="posts">
                        <div className="left">
                          <img
                            src="https://i.ytimg.com/vi/3dWf6BNZPfo/maxresdefault.jpg"
                            alt=""
                          />
                        </div>
                        <div className="right">
                          <h3>Vermicelli pasta</h3>
                          <p>
                            Ribbon of pasta approximately 6.5 millimeters wide.
                            Larger and thicker than tagliatelle.
                          </p>

                          <div className="food__and__coments__wrapper">
                            <div className="section">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.842"
                                height="12.545"
                                viewBox="0 0 14.842 12.545"
                              >
                                <g
                                  id="surface1"
                                  transform="translate(-1.951 -2.961)"
                                >
                                  <path
                                    id="Path_3070"
                                    data-name="Path 3070"
                                    d="M9.376,2.961A1.718,1.718,0,0,0,7.667,4.672a1.645,1.645,0,0,0,.183.747,6.839,6.839,0,0,0-5.315,6.665v1.14H16.219v-1.14A6.842,6.842,0,0,0,10.9,5.419a1.646,1.646,0,0,0,.183-.747A1.718,1.718,0,0,0,9.376,2.961Zm0,1.14a.57.57,0,1,1-.569.571A.563.563,0,0,1,9.376,4.1Zm0,2.708.713.713h1v1l.713.713-.713.713v1h-1l-.713.713-.711-.713h-1v-1l-.713-.713.713-.713v-1h1ZM2.53,14.366a.57.57,0,1,0,0,1.14H16.214a.573.573,0,0,0,.5-.284.569.569,0,0,0-.5-.855Z"
                                    fill="#009751"
                                  />
                                </g>
                              </svg>

                              <p>food</p>
                            </div>

                            <div className="section">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.433"
                                height="13.806"
                                viewBox="0 0 14.433 13.806"
                              >
                                <g
                                  id="surface1"
                                  transform="translate(67.016 427.031)"
                                >
                                  <path
                                    id="Path_3071"
                                    data-name="Path 3071"
                                    d="M9.2,3.969c-3.985,0-7.217,2.824-7.217,6.275A5.946,5.946,0,0,0,4.809,15.2a4.63,4.63,0,0,1-.88,2.071l-.343.5h.628a4.555,4.555,0,0,0,3.231-1.443A8.118,8.118,0,0,0,9.2,16.52c3.985,0,7.217-2.824,7.217-6.276S13.186,3.969,9.2,3.969Zm-3.137,6.9a.628.628,0,1,1,.626-.628A.629.629,0,0,1,6.064,10.872Zm3.137,0a.628.628,0,1,1,.628-.628A.629.629,0,0,1,9.2,10.872Zm3.138,0a.628.628,0,1,1,.628-.628A.629.629,0,0,1,12.339,10.872Z"
                                    transform="translate(-69 -431)"
                                    fill="#009751"
                                  />
                                </g>
                              </svg>
                              <p>Comments</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="posts">
                        <div className="left">
                          <img
                            src="https://www.licious.in/blog/wp-content/uploads/2020/12/Tripple-Dipped-Broasted-Chicken.jpg"
                            alt=""
                          />
                        </div>
                        <div className="right">
                          <h3>Vermicelli pasta</h3>
                          <p>
                            Ribbon of pasta approximately 6.5 millimeters wide.
                            Larger and thicker than tagliatelle.
                          </p>

                          <div className="food__and__coments__wrapper">
                            <div className="section">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.842"
                                height="12.545"
                                viewBox="0 0 14.842 12.545"
                              >
                                <g
                                  id="surface1"
                                  transform="translate(-1.951 -2.961)"
                                >
                                  <path
                                    id="Path_3070"
                                    data-name="Path 3070"
                                    d="M9.376,2.961A1.718,1.718,0,0,0,7.667,4.672a1.645,1.645,0,0,0,.183.747,6.839,6.839,0,0,0-5.315,6.665v1.14H16.219v-1.14A6.842,6.842,0,0,0,10.9,5.419a1.646,1.646,0,0,0,.183-.747A1.718,1.718,0,0,0,9.376,2.961Zm0,1.14a.57.57,0,1,1-.569.571A.563.563,0,0,1,9.376,4.1Zm0,2.708.713.713h1v1l.713.713-.713.713v1h-1l-.713.713-.711-.713h-1v-1l-.713-.713.713-.713v-1h1ZM2.53,14.366a.57.57,0,1,0,0,1.14H16.214a.573.573,0,0,0,.5-.284.569.569,0,0,0-.5-.855Z"
                                    fill="#009751"
                                  />
                                </g>
                              </svg>

                              <p>food</p>
                            </div>

                            <div className="section">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.433"
                                height="13.806"
                                viewBox="0 0 14.433 13.806"
                              >
                                <g
                                  id="surface1"
                                  transform="translate(67.016 427.031)"
                                >
                                  <path
                                    id="Path_3071"
                                    data-name="Path 3071"
                                    d="M9.2,3.969c-3.985,0-7.217,2.824-7.217,6.275A5.946,5.946,0,0,0,4.809,15.2a4.63,4.63,0,0,1-.88,2.071l-.343.5h.628a4.555,4.555,0,0,0,3.231-1.443A8.118,8.118,0,0,0,9.2,16.52c3.985,0,7.217-2.824,7.217-6.276S13.186,3.969,9.2,3.969Zm-3.137,6.9a.628.628,0,1,1,.626-.628A.629.629,0,0,1,6.064,10.872Zm3.137,0a.628.628,0,1,1,.628-.628A.629.629,0,0,1,9.2,10.872Zm3.138,0a.628.628,0,1,1,.628-.628A.629.629,0,0,1,12.339,10.872Z"
                                    transform="translate(-69 -431)"
                                    fill="#009751"
                                  />
                                </g>
                              </svg>
                              <p>Comments</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom__footer__section">
              <div className="sections">
                <div className="headder__section">
                  <h3>Recipe Tag</h3>
                  <div className="line"></div>
                </div>
                <div className="body__section">
                  <div className="tag__container">
                    <h6>Pizza</h6>
                  </div>
                  <div className="tag__container">
                    <h6>Pasta</h6>
                  </div>

                  <div className="tag__container">
                    <h6>Pizza</h6>
                  </div>
                  <div className="tag__container">
                    <h6>Pasta</h6>
                  </div>

                  <div className="tag__container">
                    <h6>Pizza</h6>
                  </div>
                  <div className="tag__container">
                    <h6>Pasta</h6>
                  </div>

                  <div className="tag__container">
                    <h6>Pizza</h6>
                  </div>
                  <div className="tag__container">
                    <h6>Pasta</h6>
                  </div>

                  <div className="tag__container">
                    <h6>Pizza</h6>
                  </div>
                  <div className="tag__container">
                    <h6>Pasta</h6>
                  </div>

                  <div className="tag__container">
                    <h6>Pizza</h6>
                  </div>
                  <div className="tag__container">
                    <h6>Pasta</h6>
                  </div>

                  <div className="tag__container">
                    <h6>Pizza</h6>
                  </div>
                  <div className="tag__container">
                    <h6>Pasta</h6>
                  </div>
                </div>
              </div>
              <div className="sections">
                <div className="headder__section">
                  <h3>Latest Post</h3>
                  <div className="line"></div>
                </div>
                <div className="body__section">
                  <div className="post__wrapper">
                    <div className="posts">
                      <div className="left">
                        <img
                          src="https://i.ytimg.com/vi/3dWf6BNZPfo/maxresdefault.jpg"
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <h3>Vermicelli pasta</h3>
                        <p>
                          Ribbon of pasta approximately 6.5 millimeters wide.
                          Larger and thicker than tagliatelle.
                        </p>

                        <div className="food__and__coments__wrapper">
                          <div className="section">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.842"
                              height="12.545"
                              viewBox="0 0 14.842 12.545"
                            >
                              <g
                                id="surface1"
                                transform="translate(-1.951 -2.961)"
                              >
                                <path
                                  id="Path_3070"
                                  data-name="Path 3070"
                                  d="M9.376,2.961A1.718,1.718,0,0,0,7.667,4.672a1.645,1.645,0,0,0,.183.747,6.839,6.839,0,0,0-5.315,6.665v1.14H16.219v-1.14A6.842,6.842,0,0,0,10.9,5.419a1.646,1.646,0,0,0,.183-.747A1.718,1.718,0,0,0,9.376,2.961Zm0,1.14a.57.57,0,1,1-.569.571A.563.563,0,0,1,9.376,4.1Zm0,2.708.713.713h1v1l.713.713-.713.713v1h-1l-.713.713-.711-.713h-1v-1l-.713-.713.713-.713v-1h1ZM2.53,14.366a.57.57,0,1,0,0,1.14H16.214a.573.573,0,0,0,.5-.284.569.569,0,0,0-.5-.855Z"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>food</p>
                          </div>

                          <div className="section">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.433"
                              height="13.806"
                              viewBox="0 0 14.433 13.806"
                            >
                              <g
                                id="surface1"
                                transform="translate(67.016 427.031)"
                              >
                                <path
                                  id="Path_3071"
                                  data-name="Path 3071"
                                  d="M9.2,3.969c-3.985,0-7.217,2.824-7.217,6.275A5.946,5.946,0,0,0,4.809,15.2a4.63,4.63,0,0,1-.88,2.071l-.343.5h.628a4.555,4.555,0,0,0,3.231-1.443A8.118,8.118,0,0,0,9.2,16.52c3.985,0,7.217-2.824,7.217-6.276S13.186,3.969,9.2,3.969Zm-3.137,6.9a.628.628,0,1,1,.626-.628A.629.629,0,0,1,6.064,10.872Zm3.137,0a.628.628,0,1,1,.628-.628A.629.629,0,0,1,9.2,10.872Zm3.138,0a.628.628,0,1,1,.628-.628A.629.629,0,0,1,12.339,10.872Z"
                                  transform="translate(-69 -431)"
                                  fill="#009751"
                                />
                              </g>
                            </svg>
                            <p>Comments</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="posts">
                      <div className="left">
                        <img
                          src="https://www.licious.in/blog/wp-content/uploads/2020/12/Tripple-Dipped-Broasted-Chicken.jpg"
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <h3>Vermicelli pasta</h3>
                        <p>
                          Ribbon of pasta approximately 6.5 millimeters wide.
                          Larger and thicker than tagliatelle.
                        </p>

                        <div className="food__and__coments__wrapper">
                          <div className="section">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.842"
                              height="12.545"
                              viewBox="0 0 14.842 12.545"
                            >
                              <g
                                id="surface1"
                                transform="translate(-1.951 -2.961)"
                              >
                                <path
                                  id="Path_3070"
                                  data-name="Path 3070"
                                  d="M9.376,2.961A1.718,1.718,0,0,0,7.667,4.672a1.645,1.645,0,0,0,.183.747,6.839,6.839,0,0,0-5.315,6.665v1.14H16.219v-1.14A6.842,6.842,0,0,0,10.9,5.419a1.646,1.646,0,0,0,.183-.747A1.718,1.718,0,0,0,9.376,2.961Zm0,1.14a.57.57,0,1,1-.569.571A.563.563,0,0,1,9.376,4.1Zm0,2.708.713.713h1v1l.713.713-.713.713v1h-1l-.713.713-.711-.713h-1v-1l-.713-.713.713-.713v-1h1ZM2.53,14.366a.57.57,0,1,0,0,1.14H16.214a.573.573,0,0,0,.5-.284.569.569,0,0,0-.5-.855Z"
                                  fill="#009751"
                                />
                              </g>
                            </svg>

                            <p>food</p>
                          </div>

                          <div className="section">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.433"
                              height="13.806"
                              viewBox="0 0 14.433 13.806"
                            >
                              <g
                                id="surface1"
                                transform="translate(67.016 427.031)"
                              >
                                <path
                                  id="Path_3071"
                                  data-name="Path 3071"
                                  d="M9.2,3.969c-3.985,0-7.217,2.824-7.217,6.275A5.946,5.946,0,0,0,4.809,15.2a4.63,4.63,0,0,1-.88,2.071l-.343.5h.628a4.555,4.555,0,0,0,3.231-1.443A8.118,8.118,0,0,0,9.2,16.52c3.985,0,7.217-2.824,7.217-6.276S13.186,3.969,9.2,3.969Zm-3.137,6.9a.628.628,0,1,1,.626-.628A.629.629,0,0,1,6.064,10.872Zm3.137,0a.628.628,0,1,1,.628-.628A.629.629,0,0,1,9.2,10.872Zm3.138,0a.628.628,0,1,1,.628-.628A.629.629,0,0,1,12.339,10.872Z"
                                  transform="translate(-69 -431)"
                                  fill="#009751"
                                />
                              </g>
                            </svg>
                            <p>Comments</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sections">
                <div className="headder__section">
                  <h3>Recipi Category</h3>
                  <div className="line"></div>
                </div>
                <div className="body__section">
                  <div className="category__wrappper">
                    <div className="categorys">
                      <h5>Mexican food</h5>
                    </div>

                    <div className="categorys">
                      <h5>Mexican food</h5>
                    </div>

                    <div className="categorys">
                      <h5>Burger</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RecipeDetails;
