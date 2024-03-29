import React from "react";
import ReactDOM from "react-dom/client";

// getting an element is core function of ReactDom
const root = ReactDOM.createRoot(document.getElementById("root"));

// html-like syntaxt but not HTML
// jsx code is transpiled ie code that browser can understnad (babel does this)
// (this is much more easy to  write and can be considered as REACT ELEMENT)
// class is className in JSX -> all the attributes are camel case, this proves jsx
// is NOT HTML
const jsxHeading = <h1 id="heading">from jsxxxxxxx</h1>;

// jsx in multiple lines
const jsxMultipleLines = (
  <h1 id="heading" className="asc">
    from jsxxxxxxx multiple lines
  </h1>
);

// REACT COMPONENTS
// two ways to create - class based (old way) and fucntional componenets (new way)
// REACT functional component -> just a javascript function which returns JSX element
const Title = () => {
  return <h1>Some title</h1>;
};

const HeadingComponent = () => {
  return <h1>first react functional component</h1>;
};

// there are multiple ways of writing the same component
// in single line
const HeadingComp2 = () => <h1 className="someclass">another way</h1>;

const someVar = "123";

// without return also works
// u can also isnert one component into another component
// and this is called component composition (2 componenbts in one)
const HeadingComp3 = () => (
  <div className="div11">
    <Title />
    {someVar}
    <h1 className="someclass">another wsdsdsdsdsdsay</h1>
  </div>
);

// COOL STUFF
const HeadingComp4 = () => (
  <div className="div11">
    {Title()}
    <h1 className="someclass">
      Cool way of calling a component title() like a function
    </h1>
  </div>
);

// render is actually converting the heading object to html code and putting in the dom
root.render(jsxMultipleLines);

// HOW TO RENDER COMPONENT to root?
root.render(<HeadingComp4 />);
