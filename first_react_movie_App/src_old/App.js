import "./App.css";
import { useState, useEffect } from "react";

// this is a custom component called Person
// every component has props as inbult parameter
const Person = (props) => {
  return (
    // thsi <> (react fragment) is imp if multiple html eements are used
    <>
      <h1> Name: {props.naame}</h1>
      <h2>Last: {props.Last}</h2>
      <h2>Age: 25</h2>
    </>
  );
};

function App() {
  // array follows this flow
  // 1 is the inital value that u can give
  // react state can only be changed using its own setter function
  const [counter, setCounter] = useState(1); // this is called a hook

  // runs as soon as APP renders
  useEffect(() => {
    // alert("REload");
    // counter = 100; // this is invalida nd will cause error , as reacct state vaibale cannot be changed from here
    // setCounter(100);
    alert("Changed counter to" + counter);
  }, [counter]); // the sencond arg [] is called dependency array and if its empty, it will only happen on initial load of the function

  return (
    <div className="App">
      {/* <Person naame="Sid" Last="Agssda"></Person>
      <Person></Person>
      <Person></Person> */}
      {/*  demo to use states */}
      {/* prevCount is the parameter of setCounter */}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
}

export default App;
