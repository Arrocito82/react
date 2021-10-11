import React from "react";
import ReactDOM from "react-dom";

const firstName = "Andrea";
const lastName = "Monterrosa";

ReactDOM.render(
  <div>
    <h1>
      Hello! {firstName} {lastName}
    </h1>
    <h2>You look awesome! {`${firstName} ${lastName}`} ES6</h2>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);

//this is a Expression
//Math.floor(Math.random()*10)

//this is a statement, because JS have to do some work to get the result
//if(1==2) return 3;
