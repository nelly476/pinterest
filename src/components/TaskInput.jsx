import react, { useState } from "react";

export default function TaskInput() {
  const [noteInput, setNoteInput] = useState("");

  // const context = React.useContext(NoteContext);

  function handleChange(e) {
    setNoteInput(e.target.value);
  }

  return (
    <form className="add--section">
      <input type="text" onChange={handleChange} />
      <button onClick={() => addNote()}>Add a new task</button>
    </form>
  );
}
