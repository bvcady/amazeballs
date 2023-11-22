import { useGameStore } from "@/store/GameStore";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export const Blur = () => {
  const [blur, setBlur] = useState("0px");

  const { saveFile, player } = useGameStore((state) => state);
  const { nHealth } = saveFile;

  const playerIsDead = nHealth <= 0;

  useEffect(() => {
    setBlur("0.5px");

    const blurTimeout = setTimeout(() => {
      setBlur("0px");
    }, 300);

    return () => clearTimeout(blurTimeout);
  }, [player]);

  return <BlurLayer blur={playerIsDead ? "10px" : blur} />;
};

const BlurLayer = styled("div")<{ blur: string }>`
  position: absolute;
  z-index: 3;
  inset: 0;
  backdrop-filter: blur(${({ blur }) => blur});
  -webkit-backdrop-filter: blur(${({ blur }) => blur});
`;
