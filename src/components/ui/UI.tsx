import { useMazeStore } from "@/store/MazeStore";
import { ChipBar } from "./ChipBar";
import styled from "@emotion/styled";
import { SlideDirectionIndicator } from "./SlideDirectionIndicator";

import { defaultPlayerInfo } from "@/constants/defaultPlayerInfo";
import { Menu } from "../menu/Menu";

import { useUIStore } from "@/store/UIStore";

export const UI = () => {
  const totalEnergy = defaultPlayerInfo.nMovement;
  const totalHealth = defaultPlayerInfo.nHealth;
  const { saveFile } = useMazeStore((state) => state);
  const { nMovement, nHealth } = saveFile;
  const { menuOpen } = useUIStore((state) => state);

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
      {menuOpen && (
        <Menu
          options={[
            { label: "WWWWWWWWWWWW", callback: () => {} },
            { label: "Second Option", callback: () => {} },
            { label: "Third Option", callback: () => {} },
          ]}
        />
      )}
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
