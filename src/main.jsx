import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NoteContextProvider } from "./components/NoteContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NoteContextProvider>
    <Router>
      <App />
    </Router>
  </NoteContextProvider>
);
