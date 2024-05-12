import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  //   console.log("items", items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    // the arguemnt inside the addItem function is the payload
    dispatch(addItem(item));

    // behind the scene dispath will create an objext
    // with payload and pass this as second arg to addItem automatically
    // {
    //   payload: "pizza"
    // }
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex"
        >
          <div className="w-3/12 p-2">
            <div className="absolute">
              <button
                className="p-2 mx-16 my-40 rounded-lg bg-black text-white shadow-lg"
                // Dispathc action on click of the button to add to cart
                // XX handleAddItem(item) - DONT DO THISS XX - this is
                // callign the function right away. this is not callback
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>

          <div className="w-9/12 pl-2">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
