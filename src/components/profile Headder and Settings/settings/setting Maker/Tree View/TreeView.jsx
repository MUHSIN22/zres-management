import React from "react";
import { useEffect } from "react";
import Tree from "./Tree";
import "./treeView.scss";
function TreeViewSection() {
  useEffect(() => {
    Tree();
  }, []);
  return (
    <div className="TreeViewSection">
      <ul id="tree1" class="tree ">
        <li>
          <a href="#">Accounts</a>

          <ul>
            <div className="setting__name">
              <h4>Setting Name</h4>
            </div>
            <li>Setting Name 1</li>
            <li>Setting Name 2</li>
            <li>Setting Name 3</li>
          </ul>
        </li>
        <li>
          Inventory
          <ul>
            <div className="setting__name">
              <h4>Setting Name</h4>
            </div>
            <li>Setting Name 1</li>
            <li>Setting Name 2</li>
            <li>Setting Name 3</li>
          </ul>
        </li>
        <li>
          Walk In
          <ul>
            <div className="setting__name">
              <h4>Setting Name</h4>
            </div>
            <li>Show Currency In Walkin Form</li>

            <li>Show Multiple Tax Option</li>
            <li>Show PicUp Check In WalkIn Form</li>
          </ul>
        </li>
        <li>
          Dine In
          <ul>
            <div className="setting__name">
              <h4>Setting Name</h4>
            </div>
          </ul>
        </li>
        <li>
          CRM
          <ul>
            <div className="setting__name">
              <h4>Setting Name</h4>
            </div>
          </ul>
        </li>
        <li>
          Delivery Manager
          <ul>
            <div className="setting__name">
              <h4>Setting Name</h4>
            </div>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default TreeViewSection;
