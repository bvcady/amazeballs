import { SquareType } from "@/types/types";
import { ASCIIWrapper } from "./styles/ASCIIStyled";
import { Wall } from "./components/Wall";
import { Fragment } from "react";
import { Lava } from "./components/Lava";
import { Floor } from "./components/Floor";
import { useMovement } from "@/hooks/useMovement";
import { useMazeStore } from "@/store/MazeStore";
import { Player } from "./components/Player";

interface Props {
  squares: SquareType[];
  nX: number;
}

export const ASCIIMaze = ({ squares, nX }: Props) => {
  const { player, setPlayer } = useMazeStore((state) => state);

  console.log(player);

  return (
    <ASCIIWrapper {...{ nX }}>
      {squares?.map((s) => {
        if (player?.x === s.x && player.y === s.y) {
          return <Player key={"player" + s.x + "-" + s.y} />;
        }
        return (
          <Fragment key={s.x + "-" + s.y}>
            {s.isWall ? <Wall /> : null}
            {s.hasLava ? <Lava /> : null}
            {!(s.hasLava || s.isWall) ? <Floor /> : null}
          </Fragment>
        );
      })}
    </ASCIIWrapper>
  );
};
