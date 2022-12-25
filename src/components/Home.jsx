import { Link } from "react-router-dom";
import { useContext } from "react";
import { NoteContext } from "./NoteContext";
import { nanoid } from "nanoid";

// import data from "./data";
import Note from "./Note";
import notes from "./data";

export default function Home(props) {
  // const context = useContext(NoteContext);

  const notesExampleElem = notes.map((item) => {
    // console.log(item);
    return <Note info={item.task} key={item.id} priority={item.priority} />;
  });

  // console.log(props.newNotes);

  const userNotes =
    props.newNotes &&
    props.newNotes.map((item) => {
      // console.log(item.note);
      return <Note info={item.note} key={nanoid()} priority={item.priority} />;
    });

  return (
    <div>
      {notesExampleElem}
      {userNotes}
    </div>
  );
}
