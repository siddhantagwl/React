import MOCK_DATA from "../mocks/mockRestMenu.json";
const { render, act, screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) });
});

it("should load restaurnat menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Veg Pizza (14)");
  fireEvent.click(accordianHeader);

  // now once the accordian or dropdown is clicked, we need to check
  // how many items that accordian has
  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(14);

  // now we will click the add button
  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  // now after clicking this, my header should change for cart items
  // this is where actual integration testing will come
  // and now you need to render the header component as well above
  expect(screen.getByText("Cart 1")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart 2")).toBeInTheDocument();

  // now checking if cart page will have 2 items now
  // here the cart has same foodItems from itemList and it will be now Old items + newly added items
  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  // clear cart
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(14);
  expect(screen.getByText("Add some food buddy")).toBeInTheDocument();
});
