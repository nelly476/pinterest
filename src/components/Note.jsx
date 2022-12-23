import React, { useState } from "react";

export default function Note({ info }) {
  const [finished, setFinished] = React.useState(info.finished);

  return (
    <div className="note--line">
      {finished ? (
        <i
          className="fa-solid fa-square-check colored"
          onClick={() => setFinished((prev) => !prev)}
        ></i>
      ) : (
        <i
          className="fa-regular fa-square"
          onClick={() => setFinished((prev) => !prev)}
        ></i>
      )}
      <p>{info}</p>
    </div>
  );
}
