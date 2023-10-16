import { useMazeStore } from "@/store/MazeStore";
import { ChipBar } from "./ChipBar";
import styled from "@emotion/styled";
import { SlideDirectionIndicator } from "./SlideDirectionIndicator";

export const UI = () => {
  const totalAmount = 5;
  const { saveFile } = useMazeStore((state) => state);
  const { nMovement: currentAmount = 0 } = saveFile;

  return (
    <UIWrapper>
      <ChipBar {...{ totalAmount, currentAmount, barName: "Energy" }} />
      <SlideDirectionIndicator />
    </UIWrapper>
  );
};

const UIWrapper = styled("div")`
  position: absolute;
  inset: 0;
  padding: 16px;
  z-index: 1;
`;
