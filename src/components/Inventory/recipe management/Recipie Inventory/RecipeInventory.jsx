import React, { useRef, useState, useEffect } from "react";
import "./recipeInventory.scss";
import { useDropzone } from "react-dropzone";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Rating from "./ratting/Ratting";
import AddIcon from "@mui/icons-material/Add";
import ImageUploader from "./image uploader/ImageUploader";
import CloseIcon from "@mui/icons-material/Close";
import TinyMceRichText from "./tynymce/TinyMceRichText";
import NewRatting from "./ratting/NewRatting";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ITEM_HEIGHT = 38;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


// {
//   Recipe:{
//   "MenuID":10,"RCGroupId":1,"Preprations":"fdhfbdsh","PreprationTime":"ertsrytu","CookTime":"10mnts","CookingTemp":"100","CMPid":1,
//   "UserID":1,"DairyFree":1,"GlutenFree":1,"Vegtarian":1,"LowCarb":1,"highFat":1,"Instructions":"fdfg hgh ghjjj","Nutritions":"nnkjjjjjjjjjjjjjj"
// },
// receipeDetails:[
//   {"ProdctId":4,"Qty":4,"UOMid":1},
//   {"ProdctId":3,"Qty":5,"UOMid":1}
// ],
// tools:[
//   {"ToolId":1},
//   {"ToolId":2}
// ],
// packingMaterials:[
//   {"PackingMaterialId":1},
//   {"PackingMaterialId":2}
// ]
// }

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
const packingTypeArray = [
  "type 1",
  "type 2",
  "type 3"
]

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
  border: "1px solid #ffff",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #ffff",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const datakeyValue = {
  RecipeID: "",
  recipegroupid: "",
  RecipeName: "",
  PreprationTime: "",
  CookTime: "",
  CookingTemp: "",
  ToolId: [],
  DairyFree: false,
  GlutenFree: false,
  Vegtarian: false,
  LowCarb: false,
  highFat: false,
  Ingredients: [],
  image: "",
  imageFile: null,
  difficulty: 0,
  Preprations: "",
};

function RecipeInventory() {
  const [toolid, settoolid] = useState([]);
  const [packingType, setPackingType] = useState([]);
  const [forPacking,setForPacking] =useState([])
  const [forTools,setForTools] =useState([])
  const [RichTextContent, setRichTextContent] = useState("");
  const [recipeCategory, setRecipeCategory] = useState([]);

  const nav =useNavigate()
  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const dataArray = event.target.value.map(data=>{
      return {ToolId:data}
    })
    setForTools(dataArray)
    settoolid(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };


  const handleChangeForPacking = (event) => {
    const dataArray = event.target.value.map(data=>{
      return {PackingMaterialId:data}
    })
    setForPacking(dataArray)
    const {
      target: { value },
    } = event;
    console.log(value );
    setPackingType( typeof value === "string" ? value.split(",") : value )
  };
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}RCGroup?CMPid=1`
      )
      .then((res) => {
        setRecipeCategory(res.data);
      });
  }, [])

  // ingredient select section

  const [selectIngredient, setSelectIngredient] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");
  const [selectUnit, setSelectUnit] = useState("");
  const [newArray, setNewArray] = useState([]);
  const [recipeDataIng, setRecipeDataIng] = useState([])

  const onAddnewRecipeIngredient = () => {
    setNewArray([
      ...newArray,
      {
        ProdctId: newArray.length + 1,
        selectIngredient: selectIngredient,
        ingredientInput: ingredientInput,
        selectUnit: selectUnit,

      },
    ]);
    setRecipeDataIng(
      [
        ...recipeDataIng, {
          ProdctId: newArray.length + 6,
          Qty: parseInt(ingredientInput),
          UOMid: 0,
        }
      ]
    )
    setSelectIngredient("");
    setSelectUnit("");
    setIngredientInput("");
  };

  const packingTypes = [
    {
      value: "one",
      name:"one"
    },
    {
      value: "two",
      name:"two"
    },
  ]


  const [difficulty, setDifficulty] = useState(0);
  const [prepration, setPrepration] = useState("");
  const [Mainvalues, setMainValues] = useState(datakeyValue);
  const [recipeGroup, setRecipeGroup] = useState(0)
  const [prepTime, setPrepTime] = useState("")
  const [cookTime, setCookTime] = useState("")
  const [dairyFree, setDairyFree] = useState(0)
  const [glutenFree, setGlutenFree] = useState(0)
  const [vegtarian, setVegtarian] = useState(0)
  const [lowCarb, setLowCarb] = useState(0)
  const [highFat, setHighFat] = useState(0)
  const [cookTemp, setCookTemp] = useState("")
  const [formSubmitiing, setFormSubmitting] = useState(false);
  const handleMainData = () => {

  };

  const editorRef = useRef(null);
  const handleFormSubmitSelction = (e) => {
    e.preventDefault();
    if(recipeDataIng.length === 0 || forTools.length === 0 || forPacking.length === 0 ){
      alert("please enter the details")
      return
    }
    if (editorRef.current) {
      const richValue = editorRef.current.getContent();
      setPrepration(richValue);
    }
    const jsonData = {
    "Recipe":{
    "MenuID":10,
    "RCGroupId":parseInt(recipeGroup),
    "Preprations":prepration,
    "PreprationTime":prepTime,
    "CookTime":cookTime,
    "CookingTemp":cookTemp,
    "CMPid":1,
    "UserID":1,
    "DairyFree":dairyFree,
    "GlutenFree":glutenFree,
    "Vegtarian":vegtarian,
    "LowCarb":lowCarb,
    "highFat":highFat,
    "Instructions":"fdfg hgh ghjjj",
    "Nutritions":"nnkjjjjjjjjjjjjjj"
    },
    "receipeDetails":recipeDataIng,
    "tools":forTools, 
    "packingMaterials":forPacking
    }
    
    axios.post(`${process.env.REACT_APP_BASE_URL}Recipe?CMPid=1`, 
    jsonData
  ).then(function (response) {
      console.log(response);
      alert("Recipe added successfully")
      nav("/mainPage/inventory/receipe-management")
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const handleCheckboxSection = (evt) => {
    const checked = evt.target.checked;
    setMainValues({
      ...Mainvalues,
      [evt.target.name]: checked,
    });
  };

  const [files, setFiles] = useState([]);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const ImagePreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let ImageFile = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (x) => {
        setMainValues({
          ...Mainvalues,
          imageFile: ImageFile,
          image: x.target.result,
        });
      };
      reader.readAsDataURL(ImageFile);
    }
  };
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div className="RecipeInventory">
      <div className="top__section">
        <div className="headder__headding__section">
          <h2>Recipe Details</h2>
        </div>
      </div>
      <form onSubmit={handleFormSubmitSelction}>
        <div className="body__section">
          <div className="inner__container">
            <div className="top__section">
              <div className="left__Section">
                <div className="headding__sections">
                  <h3>Recipe Inventory</h3>
                </div>
                <div className="input__Section">
                  <div className="input__holder">
                    <h5>Recipe Group</h5>
                    <select
                      name="recipegroupid"
                      id=""
                      value={recipeGroup}
                      onChange={(e) => setRecipeGroup(e.target.value)}
                    >
                      {
                        recipeCategory.length > 0 ?
                          recipeCategory.map(data => (
                            <option value={data.RCGroupId} >
                              {data.GroupName}
                            </option>
                          )) :
                          <option value="" selected disabled>
                            Loading..
                          </option>
                      }

                    </select>
                  </div>
                
                  
                  <div className="input__holder">
                    <h5>Name of Dish</h5>
                    <input
                      type="text"
                      name="RecipeName"
                      id=""
                      onChange={handleMainData}
                    />
                  </div>

                  <div className="input__holder">
                    <h5>Prep Time</h5>
                    <input
                      type="text"
                      name="PreprationTime"
                      id=""
                      value={prepTime}
                      onChange={(e) => setPrepTime(e.target.value)}
                    />
                  </div>
                  <div className="input__holder">
                    <h5>Cook Time</h5>
                    <input
                      type="text"
                      name="CookTime"
                      id=""
                      value={cookTime}
                      onChange={(e) => setCookTime(e.target.value)}
                    />
                  </div>

                  <div className="input__holder">
                    <h5>Cooking Temp</h5>
                    <input
                      type="text"
                      name="CookingTemp"
                      id=""
                      value={cookTemp}
                      onChange={(e) => setCookTemp(e.target.value)}
                    />
                  </div>
                  <div className="input__holder">
                    <h5>packing details</h5>
                    <FormControl sx={{ m: 1, width: 255 }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Packing Details
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={packingType}
                        onChange={handleChangeForPacking}
                        input={<OutlinedInput label="Packing Type" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                      >
                        {packingTypeArray.map((name,index) => (
                          <MenuItem key={name} value={index+1}>
                            <Checkbox checked={packingType.indexOf(name) > -1} /> 
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>

                  <div className="input__holder">
                    <h5>Tools and utensils</h5>
                    <FormControl sx={{ m: 1, width: 255 }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Tools and utensils
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={toolid}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tools and utensils" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                      >
                        {names.map((name,index) => (
                          <MenuItem key={name} value={index+1}>
                            <Checkbox checked={toolid.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div
                  className="difficultey__section"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 100,
                    width: "100%",
                  }}
                >
                  <h3 style={{ marginBottom: "20px" }}>Difficulty</h3>
                  <NewRatting setDifficulty={setDifficulty} />
                </div>
                <div className="checkbox__section">
                  <div className="checkbox__main__container">
                    <div className="checkbox__container">
                      <Checkbox
                        {...label}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                        name="DairyFree"
                        id=""
                        // checked={dairyFree}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setDairyFree(1)
                          } else {
                            setDairyFree(0)
                          }
                        }}
                      />
                      <h4>Dairy free</h4>
                    </div>
                    <div className="checkbox__container">
                      <Checkbox
                        {...label}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                        name="GlutenFree"
                        id=""
                        // checked={glutenFree}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setGlutenFree(1)
                          } else {
                            setGlutenFree(0)
                          }
                        }}
                      />
                      <h4>Gluten free</h4>
                    </div>
                    <div className="checkbox__container">
                      <Checkbox
                        {...label}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                        name="Vegtarian"
                        id=""
                        // checked={vegtarian}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setVegtarian(1)
                          } else {
                            setVegtarian(0)
                          }
                        }}
                      />
                      <h4>Vegitarian</h4>
                    </div>
                    <div className="checkbox__container">
                      <Checkbox
                        {...label}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                        name="LowCarb"
                        id=""
                        // checked={lowCarb}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setLowCarb(1)
                          } else {
                            setLowCarb(0)
                          }
                        }}
                      />
                      <h4>Low carb</h4>
                    </div>
                    <div className="checkbox__container">
                      <Checkbox
                        {...label}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                        name="highFat"
                        id=""
                        // checked={highFat}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            setHighFat(1)
                          } else {
                            setHighFat(0)
                          }
                        }}
                      />
                      <h4>High fat</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right__section">
                <div className="recipeCard__image__upload__Section">
                  <div className="drop__image__section">
                    <section className="container">
                      <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} onChange={ImagePreview} />

                        <svg
                          id="surface1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="56.981"
                          height="46.028"
                          viewBox="0 0 56.981 46.028"
                        >
                          <path
                            id="Path_3047"
                            data-name="Path 3047"
                            d="M32.876,1.969a15.368,15.368,0,0,0-11.161,4.8,12.794,12.794,0,0,0-3.086-.417A11.993,11.993,0,0,0,6.572,18.207,11.033,11.033,0,0,0,0,28.273,10.844,10.844,0,0,0,10.962,39.226h8.971c0-1.313-.209-2.625-.209-4.381H10.962A6.557,6.557,0,0,1,9.449,21.9l1.921-.617L10.962,19.3v-.9a7.765,7.765,0,0,1,7.667-7.667,7.776,7.776,0,0,1,3.086.687l1.5.608.887-1.3a11.435,11.435,0,0,1,8.771-4.39,10.856,10.856,0,0,1,10.753,9.18l.2,1.573,1.513.209A8.925,8.925,0,0,1,52.6,25.874a8.794,8.794,0,0,1-8.771,8.762H37.257c0,1.756-.209,3.069-.209,4.39h6.78A13.187,13.187,0,0,0,56.981,25.874,12.836,12.836,0,0,0,47.8,13.617,15.514,15.514,0,0,0,32.876,1.969ZM28.077,16.9a1.024,1.024,0,0,0-.478.2,78.294,78.294,0,0,0-9.857,11.17,3.035,3.035,0,0,0-.209,1.5,1.581,1.581,0,0,0,1.3.687h4.59s.93,15.795,1.365,16.229A4.584,4.584,0,0,0,28.286,48c1.53,0,3.26-.643,3.695-1.3.443-.435,1.1-16.229,1.1-16.229h4.868a1.334,1.334,0,0,0,1.3-.687,1.8,1.8,0,0,0,0-1.5A78.1,78.1,0,0,0,29.381,17.1a1.347,1.347,0,0,0-.887-.2A2.21,2.21,0,0,0,28.077,16.9Z"
                            transform="translate(0 -1.969)"
                            fill="#ffff"
                          />
                        </svg>

                        <p>Drag and drop file</p>

                        <button type="button">Browse</button>
                      </div>
                      <aside className="assside__section">
                        <img
                          style={{ width: "100px" }}
                          src={Mainvalues?.image}
                        ></img>
                      </aside>
                    </section>
                  </div>
                </div>
                <div className="ingredient__section">
                  <div className="ingredient__top__section">
                    <div className="input__Section">
                      <h4>Ingredients</h4>
                      <select
                        name=""
                        id=""
                        value={selectIngredient}
                        onChange={(e) => setSelectIngredient(e.target.value)}
                      >
                        <option value="">select</option>
                        <option value="Salt">Salt</option>
                        <option value="Onion">Onion</option>
                        <option value="Ginger">Ginger</option>
                        <option value="Oil">Oil</option>
                        <option value="Oil">Oil</option>
                      </select>

                      <input
                        type="number"
                        value={ingredientInput}
                        onChange={(e) => setIngredientInput(e.target.value)}
                      />

                      <select
                        class="select__units"
                        name=""
                        id=""
                        value={selectUnit}
                        onChange={(e) => setSelectUnit(e.target.value)}
                      >
                        <option >unit</option>
                        <option value="kg" >kg</option>
                        <option value="liter">liter</option>
                        <option value="ml">ml</option>
                        <option value="gram">gram</option>
                        <option value="pounds">pounds</option>
                      </select>

                      <div
                        className="add__btn__section"
                        onClick={() => onAddnewRecipeIngredient()}
                      >
                        <AddIcon />
                      </div>

                      <div className="deletbtn__sction">
                        <CloseIcon />
                      </div>
                    </div>
                  </div>
                  <div className="ingredient__bottom__section">
                    <div className="bottom__section__wrapper">
                      <ul>
                        {newArray.map((items, index) => (
                          <li key={index}>
                            {items.ingredientInput} {items.selectUnit}{" "}
                            {items.selectIngredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom__section">
              <h3>Preprations</h3>

              <div className="rich__text__Section__wrapperss">
                {/* <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="how is the Preprations done"
              ></textarea> */}

                <>
                  <Editor
                    apiKey="p89maxr82xn26hrs38debj5hfzw20l5tdfjr3xvpxjqfpo80"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue="<p>How is it prepared</p>"
                    init={{
                      height: 300,
                      menubar: false,
                      plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | " +
                        "bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                </>
              </div>

              <div className="button__Section">
                <button
                  type="submit"
                  onClick={(e) => {
                    setFormSubmitting(!formSubmitiing);
                    handleMainData(e);
                  }}
                >
                  Save
                </button>

                <button>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RecipeInventory;
