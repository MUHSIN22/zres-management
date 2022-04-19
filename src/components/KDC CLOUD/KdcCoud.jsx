import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import KdcNavbar from "./KDC Navbar/KdcNavbar";
import KdcOrder from "./KDC Order/KdcOrder";
import "./kdcCloud.scss";
import KitchenDisplaySystem from "./Kitchen Display System/KitchenDisplaySystem";

function KdcCoud() {
  const [selectedMainOption, setSelectedMainOption] = useState("");
  const [selectedNavMidOption, setSelectedNavMidOption] = useState("expo");
  return (
    <div className="KcdCloud">
      <div className="kdc__navbar">
        <KdcNavbar
          setSelectedNavMidOption={setSelectedNavMidOption}
          setSelectedMainOption={setSelectedMainOption}
          selectedMainOption={selectedMainOption}
        />
      </div>

      <div className="body__section__area">
        {selectedMainOption === "Kitchen Display System" && (
          <KitchenDisplaySystem
            selectedMainOption={selectedMainOption}
            selectedNavMidOption={selectedNavMidOption}
          />
        )}
        <Outlet/>
      </div>
    </div>
  );
}

export default KdcCoud;
