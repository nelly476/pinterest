import React, { useState } from "react";

export default function Note({ info, priority, finished, id }) {
  const [checked, setChecked] = React.useState(finished);
  const [notesFromStorage, setNotesFromStorage] = useState([]);

  function update(id) {
    setChecked((prev) => !prev);
    // setNotesFromStorage((prev) => {
    //   prev.map((item) => {
    //     return item.id == id ? { ...item, finished: checked } : item;
    //   });
    // });
    // console.log(notesFromStorage);
    // localStorage.setItem("allNotes", JSON.stringify(notesFromStorage));
    console.log(id);

    // console.log(id);
  }

  return (
    <div className={`note--line ${priority}`}>
      {checked ? (
        <i
          className="fa-solid fa-square-check colored"
          onClick={() => update(id)}
        ></i>
      ) : (
        <i className="fa-regular fa-square" onClick={() => update(id)}></i>
      )}
      <p>{info}</p>
      <i className="fa-solid fa-trash-can"></i>
    </div>
  );
}
