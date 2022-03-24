import React, { useEffect, useState } from "react";
import "./seatsectionPopup.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import DineDummyData from "./DummyData";
function SeatSectionPopup({
  selectedAvialbilityTabel,
  setSelectedAvialibilityTable,
  dataToDisplay
}) {
  const [filterdData, setFilterdData] = useState()
  useEffect(() => {
    const newData = dataToDisplay.filter((data)=>{
      return data.TableStatus === selectedAvialbilityTabel
    })
    setFilterdData(newData)
  }, [selectedAvialbilityTabel])
  

  return (
    <div className="seatSectionPopup">
      <div className="seatSectionPopup__headder">
        {selectedAvialbilityTabel === "Available" && (
          <h3>Avialable Seat</h3>
        )}
        {selectedAvialbilityTabel === "Occupied" && <h3>Occupied Seat</h3>}
        {selectedAvialbilityTabel === "DoneSoon" && (
          <h3>Done Soon Seat</h3>
        )}
        {selectedAvialbilityTabel === "Reservation" && (
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
        {filterdData && filterdData.map((data) => (
          <div className="tabless__details">
            <h4>Table {data.DineInSettingsID}</h4>
            <h4>{data.NoOfSeat} Seater</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatSectionPopup;
