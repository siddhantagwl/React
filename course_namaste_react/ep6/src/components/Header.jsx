import { useState } from "react";

const Header = () => {
  // iniital button name, normal JS var - react cannot track this
  let btnName = "Loginn";
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <img src="" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
