import React, { useEffect, useState } from "react";
import "./seatsectionPopup.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import DineDummyData from "./DummyData";
function SeatSectionPopup({
  selectedAvialbilityTabel,
  setSelectedAvialibilityTable,
}) {
  const [dataToDisplay, setDataToDisaplay] = useState([]);
  useEffect(() => {
    const filterdData = DineDummyData.filter(
      (x) => x.tableInfo === selectedAvialbilityTabel
    );
    setDataToDisaplay(filterdData);
  }, [selectedAvialbilityTabel]);

  return (
    <div className="seatSectionPopup">
      <div className="seatSectionPopup__headder">
        {selectedAvialbilityTabel === "avilable__btn" && (
          <h3>Avialable Seat</h3>
        )}
        {selectedAvialbilityTabel === "occupied__btn" && <h3>Occupied Seat</h3>}
        {selectedAvialbilityTabel === "doneSoon__btn" && (
          <h3>Done Soon Seat</h3>
        )}
        {selectedAvialbilityTabel === "reservation__btn" && (
          <h3>Reserved Seat</h3>
        )}
        <div
          className="close__btn__Sections"
          onClick={() => setSelectedAvialibilityTable("")}
        >
          <CancelIcon />
        </div>
      </div>
      <div className="avialble__table__section">
        {dataToDisplay?.map((dta) => (
          <div className="tabless__details">
            <h4>Table {dta.tableNo}</h4>
            <h4>{dta.tableType}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatSectionPopup;
