/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";

interface Props {
  keys: string[];
  callback: (input?: any) => void;
}

export const useKeyPress = ({ keys, callback }: Props) => {
  const [keyPressed, setKeyPressed] = useState<string | undefined>();

  const handler = (e: string | undefined) => {
    if (!e) {
      return;
    }

    if (
      keys?.map((k) => k.toLocaleLowerCase()).includes(e?.toLocaleLowerCase())
    ) {
      return callback();
    }
  };

  useEffect(() => handler(keyPressed), [keyPressed]);

  useEffect(() => {
    window.addEventListener("keyup", (event) => setKeyPressed(event.key));
    window.addEventListener("keydown", () => setKeyPressed(undefined));
  }, []);

  return;
};
