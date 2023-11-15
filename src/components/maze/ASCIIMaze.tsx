import { SeedBuilder, SquareType } from "@/types/types";
import { ASCIIWrapper } from "./ASCIIStyled";
import { CellWrapper } from "@/styles/shared/Shared.styles";
import { Wall } from "../wall/Wall";
import { Lava } from "../lava/Lava";
import { Floor } from "../floor/Floor";
import { useMazeStore } from "@/store/MazeStore";
import { Player } from "../player/Player";
import { useTumble } from "@/hooks/useTumble";
import React, { use, useEffect, useRef, useState } from "react";
import { useSound } from "use-sound";
import { gsap } from "gsap";
import { useUIStore } from "@/store/UIStore";

interface Props {
  squares: SquareType[];
  nX: number;
  seedBuilder: SeedBuilder;
}

export const ASCIIMaze = ({ squares, nX }: Props) => {
  const { player, saveFile } = useMazeStore((state) => state);

  const { menuOpen } = useUIStore((state) => state);
  const { nMovement } = saveFile;
  const [previousTranslation, setPreviousTranslation] = useState({
    x: 0,
    y: 0,
  });

  // const [play, { sound }] = useSound(
  //   "sounds/Ethan Alexander Harris - flashing lights in a park after dark.mp3",
  //   {
  //     volume: 0.2,
  //   }
  // );

  // useEffect(() => {
  //   if (sound) {
  //     // play();
  //   }
  // }, [sound]);

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cellSize = 32;

    const dMenu = menuOpen ? -1.75 * 32 : 0;

    const translation = player
      ? {
          x: -player?.x * cellSize + 3.125 * cellSize + dMenu,
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
  }, [player, menuOpen]);

  const { tumble } = useTumble(nMovement === 0);

  useEffect(() => {
    console.log("change");
  }, [tumble]);

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
          <React.Fragment key={s.x + "-" + s.y}>
            {s.isWall ? (
              <Wall
                {...{ x: s.x, y: s.y }}
                cracked={s.wallCracked!}
                rotation={s.wallRotation!}
              />
            ) : null}
            <CellWrapper>
              {s.hasLava ? (
                <Lava
                  neighbours={findNeighbours(s, "hasLava", squares)}
                  isLavaSource={s.isLavaSource}
                />
              ) : null}
            </CellWrapper>
          </React.Fragment>
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
