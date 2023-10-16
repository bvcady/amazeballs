/* eslint-disable @next/next/no-img-element */
import { theme } from "@/styles/Global";
import { Box, Skeleton } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ViewPort = ({ children }: Props) => {
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
      <div
        style={{
          position: "absolute",
          width: "2rem",
          top: "-50%",
          height: "200%",
          zIndex: 5,
          margin: 0,
          padding: 0,
          background: "rgba(255, 255, 255, 0.2)",
          transform: "rotate(45deg)",
          mixBlendMode: "soft-light",
          backdropFilter: "blur(1px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "0.25rem",
          top: "-50%",
          left: "3rem",
          height: "200%",
          zIndex: 6,
          margin: 0,
          padding: 0,
          background: "rgba(255, 255, 255, 0.5)",
          transform: "rotate(45deg)",
          mixBlendMode: "soft-light",
          backdropFilter: "blur(1px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 7,
          margin: 0,
          padding: 0,
          mixBlendMode: "hard-light",
          opacity: "0.4",
          boxShadow: "inset 0 0 0 3px white",
        }}
      />
      {children}
    </div>
  );
};
