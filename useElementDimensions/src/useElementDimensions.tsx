import useEventListener from "./useEventListener";
import { useCallback, useRef, useState } from "react";

const useElementDimensions = <T extends HTMLDivElement>() => {
  const ref = useRef<T>(null);
  const [dimensions, setDimensions] = useState<DOMRect | null>(null);

  const refresh = useCallback(() => {
    const domRect = ref.current?.getBoundingClientRect();

    if (domRect) {
      setDimensions(domRect);
    }
  }, []);

  useEventListener("resize", refresh);
  useEventListener("scroll", refresh, true);

  return { dimensions, ref, refresh };
};

export default useElementDimensions;
