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
      {squares?.map(({ x, y, isLavaSource, isWall, hasLava }) => (
        <div
          key={`minimap-${x}-${y}`}
          style={{
            width: "4px",
            height: "4px",
            background: isWall
              ? theme.colors.light
              : isLavaSource
              ? "tomato"
              : player?.x === x && player?.y === y
              ? theme.colors.accent
              : hasLava
              ? "rgba(255,40, 0, 0.4)"
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
  background-color: var(--darkColor);
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  gap: 1px;
`;
