import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Today from "./components/Today";
import { Link, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Week from "./components/Week";
import TaskInput from "./components/TaskInput";

function App() {
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);
  const [notesFromStorage, setNotesFromStorage] = useState(
    JSON.parse(localStorage.getItem("allNotes"))
  );

  // let notesFromStorage = JSON.parse(localStorage.getItem("allNotes"));

  useEffect(() => {
    if (notesFromStorage) {
      setNotes(notesFromStorage);
    }
  }, []);

  // localStorage.clear();

  useEffect(() => {
    localStorage.setItem("allNotes", JSON.stringify(notes));
    setNotesFromStorage(JSON.parse(localStorage.getItem("allNotes")));

    // console.log(notesFromStorage);
  }, [notes]);

  // useEffect(() => {
  //   localStorage.setItem("allNotes", JSON.stringify(notes));
  //   console.log(notesFromStorage);
  //   // if (notesFromStorage) {
  //   //   setNotes(notesFromStorage);
  //   // }
  //   // console.log(notesFromStorage);
  // }, [notes]);

  function handleChange(e) {
    setNoteInput(e.target.value);
  }

  function addNote(event) {
    event.preventDefault();
    setNotes((prev) => [...prev, noteInput]);

    // console.log(notes);
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
          <form className="add--section" onSubmit={addNote}>
            <input type="text" onChange={handleChange} />

            <button>Add a new task</button>
          </form>
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
