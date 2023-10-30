import { theme } from "@/styles/Global";

export const Coloring = () => (
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
);
