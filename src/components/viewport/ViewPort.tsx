/* eslint-disable @next/next/no-img-element */
import { useMazeStore } from "@/store/MazeStore";
import { theme } from "@/styles/Global";
import styled from "@emotion/styled";
import { Box, Skeleton } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export const ViewPort = ({ children }: Props) => {
  const { player } = useMazeStore((state) => state);
  const [blur, setBlur] = useState("0px");

  useEffect(() => {
    setBlur("0.5px");

    const blurTimeout = setTimeout(() => {
      setBlur("0px");
    }, 300);

    return () => clearTimeout(blurTimeout);
  }, [player]);

  return (
    <div
      style={{
        aspectRatio: "160/144",
        maxWidth: "min(300px, 100dvw)",
        overflow: "hidden",
        boxShadow: "0 0 0 1rem var(--lightColor)",
        pointerEvents: "none",
        background: theme.colors.dark,
        position: "relative",
        borderRadius: "0.25rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          margin: 0,
          padding: 0,
          background: theme.colors.accent,
          mixBlendMode: "soft-light",
        }}
      />
      <BlurLayer blur={blur} />
      <Skeleton
        animation="wave"
        sx={{
          position: "absolute",
          inset: "-50%",
          zIndex: 3,
          margin: 0,
          padding: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          zIndex: 4,
          inset: "0",
          backgroundRepeat: "repeat",
          backgroundPosition: "6px -3px",
          backgroundImage: 'url("sprites/grid.svg")',
          mixBlendMode: "darken",
          opacity: 0.25,
        }}
      ></div>
      <LightStreak width="1rem" left="10%" intensity="0.2" />
      <LightStreak width="0.125rem" left="calc(10% + 1.5rem)" intensity="0.8" />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 7,
          margin: 0,
          padding: 0,
          mixBlendMode: "hard-light",
          opacity: "0.4",
          boxShadow: "inset 0 0 0 1px white",
        }}
      />
      {children}
    </div>
  );
};

const BlurLayer = styled("div")<{ blur: string }>`
  position: absolute;
  z-index: 3;
  inset: 0;
  backdrop-filter: blur(${({ blur }) => blur});
  -webkit-backdrop-filter: blur(${({ blur }) => blur});
`;

const LightStreak = styled("div")<{
  width?: string;
  left?: string;
  intensity?: string;
}>`
  position: absolute;
  width: ${({ width }) => width || "10px"};
  left: ${({ left }) => left || "1rem"};
  top: -50%;
  height: 200%;
  z-index: 6;
  background-color: rgba(
    255,
    250,
    230,
    ${({ intensity }) => intensity || "0.5"}
  );
  transform: rotate(45deg);
  mix-blend-mode: soft-light;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
`;
