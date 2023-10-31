import { useEffect } from "react";

export const useAnimationFrame = (callback: Function) => {
  useEffect(() => {
    const timeOut = setInterval(() => {
      callback();
    }, 1000 / 6);

    return () => {
      clearInterval(timeOut);
    };
  }, []); // Make sure the effect runs only once
};
