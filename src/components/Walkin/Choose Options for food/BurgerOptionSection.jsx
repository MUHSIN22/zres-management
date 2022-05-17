import React, { useState } from "react";
import "./burgerOptionSection.scss";
import Checkbox from "@mui/material/Checkbox";

function BurgerOptionSection({ setItemDetailsClick,product, submit }) {
  const Addons = [
    {
      id: 1,
      SectionName: "Add Ons",
      items: [
        {
          id: 494,
          name: "Cheese",
          price: 1.0,
        },

        {
          id: 434,
          name: "Bacon",
          price: 2.0,
        },

        {
          id: 484,
          name: "Onion",
          price: 3.0,
        },
      ],
    },

    {
      id: 2,
      SectionName: "BreadSelection",
      items: [
        {
          id: 155,
          name: "Wheat",
          price:1
        },

        {
          id: 165,
          name: "Whole Grain",
          price:2
        },
      ],
    },

    {
      id: 3,
      SectionName: "Topping",
      items: [
        {
          id: 175,
          name: "Caremelized Onion",
          price:0.5
        },

        {
          id: 185,
          name: "Tomatoes",
          price:2
        },
        {
          id: 195,
          name: "Letues",
          price:1
        },
      ],
    },
  ];


  
  const [selectedOption, setSelectedOption] = useState(Addons[0].SectionName);
  const [checkedStat, setCheckedState] = useState(Addons);
  const [selectedAddOns,setSelectedAddOns] = useState([]);

  const handleCheckboxClick = async(e, data, prod) =>{
    const AddonMain = await checkedStat.find((items) => items.id === prod.id);
    const Selectedsub = await AddonMain.items.find((items) => items.id === data.id);
    let index = await selectedAddOns.findIndex(d=>d.id===Selectedsub.id);
    if(index === -1){
      console.log(Selectedsub);
      setSelectedAddOns([...selectedAddOns,Selectedsub]);
    }else{
      let newArr = selectedAddOns;
      newArr.pop(index);
      console.log(newArr);
      setSelectedAddOns(newArr);
    }
  };

  const onSubmit = ()=>{
    submit(product,selectedAddOns);
    setItemDetailsClick(false);
  }

  console.log(product);
  return (
    <div className="BurgerOptionSection">
      <div className="top__hedding__section">
        <h4>{product.ItemName}</h4>
      </div>

      <hr />

      <div className="mid__option__section">
        <div className="left__mid__option">
          {Addons.map((d,i)=>(
          <div
            key={i}
            className={
              "button__section__area " +
              (selectedOption === d.SectionName && "active")
            }
            onClick={() => setSelectedOption(d.SectionName)}
            >
              {i===1&&<div className="svg__manadaory__Section">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="50"
                viewBox="0 0 26 81"
              >
                <text
                  id="_"
                  data-name="*"
                  transform="translate(0 66)"
                  fill="#c30208"
                  font-size="61"
                  font-family="SegoeUI, Segoe UI"
                >
                  <tspan x="0" y="0">
                    *
                  </tspan>
                </text>
              </svg>
            </div>}
            <h5>{d.SectionName}</h5>
          </div>))}
        </div>
        <div className="right__mid__option">
          {/* AddOns section */}
          <div className="right__curesponding__details">
            {checkedStat
              .filter((items) => items.SectionName === selectedOption)
              .map((prod) => (
                <  >
                  <div className="right__curresponding__headder">
                    <h4>{prod.SectionName}</h4>
                    {}
                    {prod.SectionName !== "BreadSelection" && (
                      <>
                        <p>Please Choose Maximum Of {prod.items.length}</p>
                      </>
                    )}
                    {prod.SectionName === "BreadSelection" && (
                      <>
                        <p>Please Choose one </p>
                      </>
                    )}
                  </div>
                  <div className="checkboc__curresponding__section__wrapper">
                    {prod.items.map((item) => (
                      <div className="CheckBoxArea__Section">
                        <Checkbox
                          checked={selectedAddOns.includes(item)}
                          key={item.name}
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                          onClick={(e) => handleCheckboxClick(e, item, prod)}
                        />

                        <div className="checkboc__details">
                          <h5>{item.name}</h5>
                          <p>{item.price} OMR</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
      <hr/>
      <div className="bottom__addmodifier__cancel__Section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="50"
          viewBox="0 0 26 81"
        >
          <text
            id="_"
            data-name="*"
            transform="translate(0 66)"
            fill="#c30208"
            font-size="61"
            font-family="SegoeUI, Segoe UI"
          >
            <tspan x="0" y="0">
              *
            </tspan>
          </text>
        </svg>
        <div className="button__sections__addmodifer__cancel">
          <button onClick={() => setItemDetailsClick(false) }> Cancel </button>
          <button style={{ backgroundColor: "#040153", color: "#fff" }} onClick={()=>onSubmit()} >
            Add Modifier
          </button>
        </div>
      </div>
    </div>
  );
}

export default BurgerOptionSection;