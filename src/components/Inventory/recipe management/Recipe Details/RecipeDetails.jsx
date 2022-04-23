import React, { useState ,useEffect} from "react";
import "./recipeDetails.scss";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import AddRecipie from "./addrecipie/AddRecipie";
import { Link } from "react-router-dom";
function RecipeDetails() {
  const [addProducts, setAddProducts] = useState(false);
  const [recipeDataView, setRecipieDataView] = useState(true);
  const [menuByCategory,setMenuByCategory] = useState([])
  const [recipeCategory,setRecipeCategory] = useState([])
  const [loading,setLoading]=useState(" ")
  const [searchItem,setSearchItem] = useState("")

  const categoryClicked = (id) => {
    setLoading("loading...")
    axios
    .get(
      `https://zres.clubsoft.co.in/WalkIn/GetAllMenuItemByMenuGroupID?MenuGroupID=${id}&CMPid=1`
    )
    .then((res) => {
      setMenuByCategory(res.data);
      res.data.length===0 ? setLoading("NO Items") : setLoading(" ")
    },[]);
  }

  
  useEffect(()=>{
    setLoading("loading...")
    console.log("entered.............");
    axios
    .get(
      `https://zres.clubsoft.co.in/Recipe/SearchDish?CMPid=1&DishSearch=${searchItem}`
    )
    .then((res) => {
      setMenuByCategory(res.data);
      res.data.length===0 ? setLoading("NO Items") : setLoading(" ")
      
    });
  },[searchItem])

  console.log(menuByCategory,"serchItem")
  useEffect(() => {
    axios
    .get(
      "https://zres.clubsoft.co.in/RCGroup?CMPid=1"
    )
    .then((res) => {
      setRecipeCategory(res.data);
    });
  }, [])


  return (
    <>
      {addProducts && (
        <div className="add__recipe__section">
          <AddRecipie
            recipeCategory={recipeCategory}
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
                onChange={(e) => setSearchItem(e.target.value)}
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

                {
                  recipeCategory.length>0?
                  recipeCategory.map(data=>(
                <div style={{cursor:"pointer"}} onClick={()=>categoryClicked(data.RCGroupId)} className="image__holder__conrtainer">
                  <div className="black__overlayer"></div>
                  <div className="overlay__Section">
                    <h3>{data.GroupName}</h3>
                    <p>More than 30 recipes</p>
                  </div>

                  <img
                    src="https://i.ndtvimg.com/i/2016-09/taco-625_625x350_51474624224.jpg"
                    alt=""
                  />
                </div>
                )): <h1>Loading....</h1>
                }
              
                
              </div>
            </div>

            <div className="mid__section__contaner">
              <div className="left__Side__section">
                <div className="headder__section">
                  <h3>Recipe </h3>
                </div>
                <div className="latest__recipe__section">
                  <div className="recipe__wrapper">

                  {
                    // menuByCategory
                    menuByCategory.length>0&&loading!=="loading..."?menuByCategory.map(data=>(
                    <Link to={`recipe-view/${data.MenuGroupID}-${data.MenuID}`} >
                    <div className="image__and__details__section__wrapper">
                      <div className="image__container">
                        <img
                          src={`data:image/png;base64,${data.Image}`}
                          alt=""
                        />
                      </div>
                      <div className="detais__container">
                        <div className="top__details">
                        </div>
                        <div className="bottom_details">
                          <h3>{data.ItemName}</h3>
                        </div>
                      </div> 
                    </div>
                    </Link>
                      )):<h3>{loading}</h3>}

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
