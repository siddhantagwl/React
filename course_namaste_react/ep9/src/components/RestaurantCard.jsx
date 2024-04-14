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

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    restData?.info;

  return (
    <div className="rest-card" style={styleCard}>
      <img
        className="rest-img"
        alt="rest-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
