/* eslint-disable @next/next/no-img-element */
import { useMazeStore } from "@/store/MazeStore";
import { PlayerWrapper, ShadowWrapper } from "./PlayerStyles";
import { PlayerWarning } from "./PlayerWarning";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useUIStore } from "@/store/UIStore";
import playerSpriteSheet from "../../../public/sprites/new-sprite-player.json";

export const Player = () => {
  const { saveFile, player, isSliding, toggleIsSliding } = useMazeStore(
    (state) => state
  );
  const { toggleAllowInput } = useUIStore((state) => state);
  const { nMovement, nHealth, slideDirection } = saveFile;
  const [previousPlayer, setPreviousPlayer] = useState({
    x: 0,
    y: 0,
  });
  const playerMessage = player?.message;
  const playerRef = useRef<HTMLDivElement>(null);

  const playerSprites = playerSpriteSheet.frames;
  const { image, frameTags } = playerSpriteSheet.meta;

  // Intend to make animated sprite for idle, walking and sliding in each direction.
  // Animate with GSAP

  useEffect(() => {
    if (nHealth === 0) {
      toggleAllowInput(false);
    }
    if (nHealth > 0) {
      toggleAllowInput(true);
    }
  }, [nHealth === 0]);

  useEffect(() => {
    if (player && playerRef.current) {
      let d = { x: 0, y: 0 };
      if (nMovement === 0) {
        if (slideDirection.direction === "x") {
          d.x = Math.abs(10 - player.x);
          d.y = 0;
        }
        if (slideDirection.direction === "y") {
          d.y = Math.abs(10 - player.y);
          d.x = 0;
        }
      }

      gsap
        .fromTo(
          playerRef.current,
          {
            top: 4 + previousPlayer.y * 32 + 32 + d.y,
            left: previousPlayer.x * 32 + 32 + d.x,
          },
          {
            top: 4 + player.y * 32 + 32 + d.y,
            left: player.x * 32 + 32 + d.x,
            duration: 0.45,
            ease: "steps(2)",
          }
        )
        .eventCallback("onStart", () => {
          if (nMovement === 0) {
            toggleIsSliding(true);
          }
          toggleAllowInput(false);
        })
        .eventCallback("onComplete", () => {
          if (nMovement !== 0 && nHealth !== 0) {
            toggleIsSliding(false);
            toggleAllowInput(true);
          }
        });
      setPreviousPlayer({ x: player.x, y: player.y });
    }
  }, [player, nMovement]);

  const slideLeft =
    slideDirection.direction === "x" && slideDirection.increment === -1;
  const slideRight =
    slideDirection.direction === "x" && slideDirection.increment === 1;
  const slideUp =
    slideDirection.direction === "y" && slideDirection.increment === -1;
  const slideDown =
    slideDirection.direction === "y" && slideDirection.increment === 1;

  const direction = player?.direction;
  const walkLeft = direction === "left";
  const walkRight = direction === "right";
  const walkUp = direction === "up";
  const walkDown = direction === "down";

  const filterSprite = (dir: string) => {
    const meta = playerSpriteSheet?.meta?.frameTags?.find(
      (tag) => tag.name === dir
    );
    console.log({ meta });
    const sprite = playerSprites.filter(
      (_, index) => index <= (meta?.to || 0) && index >= (meta?.from || 0)
    );
    console.log({ sprite });
    return sprite;
  };

  const getPlayerFrames = () => {
    if ((isSliding && slideLeft) || walkLeft) {
      return filterSprite("idle-left");
    }
    if ((isSliding && slideRight) || walkRight) {
      return filterSprite("idle-right");
    }
    if ((isSliding && slideDown) || walkDown) {
      return filterSprite("idle-front");
    }
    if ((isSliding && slideUp) || walkUp) {
      return filterSprite("idle-back");
    }
  };

  const frames = getPlayerFrames();
  const x = frames?.[0]?.frame.x || 0;
  const y = frames?.[0]?.frame.y || 0;

  console.log({ direction, x, y });

  return (
    <>
      <PlayerWrapper
        {...{ x: player?.x, y: player?.y }}
        ref={playerRef}
        id={"Player"}
      >
        <ShadowWrapper>
          <svg viewBox="0 0 32 32">
            <ellipse cx={16} cy={24} rx={7} ry={3}></ellipse>
          </svg>
        </ShadowWrapper>

        <div
          style={{
            pointerEvents: "all",
            width: "32px",
            height: "32px",
            overflow: "visible",
            backgroundImage: `url("/sprites/${image}")`,
            backgroundPositionX: `${-x}px`,
            backgroundPositionY: `${y}px`,
            backgroundRepeat: "no-repeat",
          }}
        />

        <PlayerWarning {...{ nMovement, playerMessage }} />
      </PlayerWrapper>
    </>
  );
};
