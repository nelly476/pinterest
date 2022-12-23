import react, { useEffect, useState } from "react";

export default function TaskInput() {
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);

  let notesFromStorage = JSON.parse(localStorage.getItem("allNotes"));

  function handleChange(e) {
    setNoteInput(e.target.value);
  }

  function addNote() {
    setNotes((prev) => [...prev, noteInput]);
    console.log(notes);
  }

  // useEffect(() => {
  //   localStorage.setItem("allNotes", JSON.stringify(notes));
  //   console.log(notes);
  //   console.log(notesFromStorage);
  // }, [notes]);

  // function addNote(data) {
  //   setNotes((prev) => {
  //     return [...prev, data];
  //   });
  // }

  return (
    <form className="add--section">
      <input type="text" onChange={handleChange} />
      <button onClick={() => setNotes(noteInput)}>Add a new task</button>
    </form>
  );
}
