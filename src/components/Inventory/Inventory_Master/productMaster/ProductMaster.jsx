import "./productMaster.scss";
import React, { useEffect, useState } from "react";
import AddNew from "./addNew/AddNew";

function ProductMaster() {
  const [addNewBtn, setAddNewBtn] = useState(false);
  const [mainTableView, setMainTableView] = useState(true);
  const [selectedTr, setSelectedTr] = useState({});
  const [editOption, setEditOption] = useState(false);

  return (
    <div className="productMaster">
      {/* sucess message for add btn */}

      {/* ADD NEW SECTION START */}
      {(addNewBtn || editOption) && (
        <AddNew
          addNewBtn={addNewBtn}
          setAddNewBtn={setAddNewBtn}
          setMainTableView={setMainTableView}
          editOption={editOption}
          dataToEdit={selectedTr}
          setEditOption={setEditOption}
        />
      )}

      {/* ADD NEW SECTION END */}

      {mainTableView && (
        <div className="main__body__section">
          {/* {loading && (
            <div className="loadimg__screen__area">
              <LoadingScreen />
            </div>
          )} */}

          <div className="headder__top__section">
            <div
              className="different__option"
              onClick={() => {
                setAddNewBtn(true);
                setMainTableView(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33.081"
                height="36.389"
                viewBox="0 0 33.081 36.389"
              >
                <g id="surface1" transform="translate(-4 -2)">
                  <path
                    id="Path_3033"
                    data-name="Path 3033"
                    d="M7.308,2A3.315,3.315,0,0,0,4,5.308V31.773a3.314,3.314,0,0,0,3.308,3.308H18.363a11.431,11.431,0,0,1-1-3.308h-.006a11.517,11.517,0,0,1,13.11-13.1V11.924L20.541,2ZM18.887,4.4l9.1,9.175h-9.1Zm9.9,17.445a1.648,1.648,0,0,0-1.144.485L26.472,23.5H23.849a1.657,1.657,0,0,0-1.654,1.654V27.78l-1.169,1.17a1.653,1.653,0,0,0,0,2.339l1.169,1.17v2.623a1.657,1.657,0,0,0,1.654,1.654h2.623l1.17,1.169a1.653,1.653,0,0,0,2.339,0l1.17-1.169h2.623a1.657,1.657,0,0,0,1.654-1.654V32.458l1.169-1.17a1.653,1.653,0,0,0,0-2.339l-1.169-1.17V25.157A1.657,1.657,0,0,0,33.773,23.5H31.15l-1.17-1.169A1.659,1.659,0,0,0,28.785,21.849Zm.026,3.993.485.484a1.653,1.653,0,0,0,1.169.485h1.654v1.654a1.653,1.653,0,0,0,.485,1.169l.484.485L32.6,30.6a1.653,1.653,0,0,0-.485,1.169v1.654H30.465a1.653,1.653,0,0,0-1.169.485l-.485.484-.485-.484a1.653,1.653,0,0,0-1.169-.485H25.5V31.773a1.653,1.653,0,0,0-.485-1.169l-.484-.485.484-.485a1.653,1.653,0,0,0,.485-1.169V26.811h1.654a1.653,1.653,0,0,0,1.169-.485Z"
                    fill="#040153"
                  />
                </g>
              </svg>
              <h5>New</h5>
            </div>
            {/* edit btn */}
            {selectedTr.length !== 0 && (
              <>
                <div className="different__option">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32.5"
                    height="32.476"
                    viewBox="0 0 32.5 32.476"
                  >
                    <g id="surface1" transform="translate(-3.259 -3.453)">
                      <path
                        id="Path_3034"
                        data-name="Path 3034"
                        d="M28.679,3.453a2.26,2.26,0,0,0-1.6.642l-2.4,2.4a1.133,1.133,0,0,0-1.6,0L19.863,9.707a1.128,1.128,0,0,0,0,1.6l.027.029L4.538,26.666a1.706,1.706,0,0,0-.492,1.067l-.383,4.759-.4,2.79a.566.566,0,0,0,.56.647.5.5,0,0,0,.082,0l2.788-.4,4.788-.354a1.689,1.689,0,0,0,1.076-.492L27.91,19.353a1.126,1.126,0,0,0,1.572-.024l3.207-3.207a1.133,1.133,0,0,0,0-1.6l2.407-2.4a2.272,2.272,0,0,0,0-3.209L30.284,4.1A2.258,2.258,0,0,0,28.679,3.453Zm0,1.123a1.133,1.133,0,0,1,.8.321l4.81,4.81a1.133,1.133,0,0,1,0,1.6l-2.4,2.407L25.472,7.3l2.407-2.4A1.123,1.123,0,0,1,28.679,4.576ZM23.869,7.3l.4.4,7.215,7.215.4.4-.8.8a.567.567,0,0,0-.8,0l-.8.8a.567.567,0,0,0,0,.8l-.8.8-8.019-8.019.8-.8a.567.567,0,0,0,.8,0l.8-.8a.567.567,0,0,0,0-.8Zm.8,2.64a.563.563,0,0,0-.4.166l-.8.8a.568.568,0,0,0,.8.8l.8-.8a.567.567,0,0,0-.4-.968Zm2,2.006a.553.553,0,0,0-.4.166l-.8.8a.569.569,0,0,0,0,.8.575.575,0,0,0,.8,0l.8-.8a.56.56,0,0,0,0-.8A.554.554,0,0,0,26.675,11.948Zm-5.981.193,6.413,6.416L12.2,33.44l-.54-2.7,9.405-9.405a.567.567,0,0,0-.8-.8l-9.407,9.407-1.335-.268-.268-1.338,7.8-7.8a.567.567,0,0,0-.8-.8l-7.8,7.8L5.807,27Zm7.988,1.809a.557.557,0,0,0-.4.168l-.8.8a.568.568,0,1,0,.8.8l.8-.8a.564.564,0,0,0,0-.8A.556.556,0,0,0,28.681,13.95Zm-8.818,2.407a.57.57,0,0,0-.4.164l-1.6,1.6a.567.567,0,1,0,.8.8l1.6-1.6a.565.565,0,0,0,0-.8A.551.551,0,0,0,19.863,16.357ZM5.158,28.03l3,.6.326,1.637a.569.569,0,0,0,.445.443l1.634.328.6,3.025-4.314.317L4.813,32.342Z"
                        transform="translate(0 0)"
                        fill="#040153"
                      />
                    </g>
                  </svg>
                  <h5>Edit</h5>
                </div>

                <div className="different__option">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.42"
                    height="20.476"
                    viewBox="0 0 23.42 33.476"
                  >
                    <g id="surface1" transform="translate(-3.594 0.031)">
                      <path
                        id="Path_3035"
                        data-name="Path 3035"
                        d="M11.168-.031A1.177,1.177,0,0,0,9.993,1.144v4c-3.787.43-6.4,1.3-6.4,2.307V9.372c0,.392.419.751,1.132,1.088,1.866.876,5.9,1.48,10.578,1.48s8.706-.6,10.578-1.48c.707-.337,1.132-.7,1.132-1.088V7.456c0-1.039-2.824-1.943-6.835-2.351V1.144A1.177,1.177,0,0,0,19-.031ZM12.344,2.1h5.529c.12,0,.174.56.174,1.262V4.931c-.887-.044-1.785-.087-2.743-.087-.99,0-1.959.038-2.873.087l-.3.044V3.364C12.126,2.662,12.229,2.1,12.344,2.1ZM5.248,13.29a.751.751,0,0,0-.218.392v.087a.464.464,0,0,0,0,.087l.784,16.368c.071,1.284,1.556,3.221,9.49,3.221s9.419-1.937,9.49-3.221l.784-16.368v-.174a.715.715,0,0,0-.218-.392c-1.023,1.039-5.142,1.175-10.056,1.175S6.276,14.329,5.248,13.29Z"
                        fill="#040153"
                      />
                    </g>
                  </svg>
                  <h5>Delete</h5>
                </div>
              </>
            )}
          </div>
          <div className="body__section">
            <h2>Product Details</h2>

            <div className="table__sectionsss">
              <table className="table">
                <thead>
                  <tr>
                    <th>SINo</th>
                    <th>Code</th>
                    <th>Product</th>
                    <th>HSNCode</th>
                    <th>Category</th>
                    <th>Unit</th>
                    <th>Tax</th>
                    <th>RO Level</th>
                    <th>Stock</th>
                    <th>Discount</th>
                    <th>Created By</th>
                    <th>Rack No</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ cursor: "pointer" }}>
                    <td>12</td>
                    <td>4</td>
                    <td>PName</td>
                    <td>HSNCode</td>
                    <td>category</td>
                    <td>kg</td>
                    <td>1</td>
                    <td>12</td>
                    <td>MaxStockLevel</td>
                    <td>Discount</td>
                    <td>CreatedBy</td>
                    <td>RackNo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductMaster;
