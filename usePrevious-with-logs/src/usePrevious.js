// ### usePrevious.js (with logs)

import { useRef, useEffect } from "react";

const usePrevious = (value, defaultValue) => {
  console.log("[usePrevious] value:", value);
  const ref = useRef(defaultValue);

  useEffect(() => {
    console.log("[usePrevious useEffect] value:", value);
    console.log("[usePrevious useEffect] increment ref.current:", ref.current);
    ref.current = value;
  }, [value]);

  console.log("[usePrevious] ref.current:", ref.current);

  return ref.current;
};

export default usePrevious;
