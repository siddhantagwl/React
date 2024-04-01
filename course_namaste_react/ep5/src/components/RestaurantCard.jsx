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

export default RestaurantCard;
