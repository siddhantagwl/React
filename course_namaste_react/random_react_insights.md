1. react was built with philosophy to manipualte DOMs efficiently Manipulating
   DOMs is the most expensive operation by browsers.

2. react trie to solve that
   using javascript React can be written without JSX also. if you change the order
   of script in html file - for ex: write App.js before importing react cdn, it
   will throw an error ORDER of the files are important.

3. React is called both library and a framework. Its library coz it can be applioed to a small section
   of html page as well that's a good thing abt react that you dont need to build
   whole App with react.

4. NPM does not mean Node Package manager - its not the abbreviation for it - atleast officialty
5. package.json -> its a configuration file for npm. 5. npm install -D package -> here -D is dev dependency and not a normal dependency, i.e only in dev environment
6. To ship your code to production, we have to use a buttler -> this will take care of production ready code. here we are using Parcel
7. when you install somethign via npm -> "parcel": "^2.12.0" there is a carat ^ sign -> this will make sure to install next available version of the library
   similarly there is tilde ~ -> this will install the next major version fo the library (not recommended as this might break thigns)
8. why multiple packages are installed when you want to install just 1 package -> this is coz of transitive dependencies. parcel has some dependencies-> those inturn will have more dependencies so that's why all these multiple packages are installed

9. If you have packag.json and package-lock.json -< you can recreate node modules even if you delete all the node modules. so packages are v.imp and shud be pushed to git

10. npx -> executign the installed package
11. parcel (read the docs its excellentt):

    - does something called HMR -> hot module replacement
    - uses a file watching algorithm (in c++)
    - caches things for faster builds
    - Image optimization - most expensive operation in browser
    - minification
    - bundling
    - compressing
    - consistent hashing
    - code split
    - differential bundling- to support of older browsers
    - diagnostics
    - error suggestions
    - gives a way to host on https
    - tree shaking - remove unused code
    - different dev and prod bundles

12. browserslist package -> very powerful tool to configure on which brwosers our app can work, you can also provide which versions of browsers and even country specific browsers

13. babel - anopther powerful package for transpiling jsx to react object, also manages backward compatibility of browsers

14. Attributes in JSX asre camelCase ex: className, tabIndex
15. if want to write jsx in multiple lines, wrap code in ()
16. YOu can crate react compositon in jsx, element into a element, element into a component and viceversa, component into a component
17. JSX also prevents cross-site scripting attaack. coz antyhing inside {} will be executed. JSX will "escape" it, it will sanitize it. its very powerful
18. JSX makes react code more readable and faster
19. Congif driven UI -> websites driven by data/configs. Ex: if you have food order apps, there will be different offers in differrnt cities, and you cannot develop different UI application for different city, so we use configs/data to control UI. and these configs come from backend APIs
20. USE CDN to uplaod all your imges - Swiggy uses cloudinary as CDN provider to host images
21. BEST practice - destructure objects in props to avoid complexity
22. ? is called optional chaining while destructuring the json
23. loop using map function instead of for loop and key is imp to identify each card as unique, coz react optimizes the dom using these id and its imp to provide this key. KEY SHOULD BE UNIQUE
24. REACT says dont use index generated from map function as keys
25. put all the source code in src folder - industry standard
26. Put all the components separately in src/components folder
27. Put all the hard coded strings/json/objects separately in utils or common folder
28. use export keyword before const when exporting multiple objects from a file.
29. when importing the named export, use {} during importing ex: import {URL} from "../src/constants"
30. REACT is efficient and fast on DOM manipulation - UI and data layers to be in sync, this is what frameworks are trying to solve this
31. react hooks are also normal JS utility functions
32. useState() and useEffect() are the most imp hooks
33. whenever a state variable updates, react re-renders the component
34. Reconciliation Algo (React Fibre):

- uses Virtual dom - representation of actual dom. VDOM is the react element (eX: print a component like Body, it will be an object)
- Diff algo: finds difference b/w updated Vdom and prev-vdom. it will then calc the diff and update the vdom with the difference
- finding diff in js object is v.fast when compared to finding diff in html tags, thats the reason react is fast

35.
