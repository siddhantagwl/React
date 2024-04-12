1. microservice vs monolith architecture
2. monolith - one big proejct/repo - everything inside 1 project - DB, API, auth, SMS service etc. this is difficult to manage and 1 single change to will lead to compiling and deploying the whole project
3. Microservives - different services for diff jobs, independent of each other. - KNOWN as Separation of concerns. Single responsibilty principle
4. Microservices run on their own specific port. 1234 - UI service, 1000 - BE. and it can mapped to a domain name like /api, /sms, etc and they interact by calling differnet urls
5. Two approaches how webapp fetch the data from BE service
   5.1. App loads -> API call to fetch data (wait for data) -> render to UI
   5.2. App loads -> Render it quickly asap (skeleton) -> Now make API call -> re-render data to UI
6. Industry uses second approach in React. Thsi is better and gives better UX. Initial approach until data comes, nothing is shown whcih is poor UX
7. REact is very fast in rendering, one of the best rendering mechanism, so we can re-render and give better UX
8. learned useEffect Hook -> will be called when the body is rendered. this will allow us to execute step 5.2
9. optional chainig for data -> if api is giving us dynamic data, optional chainig can be used.
10. Loading Screen -> show a spinner before when the data is being fetched - BUT its not a good UX
11. ShimmerUI -> resembles the page actual UI - laod a fake page until we get the actual data. show a skeleton, show fake cards. A better UX
12. Why State variables are even used using useState -> will understand this using login/logout button - explains why normal JS varisables wont render on change but react var triggers a component re-rendering
