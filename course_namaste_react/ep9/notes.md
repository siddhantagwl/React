0. ****\*\*\***** VERY IMPORTANT ******\*\*\*\*******
1. keep compoennts as light as possible - break into modules and follow Single Responsibility Principle
2. Custom Hooks -> can be thought of custom utility/helper functions. create a separate file for a separate hook.
3. Receommended Naming convention-> sstart with "use" so that we know its a hook
4. feature - user's internet is online/offline using a customHook. can be on a chat application
5. you can simulate internet off from browser
6. UX - dino game on offline
7. Parcel - an imp job is to bundle all components. curerntly parcel will bundle everything in 1 JS file and when its gets heavy with lots of component, it will affect the performance of app in bad way
8. Bundling is imp bbut better way is to make smaller bundles - this process is called chunking/ code splitting/dynamic bundling/ lazy importing/ On demand loading
9. In react how you do it is - when importing use lazy loading. ie when home page is laoded, it wont load grocery, only when you go to grocery page, it will then be loaded.
10. But using this -> when you click on grocery, react throws an error. coz there is a delay to load grocery JS file and react is very fast, that means react loaded the component before grocery was not even there, hence react suspended the rendeering
11. To handle this use "Suspense" component from react. it takes a fallback, what shud react render if grocery is not there. In browser to simulate this switch to slow 3g network. Good example to use -> in e-commerce websites to do lazy laoding and bundle in different chunks
12.
