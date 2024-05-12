import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with a Login Button", () => {
  // the header component uses store and its from react-redux which the test component
  // is not aware about coz unit tests are run in isolation, so here we neeed to provide the
  // store manually. So wrap render Provider
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // text is not a good way so use role
  //   const loginButton = screen.getByText("Login");

  //   if we have multiple buttons on screen and want to test a specific on
  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Should render header component with Cart Items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const cartItems = screen.getByText("Cart 0");
  // we can also use a regex
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change to Logout when clicked on Login", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  /// here we have to smimulate a click using code :D
  fireEvent.click(loginButton);

  // now logout shoudl be visible
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
