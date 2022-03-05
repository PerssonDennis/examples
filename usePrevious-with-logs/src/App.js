// ### App.jsx (with logs)
// When the button is clicked, the value is incremented.
// That will in turn increment the count.

import React, { useEffect, useState } from "react";
import usePrevious from "./usePrevious";

export default function App() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  console.log("[App] rendering App");
  console.log("[App] count (before render):", count);
  console.log("[App] value:", value);
  const previouseValue = usePrevious(value, 0);
  console.log("[App] previousValue:", previouseValue);

  useEffect(() => {
    console.log("[App useEffect] value:", value);
    console.log("[App useEffect] previouseValue:", previouseValue);

    if (previouseValue !== value) {
      console.log("[App useEffect] set count to value:", value, "\n\n");
      setCount(count + 1);
    } else {
      console.log("[App useEffect] not increasing count");
    }
  }, [previouseValue, value, count]);

  console.log("[App] count (after render):", count);
  console.log("[App] done rendering App\n\n");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}
