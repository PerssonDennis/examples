import { useCallback, useState } from "react";

const useStaticElementDimensions = <T extends HTMLDivElement>() => {
  const [dimensions, setDimensions] = useState<DOMRect | null>(null);

  const ref = useCallback((node: T | null) => {
    if (!!node) {
      const domRect = node.getBoundingClientRect();
      setDimensions(domRect);
    }
  }, []);

  return { dimensions, ref };
};

export default useStaticElementDimensions;
