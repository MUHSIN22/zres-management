import React from "react";
import Expo from "./Expo/Expo";
import FoodMain from "./FoodMain/FoodMain";

function KitchenDisplaySystem({ selectedNavMidOption }) {
  return (
    <div className="KitchenDisplaySystem">
      {selectedNavMidOption === "expo" && <Expo />}

      {selectedNavMidOption !== "expo" && (
        <FoodMain selectedNavMidOption={selectedNavMidOption} />
      )}
    </div>
  );
}

export default KitchenDisplaySystem;
