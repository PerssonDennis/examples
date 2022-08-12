import { useCallback, useEffect } from "react";
import useThrottledFunction from "./useThrottledFunction";

const performHeavyCalculation = () => {
  console.log("Heavy calculation");
};

export default function App() {
  const callbackFnToThrottle = useCallback(() => {
    performHeavyCalculation();
  }, []);

  const { cancel, throttledFn } = useThrottledFunction({
    callbackFn: callbackFnToThrottle,
    throttleMs: 5000
  });

  useEffect(() => {
    window.addEventListener("scroll", throttledFn);

    return () => {
      cancel();
      window.removeEventListener("scroll", throttledFn);
    };
  }, [cancel, throttledFn]);

  return (
    <div>
      <p>Scroll and look in console.</p>
      <p>Code uses a throttle of 5 seconds.</p>
      <div style={{ height: "4000px" }} />
      <p>End of scroll...</p>
    </div>
  );
}
