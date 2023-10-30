import { useMazeStore } from "@/store/MazeStore";
import { PlayerWrapper, ShadowWrapper } from "./PlayerStyles";
import { PlayerWarning } from "./PlayerWarning";

export const Player = () => {
  const { saveFile, player } = useMazeStore((state) => state);
  const { nMovement } = saveFile;
  const playerMessage = player?.message;
  const position = [player?.x || 0, player?.y || 0];

  return (
    <>
      <PlayerWrapper id={"Player"} {...{ position }}>
        <svg id="player-sprite" viewBox="0 0 32 32">
          <g id="bg">
            <rect className="cls-2" x="13" y="13" width="1" height="1" />
            <rect className="cls-2" x="18" y="13" width="1" height="1" />
            <polygon
              className="cls-2"
              points="22 14 22 13 21 13 21 14 21 15 22 15 22 14"
            />
            <polygon
              className="cls-2"
              points="11 14 11 13 10 13 10 14 10 15 11 15 11 14"
            />
            <polygon
              className="cls-2"
              points="19 22 19 21 18 21 17 21 16 21 15 21 14 21 13 21 13 22 14 22 15 22 16 22 17 22 18 22 19 22"
            />
            <polygon
              className="cls-2"
              points="19 24 18 24 18 25 19 25 20 25 21 25 21 24 20 24 19 24"
            />
            <polygon
              className="cls-2"
              points="17 9 17 8 16 8 15 8 15 9 16 9 17 9"
            />
            <rect className="cls-2" x="19" y="8" width="1" height="1" />
            <rect className="cls-2" x="12" y="8" width="1" height="1" />
            <polygon
              className="cls-2"
              points="23 19 22 19 21 19 21 20 22 20 22 21 23 21 24 21 24 20 24 19 23 19"
            />
            <polygon
              className="cls-2"
              points="12 24 11 24 11 25 12 25 13 25 14 25 14 24 13 24 12 24"
            />
            <polygon
              className="cls-2"
              points="11 19 10 19 9 19 8 19 8 20 8 21 9 21 10 21 10 20 11 20 11 19"
            />
          </g>
          <g id="light">
            <rect className="cls-4" x="14" y="24" width="1" height="1" />
            <rect className="cls-4" x="17" y="24" width="1" height="1" />
            <polygon
              className="cls-4"
              points="12 25 11 25 11 26 12 26 13 26 14 26 14 25 13 25 12 25"
            />
            <polygon
              className="cls-4"
              points="19 25 18 25 18 26 19 26 20 26 21 26 21 25 20 25 19 25"
            />
            <polygon
              className="cls-4"
              points="18 23 18 24 19 24 19 23 19 22 18 22 17 22 16 22 15 22 14 22 13 22 13 23 13 24 14 24 14 23 15 23 15 24 16 24 17 24 17 23 18 23"
            />
            <polygon
              className="cls-4"
              points="18 19 17 19 16 19 15 19 14 19 13 19 13 18 12 18 11 18 11 19 12 19 12 20 13 20 14 20 15 20 16 20 17 20 18 20 19 20 20 20 20 19 21 19 21 18 20 18 19 18 19 19 18 19"
            />
            <polygon
              className="cls-4"
              points="19 11 18 11 18 10 17 10 16 10 15 10 14 10 14 11 13 11 12 11 12 12 13 12 14 12 15 12 15 13 15 14 15 15 14 15 13 15 12 15 12 16 12 17 13 17 13 18 14 18 15 18 16 18 17 18 18 18 19 18 19 17 20 17 20 16 20 15 19 15 18 15 17 15 17 14 17 13 17 12 18 12 19 12 20 12 20 11 19 11"
            />
            <polygon
              className="cls-4"
              points="11 11 10 11 10 12 9 12 9 13 9 14 9 15 9 16 10 16 10 15 10 14 10 13 11 13 12 13 12 12 11 12 11 11"
            />
            <polygon
              className="cls-4"
              points="12 10 13 10 14 10 14 9 14 8 15 8 15 7 16 7 17 7 17 8 18 8 18 9 18 10 19 10 20 10 20 11 21 11 21 10 21 9 20 9 19 9 19 8 19 7 18 7 18 6 17 6 16 6 15 6 14 6 14 7 13 7 13 8 13 9 12 9 11 9 11 10 11 11 12 11 12 10"
            />
            <polygon
              className="cls-4"
              points="22 12 22 11 21 11 21 12 20 12 20 13 21 13 22 13 22 14 22 15 22 16 23 16 23 15 23 14 23 13 23 12 22 12"
            />
          </g>
          <g id="medium">
            <polygon
              className="cls-5"
              points="17 20 16 20 15 20 14 20 13 20 13 21 14 21 15 21 16 21 17 21 18 21 19 21 19 20 18 20 17 20"
            />
            <polygon
              className="cls-5"
              points="17 18 16 18 15 18 14 18 13 18 13 19 14 19 15 19 16 19 17 19 18 19 19 19 19 18 18 18 17 18"
            />
            <rect className="cls-5" x="19" y="17" width="1" height="1" />
            <polygon
              className="cls-5"
              points="21 15 21 16 21 17 22 17 22 16 22 15 21 15"
            />
            <polygon
              className="cls-5"
              points="10 16 10 17 11 17 11 16 11 15 10 15 10 16"
            />
            <polygon
              className="cls-5"
              points="17 9 16 9 15 9 14 9 14 10 15 10 16 10 17 10 18 10 18 9 17 9"
            />
            <polygon
              className="cls-5"
              points="18 10 18 11 19 11 20 11 20 10 19 10 18 10"
            />
            <rect className="cls-5" x="13" y="6" width="1" height="1" />
            <rect className="cls-5" x="18" y="6" width="1" height="1" />
            <rect className="cls-5" x="19" y="7" width="1" height="1" />
            <rect className="cls-5" x="20" y="8" width="1" height="1" />
            <rect className="cls-5" x="12" y="7" width="1" height="1" />
            <rect className="cls-5" x="11" y="8" width="1" height="1" />
            <polygon
              className="cls-5"
              points="12 10 12 11 13 11 14 11 14 10 13 10 12 10"
            />
            <rect className="cls-5" x="12" y="17" width="1" height="1" />
          </g>
          <g id="dark">
            <rect className="cls-3" x="12" y="6" width="1" height="1" />
            <rect className="cls-3" x="11" y="7" width="1" height="1" />
            <polygon
              className="cls-3"
              points="11 10 11 9 11 8 10 8 10 9 10 10 10 11 11 11 11 10"
            />
            <rect className="cls-3" x="9" y="11" width="1" height="1" />
            <polygon
              className="cls-3"
              points="9 14 9 13 9 12 8 12 8 13 8 14 8 15 8 16 9 16 9 15 9 14"
            />
            <rect className="cls-3" x="9" y="16" width="1" height="1" />
            <path
              className="cls-3"
              d="m10,19h1v-1h1v-3h3v-3h-3v1h-1v4h-1v1h-2v1h2Zm4-6v1h-1v-1h1Z"
            />
            <polygon
              className="cls-3"
              points="8 19 7 19 7 20 7 21 8 21 8 20 8 19"
            />
            <polygon
              className="cls-3"
              points="10 21 9 21 8 21 8 22 9 22 10 22 11 22 11 21 11 20 10 20 10 21"
            />
            <rect className="cls-3" x="11" y="19" width="1" height="1" />
            <polygon
              className="cls-3"
              points="13 24 13 23 13 22 13 21 13 20 12 20 12 21 12 22 12 23 11 23 11 24 12 24 13 24"
            />
            <polygon
              className="cls-3"
              points="11 24 10 24 10 25 10 26 11 26 11 25 11 24"
            />
            <polygon
              className="cls-3"
              points="12 26 11 26 11 27 12 27 13 27 14 27 14 26 13 26 12 26"
            />
            <rect className="cls-3" x="14" y="25" width="1" height="1" />
            <rect className="cls-3" x="14" y="23" width="1" height="1" />
            <polygon
              className="cls-3"
              points="15 6 16 6 17 6 18 6 19 6 19 5 18 5 17 5 16 5 15 5 14 5 13 5 13 6 14 6 15 6"
            />
            <rect className="cls-3" x="19" y="6" width="1" height="1" />
            <rect className="cls-3" x="20" y="7" width="1" height="1" />
            <polygon
              className="cls-3"
              points="21 10 21 11 22 11 22 10 22 9 22 8 21 8 21 9 21 10"
            />
            <rect className="cls-3" x="22" y="11" width="1" height="1" />
            <polygon
              className="cls-3"
              points="23 14 23 15 23 16 24 16 24 15 24 14 24 13 24 12 23 12 23 13 23 14"
            />
            <rect className="cls-3" x="22" y="16" width="1" height="1" />
            <polygon
              className="cls-3"
              points="24 19 24 20 24 21 25 21 25 20 25 19 24 19"
            />
            <polygon
              className="cls-3"
              points="22 21 22 20 21 20 21 21 21 22 22 22 23 22 24 22 24 21 23 21 22 21"
            />
            <rect className="cls-3" x="20" y="19" width="1" height="1" />
            <polygon
              className="cls-3"
              points="19 21 19 22 19 23 19 24 20 24 21 24 21 23 20 23 20 22 20 21 20 20 19 20 19 21"
            />
            <polygon
              className="cls-3"
              points="21 26 22 26 22 25 22 24 21 24 21 25 21 26"
            />
            <polygon
              className="cls-3"
              points="19 26 18 26 18 27 19 27 20 27 21 27 21 26 20 26 19 26"
            />
            <rect className="cls-3" x="17" y="25" width="1" height="1" />
            <rect className="cls-3" x="17" y="23" width="1" height="1" />
            <polygon
              className="cls-3"
              points="16 24 15 24 15 25 16 25 17 25 17 24 16 24"
            />
            <rect className="cls-3" x="14" y="8" width="1" height="1" />
            <rect className="cls-3" x="20" y="11" width="1" height="1" />
            <rect className="cls-3" x="11" y="11" width="1" height="1" />
            <path
              className="cls-3"
              d="m21,16v-3h-1v-1h-3v3h3v3h1v1h3v-1h-2v-1h-1v-1Zm-3-2v-1h1v1h-1Z"
            />
            <polygon
              className="cls-3"
              points="17 7 16 7 15 7 15 8 16 8 17 8 17 7"
            />
            <rect className="cls-3" x="17" y="8" width="1" height="1" />
          </g>
        </svg>
        <PlayerWarning {...{ nMovement, playerMessage }} />
        <ShadowWrapper>
          <svg viewBox="0 0 32 32">
            <ellipse cx={16} cy={24} rx={9} ry={3}></ellipse>
          </svg>
        </ShadowWrapper>
      </PlayerWrapper>
    </>
  );
};
