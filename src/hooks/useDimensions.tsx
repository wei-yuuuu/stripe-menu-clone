import { useState, useCallback, useLayoutEffect } from "react";

const getDimensions = (element: any): DOMRect =>
  element.getBoundingClientRect();

function useDimensions(responsive = true) {
  const [dimensions, setDimensions] = useState<DOMRect>();
  const [element, setElement] = useState<any>();

  const setRef = useCallback((ref) => setElement(ref), []);

  useLayoutEffect(() => {
    if (element) {
      const updateDimensions = () => {
        window.requestAnimationFrame(() => {
          setDimensions(getDimensions(element));
        });
      };

      updateDimensions();

      if (responsive) {
        window.addEventListener("resize", updateDimensions);

        return () => {
          window.removeEventListener("resize", updateDimensions);
        };
      }
    }
  }, [element, responsive]);

  return [setRef, dimensions, element];
}

export default useDimensions;
