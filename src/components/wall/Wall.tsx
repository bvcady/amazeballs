import { WallBase } from "./WallBase";
import { WallWrapper } from "./Wall.Styled";
import * as Walls from "./WallTypes";
import { useGameStore } from "@/store/GameStore";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  cracked: boolean;
  rotation: number;
  x: number;
  y: number;
}

export const Wall = ({ cracked = false, rotation, x, y }: Props) => {
  const { saveFile } = useGameStore((state) => state);
  const { nMovement, slideDirection } = saveFile;

  const wallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const deltaTop = 10 - y;
    const deltaLeft = 10 - x;
    const topVal = 32 + y * 32 - 12;
    const leftVal = 32 + x * 32;

    if (nMovement === 0) {
      if (slideDirection.direction === "y") {
        gsap.to(wallRef.current, {
          top: topVal + deltaTop * (y >= 10 ? -1 : 1),
          ease: `steps(${Math.abs(10 - y) || 1})`,
          delay: `${30 + 60 * Math.random()}ms`,
        });
      }
      if (slideDirection.direction === "x") {
        gsap.to(wallRef.current, {
          left: leftVal + deltaLeft * (x >= 10 ? -1 : 1),
          ease: `steps(${Math.abs(10 - x) || 1})`,
          delay: `${30 + 60 * Math.random()}ms`,
        });
      }
    } else {
      gsap.to(wallRef.current, {
        top: topVal,
        left: leftVal,
      });
    }
  }, [nMovement === 0]);

  return (
    <WallWrapper ref={wallRef} {...{ x, y }}>
      {cracked ? <Walls.Cracked rotation={rotation} /> : null}
      {!cracked ? <Walls.Default /> : null}
      <WallBase />
    </WallWrapper>
  );
};
