1. Higher order component (a function) -> a function that takes a component and returns a component. It enhances/tweaks the component and returns it
2. Ex: Some cards on swuggy are shown promoted tag, cards are similar its jsut the promoted tag thats different.
3. We wont change the behavior of Restaurant card, we are just adding some additional info - enhancing it
4. Rreact has 2 imp. layers - UI layer, Data layer. UI layer is powerd by data layer.
5. Major part is to handle the Data layer - props, data management
6. Accordian - UI type where you click on it and it expands, just like in Swiggy menu section
7. tailwind tip: w-6/12 fill automatically take half width coz full page is divided into 12 sections as per tailwind
8. Advanced version of accordian - if you click on one accordian, other accordian's should collapse and only the clicked one should be visible
9. react dev tool - chrome extension install. componenets tab is really helpful for debugging
10. the components shows the UI layer on left and data layer on right. and we see that each componenent that is rendered has its own state variable and props
11. this makes advanced accordian a bit tough coz each component is managing their own state. to build this feature, the state of each component needs to be lifted up and shud be controlled by parent component.
12. So restaurantMenu will control all the restaurantCategory. this way restaurantCategory will not have its own state
13. This makes restaurantCategory a "Controlled component" - since restaurantMenu is controlling the restaurant Category - IMP Interview Question
14. At a time, only 1 accordian shud be visible
15. We create a stateVar in parent showIndex to pass this to child. But here challenge is to modify parent's component State variable from Child component. Idea is to pass setShowIndex to child
16. Read more on "lifting the state up in React"- imp and advanced concept
17. Props drilling -> passing data from parent then to parent.child then to parent.child.chlild and so on. - but this is not scalable and its tedious approach
18. For one or two levels, its fine but not more than that. Solution - if there is some global data management so any component can access it and that is "React Context"
19. We wont keep these context in components but in utils ex: UserContext.js
20. Common doubt - can we keep all the data in Context - NO. Only the data that can be used at multiple levels of component should be in Context
21. In class absed component - they dont have hooks. so it iwll be a different approach and use it as a component by accessing .Consumer property of the component
22. "Context Provider" -> if you want to change the context value from a component, we will use context provider and in App.js , wrap the whole app in the return statement with the usercontext.provider and pass the new value
23. If you dont wrap it for the full app layout, the value wont be shared everywhere. ex: if you wrap just in header, then the new value will only be displayed for header and at rest of the places it will show default user
24. You can also do nested wrap. EX: only header has a different name, but the whole app layout is also wrapped with some new username
