/* eslint-disable react-hooks/exhaustive-deps */
import { setPriority } from "os";
import { useCallback, useEffect, useState } from "react";

interface Props {
  callback: (input?: any) => void;
}

export const useKeyPress = ({ callback }: Props) => {
  const [keyPressed, setKeyPressed] = useState<string>("");

  const handler = (key: string | undefined) => {
    if (key) {
      return callback(key);
    }
  };

  useEffect(() => {
    if (keyPressed) {
      handler(keyPressed);
    }
  }, [keyPressed]);

  const onKeyUp = (e: KeyboardEvent) => {
    setKeyPressed(e.key.trim() || e.code.trim());
  };
  const onKeyDown = () => {
    setKeyPressed("");
  };

  useEffect(() => {
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);
};
