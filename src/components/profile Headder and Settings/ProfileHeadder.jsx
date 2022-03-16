import React from "react";
import { useNavigate } from "react-router-dom";
import "./profileHeadder.scss";
function ProfileHeadder() {
  const navigate = useNavigate();

  const handleSettingMenu = () => {
    navigate("/setting");
  };

  return (
    <div>
      <div className="profileheadder">
        <h4>Hi Anju !</h4>
        <svg
          onClick={() => handleSettingMenu()}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18.279"
          viewBox="0 0 24 21.279"
        >
          <path
            id="Path_59"
            data-name="Path 59"
            d="M3,27.279H27V23.733H3Zm0-8.866H27V14.866H3ZM3,6V9.547H27V6Z"
            transform="translate(-3 -6)"
            fill="#040153"
          />
        </svg>
      </div>
    </div>
  );
}

export default ProfileHeadder;
