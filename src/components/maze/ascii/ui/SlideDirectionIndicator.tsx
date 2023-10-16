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

  return <Wrapper rotation={rotation()}>U</Wrapper>;
};

const Wrapper = styled("span")<{ rotation: string }>`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 8px;
  color: var(--bgColor);
  transform: rotate(${({ rotation }) => rotation});
`;
