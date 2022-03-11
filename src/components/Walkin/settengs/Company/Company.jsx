import React, { useState, useEffect } from "react";
import "./company.scss";
import { useDropzone } from "react-dropzone";

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
function Company() {
  const [files, setFiles] = useState([]);
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
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  return (
    <div className="company">
      <div className="headder__company__section">
        <h2>Company Details</h2>
      </div>

      <div className="company__wrapper">
        <div className="left__company__Section">
          <div className="company__input__section">
            <h4>Company Name</h4>
            <input type="text" />
          </div>

          <div className="company__input__section">
            <h4>Address</h4>
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>

          <div className="company__input__section">
            <h4>Location</h4>
            <input type="text" />
          </div>

          <div className="company__input__section">
            <h4>Pincode</h4>
            <input type="text" />
          </div>

          <div className="company__input__section">
            <h4>Mobile 1</h4>
            <input type="text" />
          </div>

          <div className="company__input__section">
            <h4>Mobile 2</h4>
            <input type="text" />
          </div>
        </div>

        <div className="right__company__section">
          <div className="drop__image__section">
            <section className="container">
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />

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

                <button>Browse</button>
              </div>
              <aside className="assside__section">{thumbs}</aside>
            </section>
          </div>
          <div className="company__input__section">
            <h4>Email</h4>
            <input type="text" />
          </div>
          <div className="company__input__section">
            <h4>Website</h4>
            <input type="text" />
          </div>
          <div className="company__input__section">
            <h4>Tax</h4>
            <input type="text" />
          </div>
          <div className="company__input__section">
            <h4>Tax Date</h4>
            <input type="text" />
          </div>

          <div
            className="company__input__section"
            style={{
              justifyContent: "space-evenly",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <button>Save</button>
            <button>Delete</button>
            <button>Clear</button>
            <button>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
