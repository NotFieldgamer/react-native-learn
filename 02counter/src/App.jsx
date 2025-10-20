import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 5

  const addValue = () => {
    // counter = counter + 1
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    console.log("clicked", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
    console.log("clicked", counter);
  };
  return (
    <>
      <h1>Ignite And Web</h1>
      <h2>Counter Value: {counter}</h2>

      <button onWheel={addValue}>Add Value {counter}</button>
      <br />
      <button onWheel={ removeValue }>Remove Value {counter} </button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
