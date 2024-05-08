import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  // when this page loads, load the data from api call
  // to dynamically display the data

  const { resId } = useParams();

  const restInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

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

  // console.log(restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  //   console.log("items:", itemMenu);

  const categories =
    restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("fitlered catg", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join("; ")} - {costForTwoMessage}
      </p>
      {/* // categories accordian */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
