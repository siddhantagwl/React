1. useEffect() Hook is called evertytime the component is rendered.
2. the second arg in useEffect() is a dependency array. and if this dependency array is not provided, useEffect is called on every component render
3. V.IMP - if [] is passed in dependency array, useEffect is called only at initial render and just once
4. What if we put somthing inside the dependency array -> it will only called everytime, the dependecy is changed.
5. BEST PRACTICE: useState Hook shud be called inside the funcational component only and not outside and shud be at the top (when the function starts)
6. NEVER USE useState inside the if conditions and for loop, sub functions
7. REACT ROUTER DOM - most popular npm library to route
8. App.js will contain routing configurations
9. react Router dom gives a hook - useRouteError -> gives more details abt the error.
10. children routes -> keep header section always intact, children routes in router config. Usage of Outlet component given by react-dom-router
11. Creating hyperlinks to route a page- NEVER USE anchor tag, coz the whole page gets refreshed
12. Naviage to a new page - w/o reloading the whole page -> trick inside react-rooter-dom . use LINK component -< works exactly the same as anchor tag. Link is very fast and performance oriented and refreshes just the component
13. React applications are called - Single page applications - only 1 page and just the components are changed even when routing. the page is not changed (i.e its not refreshed)
14. Two types of routing in web applications -

1)  client side - currently in our app, we are doing client side, the app alrdy have all the components, it jsut loads the component on routing, hence fast and called single page application
2)  server side routing - make a n/w call and pages are coming from server

15. Dynamic routing - useParams
