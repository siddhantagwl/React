1. Redux is not mandatory. Small to mid-sized applications can be done without Redux
2. If data is heavily used and interchanged between components, use Redux - its a separate library that we can use with react
3. Zustand - another library like Redux that can be used with redux
4. Redux offers easier debugging
5. Newer version of redux is Redux toolkit (RTK)
6. We will built cart page
7. Redux store is a big JS object kept at a global central place and any component can access the data from the store
8. We do slices in redux store so that object doesnt becomes too heavy. Slices can be like cart slice, user slice, etc
9. you cannot directly modify the slice.
10. WHen clicked on add button, it dipatches an action and calls a function which will modify the cart slice. this function is called a "reducer"
11. Now how to read data from slice -> we use "selector" that reads the data from store and it will pass the data to component. This process is called the "subscribing to the store"
12. Librarires to install @reduxjs/toolkit and react-redux
13. A selector is just a Hook inside React
14. IMP - When using selector subscribe to the correct portion of the store. For ex: never subscribe to the complete store as cart store doesnt care about changes in user store and vice versa and this will also decrease the performance of the application
15. Pay attention to "reducer" in appStore and "reducers" in cartSlice. Reducer coz its one big reducer and reducers, coz it can contain multiple sub functions/reducers
16. Redux uses immer lib behind the scenes to find the diff from new state and old state
