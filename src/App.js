import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Comments></Comments>
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

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <h2>Total comments: {comments.length}</h2>
      {comments.map((comment) => (
        <Comment name={comment.name} body={comment.body}></Comment>
      ))}
    </div>
  );
}

// Comment component
function Comment(props) {
  return (
    <div>
      <h5>Name: {props.name}</h5>
      <p>{props.body}</p>
    </div>
  );
}
export default App;
