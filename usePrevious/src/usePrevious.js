// ### usePrevious.js

import { useRef, useEffect } from "react";

const usePrevious = (value, defaultValue) => {
  const ref = useRef(defaultValue);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
