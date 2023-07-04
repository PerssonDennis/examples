import { pubSub } from "./pubsub";
import { useCallback, useEffect, useState } from "react";

interface UseGlobalStateProps<T> {
  shareKey: string;
  initialState?: T;
  onStateUpdated?: (data: T) => void;
}

const useGlobalState = <T>({
  initialState,
  onStateUpdated,
  shareKey
}: UseGlobalStateProps<T>) => {
  const [state, setState] = useState<T>(initialState as T);

  const onStateUpdate = useCallback(
    (data: T) => {
      setState(data);
      onStateUpdated?.(data);
    },
    [onStateUpdated]
  );

  useEffect(() => {
    pubSub.subscribe(shareKey, onStateUpdate);

    return () => pubSub.unsubscribe(shareKey, onStateUpdate);
  }, [onStateUpdate, shareKey]);

  const setSharedState = useCallback(
    (data: T) => {
      pubSub.emit(shareKey, data);
    },
    [shareKey]
  );

  return [state, setSharedState] as [T, (data: T) => void];
};

export default useGlobalState;
