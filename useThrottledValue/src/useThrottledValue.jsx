import { useCallback, useEffect, useRef, useState } from "react";

const DEFAULT_THROTTLE_MS = 800;

const getRemainingTime = (lastTriggeredTime, throttleMs) => {
  const elapsedTime = Date.now() - lastTriggeredTime;
  const remainingTime = throttleMs - elapsedTime;

  return remainingTime < 0 ? 0 : remainingTime;
};

const useThrottledValue = ({ value, throttleMs = DEFAULT_THROTTLE_MS }) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastTriggered = useRef(Date.now());
  const timeoutRef = useRef(null);

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    let remainingTime = getRemainingTime(lastTriggered.current, throttleMs);

    if (remainingTime === 0) {
      lastTriggered.current = Date.now();
      setThrottledValue(value);
      cancel();
    } else if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        remainingTime = getRemainingTime(lastTriggered.current, throttleMs);

        if (remainingTime === 0) {
          lastTriggered.current = Date.now();
          setThrottledValue(value);
          cancel();
        }
      }, remainingTime);
    }

    return cancel;
  }, [cancel, throttleMs, value]);

  return throttledValue;
};

export default useThrottledValue;
