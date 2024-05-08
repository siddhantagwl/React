import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // reading cart infor from Store - Subscribe using useSelector
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    //dispathc an action
    dispatch(clearCart());
    console.log("Cart Cleared");
  };

  return (
    <div className="text-center border border-blue-400 m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-red-500 text-white font-bold rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length ? (
          <ItemsList items={cartItems} />
        ) : (
          <h1>Add some food buddy</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
