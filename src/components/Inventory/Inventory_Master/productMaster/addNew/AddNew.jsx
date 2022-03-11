import React, { useEffect, useState } from "react";

import "./addNew.scss";
import { useDropzone } from "react-dropzone";
import SucessfullMag from "../../../Transaction Manager/Reports/Stock Cost/clossing stock print/SucessfullMessage/SucessfullMag";

import SucessSnackbars from "../../../../basic components/sucessSidePopup";
import FailSnackbars from "../../../../basic components/failSnackBar";
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// DRAG IMAGE SECTION

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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function AddNew({
  setAddNewBtn,
  setMainTableView,
  editOption,
  addNewBtn,
  setEditOption,
}) {
  const datas = {
    InvtGid: 2,
    ProductCode: null,
    HsnCode: null,
    PName: "",
    Cid: null,
    UOMid: null,
    CreatedBy: "ATHUL",
    RackNo: null,
    MaxStockLevel: null,
    ReorderLevel: null,
    ShortName: "",
    Discount: null,
    Image: "",
    Taxid: null,
    MeasureSymbol: null,
    GroupName: null,
    Percentage: null,
    UserID: 1,
    CMPid: 1,
    MenuBlocked: null,
  };

  const [files, setFiles] = useState([]);
  const [DataToSend, setDataToSend] = useState(datas);
  const [sucessfullMsg, setSucessfullmsg] = useState(false);
  const [snackbarSucess, setSnackbarSucess] = useState(false);
  const [snackbarFail, setSnackBarFail] = useState(false);
  const [catregoryDropdown, setCategoryDropdown] = useState([]);
  const [unitList, setUnitList] = useState([]);
  const [taxList, setTaxList] = useState([]);

  const ShowPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let ImageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setDataToSend({
          ...DataToSend,

          Image:
            "https://media.istockphoto.com/photos/green-grape-isolated-on-white-background-picture-id489520104?k=20&m=489520104&s=612x612&w=0&h=n1_B8jn9fb4dQibPhkXftNpjKA4Rvrjp_ttgj6sq5jY=",
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

  const handleAddDataToSend = (evt) => {
    const name = evt.target.value;
    const OrderBlockeds = evt.target.checked;
    setDataToSend({
      ...DataToSend,
      [evt.target.name]: name,
      MenuBlocked: OrderBlockeds,
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  const cancelBtn = (e) => {
    setAddNewBtn(false);
    setMainTableView(true);
    setEditOption(false);
  };

  return (
    <>
      {snackbarSucess && <SucessSnackbars />}
      {snackbarFail && <FailSnackbars />}
      {sucessfullMsg && (
        <SucessfullMag
          setPrintSucess={setSucessfullmsg}
          messagetoPrint={"Save Sucessfully"}
        />
      )}
      <div className="add__new__sections">
        <div className="headding__Section">
          <h2>Product Master</h2>
        </div>

        <div className="inner__Section">
          <form autoComplete="off" action="" onSubmit={submitFormHandler}>
            <div className="top__secton">
              <div className="lef__Side__form">
                <div className="input__Sections">
                  <h5>Product Code</h5>
                  <input
                    type="number"
                    name="ProductCode"
                    onChange={handleAddDataToSend}
                    required
                    value={DataToSend.ProductCode}
                  />
                </div>
                <div className="input__Sections">
                  <h5>HSN Code</h5>
                  <input
                    type="number"
                    required
                    name="HsnCode"
                    onChange={handleAddDataToSend}
                    value={DataToSend.HsnCode}
                  />
                </div>
                <div className="input__Sections">
                  <h5>Product Name</h5>
                  <input
                    type="text"
                    required
                    name="PName"
                    onChange={handleAddDataToSend}
                    value={DataToSend.PName}
                  />
                </div>
                <div className="input__Sections">
                  <h5>Category</h5>
                  <select
                    name="Cid"
                    id=""
                    required
                    onChange={handleAddDataToSend}
                    value={DataToSend.Cid}
                  >
                    <option value="" disabled selected>
                      Choose Category
                    </option>
                    <option value="">q</option>
                  </select>
                </div>
                <div className="input__Sections">
                  <h5>Rack No</h5>
                  <input
                    required
                    type="number"
                    name="RackNo"
                    onChange={handleAddDataToSend}
                    value={DataToSend.RackNo}
                  />
                </div>
                <div className="input__Sections">
                  <h5>Short Name</h5>
                  <input
                    type="text"
                    name="ShortName"
                    onChange={handleAddDataToSend}
                    value={DataToSend?.ShortName}
                  />
                </div>
                <div className="input__Sections">
                  <h5>Order Blocked</h5>
                  <input
                    className="Orderblock__Checkbox"
                    type="checkbox"
                    name="MenuBlocked"
                    id=""
                    onChange={handleAddDataToSend}
                    checked={DataToSend.MenuBlocked}
                  />
                </div>
              </div>
              <div className="right__side__form">
                <div className="input__Sections">
                  <h5>Unit</h5>
                  <select
                    name=""
                    id=""
                    onChange={handleAddDataToSend}
                    value={DataToSend.UOMid}
                  >
                    <option value="" disabled selected>
                      Choose Unit
                    </option>
                    {unitList?.map((cate) => (
                      <option value={cate.Value}>{cate.Text}</option>
                    ))}
                  </select>
                </div>

                <div className="input__Sections">
                  <h5>Tax</h5>
                  <select
                    name=""
                    id=""
                    onChange={handleAddDataToSend}
                    value={DataToSend.Taxid}
                  >
                    <option value="" disabled selected>
                      Choose Tax
                    </option>
                    <option value="">1</option>
                  </select>
                </div>

                <div className="input__Sections">
                  <h5>Re-Order Level</h5>
                  <input
                    type="number"
                    className="Input__resizer"
                    name="ReorderLevel"
                    value={DataToSend.ReorderLevel}
                    onChange={handleAddDataToSend}
                  />
                </div>

                <div className="input__Sections">
                  <h5>Max. Stock Level</h5>
                  <input
                    type="number"
                    className="Input__resizer"
                    name="MaxStockLevel"
                    onChange={handleAddDataToSend}
                    value={DataToSend.MaxStockLevel}
                  />
                </div>

                <div className="input__Sections">
                  <h5>Discount</h5>
                  <input
                    type="number"
                    className="Input__resizer"
                    name="Discount"
                    onChange={handleAddDataToSend}
                    value={DataToSend.Discount}
                  />
                </div>
                <div className="drop__image__section">
                  <section className="container">
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input
                        {...getInputProps()}
                        name="image"
                        onChange={ShowPreview}
                      />
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
                        src={DataToSend?.Image}
                      ></img>
                    </aside>
                  </section>
                </div>
              </div>
            </div>
            <div className="bottom__btn__section">
              {addNewBtn && <button type="submit">save</button>}

              {editOption && <button type="submit">Update</button>}
            </div>
          </form>
          <div className="cancel__btn__section__bttom">
            <button onClick={cancelBtn}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNew;
