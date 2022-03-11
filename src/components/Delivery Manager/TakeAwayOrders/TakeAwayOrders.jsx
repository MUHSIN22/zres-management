import React, { useState } from "react";
import WaitingForCollection from "./waitingForCollection/WaitingForCollection";
import Collected from "./collected/Collected";
function TakeAwayOrders({ clickedSubCategory, selectedNav }) {
  const [collected, setCollected] = useState([]);

  return (
    <>
      {selectedNav === "takeAwayOrder" &&
        clickedSubCategory === "Waiting for collection" && (
          <WaitingForCollection
            setCollected={setCollected}
            collected={collected}
          />
        )}

      {selectedNav === "takeAwayOrder" &&
        clickedSubCategory === "Collected" && (
          <Collected collected={collected} />
        )}
    </>
  );
}

export default TakeAwayOrders;
