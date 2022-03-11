import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import "./addnotes.scss";
function AddNotes({ SetNotes, notes }) {
  const [noteInput, setNoteInput] = useState("");
  const handleNotes = () => {
    SetNotes([...notes, noteInput]);
    setNoteInput("");
  };
  return (
    <div className="AddNotes">
      <div className="headder__notes">
        <input
          type="text"
          placeholder="Enter Notes"
          onChange={(e) => setNoteInput(e.target.value)}
          value={noteInput}
        />
        <button onClick={handleNotes}>Submit</button>
      </div>

      <div className="notes__list">
        <ul>
          {notes.map((note) => (
            <li>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddNotes;
