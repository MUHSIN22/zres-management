import React, { useEffect, useState } from 'react'
import './Recipe.scss'

const Recipe = ({ selectItem, setRecipe }) => {
  const [loading, setLoading] = useState({ status: false, msg: "" })
  const [recipeData, setRecipeData] = useState([])
  useEffect(() => {
    setLoading({ status: true, msg: "Loading..." })
    fetch(`${process.env.REACT_APP_BASE_URL}KDS/RecipeOfItem?ItemID=${selectItem.itemId}&CMPid=1`)
      .then(res => res.json()).then(data => {
        setRecipeData(data)
        setLoading({ status: false, msg: "" })
        if(data.length===0){
          setLoading({ status: true, msg: "NO Data found" })
        }
      }).catch(error=>{
        setLoading({ status: true, msg: "error" })

      })
  }, [selectItem.itemId])
  return (
    <>
      {
        loading.status ? <h6 style={{textAlign:"center",height:"100%",display:"grid",placeItems:"center"}}>{loading.msg}</h6> :
        recipeData.map((data, i) => (
          <div className='expo-recipe'>

            <div className="heading">
              <svg onClick={() => setRecipe(false)} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="14" stroke="white" stroke-width="2" />
                <path d="M11.8867 6.98096L20.7546 15.1531L11.8867 22.83" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <h2>{data.ItemName}</h2>
            </div>
            <img src={"data:image/png;base64," + data.Image} alt="" />
            <div>
              <h3>Prepration</h3>
              <p>{data.Preprations}</p>
              <p>prepration time : {data.PreprationTime}</p>
            </div>
            <div>
              <h3>instructions</h3>
              <p>cooking time : {data.CookTime}</p>
              <p>cooking temperature : {data.CookingTemp}</p>
              <p> Instructions: {data.Instructions}</p>
              <p> Nutritions: {data.Nutritions ? "yes" : "no"}</p>
              <p> Dairy Free: {data.DairyFree ? "yes" : "no"}</p>
              <p> Gluten Free: {data.GlutenFree ? "yes" : "no"}</p>
              <p> Vegtarian: {data.Vegtarian ? "yes" : "no"}</p>
              <p> LowCarb: {data.LowCarb ? "yes" : "no"}</p>
              <p> highFat : {data.highFat ? "yes" : "no"}</p>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Recipe