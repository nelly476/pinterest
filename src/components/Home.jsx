import { Link } from "react-router-dom";
import { useContext } from "react";
import { NoteContext } from "./NoteContext";

// import data from "./data";
// import Note from "./Note";

export default function Home() {
  const context = useContext(NoteContext);

  // const noteElem = data.map((item) => {
  //   // console.log(item);
  //   return <Note info={item} key={item.id} />;
  // });

  return <div>{context.notesElem}</div>;
}
