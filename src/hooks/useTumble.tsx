import { useEffect, useState } from "react";

export const useTumble = () => {
  const [tumble, setTumble] = useState([0, 0, 0]);

  const [x, y, z] = tumble;

  const handleTumble = () =>
    setTumble([
      -1 + Math.random() * 2,
      -1 + Math.random() * 2,
      -1 + Math.random() * 2,
    ]);

  useEffect(() => {
    const tumbleInterval = setInterval(() => handleTumble(), 100);
    return () => clearInterval(tumbleInterval);
  }, []);

  return { tumble, x, y, z };
};
