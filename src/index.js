import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" spellCheck="true" contentEditable="true">
      My Favourite Foods
    </h1>
    <div>
      <img src={img} alt="ramdom" />
      <img src={img + "?grayscale"} alt="ramdom in grayscale" />
    </div>
  </div>,
  document.getElementById("root")
);
