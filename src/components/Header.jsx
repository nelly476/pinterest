import { Link } from "react-router-dom";
import React, { useState } from "react";

// import { NoteContext } from "../components/NoteContext";

export default function Header() {
  // const [noteInput, setNoteInput] = useState("");
  // // const context = React.useContext(NoteContext);

  // function handleChange(e) {
  //   setNoteInput(e.target.value);
  // }

  return (
    <div className="side--bar">
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="/today">
        <h2>Today</h2>
      </Link>
      <Link to="/week">
        <h2>Week</h2>
      </Link>
    </div>
  );
}
