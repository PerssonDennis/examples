// ### App.js
// When the button is clicked, the value is incremented.
// That will in turn increment the count.

import React, { useEffect, useState } from "react";
import usePrevious from "./usePrevious";

export default function App() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  const previouseValue = usePrevious(value, 0);

  useEffect(() => {
    if (previouseValue !== value) {
      setCount(count + 1);
    }
  }, [previouseValue, value, count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}
