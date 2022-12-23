import { Link } from "react-router-dom";
import { useContext } from "react";
import { NoteContext } from "./NoteContext";

// import data from "./data";
import Note from "./Note";
import notes from "./data";

export default function Home(props) {
  // const context = useContext(NoteContext);

  // console.log(props.newNotes);

  const notesElem = props.newNotes.map((item) => {
    // console.log(item);
    return <Note info={item} />;
  });

  // const noteElem = data.map((item) => {
  //   // console.log(item);
  //   return <Note info={item} key={item.id} />;
  // });

  return <div>{notesElem}</div>;
}
