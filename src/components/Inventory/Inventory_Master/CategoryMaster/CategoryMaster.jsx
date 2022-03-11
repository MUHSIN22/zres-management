import React, { useEffect, useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import "./categoryMaster.scss";
import { useDropzone } from "react-dropzone";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

import SucessSnackbars from "../../../basic components/sucessSidePopup";
import FailSnackbars from "../../../basic components/failSnackBar";
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

function CategoryMaster({ fetchCategory, categoryList, createCategory }) {
  const [categoryMoreClicked, setCategoryMoreClicked] = useState(false);
  const [PopUp, setPopUp] = useState(false);
  const [questionPopUp, setQuestionPopUp] = useState(false);
  const [sucessUpdatePopup, setSucessUpdatePopUp] = useState(false);
  const [files, setFiles] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("Discount");
  const [dataFromServer, setDataFromServer] = useState([]);
  const [loading, setloading] = useState(false);

  const [snackbarSucess, setSnackbarSucess] = useState(false);
  const [snackbarFail, setSnackBarFail] = useState(false);

  const [catregoryDropdown, setCategoryDropdown] = useState([]);

  const datas = {
    // categoryCode: "",

    Cid: 1,
    CategoryCode: 1,
    Name: "",
    Type: null,
    Taxid: null,
    Image: "",
    Discount: 0,
    Percentage: null,
    UserID: 1,
    CMPid: 1,
    Photo: null,
  };

  const [dataToSend, setDataToSend] = useState(datas);

  const handleAddCategoryToSend = (e) => {
    const value = e.target.value;
    setDataToSend({
      ...dataToSend,
      [e.target.name]: value,
    });
  };

  // to get the url and data of image

  const ImagePreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let ImageFile = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (x) => {
        setDataToSend({
          ...dataToSend,
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

  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setSelectedRadio(target.value);
    }
  };

  // function to save

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log("the datta to send ", dataFromServer);
  return (
    <>
      {snackbarSucess && <SucessSnackbars />}
      {snackbarFail && <FailSnackbars />}
      {PopUp && (
        <div className="ppoup__Sections">
          {questionPopUp && (
            <>
              <div className="popUp__question__Section">
                <div className="headder__Section__popup">
                  <div className="question__Section">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="116.804"
                      height="104.274"
                      viewBox="0 0 116.804 104.274"
                    >
                      <g id="surface1" transform="translate(6261.817 1090.895)">
                        <path
                          id="Path_3044"
                          data-name="Path 3044"
                          d="M114.6,87.754,68.775,8.373c-5.6-9.69-14.77-9.69-20.374,0L2.573,87.754c-5.6,9.708-1.012,17.626,10.2,17.626h91.656C115.616,105.38,120.189,97.462,114.6,87.754ZM52.288,30.9a8.839,8.839,0,0,1,12.6-.036,9.365,9.365,0,0,1,2.458,6.617c0,2.26-3.417,19-4.556,31.149H54.548c-.995-12.148-4.718-28.889-4.718-31.149A9.366,9.366,0,0,1,52.288,30.9ZM64.762,88.766a8.794,8.794,0,0,1-12.347,0,8.224,8.224,0,0,1-2.585-6.128,8.731,8.731,0,0,1,14.932-6.165,8.36,8.36,0,0,1,2.585,6.165A8.224,8.224,0,0,1,64.762,88.766Z"
                          transform="translate(-6262 -1092)"
                          fill="#c30208"
                        />
                      </g>
                    </svg>

                    {dataToSend.Discount > 0 && dataToSend.tax <= 0 && (
                      <h2>
                        {" "}
                        Are you sure you want to set discount for{" "}
                        {dataToSend.categoryName} ?{" "}
                      </h2>
                    )}

                    {dataToSend.Discount <= 0 && dataToSend.tax > 0 && (
                      <h2>
                        {" "}
                        Are you sure you want to set Tax for{" "}
                        {dataToSend.categoryName} ?{" "}
                      </h2>
                    )}

                    {dataToSend.Discount > 0 && dataToSend.tax > 0 && (
                      <h2>
                        {" "}
                        Are you sure you want to set tax and discount for{" "}
                        {dataToSend.categoryName} ?{" "}
                      </h2>
                    )}
                  </div>
                </div>
                <div className="footer__Section">
                  <div className="button__Section">
                    <button
                      onClick={() => {
                        setPopUp(false);
                      }}
                    >
                      yes
                    </button>
                    <button onClick={() => setPopUp(false)}>No</button>
                  </div>
                </div>
              </div>
            </>
          )}
          {sucessUpdatePopup && (
            <div className="sucess__poppup">
              <div className="headder__Section">
                <h2>Update Successfully !</h2>
              </div>
              <div className="footer__Section">
                <button
                  onClick={() => {
                    setPopUp(false);
                    // setQuestionPopUp(false);
                    setSucessUpdatePopUp(false);
                  }}
                >
                  Ok
                </button>
              </div>
            </div>
          )}
          {/* sucess pop up ,it pops second */}
        </div>
      )}

      <div className="category__master">
        <div className="headder__name__section">
          <h2>Category Master</h2>
        </div>

        <div className="body__wraper">
          <div className="left__side__sectiion">
            <div className="top__sections">
              {!categoryMoreClicked && (
                <AddCircleOutlineOutlinedIcon
                  onClick={() => setCategoryMoreClicked(true)}
                />
              )}

              {categoryMoreClicked && (
                <RemoveCircleOutlineOutlinedIcon
                  onClick={() => setCategoryMoreClicked(false)}
                />
              )}

              <h4>Product Category</h4>
            </div>

            {categoryMoreClicked && (
              <>
                <div className="category__content">
                  <div className="svg__cat__Section">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.5"
                      height="20.5"
                      viewBox="0 0 14.5 13.5"
                    >
                      <line
                        id="Line_157"
                        data-name="Line 157"
                        y2="13"
                        transform="translate(0.5)"
                        fill="none"
                        stroke="#040153"
                        stroke-width="1"
                      />
                      <line
                        id="Line_158"
                        data-name="Line 158"
                        x1="14"
                        transform="translate(0.5 13)"
                        fill="none"
                        stroke="#040153"
                        stroke-width="1"
                      />
                    </svg>
                  </div>

                  <div className="category__name">
                    <h5>Fruits</h5>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="right__side__Section">
            <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
              <div className="top_Section">
                <div className="input__sections">
                  <div className="left__input__Section">
                    <div className="sections">
                      <h3>Category Code</h3>
                      <input
                        className="categorycode__input"
                        type="number"
                        required
                        name="categoryCode"
                        onChange={handleAddCategoryToSend}
                        value={dataToSend.categoryCode}
                      />
                    </div>
                    <div className="sections">
                      <h3>Category Name</h3>
                      <input
                        type="text"
                        required
                        name="name"
                        value={dataToSend.name}
                        onChange={handleAddCategoryToSend}
                      />
                    </div>
                  </div>
                  <div className="right__image__drag__section">
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
                            src={dataToSend?.Image}
                          ></img>
                        </aside>
                      </section>
                    </div>
                  </div>
                </div>

                {/* <div className="button__wrapper__Section">
                  <button>Save</button>
                  <button>Delete</button>
                  <button>Cancel</button>
                </div> */}
              </div>
              <hr />
              <div className="bottom__Sectiom">
                <div className="radio__btn__Section">
                  <div className="radio__Section">
                    <input
                      type="radio"
                      id="Discount"
                      value="Discount"
                      onChange={handleChange}
                      checked={selectedRadio == "Discount"}
                    />
                      <label for="html">Discount</label>
                  </div>
                   {" "}
                  <div className="radio__Section">
                    <input
                      type="radio"
                      id="Tax"
                      onChange={handleChange}
                      name="tax"
                      value="Tax"
                      checked={selectedRadio == "Tax"}
                    />
                      <label for="Discount">Tax</label>
                  </div>
                  <br />
                </div>

                <div className="input__area__section__wrapper">
                  {/* tax sectiom */}

                  {selectedRadio === "Tax" && (
                    <div className="input_Sections">
                      <h3>Choose tax from combo</h3>

                      <select
                        style={{
                          width: "50%",
                          height: "30px",
                          border: "none",
                          outline: "none",
                          boxShadow: "0 0 10px rgb(146, 146, 146)",
                          borderRadius: "8px",
                          paddingLeft: "10px",
                        }}
                        name="Taxid"
                        id=""
                        onChange={handleAddCategoryToSend}
                        value={dataToSend.Taxid}
                      >
                        <option value="" disabled selected>
                          Select Tax{" "}
                        </option>
                        {catregoryDropdown.map((data) => (
                          <option value={data.Value}>{data.Text}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* discount section */}

                  {selectedRadio === "Discount" && (
                    <div hidden className="input_Sections">
                      <h3>Enter Discount Percentage</h3>
                      <input
                        required
                        type="number"
                        name="Discount"
                        value={dataToSend.Discount}
                        onChange={handleAddCategoryToSend}
                      />
                    </div>
                  )}
                </div>

                <div className="button__Section">
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#040153",
                      color: "#fff",
                    }}
                  >
                    Save
                  </button>
                  <button>Delete</button>
                  <button>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryMaster;
