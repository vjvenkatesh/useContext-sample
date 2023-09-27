// App.js
import React, { useState } from "react";
import { CountContext } from "./CountContext";
import ParentComponent from "./ParentComponent";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <ParentComponent />
      </CountContext.Provider>
    </div>
  );
}

// ParentComponent.js

// ChildComponent.js

// GrandchildComponent.js
