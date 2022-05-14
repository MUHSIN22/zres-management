import React, { useState } from "react";
import "./burgerOptionSection.scss";
import Checkbox from "@mui/material/Checkbox";
function BurgerOptionSection({ setItemDetailsClick,productName }) {
  const Addons = [
    {
      id: 1,
      SectionName: "AddOns",
      items: [
        {
          id: 494,
          name: "Cheese",
          price: "1.0",
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
        },

        {
          id: 165,
          name: "Whole Grain",
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
        },

        {
          id: 185,
          name: "Tomatoes",
        },
        {
          id: 195,
          name: "Letues",
        },
      ],
    },
  ];

  const newAdons = [
    {
      name: "adons",
      data: [
        {
          id: 494,
          name: "Cheese",
          price: "1.0",
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
  ];

  const [selectedOption, setSelectedOption] = useState("AddOns");
  const [checkedStat, setCheckedState] = useState(Addons);
  const [modifierdata,setModifierdata] = useState('')  
  const handleCheckboxClick = (e, data, prod) => {
    // this looks for the main hedder addons
    const AddonMain = checkedStat.find((items) => items.id === prod.id);
    // this will look for subaddons
    const Selectedsub = AddonMain.items.find((items) => items.id === data.id);

  };

  console.log(modifierdata)
  const handleSubmit = (e) =>{
    e.preventDefault()
    const checkbox = e.target.checked;
    console.log(Checkbox)

    setModifierdata({

      ...modifierdata,
     [e.target.name] :checkbox
       
  })
  }

  console.log("origin", checkedStat);

 
  return (
    <div className="BurgerOptionSection">
      <div className="top__hedding__section">
        <h4>{productName}</h4>
      </div>

      <hr />

      <div className="mid__option__section">
        <div className="left__mid__option">
          <div
            className={
              "button__section__area " +
              (selectedOption === "AddOns" && "active")
            }
            onClick={() => setSelectedOption("AddOns")}
          >
            <h5>Add Ons</h5>
          </div>
          <div
            className={
              "button__section__area " +
              (selectedOption === "BreadSelection" && "active")
            }
            onClick={() => setSelectedOption("BreadSelection")}
          >
            <div className="svg__manadaory__Section">
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
            </div>

            <h5>Choose Your Bread</h5>
          </div>
          <div
            className={
              "button__section__area " +
              (selectedOption === "Topping" && "active")
            }
            onClick={() => setSelectedOption("Topping")}
          >
            <h5>Topping</h5>
          </div>
        </div>
        <div className="right__mid__option">
          {/* AddOns section */}
          <div className="right__curesponding__details">
            {checkedStat
              .filter((items) => items.SectionName === selectedOption)
              .map((prod) => (
                <>
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
                
                          key={item.name}
                          name={item.name}
                          value={item.name}
                          onChange={handleSubmit}
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
      <hr />
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
          <button style={{ backgroundColor: "#040153", color: "#fff" }} >
            Add Modifier
          </button>
        </div>
      </div>
    </div>
  );
}

export default BurgerOptionSection;
