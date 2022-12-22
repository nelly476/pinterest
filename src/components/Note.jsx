import React, { useState } from "react";

export default function Note({ info }) {
  const [finished, setFinished] = React.useState(info.finished);
  return (
    <div className="note--line">
      {finished ? (
        <i
          className="fa-solid fa-square-check"
          onClick={() => setFinished((prev) => !prev)}
        ></i>
      ) : (
        <i
          className="fa-regular fa-square-check"
          onClick={() => setFinished((prev) => !prev)}
        ></i>
      )}
      <h2>{info.task}</h2>
    </div>
  );
}
