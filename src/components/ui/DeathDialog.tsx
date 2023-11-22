import { useSeeding } from "@/hooks/useSeeding";
import { useGameStore } from "@/store/GameStore";
import { theme } from "@/styles/Global";

export const DeathDialog = () => {
  const { setNewSeed } = useSeeding();

  const { saveFile } = useGameStore((state) => state);
  const { nHealth } = saveFile;

  return (
    <dialog
      open={nHealth <= 0}
      onClose={() => setNewSeed()}
      style={{
        pointerEvents: "all",
        position: "absolute",
        inset: "0",
        zIndex: 4,
        background: theme.colors.light,
        borderColor: theme.colors.dark,
      }}
    >
      <span>
        You Died
        <form method="dialog">
          <button style={{ all: "unset", color: theme.colors.accent }}>
            <span>restart</span>
          </button>
        </form>
      </span>
    </dialog>
  );
};
