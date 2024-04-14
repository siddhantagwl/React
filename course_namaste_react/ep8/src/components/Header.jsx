import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // iniital button name, normal JS var - react cannot track this
  let btnName = "Loginn";
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header rendered");

  // v.imP POINTS
  // 1;useEffect() Hook is called evertytime the component is rendered.
  // 2. the second arg in useEffect() is a dependency array. and if this dependency array is not provided, useEffect is called on every component render
  // 3. if [] is passed in dependency array, useEffect is called only at initial render and just once
  // Ex: we can pass [btnNameReact] as dependency
  useEffect(() => {
    console.log("useEffect Header called");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img src="" />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          {/* // we want this login button to be dynamically chaning its name to
          logout */}
          <button
            className="login"
            onClick={() => {
              // initially if we just use onclick, it shud update
              // button name, but it doesnt, UI didnt update it
              // Header didnt refreshed. coz JS variables doesnt work
              // here is when we use react state variable
              // btnName = "Logout";
              // console.log(btnName);

              // using react state varibale - react will trigger the render whenever setButtonName is changed
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

// export -> so that other componnents can import this in their file
export default Header;
