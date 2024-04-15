import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  // when this page loads, load the data from api call
  // to dynamically display the data

  const { resId } = useParams();

  const restInfo = useRestaurantMenu(resId);

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
