import { useMazeStore } from "@/store/MazeStore";
import { ChipBar } from "./ChipBar";
import styled from "@emotion/styled";
import { SlideDirectionIndicator } from "./SlideDirectionIndicator";
import { ButtonBase } from "@mui/material";
import { useSeeding } from "@/hooks/useSeeding";
import { defaultPlayerInfo } from "@/constants/defaultPlayerInfo";

export const UI = () => {
  const totalEnergy = defaultPlayerInfo.nMovement;
  const totalHealth = defaultPlayerInfo.nHealth;
  const { saveFile } = useMazeStore((state) => state);
  const { nMovement, nHealth } = saveFile;

  return (
    <UIWrapper>
      <ChipBar
        {...{
          totalAmount: totalEnergy,
          currentAmount: nMovement,
          barName: "Energy",
        }}
      />
      <ChipBar
        {...{
          color: "chartreuse",
          totalAmount: totalHealth,
          currentAmount: nHealth,
          barName: "Health",
        }}
      />

      <SlideDirectionIndicator />
    </UIWrapper>
  );
};

const UIWrapper = styled("div")`
  position: absolute;
  inset: 0;
  height: 100%;
  padding: 16px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
