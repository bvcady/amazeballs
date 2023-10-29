/* eslint-disable @next/next/no-img-element */
import { useSeeding } from "@/hooks/useSeeding";
import { useMazeStore } from "@/store/MazeStore";
import { theme } from "@/styles/Global";
import styled from "@emotion/styled";
import { Skeleton, keyframes } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { DeathDialog } from "../maze/ascii/ui/DeathDialog";

interface Props {
  children: ReactNode;
}

export const ViewPort = ({ children }: Props) => {
  const { player, saveFile } = useMazeStore((state) => state);
  const { nHealth } = saveFile;
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
      }}
    >
      <DeathDialog />
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
      <BlurLayer blur={nHealth <= 0 ? "10px" : blur} />
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
          backgroundSize: "8px",
          backgroundRepeat: "repeat",
          backgroundPosition: "-10px 2px",
          backgroundImage: 'url("sprites/grid.svg")',
          mixBlendMode: "darken",
          opacity: 0.25,
        }}
      ></div>
      <LightWrapper>
        <LightStreak width="3rem" left="10%" intensity="0.4" />
        <LightStreak
          width="1rem"
          left="20%"
          intensity="0.8"
          color="white"
          delay="30s"
        />
        <LightStreak
          width="2rem"
          left="calc(10% + 5rem)"
          intensity="0.8"
          delay={"10s"}
          style={{ transform: "rotate(33deg)" }}
        />
      </LightWrapper>
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

const LightWrapper = styled("div")`
  position: absolute;
  inset: 0;
  mix-blend-mode: hard-light;
  filter: blur(10px);
  -webkit-filter: blur(10px);
  z-index: 6;
  opacity: 0.5;
`;

const lightMovement = keyframes`
	0% {
    background-position: 0% 0px;
  }
	50% {
    background-position: 100% 1000px;
  }
	100% {
    background-position: 0% 0px;
  }
`;

const LightStreak = styled("div")<{
  width?: string;
  left?: string;
  intensity?: string;
  delay?: string;
  color?: string;
}>`
  position: absolute;
  width: ${({ width }) => width || "10px"};
  left: ${({ left }) => left || "1rem"};
  top: -50%;
  height: 200%;
  z-index: 6;
  background-size: 200% 200%;
  background-color: white;
  background-repeat: no-repeat;
  background-position: 84% 0;

  --color: ${({ color }) => color || theme.colors.accent};

  background: linear-gradient(
    48deg,
    transparent,
    var(--color),
    transparent,
    transparent,
    var(--color),
    transparent,
    transparent,
    transparent
  );
  opacity: ${({ intensity }) => intensity};
  transform: rotate(45deg);
  animation: ${lightMovement} 60s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || "0s"};
`;
