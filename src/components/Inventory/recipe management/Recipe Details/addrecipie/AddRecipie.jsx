import "./addResipie.scss";
import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import Rating from "./ratting/Ratting";
import NewRatting from "../../Recipie Inventory/ratting/NewRatting";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RichTextEditor from "../../Recipie Inventory/richtext editor/RichTextEditor";
import TinyMceRichText from "../../Recipie Inventory/tynymce/TinyMceRichText";
import { Editor } from "@tinymce/tinymce-react";
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

function AddRecipie({ setRecipieDataView, setAddProducts }) {
  const [toolid, settoolid] = React.useState([]);
  const [RichTextContent, setRichTextContent] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    settoolid(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [difficulty, setDifficulty] = useState(0);
  const [prepration, setPrepration] = useState("");
  const [Mainvalues, setMainValues] = useState(datakeyValue);
  const [formSubmitiing, setFormSubmitting] = useState(false);

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

  const [enteredIncreadient, setenteredIncreadient] = useState();
  const [ingredientList, setIncreadientList] = useState([]);

  const handleAddincreadients = () => {
    setIncreadientList([...ingredientList, enteredIncreadient]);
    setenteredIncreadient("");
  };

  const handleCancelBtn = () => {
    setRecipieDataView(true);
    setAddProducts(false);
  };

  const handleMainData = (evt) => {
    const name = evt.target.value;

    setMainValues({
      ...Mainvalues,
      [evt.target.name]: name,
      Ingredients: ingredientList,
      ToolId: toolid,
      difficulty: difficulty,
      Preprations: prepration,
    });
  };

  const handleCheckboxSection = (evt) => {
    const checked = evt.target.checked;
    setMainValues({
      ...Mainvalues,
      [evt.target.name]: checked,
    });
  };

  const editorRef = useRef(null);
  const handleFormSubmitSelction = (e) => {
    e.preventDefault();
    if (editorRef.current) {
      const richValue = editorRef.current.getContent();
      setPrepration(richValue);

      if (Mainvalues.Preprations === "") {
        window.alert("Preperation empty");
      } else {
        window.alert("saved sucess");
        console.log("MAIN VALUE", Mainvalues);
      }
    }
  };

  return (
    <div className="recipeCard">
      <div className="recipeCard__headder">
        <h2>Recipe Card</h2>
      </div>

      <form onSubmit={handleFormSubmitSelction}>
        <div className="recipeCard__body__section">
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
                  <img style={{ width: "100px" }} src={Mainvalues?.image}></img>
                </aside>
              </section>
            </div>
          </div>

          <div className="recipeCard__other__details">
            <div className="left__recipeCard__other__detailss">
              <div className="recipie__name__section">
                <select
                  style={{
                    width: "90%",
                    outline: "none",
                    border: "1px solid #040153",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    fontSize: "12px",
                  }}
                  name="recipegroupid"
                  id=""
                  value={Mainvalues.recipegroupid}
                  onChange={handleMainData}
                >
                  <option value="" selected disabled>
                    Select Recipe Group
                  </option>
                  <option value="1">first option</option>
                  <option value="2">second Option</option>
                </select>
                <h4>Recipe Group</h4>
              </div>
              <div className="recipie__name__section">
                <input
                  type="text"
                  name="RecipeName"
                  id=""
                  value={Mainvalues.RecipeName}
                  onChange={handleMainData}
                />
                <h4>Name of dish</h4>
              </div>

              <div className="recipieDefficulty__Section">
                <h4 style={{ textAlign: "left" }}>Difficulty</h4>

                <NewRatting setDifficulty={setDifficulty} />

                <div className="checkbox__section">
                  <div className="checkbox__main__container">
                    <div className="checkbox__container">
                      <Checkbox
                        {...label}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                        name="DairyFree"
                        id=""
                        checked={Mainvalues.DairyFree}
                        onChange={handleCheckboxSection}
                      />
                      <h4>Dairy free</h4>
                    </div>
                    <div className="checkbox__container">
                      <Checkbox
                        {...label}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                        name="GlutenFree"
                        id=""
                        checked={Mainvalues.GlutenFree}
                        onChange={handleCheckboxSection}
                      />
                      <h4>Gluten free</h4>
                    </div>
                    <div className="checkbox__container">
                      <Checkbox
                        {...label}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                        name="Vegtarian"
                        id=""
                        checked={Mainvalues.Vegtarian}
                        onChange={handleCheckboxSection}
                      />
                      <h4>Vegitarian</h4>
                    </div>
                    <div className="checkbox__container">
                      <Checkbox
                        {...label}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                        name="LowCarb"
                        id=""
                        checked={Mainvalues.LowCarb}
                        onChange={handleCheckboxSection}
                      />
                      <h4>Low carb</h4>
                    </div>
                    <div className="checkbox__container">
                      <Checkbox
                        {...label}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                        name="highFat"
                        id=""
                        checked={Mainvalues.highFat}
                        onChange={handleCheckboxSection}
                      />
                      <h4>High fat</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="recipie__name__section">
                <input
                  type="text"
                  name="PreprationTime"
                  id=""
                  value={Mainvalues.PreprationTime}
                  onChange={handleMainData}
                />
                <h4>Prep Time</h4>
              </div>

              <div className="recipie__name__section">
                <input
                  type="text"
                  name="CookTime"
                  id=""
                  value={Mainvalues.CookTime}
                  onChange={handleMainData}
                />
                <h4>Cook Time</h4>
              </div>

              <div className="recipie__name__section">
                <input
                  type="text"
                  name="CookingTemp"
                  id=""
                  value={Mainvalues.CookingTemp}
                  onChange={handleMainData}
                />
                <h4>Cooking Temp</h4>
              </div>

              <div className="recipie__name__section">
                <FormControl sx={{ m: 1, width: "85%" }}>
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
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={toolid.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="right__recipeCard__other__detailss">
              <div className="recipeCard__add__ingredients__section">
                <div className="top__input__area__Section">
                  <input
                    type="text"
                    value={enteredIncreadient}
                    onChange={(e) => setenteredIncreadient(e.target.value)}
                    placeholder="Ingredients"
                  />
                  <AddIcon onClick={handleAddincreadients} />
                </div>

                <div className="ingrident__shower__section">
                  <ul>
                    {ingredientList.map((incre, index) => (
                      <li key={index}>{incre}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="prepration__Section__area">
                <h4>Prepration</h4>

                <div className="richtextEditorSection">
                  <>
                    <Editor
                      apiKey="p89maxr82xn26hrs38debj5hfzw20l5tdfjr3xvpxjqfpo80"
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      initialValue="<p>How is it prepared</p>"
                      init={{
                        height: 400,
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
              </div>
            </div>
          </div>
        </div>

        <div className="recipeCard__bottom__section">
          <button
            onClick={(e) => {
              setFormSubmitting(!formSubmitiing);
              handleMainData(e);
            }}
          >
            Save
          </button>
          <button onClick={handleCancelBtn}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipie;
