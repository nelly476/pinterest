import { useState } from "react";
import React from "react";

import data from "./data";
import Note from "./Note";

const NoteContext = React.createContext();

function NoteContextProvider(props) {
  // const [notesElem, setNotes] = useState("");

  const notesElem = data.map((item) => {
    // console.log(item);
    return <Note info={item} key={item.id} />;
  });

  // function addNote(input) {
  //   setNotes((prev) => [...prev, input]);
  //   // console.log(notes);
  // }

  return (
    <NoteContext.Provider value={{ notesElem }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export { NoteContextProvider, NoteContext };
