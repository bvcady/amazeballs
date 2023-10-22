import { useSeeding } from "@/hooks/useSeeding";
import { useMazeStore } from "@/store/MazeStore";

export const DeathDialog = () => {
  const { setNewSeed } = useSeeding();

  const { saveFile } = useMazeStore((state) => state);
  const { nHealth } = saveFile;

  return (
    <dialog
      open={nHealth <= 0}
      onClose={() => setNewSeed()}
      style={{
        pointerEvents: "all",
        position: "absolute",
        inset: "0",
        zIndex: 1000,
      }}
    >
      <span>
        You Died
        <form method="dialog">
          <button>
            <span>restart</span>
          </button>
        </form>
      </span>
    </dialog>
  );
};
