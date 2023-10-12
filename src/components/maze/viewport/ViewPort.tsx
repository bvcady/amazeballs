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
      }}
    >
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
      <img
        src="http://www.devrs.com/gb/files/grid4.gif"
        alt="grid"
        style={{
          position: "absolute",
          zIndex: 5,
          height: "100%",
          objectFit: "contain",
          mixBlendMode: "multiply",
          opacity: 0.1,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "-50%",
          zIndex: 2,
          margin: 0,
          padding: 0,
          background: theme.colors.accent,
          mixBlendMode: "soft-light",
        }}
      />
      {children}
    </div>
  );
};
