import { useCallback, useEffect, useRef } from "react";

const DEFAULT_THROTTLE_MS = 800;

const getRemainingTime = (lastTriggeredTime, throttleMs) => {
  const elapsedTime = Date.now() - lastTriggeredTime;
  const remainingTime = throttleMs - elapsedTime;

  return remainingTime < 0 ? 0 : remainingTime;
};

const useThrottledFunction = ({
  callbackFn,
  throttleMs = DEFAULT_THROTTLE_MS
}) => {
  const lastTriggered = useRef(Date.now());
  const timeoutRef = useRef(null);

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const throttledFn = useCallback(
    (args) => {
      let remainingTime = getRemainingTime(lastTriggered.current, throttleMs);

      if (remainingTime === 0) {
        lastTriggered.current = Date.now();
        callbackFn(args);
        cancel();
      } else if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          remainingTime = getRemainingTime(lastTriggered.current, throttleMs);

          if (remainingTime === 0) {
            lastTriggered.current = Date.now();
            callbackFn(args);
            cancel();
          }
        }, remainingTime);
      }
    },
    [callbackFn, cancel]
  );

  useEffect(() => cancel, [cancel]);

  return { cancel, throttledFn };
};

export default useThrottledFunction;
