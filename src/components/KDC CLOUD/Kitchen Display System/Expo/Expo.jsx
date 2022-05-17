import React, { useEffect, useState } from "react";
import "./expo.scss";
import ItemSummary from "./ItemSummary/ItemSummary";
import Recipe from "./Recipe/Recipe";
function Expo() {

  const [newData, setNewData] = useState([])
  const [runningData, setRunningData] = useState([])
  const [doneData, setDoneData] = useState([])
  const [big, setBig] = useState(0)
  const [loading, setLoading] = useState(false)
  const [selectItem, setSelectItem] = useState({ itemId: 0, status: false, type: "" })
  const [recipe, setRecipe] = useState(false)
  const [itemSummary, setItemSummary] = useState(false)


  const handleSelect = (id, odType) => {
    setSelectItem({ itemId: id, status: true, type: odType })
  }
  const handleItemSummary = () => {
    if (selectItem.status) {
      setRecipe(false)
      setItemSummary(true)
    } else {
      alert("item not selected\nplease select an item")
    }

  }
  const handleRecipe = () => {
    if (selectItem.status) {
      setItemSummary(false)
      setRecipe(true)
    }
    else {
      alert("item not selected\nplease select an item")
    }
  }

  console.log(selectItem, recipe);

  useEffect(() => {
    setLoading(true)
    fetch(`${process.env.REACT_APP_BASE_URL}KDS/ExpoForNewOrder?CMPid=1`)
      .then((response) => response.json())
      .then((data) => {
        setNewData(data)
        if (big < data.length) {
          setBig(data.length)
        }
      })

    fetch(`${process.env.REACT_APP_BASE_URL}KDS/ExpoForCookingOrder?CMPid=1`)
      .then((response) => response.json())
      .then((data) => {
        setRunningData(data)
        if (big < data.length) {
          setBig(data.length)
        }
      })

    fetch(`${process.env.REACT_APP_BASE_URL}KDS/ExpoForDoneOrder?CMPid=1`)
      .then((response) => response.json())
      .then((data) => {
        setDoneData(data)
        if (big < data.length) {
          setBig(data.length)
        }
      })
    setLoading(false)
  }, [])




  return (
    <div className="Expo">
      {(recipe || itemSummary) && <div className="side_panel">
        {
          recipe &&
          <Recipe setRecipe={setRecipe} selectItem={selectItem} />

        }
        {
          itemSummary && <ItemSummary setItemSummary={setItemSummary} selectItem={selectItem} />
        }

      </div>}

      <div className="expo__top__section">
        <div>
          <table  >
            <tr style={{ background: "#6CDADE" }} height={"40px"}>
              <th>new </th>
            </tr>
            {loading ? <h1>Loading...</h1> :
              newData.map((data, i) => (
                <tr key={i}>
                  <td onClick={() => handleSelect(data.MenuID, "NEW")} style={{ color: "#6CDADE", height: "60px", background: selectItem.itemId === data.MenuID && selectItem.type === "NEW" ? "white" : i % 2 !== 0 ? "#393939" : "#080808" }} className="td">
                    <p>{data.ItemName}</p>
                    <p>{data.CountOfItems}</p>
                  </td>
                </tr>
              ))
            }
          </table>
        </div>
        <div>
          <table>
            <tr style={{ background: "#EDBE7F" }} height={"40px"}>
              <th>cooking</th>
            </tr>
            {
              runningData.map((data, i) => (
                <tr key={i}>
                  <td onClick={() => handleSelect(data.MenuID, "COOKING")}
                    className="td"
                    style={{ color: "#EDBE7F", height: "60px", background: selectItem.itemId === data.MenuID && selectItem.type === "COOKING" ? "white" : i % 2 !== 0 ? "#393939" : "#080808" }}>
                    <p>{data.ItemName}</p>
                    <p>{data.CountOfItems}</p>
                  </td>
                </tr>
              ))
            }
          </table>
        </div>
        <div>
          <table>
            <tr style={{ background: "#0C633B" }} height={"40px"}>
              <th>done</th>
            </tr>
            {
              doneData.map((data, i) => (
                <tr key={i}>
                  <td className="td" onClick={() => handleSelect(data.MenuID, "DONE")} style={{ color: "#EDBE7F", height: "60px", background: selectItem.itemId === data.MenuID && selectItem.type === "DONE" ? "white" : i % 2 !== 0 ? "#393939" : "#080808" }}>
                    <p>{data.ItemName}</p>
                    <p>{data.CountOfItems}</p>
                  </td>
                </tr>
              ))
            }

          </table>
        </div>
      </div>
      <div className="expo__bottom__section">
        <div className="BtnSection">

          <div onClick={handleItemSummary} className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              viewBox="0 0 30 38"
            >
              <g id="surface1" transform="translate(-5 -1)">
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M20,38.5c-9.383,0-14.5-1.652-14.5-2.5V4A2.5,2.5,0,0,1,8,1.5H32A2.5,2.5,0,0,1,34.5,4V36C34.5,36.848,29.383,38.5,20,38.5Z"
                  fill="#98ccfd"
                />
                <path
                  id="Path_17"
                  data-name="Path 17"
                  d="M32,2a2,2,0,0,1,2,2V35.891C33.359,36.633,28.629,38,20,38S6.641,36.633,6,35.891V4A2,2,0,0,1,8,2H32m0-1H8A3,3,0,0,0,5,4V36c0,1.656,6.715,3,15,3s15-1.344,15-3V4A3,3,0,0,0,32,1Z"
                  fill="#4788c7"
                />
                <path
                  id="Path_18"
                  data-name="Path 18"
                  d="M9,5H31V31H9Z"
                  fill="#fff"
                />
                <path
                  id="Path_19"
                  data-name="Path 19"
                  d="M13.5,10.5h13"
                  fill="none"
                  stroke="#4788c7"
                  stroke-linecap="round"
                  stroke-width="1"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M13.5,15.5h13"
                  fill="none"
                  stroke="#4788c7"
                  stroke-linecap="round"
                  stroke-width="1"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M13.5,18.5h10"
                  fill="none"
                  stroke="#4788c7"
                  stroke-linecap="round"
                  stroke-width="1"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M13.5,21.5h13"
                  fill="none"
                  stroke="#4788c7"
                  stroke-linecap="round"
                  stroke-width="1"
                />
                <path
                  id="Path_23"
                  data-name="Path 23"
                  d="M13.5,24.5h10"
                  fill="none"
                  stroke="#4788c7"
                  stroke-linecap="round"
                  stroke-width="1"
                />
                <path
                  id="Path_24"
                  data-name="Path 24"
                  d="M18.5,35.5V35a1.5,1.5,0,0,1,3,0v.5"
                  fill="none"
                  stroke="#4788c7"
                  stroke-linecap="round"
                  stroke-width="1"
                />
              </g>
            </svg>

            <h4>ITEM SUMMARTY</h4>
          </div>

          <div onClick={handleRecipe} className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.518"
              height="25.171"
              viewBox="0 0 20.518 39.171"
            >
              <g id="surface1" transform="translate(-12 -3)">
                <path
                  id="Path_25"
                  data-name="Path 25"
                  d="M28,41.72a1.864,1.864,0,0,0,1.865,1.865h1.865A1.864,1.864,0,0,0,33.6,41.72l-.933-15.855c0-1.031.1-1.865-.933-1.865H30.8a1.864,1.864,0,0,0-1.865,1.865Z"
                  transform="translate(-1.078 -1.414)"
                  fill="#3f51b5"
                />
                <path
                  id="Path_26"
                  data-name="Path 26"
                  d="M19.663,21H15.933L15,41.518a1.864,1.864,0,0,0,1.865,1.865h1.865A1.864,1.864,0,0,0,20.6,41.518Z"
                  transform="translate(-0.202 -1.212)"
                  fill="#3f51b5"
                />
                <path
                  id="Path_27"
                  data-name="Path 27"
                  d="M32.612,3V24.451H28.881C24.218,6.731,30.746,3,32.612,3Z"
                  transform="translate(-1.026 0)"
                  fill="#2196f3"
                />
                <path
                  id="Path_28"
                  data-name="Path 28"
                  d="M20.394,3V15.124H18.529V3H16.663V15.124H14.8V3H12.933L12,16.057l3.731,3.731h3.731l3.731-3.731L22.259,3Z"
                  transform="translate(0 0)"
                  fill="#2196f3"
                />
              </g>
            </svg>

            <h4>RECEIPES</h4>
          </div>
        </div>
        <div className="BtnSection">
          <div className="b">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51.771"
              height="25.771"
              viewBox="0 0 51.771 51.771"
            >
              <g id="surface1" transform="translate(-0.988 -0.988)">
                <path
                  id="Path_29"
                  data-name="Path 29"
                  d="M.988,26.874A25.885,25.885,0,1,1,26.874,52.759,25.888,25.888,0,0,1,.988,26.874Z"
                  transform="translate(0 0)"
                  fill="#48a1af"
                />
                <path
                  id="Path_30"
                  data-name="Path 30"
                  d="M10.488,28.444A17.956,17.956,0,1,1,28.444,46.4,17.955,17.955,0,0,1,10.488,28.444Z"
                  transform="translate(-1.57 -1.57)"
                  fill="#fff"
                />
                <path
                  id="Path_31"
                  data-name="Path 31"
                  d="M12.863,28.837A15.973,15.973,0,1,1,28.837,44.81,15.974,15.974,0,0,1,12.863,28.837Z"
                  transform="translate(-1.963 -1.963)"
                  fill="#48a1af"
                />
                <path
                  id="Path_32"
                  data-name="Path 32"
                  d="M31.512,33.974a2.462,2.462,0,1,1,2.462-2.462A2.466,2.466,0,0,1,31.512,33.974Z"
                  transform="translate(-4.639 -4.639)"
                  fill="#fff"
                />
                <path
                  id="Path_33"
                  data-name="Path 33"
                  d="M30.018,32.643h-9.2a.8.8,0,1,1,0-1.6h9.2a.8.8,0,1,1,0,1.6Z"
                  transform="translate(-3.145 -4.968)"
                  fill="#fff"
                />
                <path
                  id="Path_34"
                  data-name="Path 34"
                  d="M31.842,31.352a.79.79,0,0,1-.564-.238.807.807,0,0,1,0-1.138l6.511-6.511A.8.8,0,0,1,38.927,24.6l-6.511,6.511A.83.83,0,0,1,31.842,31.352Z"
                  transform="translate(-4.968 -3.677)"
                  fill="#fff"
                />
                <path
                  id="Path_35"
                  data-name="Path 35"
                  d="M32.837,15.793a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,32.837,15.793Z"
                  transform="translate(-4.92 -2.275)"
                  fill="#fff"
                />
                <path
                  id="Path_36"
                  data-name="Path 36"
                  d="M32.837,47.793a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,32.837,47.793Z"
                  transform="translate(-4.92 -7.565)"
                  fill="#fff"
                />
                <path
                  id="Path_37"
                  data-name="Path 37"
                  d="M48.837,31.793a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,48.837,31.793Z"
                  transform="translate(-7.565 -4.92)"
                  fill="#fff"
                />
                <path
                  id="Path_38"
                  data-name="Path 38"
                  d="M16.837,31.793a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,16.837,31.793Z"
                  transform="translate(-2.275 -4.92)"
                  fill="#fff"
                />
                <path
                  id="Path_39"
                  data-name="Path 39"
                  d="M44.149,20.481a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,44.149,20.481Z"
                  transform="translate(-6.79 -3.05)"
                  fill="#fff"
                />
                <path
                  id="Path_40"
                  data-name="Path 40"
                  d="M21.524,43.106a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,21.524,43.106Z"
                  transform="translate(-3.05 -6.79)"
                  fill="#fff"
                />
                <path
                  id="Path_41"
                  data-name="Path 41"
                  d="M44.149,43.106a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,44.149,43.106Z"
                  transform="translate(-6.79 -6.79)"
                  fill="#fff"
                />
                <path
                  id="Path_42"
                  data-name="Path 42"
                  d="M21.524,20.481a1.043,1.043,0,1,1-1.043-1.043A1.042,1.042,0,0,1,21.524,20.481Z"
                  transform="translate(-3.05 -3.05)"
                  fill="#fff"
                />
              </g>
            </svg> */}

            {/* <h4>ITEM SUMMARTY</h4> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expo;
