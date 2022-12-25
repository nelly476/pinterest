import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Today from "./components/Today";
import { Link, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Week from "./components/Week";
// import TaskInput from "./components/TaskInput";

function App() {
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);
  const [notesFromStorage, setNotesFromStorage] = useState(
    JSON.parse(localStorage.getItem("allNotes"))
  );

  const [priority, setPriority] = useState("");

  useEffect(() => {
    if (notesFromStorage) {
      setNotes(notesFromStorage);
    }
  }, []);

  // localStorage.clear();

  useEffect(() => {
    localStorage.setItem("allNotes", JSON.stringify(notes));
    setNotesFromStorage(JSON.parse(localStorage.getItem("allNotes")));
  }, [notes]);

  function handleChange(e) {
    setNoteInput(e.target.value);
  }

  function addNote(event) {
    event.preventDefault();
    setNotes((prev) => [...prev, { note: noteInput, priority: priority }]);
  }

  function addPriority(priority) {
    setPriority(priority);
  }

  return (
    <div className="app">
      <Link to="/">
        <span className="header--section">
          <i className="fa-solid fa-bars"></i>
          <h1>TO-DO LiST</h1>
        </span>
      </Link>

      <div className="content">
        <Header />

        <div className="tasks--section">
          <div className="task--input--section">
            <span className="priority--section">
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
              <input type="text" onChange={handleChange} />

              <button>Add a new task</button>
            </form>
          </div>

          <Routes>
            <Route path="/" element={<Home newNotes={notesFromStorage} />} />
            <Route path="/today" element={<Today />} />
            <Route path="/week" element={<Week />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
