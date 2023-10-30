import { SeedBuilder, SquareType } from "@/types/types";
import { ASCIIWrapper, CellWrapper } from "./styles/ASCIIStyled";
import { Wall } from "./components/Wall";
import { Lava } from "./components/lava/Lava";
import { Floor } from "./components/Floor";
import { useMazeStore } from "@/store/MazeStore";
import { Player } from "./components/player/Player";
import { useTumble } from "@/hooks/useTumble";

interface Props {
  squares: SquareType[];
  nX: number;
  seedBuilder: SeedBuilder;
}

export const ASCIIMaze = ({ squares, nX, seedBuilder }: Props) => {
  const { player, saveFile } = useMazeStore((state) => state);
  const { nMovement } = saveFile;

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
        {squares?.map((s) => {
          return (
            <CellWrapper key={s.x + "-" + s.y}>
              {player?.x === s.x && player.y === s.y ? (
                <Player key={"player" + s.x + "-" + s.y} />
              ) : null}
              {s.isWall ? (
                <Wall
                  cracked={
                    seedBuilder(["wall-cracked", s.x, s.y]).random() > 0.5
                  }
                  rotation={
                    Math.floor(
                      seedBuilder(["wall-cracked", s.x, s.y]).random() * 4
                    ) * 90
                  }
                />
              ) : null}
              {s.hasLava ? (
                <Lava
                  neighbours={findNeighbours(s, "hasLava", squares)}
                  isLavaSource={s.isLavaSource}
                />
              ) : null}
              {!(s.hasLava || s.isWall) ? <Floor /> : null}
            </CellWrapper>
          );
        })}
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
