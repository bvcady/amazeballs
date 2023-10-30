import { SeedBuilder, SquareType } from "@/types/types";
import { ASCIIWrapper } from "./ASCIIStyled";
import { CellWrapper } from "@/styles/shared/Shared.styles";
import { Wall } from "../wall/Wall";
import { Lava } from "../lava/Lava";
import { Floor } from "../floor/Floor";
import { useMazeStore } from "@/store/MazeStore";
import { Player } from "../player/Player";
import { useTumble } from "@/hooks/useTumble";
import { use, useEffect, useRef } from "react";
import { useSound } from "use-sound";

interface Props {
  squares: SquareType[];
  nX: number;
  seedBuilder: SeedBuilder;
}

export const ASCIIMaze = ({ squares, nX }: Props) => {
  const { player, saveFile } = useMazeStore((state) => state);
  const { nMovement } = saveFile;

  const [play, { sound, pause, stop, duration }] = useSound(
    "sounds/Ethan Alexander Harris - flashing lights in a park after dark.mp3",
    {
      volume: 0.1,
    }
  );

  useEffect(() => {
    if (sound) {
      play();
    }
  }, [sound]);

  const translation = [
    (player?.x || 0) * 32 + 32 + 16,
    (player?.y || 0) * 32 + 32 + 16,
  ] as [number, number];

  const { tumble } = useTumble();

  return (
    <div
      style={{
        transform:
          nMovement === 0
            ? `rotate3D(${tumble[0]}, ${tumble[1]}, ${tumble[2]}, 0.5deg)`
            : "",
      }}
    >
      <ASCIIWrapper {...{ nX, translation }}>
        {squares?.map((s) => (
          <CellWrapper key={s.x + "-" + s.y}>
            {s.isWall ? (
              <Wall cracked={s.wallCracked!} rotation={s.wallRotation!} />
            ) : null}
            {s.hasLava ? (
              <Lava
                neighbours={findNeighbours(s, "hasLava", squares)}
                isLavaSource={s.isLavaSource}
              />
            ) : null}
            {!(s.hasLava || s.isWall) ? <Floor /> : null}
          </CellWrapper>
        ))}
        <Player />
      </ASCIIWrapper>
    </div>
  );
};

const findNeighbours = (
  square: SquareType,
  key: keyof SquareType,
  source: SquareType[]
) => {
  const l = source?.some(
    (s) => s.x === square.x - 1 && s.y === square.y && s?.[key] === true
  );
  const r = source?.some(
    (s) => s.x === square.x + 1 && s.y === square.y && s?.[key] === true
  );
  const u = source?.some(
    (s) => s.y === square.y - 1 && s.x === square.x && s?.[key] === true
  );
  const d = source?.some(
    (s) => s.y === square.y + 1 && s.x === square.x && s?.[key] === true
  );

  const ur = source?.some(
    (s) => s.x === square.x + 1 && s.y === square.y - 1 && s?.[key] === true
  );
  const dr = source?.some(
    (s) => s.x === square.x + 1 && s.y === square.y + 1 && s?.[key] === true
  );
  const ul = source?.some(
    (s) => s.x === square.x - 1 && s.y === square.y - 1 && s?.[key] === true
  );
  const dl = source?.some(
    (s) => s.x === square.x - 1 && s.y === square.y + 1 && s?.[key] === true
  );

  return { l, r, u, d, ur, dr, ul, dl };
};
