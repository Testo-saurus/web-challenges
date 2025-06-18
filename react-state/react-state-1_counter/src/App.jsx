import "./styles.css";

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function subtractOneOnClick() {
    setCount((prev) => prev - 1);
  }
  function addOneOnClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={subtractOneOnClick}>
          -
        </button>
        <button type="button" onClick={addOneOnClick}>
          +
        </button>
      </div>
    </div>
  );
}
