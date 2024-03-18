import React from "react";
import ReactDOM from "react-dom/client";

// created this file coz you cannot write everything in index.html for script
// so use this file separately for maintainaibility

// creating an element is core function of React library
// React.createElement --> rturns an object and not an html code
// 2nd arg is attribute like id and 3rd arg is children
// and  collectively they called props
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "hello from reacttttt"
);

// getting an element is core function of ReactDom
const root = ReactDOM.createRoot(document.getElementById("root"));

// render is actually converting the heading object to html code and putting in the dom
root.render(heading);

// Part 2: what if we have nested structure
// here the second div has 2 headings that are siblings
// so in this case, createElement's 3rd Arg will take
// an array of elemets that you want to render
/**
 * <div id=parent>
 *      <div id= child>
 *          <h1>some heading<h1>
 *          <h2>some heading<h2>
 *      <.div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Some heading11111111"),
    React.createElement("h2", {}, "Some heading22"),
  ])
);
root.render(parent);

// if we observe above, everytime we write create element for new html tag - which is too much ork
// hence there is JSX to solve this and write in cleaner
