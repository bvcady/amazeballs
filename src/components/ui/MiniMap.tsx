import { theme } from "@/styles/Global";
import { PlayerType, SquareType } from "@/types/types";
import styled from "@emotion/styled";

interface Props {
  squares?: SquareType[];
  player?: PlayerType;
}

export const MiniMap = ({ squares, player }: Props) => {
  return (
    <Wrapper>
      {squares?.map(({ x, y, isLavaSource, isWall }) => (
        <div
          key={`minimap-${x}-${y}`}
          style={{
            width: "2px",
            height: "2px",
            borderRadius: player?.x === x && player?.y === y ? "1px" : "0px",
            background: isWall
              ? theme.colors.light
              : isLavaSource
              ? "tomato"
              : player?.x === x && player?.y === y
              ? theme.colors.accent
              : "transparent",
          }}
        ></div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  padding: 2px;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.6);
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  row-gap: 0.5px;
  column-gap: 0.5px;
`;
