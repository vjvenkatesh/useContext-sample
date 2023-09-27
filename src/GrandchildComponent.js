import React, { useContext } from "react";
import { CountContext } from "./CountContext";

function GrandchildComponent() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <p>GrandChild Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default GrandchildComponent;
