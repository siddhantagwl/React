import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";

/**
 * header
 * body
 * footer
 */

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

// props arre just normal argument to a function
// to make things dynamic
const RestaurantCard = (props) => {
  // props is an object
  console.log(props);
  // thsi is destructing of props - we can also do it in the function argument
  // const { restName, cuisine } = props;

  const { restData } = props;

  return (
    <div className="rest-card" style={styleCard}>
      <img className="rest-img" alt="rest-img" src={restData.imgSrc} />
      <h3>{restData.name}</h3>
      <h4>{restData.cuisine.join(", ")}</h4>
      <h4>{restData.avgRating} Stars</h4>
      <h4>{restData.deliveryTime} mins</h4>
      <h4>{restData.cost / 100} € for two</h4>
    </div>
  );
};

// data will be coming from backend from API
// so better way to pass data is like this
const restList = [
  {
    id: 1,
    name: "Burger King",
    cuisine: ["Burger", "Wings", "Fries"],
    cost: 4000,
    avgRating: 3.8,
    deliveryTime: 38,
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c3ba5f77ce2ce09b1aa34d7af539bd64",
  },
  {
    id: 2,
    name: "McD",
    cuisine: ["Burger", "Cola", "Fries"],
    cost: 3000,
    avgRating: 4.2,
    deliveryTime: 30,
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/03501c33ecb3a3105124441e541e6fe4",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {/* for every restCard, we are passing props to a component to make things dynamic  */}
        {/* <RestaurantCard restName="kfc" cuisine="Burger, Wings, Fries" />
        <RestaurantCard restName="McD" cuisine="Burger, Fries, Cola" />
        <RestaurantCard restName="BurgerKing" cuisine="Burger, Cola, Fries" />
        <RestaurantCard restName="Chai" cuisine="masala chai" />
        <RestaurantCard restName="Biryani" cuisine="Veg, Non-Veg, Pulao" />
        <RestaurantCard restName="Paneer" cuisine="shahi, matar, kadai" />
        <RestaurantCard restName="Chawal" cuisine="jeera, plain, matar" />
        <RestaurantCard restName="Rjma" cuisine="redd, kala" /> */}

        {/* populating cards using data now */}
        {/* loop using map function instead of for loop 
          and key is imp to identify each card as unique, coz
          react optimizes the dom using these id and its imp to 
          provide this key. KEY SHOULD BE UNIQUE
        */}
        {restList.map((restaurant, index) => (
          <RestaurantCard key={restaurant.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

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
