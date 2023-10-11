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
        aspectRatio: "1",
        maxWidth: "min(300px, 100dvw)",
        overflow: "hidden",
        boxShadow: "0 0 0 4px var(--lightColor)",
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
