import RestaurantCard from "./RestaurantCard";
import REST_LIST from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // we used let and not const, coz we are modifying this list
  // thsi is normal JS variable
  // let restListJS = [...REST_LIST];

  const userSelectedRating = 4;

  // React State variable - use React Hooks
  const [restList, setRestList] = useState(REST_LIST);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button clicked");
            // filter logic
            // here you will might wonder, even after this filtering
            // the UI is not updated with filtered restaurants
            // if you use hooks - this below is not a proper way
            // to update restList
            const filteredList = restList.filter(
              (res) => res.avgRating > userSelectedRating
            );

            // we use this method if hooks are used
            setRestList(filteredList);
            alert(
              `Updated restaurants with avg rating > ${userSelectedRating}`
            );
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setRestList(REST_LIST);
          }}
        >
          Reset List
        </button>
      </div>
      <div className="rest-container">
        {/* for every restCard, we are passing props to a component to make things dynamic  */}
        {/* <RestaurantCard restName="kfc" cuisine="Burger, Wings, Fries" />

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

export default Body;
