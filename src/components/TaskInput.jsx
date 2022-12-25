import react, { useEffect, useState, useRef } from "react";
import WarningModal from "../components/WarningModal";

export default function TaskInput({ getNewNote }) {
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);
  const [notesFromStorage, setNotesFromStorage] = useState(
    JSON.parse(localStorage.getItem("allNotes"))
  );

  const [priority, setPriority] = useState("");
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (notesFromStorage) {
      setNotes(notesFromStorage);
      getNewNote(notesFromStorage);
    }
  }, []);

  // localStorage.clear();

  useEffect(() => {
    localStorage.setItem("allNotes", JSON.stringify(notes));
    setNotesFromStorage(JSON.parse(localStorage.getItem("allNotes")));
    getNewNote(notes);
  }, [notes]);

  function handleChange(e) {
    setNoteInput(e.target.value);
  }

  function addNote(event) {
    event.preventDefault();
    if (priority) {
      inputRef.current.focus();
      setNotes((prev) => [...prev, { note: noteInput, priority: priority }]);
      setNoteInput("");
      setShowModal(false);
    } else {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    }
  }

  function addPriority(priority) {
    setPriority(priority);
    inputRef.current.focus();
  }

  return (
    <div className="task--input--section">
      <span className="priority--section">
        {showModal && <WarningModal />}
        <p>Priority:</p>
        <button
          onClick={() => addPriority("low")}
          className={
            priority === "low"
              ? "priority low--button low--reverse"
              : "priority low--button"
          }
        >
          LOW
        </button>
        <button
          onClick={() => addPriority("medium")}
          className={
            priority === "medium"
              ? "priority medium--button medium--reverse"
              : "priority medium--button"
          }
        >
          MEDIUM
        </button>
        <button
          onClick={() => addPriority("high")}
          className={
            priority === "high"
              ? "priority high--button high--reverse"
              : "priority high--button"
          }
        >
          HIGH
        </button>
      </span>
      <form className="add--section" onSubmit={addNote}>
        <input
          type="text"
          onChange={handleChange}
          value={noteInput}
          ref={inputRef}
        />

        <button>Add a new task</button>
      </form>
    </div>
    // </div>
  );
}
