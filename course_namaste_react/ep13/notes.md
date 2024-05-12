1. testing is a huge domain in itself. in this we only did developer testing. QA testing is different.
2. Developer can do manual testing -> ex: visit a contact us page and if it renders then its manual testing, but its not efficient. Cannot test everything
3. Even a single line of code can introduce a bug anywhere
4. ANother method - writing test cases using code that will do the testing
5. Different type of testing in react as a developer -> Unit testing, Integration testing, End to End testing (or e2e)
6. Unit testing -> testing a component in isolation
7. Integration testing -> testing the integration of compoents, When app gorws big, how multiple components interact with each other. Ex: Search/Filter component. You check the flow of the application
8. E2E testing -> test all the flows as soon as user lands on website and leaves the website. Simulating what the user will do throughout the app. It need tools like cyprus, puppetter.
9. In some companies, testing is a part of development
10. React testing library -> most standard lib to write tests. its bult on top of DOM testing library.
11. If you use create-react-app , react tesitng lib is included in that already
12. Jest -> standard to test JS application and int turn it uses babel . we need to install additional dependency if useing with babel. visit jest website for clear instructions
13. here we have configured babel manually as required for testing and parcel alrdy has isntalled babel and its configurations , so this will create some conflicts. In this case, our config will overwrite parcel's. Also change parcel's behaviour to accomoddate jest
14. goto parcel docs and search for jest javascript. docs say create parcelrc file and then copy paste the code/cofg mentioned there
15. Now to run test cases, you need a command just like npm start. it will be npm run test
16. after running this command -> it will say no test cases found it means setup of jest is successful
17. Now write jest configuration. run "npx jest --init"
18. install jsdom lib
19. writing dummy test case - a basic JS testing
20. By default jest tries to search for test files inside **test** folder so make test cases there. File naming convention can be .js .ts .test.js .test.ts .spec.js .spec.ts
21. double underscore is called a dunder
22. install @babel/preset-react -> to enable JSX work in test cases
23. now include @babel/preset-react inside babel config
24. again install a lib -> @testing-library/jest-dom
25. test case grouping
26. instead of test you can also write "it" -< its an alias
27. Integration testting - when multiple components work together and are intergrated to each other (a bit more advanced version of testing)
28. Search is a type of integration so we will start testing with that
29. IMP concept -> when we test the body component, it will throw error that fetch is not defined. why ? coz fetch is given by actual browser and in our JSDom browser there is no fetch provided. in this case, we will write mock fetch function
30. automatically run the test when you change a test file . npm run watch-test and create watch-test in package.json
31. act function -> when tseting and there is react state updates, it shud be wrapped into the act(). So whenever using fetch and state updates, wrap that component inside act
32. Another way to find an element in jest. screen.getByTestId() -> but for this you need to provide a "data-testid" in the specifc element in the component
33. beforeAll() function -> if you wnat to do smth before running all the test, you can do it with this function
34. beforeEach() -> helpful when we have to do cleanup tasks
35. afterAll () -> after it completes all the tests
36. afterEach() -> will be called after each test
