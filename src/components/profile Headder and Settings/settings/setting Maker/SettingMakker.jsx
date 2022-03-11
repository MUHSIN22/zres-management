import React from "react";
import "./settingMaker.scss";
import TreeViewSection from "./Tree View/TreeView";
function SettingMakker() {
  return (
    <div className="SettingMakker">
      <div className="setting__maker__headder">
        <h2>Setting Maker</h2>
      </div>

      <div className="setting__wrapper">
        <div className="left__setting__section">
          <div className="left__setting__headder">
            <h3>Module</h3>
          </div>

          <div className="left__setteng__container">
            <TreeViewSection />
          </div>
        </div>
        <div className="right__setting__section">
          <div className="setting__section__details">
            <div className="details__headder__section">
              <h2>Show Multiple Tax Option</h2>
            </div>

            <div className="settingMaker__section__input">
              <h3>Setting Value</h3>
              <select name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>

            <div className="settingMaker__details__btn__section">
              <button>Save</button>
              <button>Delete</button>
              <button>Clear</button>
              <button>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingMakker;
