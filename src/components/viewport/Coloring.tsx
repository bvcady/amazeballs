import { useGameStore } from "@/store/GameStore";
import { theme } from "@/styles/Global";

export const Coloring = () => {
  const { gameColor } = useGameStore((game) => game);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        margin: 0,
        padding: 0,
        background: gameColor || theme.colors.accent,
        mixBlendMode: "soft-light",
        transition: "background 0.3s ease-out",
      }}
    />
  );
};
