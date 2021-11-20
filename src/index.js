import React from "react";
import ReactDOM from "react-dom";
// using lorem picsum
const img = "https://picsum.photos/200";

// looks like a python dictionary to me, and
// It must be like this in order to work propertly
const inlineStyle = {
  color: "purple",
  fontFamily: "sans-serif"
};

const today = new Date().getDay();
if (today >= 3) {
  inlineStyle.color = "pink";
  inlineStyle.fontSize = "3rem";
  inlineStyle.textShadow = "2px 2px 5px skyblue";
}
ReactDOM.render(
  <div>
    <h1 style={inlineStyle}>My Favourite Foods</h1>
    <div>
      <img src={img} alt="ramdom" />
      <img src={img + "?grayscale"} alt="ramdom in grayscale" />
    </div>
  </div>,
  document.getElementById("root")
);
