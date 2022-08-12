import { useMemo, useState } from "react";
import useThrottledValue from "./useThrottledValue";

// Note that this will be called twice with React StrictMode because it's a
// callback provided to a useMemo.
const performHeavyCalculation = (value) => {
  console.log("Heavy calculation for value:", value);
  return value;
};

export default function App() {
  const [value, setValue] = useState(0);
  const throttledValue = useThrottledValue({ value, throttleMs: 5000 });

  const memoizedValue = useMemo(() => {
    return performHeavyCalculation(throttledValue);
  }, [throttledValue]);

  return (
    <div>
      <button onClick={() => setValue(value + 1)}>Increment value</button>
      <p>Calculates a new value every fifth second.</p>
      <p>Value: {value}</p>
      <p>Last caculated result: {memoizedValue}</p>
    </div>
  );
}
