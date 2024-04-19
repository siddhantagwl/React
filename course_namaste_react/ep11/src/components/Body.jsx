import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import REST_LIST from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  // we used let and not const, coz we are modifying this list
  // thsi is normal JS variable
  // let restListJS = [...REST_LIST];

  const userSelectedRating = 4.3;

  // React State variable - use React Hooks
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredOfRestaurants, setFilteredListOfRestraunt] = useState([]);

  const [searchText, seSearchText] = useState("");

  // withPromotedLabel is a higher order component
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // normal JS function used as HOOK
  // first arg is arrow function
  // useEffect function is called after the component renders
  // when body component loads and finishes it render cycle, it will call useEffect
  useEffect(() => {
    console.log("useEffect called");
    // once body is rendered now we will fetch the data
    fetchData();
  }, []);

  const fetchData = async () => {
    //fetch method is given by browser to fetch data from api, its not JS thing
    // and this fetch will return a promise.
    // use async await to resolve the promise
    const corsProxy = "https://corsproxy.io/?"; // alternate for CORS plugin
    const api =
      corsProxy +
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(api);
    const json = await data.json();

    const swigg_rest_list =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(swigg_rest_list);

    // optional chaining
    setListOfRestraunt(swigg_rest_list);
    setFilteredListOfRestraunt(swigg_rest_list);
  };

  // whenever state var is udpated, react tiriggers a reconciliation
  // cycle (re-renders the component)
  // console.log("Body rendered", listOfRestaurants);

  // user online status
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are Offline, Check your internet connection</h1>;
  }

  // conditional rendering
  // if (listOfRestaurants.length === 0) {
  //    can be shown a spinner here fr loading
  //    return <h1>Loading....</h1>;
  //    better way - createa a ShimmerUI - fake page until the data loads
  //   return <Shimmer />;
  // }

  // above if condition can be mapped to below return using a ternary operator

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              // wheenver smth is typed in searhcbox, we hvae to update searchText value
              // HERE - body will be re-rendered again after every letter we type in search box
              seSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-100 m-4 px-4 py-2 rounded-lg"
            onClick={() => {
              // this will filter the rest. and update the UI
              // to ge the value of Input box, we have bind the value
              // to local state variable of react
              console.log(searchText);
              console.log(listOfRestaurants);
              const filteredRest = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestraunt(filteredRest);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              console.log("Button clicked");
              // filter logic
              // here you will might wonder, even after this filtering
              // the UI is not updated with filtered restaurants
              // if you use hooks - this below is not a proper way
              // to update listOfRestaurants
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > userSelectedRating
              );

              // we use this method if hooks are used
              setFilteredListOfRestraunt(filteredList);
              alert(
                `Updated restaurants with avg rating > ${userSelectedRating}`
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="flex items-center m-4 p-4">
          <button
            className="filter-btn px-4 py-2 bg-orange-200 rounded-lg"
            onClick={() => {
              fetchData();
            }}
          >
            Refresh List
          </button>
        </div>

        <div className="flex items-center">
          <label>UserName: </label>
          <input
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="rest-container flex flex-wrap">
        {/* for every restCard, we are passing props to a component to make things dynamic  */}
        {/* <RestaurantCard restName="kfc" cuisine="Burger, Wings, Fries" />

        {/* populating cards using data now */}
        {/* loop using map function instead of for loop 
            and key is imp to identify each card as unique, coz
            react optimizes the dom using these id and its imp to 
            provide this key. KEY SHOULD BE UNIQUE
          */}
        {filteredOfRestaurants.map((restaurant, index) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {/* If the restaurant is promoted add a promoted tag to it */}
            {/* using isOpen coz promted field is missing in api */}
            {restaurant.info.avgRating > 4.2 ? (
              <RestaurantCardPromoted restData={restaurant} />
            ) : (
              <RestaurantCard restData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
