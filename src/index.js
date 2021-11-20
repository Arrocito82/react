import React from "react";
import ReactDOM from "react-dom";

//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.

const name = "Andrea Monterrosa";
const year = new Date().getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {name} </p>
    <p>Copyright {`${year}`}</p>
    {/* I'm printing a string {``} and inside of it I'm printing a variable*/}
  </div>,
  document.getElementById("root")
);
