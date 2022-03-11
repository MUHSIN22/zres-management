import React from "react";
import "./modalFolderOption.scss";
import CloseIcon from "@mui/icons-material/Close";
function ModalFolderOption({ handleClose }) {
  return (
    <div className="ModalFolderOption">
      <div className="inner__white__div">
        <div className="top__cloase__icon">
          {" "}
          <CloseIcon onClick={() => handleClose()} />
        </div>
      </div>
    </div>
  );
}

export default ModalFolderOption;
