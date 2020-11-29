import { useState, useCallback, useLayoutEffect } from "react";

const getRect = (element: any): DOMRect => element.getBoundingClientRect();

function useDimensions() {
  const [dimensions, setDimensions] = useState<DOMRect>();
  const [element, setElement] = useState<DOMRect>();

  const setRef = useCallback((ref: any) => setElement(ref), []);

  useLayoutEffect(() => {
    if (element) {
      const updateDimensions = () => {
        setDimensions(getRect(element));
      };

      updateDimensions();

      window.addEventListener("resize", updateDimensions);
      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
  }, [element]);

  return { setRef, dimensions, element };
}

export default useDimensions;
