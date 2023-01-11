import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { NoteContext } from "./NoteContext";
import { nanoid } from "nanoid";

// import data from "./data";
import Note from "./Note";
import notes from "./data";

export default function Home(props) {
  let notesFromStorage = [];
  // const context = useContext(NoteContext);
  // const [checked, setChecked] = useState(false);

  // function check(id) {
  //   // setChecked((prev) => !prev);
  //   console.log(id);
  //   notesFromStorage.map((item) => {
  //     return item.id === id ? { ...item, finished: !checked } : item;
  //   });
  //   localStorage.setItem("allNotes", JSON.stringify(notesFromStorage));
  //   console.log(notesFromStorage);
  // }

  const notesExampleElem = notes.map((item) => {
    // console.log(item);
    return (
      <Note
        info={item.task}
        key={item.id}
        id={item.id}
        priority={item.priority}
        finished={item.finished}
        // check={check}
      />
    );
  });

  // console.log(props.newNotes);

  const userNotes =
    props.newNotes &&
    props.newNotes.map((item) => {
      // console.log(item.id);
      // const id = nanoid();
      return (
        <Note
          info={item.note}
          key={item.id}
          id={item.id}
          priority={item.priority}
          finished={item.finished}
          // check={check}
          // checked={checked}
        />
      );
    });

  return (
    <div>
      {notesExampleElem}
      {userNotes}
    </div>
  );
}
