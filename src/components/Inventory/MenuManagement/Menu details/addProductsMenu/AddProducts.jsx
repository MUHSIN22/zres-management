import { Checkbox } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./addProducts.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import SucessfullMag from "../../../Transaction Manager/Reports/Stock Cost/clossing stock print/SucessfullMessage/SucessfullMag";
import { data } from "jquery";

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

const optionselection = {
  option: "",
  price: "",
};

function AddProducts({
  addProducts,
  editProduct,
  setAddProducts,
  setEditProduct,
  updatableProducts,
  setMainPage,
}) {
  const Data = {
    menuCode: "",
    optionSelected: "",
    price: "",
    image: "",
    menuName: "",
    category:"",
    status:"",
    sizeandprice: [],
    imageFile: null,
  };
  const [menuCode, setMenucode] = useState("");
  const [menuName, SetMenuName] = useState("");
  const [price, setPrice] = useState("");
  const [activeBlock, setActiveBlock] = useState("");
  const [image, setImage] = useState("");
  const [addSucessfully, setAddSucessfully] = useState(false);
  const [sizesetting, setSizeSetting] = useState(false);
  const [categoryname, setCategoryname] = useState("");
  // const [OptionDataSelected, setOptionDataSelected] = useState(optionselection);
  const [dataToSend, setDataToSend] = useState(Data);
  const [diffSizeSelectionStored, setDiffSizeSelectionStored] = useState([]);
  const handleAddCategoryToSend = (e) => {
    const value = e.target.value;
    const checkbox = e.target.checked;
    setDataToSend({
      ...dataToSend,
      [e.target.name]: value,
      status:checkbox
    });
  };

 

  const handlesizeSelectionData = () => {
    setDiffSizeSelectionStored([...diffSizeSelectionStored, dataToSend]);
    setDataToSend(Data);
  };
  console.log("LOL", diffSizeSelectionStored);

  console.log("THEOPTION SELECTED", dataToSend);

  const [files, setFiles] = useState([]);

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

  // to add divs
  const [rowListData, setRowListData] = useState([]);

  const [divCount, setDivCount] = useState(0);
  const [deleteClicked, setDeleteClicked] = useState();
  console.log(divCount);
  const handleAddDiv = () => {
    setDivCount(divCount + 1);
  };
  const rowList = [];

  console.log("RowList", rowList);
  // add div ends

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  useEffect(() => {
    if (editProduct) {
      const HandleUpdateProductsFeild = () => {
        // SetMenuName(updatableProducts.ItemName);
        // setMenucode(updatableProducts.MenuID)
        // setPrice(updatableProducts.ItemPrice);
        // setImage(updatableProducts.Image);
        // setCategoryname(updatableProducts.CategoryName);
        setActiveBlock(updatableProducts.Status);
        Data.menuCode= updatableProducts.MenuID
        Data.menuName= updatableProducts.ItemName
        Data.price= updatableProducts.ItemPrice
        Data.menuCode= updatableProducts.MenuID
        Data.image= updatableProducts.Image
        Data.category= updatableProducts.CategoryName
        Data.status= updatableProducts.IsActive

      };
      HandleUpdateProductsFeild();
    } else {
      SetMenuName("");
      setPrice("");
      setImage("");
      setActiveBlock("");
    }
  }, [updatableProducts, editProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddSucessfully(true);
  };

  return (
    <>
      {addSucessfully && (
        <SucessfullMag
          setPrintSucess={setAddSucessfully}
          messagetoPrint={"Save SucessFully"}
        />
      )}
      <div className="AddProducts">
        <div className="headding__Section">
          <h2>Product Master</h2>
        </div>

        <div className="inner__Section">
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="top__secton">
              <div className="lef__Side__form">
                <div className="input__Sections">
                  <h5>Menu Code</h5>
                  <input
                    type="number"
                    name="menuCode"
                    value={dataToSend.menuCode}
                    onChange={handleAddCategoryToSend}
                  />
                </div>
                <div className="input__Sections">
                  <h5>Menu Name</h5>
                  <input
                    type="text"
                    name="menuName"
                    value={dataToSend.menuName}
                    onChange={handleAddCategoryToSend}
                    
                  />
                </div>
                <div className="input__Sections">
                  <h5>Category Name</h5>
                  <input type="text"
                  name="category"
                  value={dataToSend.category}
                  onChange={handleAddCategoryToSend}
                   />
                </div>
                <div className="input__Sections priceInput">
                  <h5>Price</h5>

                  <input
                    type="number"
                    name="price"
                    value={dataToSend.price}
                    onChange={handleAddCategoryToSend}
                  />
                   
                  <AddBoxOutlinedIcon
                    onClick={() => setSizeSetting(!sizesetting)}
                  />
                </div>

                {/* when add btn press new data will render  */}
                {sizesetting && (
                  <>
                    <div class="input__Sections__pricesanssize">
                      <div className="left__section">
                        {" "}
                        <h5>Size</h5>
                      </div>
                      <div className="right__Section">
                        <div className="section__wrapper__lists">
                          <select
                            required
                            name="optionSelected"
                            value={dataToSend.option}
                            onChange={handleAddCategoryToSend}
                          >
                            <option value="" disabled selected>
                              Select Option
                            </option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                          </select>

                          <input
                            required
                            name="price"
                            value={dataToSend.price}
                            onChange={handleAddCategoryToSend}
                            type="number"
                          />
                        </div>
                        <AddCircleIcon onClick={handlesizeSelectionData} />
                      </div>
                    </div>

                    <div className="add__result__section">
                      <div className="inner__content__holder">
                        <ul>
                          {diffSizeSelectionStored.map((item) => (
                            <li>
                              <div className="addedItems">
                                <h3>{item.optionSelected}</h3>
                                <h3>{item.price}</h3>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="right__side__form">
                <div className="input__checkbox__section">
                  <div className="sections">
                    <input
                      type="checkbox"
                      name="status"
                      id=""
                      checked={editProduct ? dataToSend.status === true : null}
                      onChange={handleAddCategoryToSend}

                    />
                    <h5>Active</h5>
                  </div>

                  <div className="sections">
                    <input
                      type="checkbox"
                      name="status"
                      id="block"
                      checked={editProduct ? dataToSend.status === false :null}
                    />
                    <h5>Block</h5>
                  </div>
                </div>
                <div className="drop__image__section">
                  <section className="container">
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()}  onChange={ImagePreview} />

                      {addProducts && (
                        <>
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
                        </>
                      )}

                      {editProduct && <img src={`data:image/png;base64,${dataToSend.image}`} alt="" />}
                    </div>
                    <aside className="assside__section">
                      {" "}
                      <aside className="assside__section">
                        <img
                          style={{ width: "100px" }}
                          src={dataToSend?.image}
                          
                        ></img>
                      </aside>
                    </aside>
                  </section>
                </div>
              </div>
            </div>
            <div className="bottom__btn__section">
              {editProduct ? (
                <button>Update</button>
              ) : (
                <button
                  style={{
                    backgroundColor: "#040153",
                    color: "#ffff",
                  }}
                  type="submit"
                >
                  save
                </button>
              )}

              <button
                onClick={() => {
                  setAddProducts(false);
                  setMainPage(true);
                  setEditProduct(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProducts;
