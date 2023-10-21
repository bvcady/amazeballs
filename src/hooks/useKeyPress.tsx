/* eslint-disable react-hooks/exhaustive-deps */
import { setPriority } from "os";
import { useCallback, useEffect, useState } from "react";

interface Props {
  callback: (input?: any) => void;
}

export const useKeyPress = ({ callback }: Props) => {
  const [keyPressed, setKeyPressed] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

  const handler = (key: string | undefined) => {
    if (key) {
      return callback(key);
    }
  };

  useEffect(() => {
    handler(keyPressed);
  }, [keyPressed]);

  const onKeyUp = (e: KeyboardEvent) => {
    setKeyPressed(e.key);
    setHistory([...history, e.key]);
  };

  useEffect(() => {
    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  }, []);

  return { history };
};
