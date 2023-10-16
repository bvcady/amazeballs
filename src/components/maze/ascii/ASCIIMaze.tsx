import { SquareType } from "@/types/types";
import { ASCIIWrapper, CellWrapper } from "./styles/ASCIIStyled";
import { Wall } from "./components/Wall";
import { Lava } from "./components/Lava";
import { Floor } from "./components/Floor";
import { useMazeStore } from "@/store/MazeStore";
import { Player } from "./components/Player";
import { useEffect, useState } from "react";

interface Props {
  squares: SquareType[];
  nX: number;
}

export const ASCIIMaze = ({ squares, nX }: Props) => {
  const { player } = useMazeStore((state) => state);

  const translation = [
    (player?.x || 0) * 32 + 32 + 16,
    (player?.y || 0) * 32 + 32 + 16,
  ] as [number, number];

  return (
    <ASCIIWrapper {...{ nX, translation }}>
      {squares?.map((s) => {
        return (
          <CellWrapper key={s.x + "-" + s.y}>
            {player?.x === s.x && player.y === s.y ? (
              <Player key={"player" + s.x + "-" + s.y} />
            ) : null}
            {s.isWall ? <Wall /> : null}
            {s.hasLava ? <Lava /> : null}
            {!(s.hasLava || s.isWall) ? <Floor /> : null}
          </CellWrapper>
        );
      })}
    </ASCIIWrapper>
  );
};
