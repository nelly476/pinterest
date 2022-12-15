import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <h1>TO-DO LiST</h1>
      <div className="content">
        <Sidebar />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
