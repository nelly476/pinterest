import "./App.css";
import Home from "./components/Home";
import Today from "./components/Today";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Week from "./components/Week";
import TaskInput from "./components/TaskInput";
import notes from "./components/data";

function App() {
  const [data, setData] = useState("");
  // const [notesFromStorage, setNotesFromStorage] = useState(
  //   JSON.parse(localStorage.getItem("allNotes"))
  // );

  // console.log(notesFromStorage);

  // useEffect(()=> {

  // }, [])

  function getNewNote(notes) {
    setData(notes);
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
        <TaskInput getNewNote={getNewNote} />

        <Routes>
          <Route path="/" element={<Home newNotes={data} />} />
          <Route path="/today" element={<Today />} />
          <Route path="/week" element={<Week />} />
        </Routes>
      </div>
    </div>
    // </div>
  );
}

export default App;
