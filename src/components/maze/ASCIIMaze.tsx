import { SeedBuilder, SquareType } from "@/types/types";
import { ASCIIWrapper } from "./ASCIIStyled";
import { CellWrapper } from "@/styles/shared/Shared.styles";
import { Wall } from "../wall/Wall";
import { Lava } from "../lava/Lava";
import { Floor } from "../floor/Floor";
import { useMazeStore } from "@/store/MazeStore";
import { Player } from "../player/Player";
import { useTumble } from "@/hooks/useTumble";
import { use, useEffect, useRef, useState } from "react";
import { useSound } from "use-sound";
import { gsap } from "gsap";

interface Props {
  squares: SquareType[];
  nX: number;
  seedBuilder: SeedBuilder;
}

export const ASCIIMaze = ({ squares, nX }: Props) => {
  const { player, saveFile } = useMazeStore((state) => state);
  const { nMovement } = saveFile;
  const [previousTranslation, setPreviousTranslation] = useState({
    x: 0,
    y: 0,
  });

  const [play, { sound }] = useSound(
    "sounds/Ethan Alexander Harris - flashing lights in a park after dark.mp3",
    {
      volume: 0.2,
    }
  );

  useEffect(() => {
    if (sound) {
      // play();
    }
  }, [sound]);

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cellSize = 32;

    const translation = player
      ? {
          x: -player?.x * cellSize + 3.125 * cellSize,
          y: -player?.y * cellSize + 3.125 * cellSize,
        }
      : { x: 0, y: 0 };

    if (player && mapRef.current) {
      gsap.fromTo(
        mapRef.current,
        {
          transform: `translateX(${previousTranslation.x}px) translateY(${previousTranslation.y}px)`,
        },
        {
          transform: `translateX(${translation.x}px) translateY(${translation.y}px)`,
          duration: 0.66,
          ease: "ease-in",
        }
      );
      setPreviousTranslation({
        x: translation.x,
        y: translation.y,
      });
    }
  }, [player]);

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
      <ASCIIWrapper ref={mapRef} {...{ nX }}>
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
