import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  // when this page loads, load the data from api call
  // to dynamically display the data

  const [restInfo, setRestInfo] = useState(null);

  const { resId } = useParams();

  // dont forget to use empty dependency array as second arg
  // coz we donty want to make api calls again and again
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const corsProxy = "https://corsproxy.io/?";
    api = corsProxy + MENU_API + resId;

    const data = await fetch(api);
    const json = await data.json();

    setRestInfo(json.data);

    // now to display the data on UI - you will have to use
    // state variables. whebnever state variable changes, render
    // will happen and it will display data on UI
  };

  if (restInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    avgRating,
    sla,
  } = restInfo.cards[2].card.card.info;

  const itemMenu =
    restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;

  //   console.log(restInfo);
  //   console.log("items:", itemMenu);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join("; ")}</h3>
      <h3>{costForTwoMessage / 100} Rs. for two</h3>
      <h3>{avgRating}</h3>
      <h3>{sla.deliveryTime}</h3>

      <h2>Menu</h2>
      <ul>
        {itemMenu.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100} Rs.
          </li>
        ))}
      </ul>
      <img></img>
    </div>
  );
};

export default RestaurantMenu;
