import { useMazeStore } from "@/store/GameStore";
import { useMovement } from "@/hooks/useMovement";
import { useInitializer } from "@/hooks/useInitializer";
import { MazeWrapper } from "./Maze.styled";
import { Square } from "./square/Square";
import { LavaLayer } from "./lava/LavaLayer";

export const Maze = () => {
  const { squares } = useMazeStore((state) => state);

  useMovement();
  const { squareSize, nX: width } = useInitializer({ nX: 12 });

  return (
    <MazeWrapper {...{ width, squareSize, rX: 0, rY: 0, rZ: 0 }}>
      {squares?.map((sq) => (
        <Square key={sq.x + "-" + sq.y} squareInfo={sq}></Square>
      ))}
      <LavaLayer {...{ width, squares }} />
    </MazeWrapper>
  );
};
