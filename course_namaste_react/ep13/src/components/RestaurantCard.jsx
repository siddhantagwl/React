import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

// props arre just normal argument to a function
// to make things dynamic
const RestaurantCard = (props) => {
  // props is an object
  // console.log(props);
  // thsi is destructing of props - we can also do it in the function argument
  // const { restName, cuisine } = props;

  const { restData } = props;
  // console.log(restData);

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    restData?.info;

  return (
    <div
      data-testid="resCard"
      className="rest-card p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-red-100"
    >
      <img
        className="rest-img rounded-lg"
        alt="rest-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

// Higher order component
// inp - RestaurantCard , o/p -> Promoted RestaurantCard
// the first return statement is written in that way coz it returns a component
// and that second return component is itsef a component which will return some jsx

export const withPromotedLabel = (RestaurantCard) => {
  // props here is the res data from Body coz its being passed to Restaurant Card
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
