import { useMazeStore } from "@/store/MazeStore";
import styled from "@emotion/styled";

export const SlideDirectionIndicator = () => {
  const { saveFile } = useMazeStore((state) => state);
  const { slideDirection } = saveFile;

  const rotation = () => {
    const { direction, increment } = slideDirection;
    if (direction === "y") {
      if (increment === -1) {
        return "0deg";
      }
      return "180deg";
    }
    if (direction === "x") {
      if (increment === 1) {
        return "90deg";
      }
      return "270deg";
    }
    return "0deg";
  };

  return <Indicator rotation={rotation()}>▵</Indicator>;
};

const Indicator = styled("span")<{ rotation: string }>`
  position: absolute;
  bottom: 8px;
  right: 16px;
  color: var(--bgColor);
  font-size: 24px;
  transform: rotate(${({ rotation }) => rotation});
`;
