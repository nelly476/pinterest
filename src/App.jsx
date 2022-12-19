import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Today from "./components/Today";
import { Link, Route, Routes } from "react-router-dom";

import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/today" element={<Today />} />
      </Routes>
    </div>
  );
}

export default App;
