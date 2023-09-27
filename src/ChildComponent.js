import GrandchildComponent from "./GrandchildComponent";
import React, { useContext } from "react";
import { CountContext } from "./CountContext";

function ChildComponent() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <div>ChildComponent: {count}</div>
      <GrandchildComponent />
    </div>
  );
}

export default ChildComponent;
