import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "../logo.jpg";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

// import Grocery from "./components/Grocery";

/**
 * header
 * body
 * footer
 */

// Chunking/lazy loading/Code Splitting for bundling
// lazy is a function given by react
// this import here is a function and is different from above imports
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  // assume we have authentication here using an API
  const [userName, setUserName] = useState();

  useEffect(() => {
    // makes an hypothetical api call and send username and pswd to check validity
    const data = {
      name: "Siddhant",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        {/* <UserContext.Provider value={{ loggedInUser: "Random User" }}> */}
        <Header />
        {/* </UserContext.Provider> */}

        {/* Outlet is a component provided by react dom router
      that will render the component defined in children according to
      the path */}
        {/* THis outlet is basically replaced by the specific component */}
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

// what will happen at a specific route
// the path and the element(component) to load at that path
// just creating this config wont work, we have to render it as well
// we also have a error element that will habdle the error pages
// Yoou can have multiple parents and multiple children

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      // this is also a child, coz on home page, body shud be loaded everytime
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // dynamic routing using colon
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// this is provided by library and its a component where we pass our appRouter
root.render(<RouterProvider router={appRouter} />);
