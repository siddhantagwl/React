import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

// this is another tricky one as this conponenet takes props (or resData or restaurantInfo) in the component
// and for this we have to create mockData

it("Should render restuarant card comp with data", () => {
  render(<RestaurantCard restData={MOCK_DATA} />);

  const restName = screen.getByText("Sandwizzaa- Mumbai's Best Sandwich");

  expect(restName).toBeInTheDocument();
});

it("Should render restuarant card comp with promoted label", () => {
  // we wiill test HigherOrderComponent withPromotedLabel()
  const RestCardPromoted = withPromotedLabel(RestaurantCard);

  render(<RestCardPromoted restData={MOCK_DATA} />);

  const promotedLabel = screen.getByText("Promoted");

  expect(promotedLabel).toBeInTheDocument();
});
