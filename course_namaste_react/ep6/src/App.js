import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../logo.jpg";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 * header
 * body
 * footer
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
