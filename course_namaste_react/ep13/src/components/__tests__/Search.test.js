import MOCK_DATA from "../mocks/mockResListData.json";
const { render, act, screen, fireEvent } = require("@testing-library/react");
import Body from "../Body";
// import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// mock fetch function -> defining our own fetch function. We will not make an actual n/w call in test
// we have to make it exactly similar to how original fetch works
// and that returns a Promise.
// working -> fetch function returns a promise and that promise returns as json
// and json inturn returns a promise and resolving this promise will give us the data
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

global.window.alert = jest.fn();

it("Should search resList for pizz input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searcBtn = screen.getByRole("button", { name: "Search" });

  // when you write smth inside a input box, its a onChange event
  const searchInput = screen.getByTestId("searchInput");

  //how to change the value, second obj is simulating what you get inside "e" in actual code.
  // e.target.value is given by browser
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searcBtn);

  // now we can assert that there will be 3 restaurant cards based on the search input
  // how can we assert this -> RestCard is a div and to make it easy, give data-testid to rescard
  // and then search how many resCard with thsi test-id are found

  const resultCards = screen.getAllByTestId("resCard");

  expect(resultCards.length).toBe(1);
});

it("Should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(9);

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedButton);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(1);

  global.window.alert.mockClear();
});
