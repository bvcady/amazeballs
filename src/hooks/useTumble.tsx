import { useEffect, useState } from "react";

export const useTumble = (shouldTumble?: boolean) => {
  const [tumble, setTumble] = useState([0, 0, 0]);

  const [x, y, z] = tumble;

  const handleTumble = () => {
    setTumble([
      -1 + Math.random() * 2,
      -1 + Math.random() * 2,
      -1 + Math.random() * 2,
    ]);
  };

  useEffect(() => {
    const tumbleInterval = shouldTumble
      ? setInterval(() => handleTumble(), 100)
      : undefined;
    if (!shouldTumble) {
      () => clearInterval(tumbleInterval);
    }
    return () => clearInterval(tumbleInterval);
  }, [shouldTumble]);

  return { tumble, x, y, z };
};
