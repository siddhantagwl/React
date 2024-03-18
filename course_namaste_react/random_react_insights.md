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
