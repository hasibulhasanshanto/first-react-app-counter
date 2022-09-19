import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(50);

  const incrementState = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const decrementState = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div>
      <h2 className="count-card">Count: {count}</h2>
      <button onClick={incrementState} className="mx-2">
        Increment
      </button>
      <button onClick={decrementState} className="mx-2">
        Decrement
      </button>
    </div>
  );
}

export default App;
