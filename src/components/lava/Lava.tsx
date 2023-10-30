import { theme } from "@/styles/Global";
import { CellWrapper } from "@/styles/shared/Shared.styles";

interface AnimationProps {
  index: number;
  duration: number;
}

const Animation = ({ index, duration }: AnimationProps) => {
  const values = new Array(6)
    .fill("hidden")
    .map((_, i) => (i === index ? "visible" : "hidden"))
    ?.join(";");

  return (
    <animate
      attributeName="visibility"
      values={values}
      dur={`${duration.toString()}s`}
      repeatCount="indefinite"
    />
  );
};

interface Props {
  neighbours: {
    l?: boolean;
    r?: boolean;
    u?: boolean;
    d?: boolean;
    ul?: boolean;
    ur?: boolean;
    dl?: boolean;
    dr?: boolean;
  };
  isLavaSource?: boolean;
}

export const Lava = ({ neighbours, isLavaSource }: Props) => {
  const duration = 3.5;

  // whether the neighbours have lava
  const { l, r, u, d, ul, ur, dl, dr } = neighbours;

  // spacing
  const s = 3;

  return (
    <CellWrapper
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        id="top-bottom"
        style={{
          position: "absolute",
          borderRadius: s,
          top: u ? 0 : s,
          bottom: d ? 0 : s,
          borderTopLeftRadius: u || l ? 0 : s,
          borderTopRightRadius: u || r ? 0 : s,
          borderBottomLeftRadius: d || l ? 0 : s,
          borderBottomRightRadius: d || r ? 0 : s,
          left: (ul || dl) && l ? 0 : s,
          right: (ur || dr) && r ? 0 : s,
          zIndex: -1,
          background: "tomato",
        }}
      />
      <div
        id="left-right"
        style={{
          position: "absolute",
          borderRadius: s,
          left: l ? 0 : s,
          right: r ? 0 : s,
          borderTopLeftRadius: u || l ? 0 : s,
          borderTopRightRadius: u || r ? 0 : s,
          borderBottomLeftRadius: d || l ? 0 : s,
          borderBottomRightRadius: d || r ? 0 : s,
          bottom: (dl || dr) && d ? 0 : s,
          top: (ul || ur) && u ? 0 : s,
          zIndex: -1,
          background: "tomato",
        }}
      />

      {!isLavaSource ? (
        <svg id="lava" viewBox="0 0 32 32" style={{ width: 32, height: 32 }}>
          <g>
            <rect x="8" y="25" width="1" height="1" />
            <rect x="8" y="25" width="1" height="1" />
            <rect x="9" y="25" width="1" height="1" />
            <rect x="10" y="25" width="1" height="1" />
            <rect x="11" y="25" width="1" height="1" />
            <rect x="12" y="25" width="1" height="1" />
            <rect x="12" y="25" width="1" height="1" />
            <rect x="19" y="13" width="1" height="1" />
            <rect x="19" y="13" width="1" height="1" />
            <rect x="20" y="13" width="1" height="1" />
            <rect x="21" y="13" width="1" height="1" />
            <rect x="22" y="13" width="1" height="1" />
            <rect x="23" y="13" width="1" height="1" />
            <rect x="23" y="13" width="1" height="1" />
            <Animation {...{ index: 0, duration }} />
          </g>
          <g visibility={"hidden"}>
            <rect x="7" y="25" width="1" height="1" />
            <rect x="8" y="25" width="1" height="1" />
            <rect x="8" y="25" width="1" height="1" />
            <rect x="9" y="24" width="1" height="1" />
            <rect x="10" y="24" width="1" height="1" />
            <rect x="11" y="24" width="1" height="1" />
            <rect x="12" y="25" width="1" height="1" />
            <rect x="12" y="25" width="1" height="1" />
            <rect x="13" y="25" width="1" height="1" />
            <rect x="18" y="13" width="1" height="1" />
            <rect x="19" y="13" width="1" height="1" />
            <rect x="19" y="13" width="1" height="1" />
            <rect x="20" y="12" width="1" height="1" />
            <rect x="21" y="12" width="1" height="1" />
            <rect x="22" y="12" width="1" height="1" />
            <rect x="23" y="13" width="1" height="1" />
            <rect x="23" y="13" width="1" height="1" />
            <rect x="24" y="13" width="1" height="1" />
            <Animation {...{ index: 1, duration }} />
          </g>
          <g visibility={"hidden"}>
            <rect x="6" y="25" width="1" height="1" />
            <rect x="7" y="25" width="1" height="1" />
            <rect x="8" y="24" width="1" height="1" />
            <rect x="8" y="24" width="1" height="1" />
            <rect x="9" y="23" width="1" height="1" />
            <rect x="10" y="23" width="1" height="1" />
            <rect x="11" y="23" width="1" height="1" />
            <rect x="12" y="24" width="1" height="1" />
            <rect x="12" y="24" width="1" height="1" />
            <rect x="13" y="25" width="1" height="1" />
            <rect x="14" y="25" width="1" height="1" />
            <rect x="17" y="13" width="1" height="1" />
            <rect x="18" y="13" width="1" height="1" />
            <rect x="19" y="12" width="1" height="1" />
            <rect x="19" y="12" width="1" height="1" />
            <rect x="20" y="11" width="1" height="1" />
            <rect x="21" y="11" width="1" height="1" />
            <rect x="22" y="11" width="1" height="1" />
            <rect x="23" y="12" width="1" height="1" />
            <rect x="23" y="12" width="1" height="1" />
            <rect x="24" y="13" width="1" height="1" />
            <rect x="25" y="13" width="1" height="1" />
            <Animation {...{ index: 2, duration }} />
          </g>
          <g visibility={"hidden"}>
            <rect x="6" y="25" width="1" height="1" />
            <rect x="7" y="24" width="1" height="1" />
            <rect x="8" y="23" width="1" height="1" />
            <rect x="8" y="23" width="1" height="1" />
            <rect x="9" y="22" width="1" height="1" />
            <rect x="10" y="22" width="1" height="1" />
            <rect x="11" y="22" width="1" height="1" />
            <rect x="12" y="23" width="1" height="1" />
            <rect x="12" y="23" width="1" height="1" />
            <rect x="13" y="24" width="1" height="1" />
            <rect x="14" y="25" width="1" height="1" />
            <rect x="17" y="13" width="1" height="1" />
            <rect x="18" y="12" width="1" height="1" />
            <rect x="19" y="11" width="1" height="1" />
            <rect x="19" y="11" width="1" height="1" />
            <rect x="20" y="10" width="1" height="1" />
            <rect x="21" y="10" width="1" height="1" />
            <rect x="22" y="10" width="1" height="1" />
            <rect x="23" y="11" width="1" height="1" />
            <rect x="23" y="11" width="1" height="1" />
            <rect x="24" y="12" width="1" height="1" />
            <rect x="25" y="13" width="1" height="1" />
            <Animation {...{ index: 3, duration }} />
          </g>
          <g visibility={"hidden"}>
            <rect x="6" y="25" width="1" height="1" />
            <rect x="7" y="24" width="1" height="1" />
            <rect x="8" y="23" width="1" height="1" />
            <rect x="8" y="22" width="1" height="1" />
            <rect x="9" y="21" width="1" height="1" />
            <rect x="10" y="21" width="1" height="1" />
            <rect x="11" y="21" width="1" height="1" />
            <rect x="12" y="22" width="1" height="1" />
            <rect x="12" y="23" width="1" height="1" />
            <rect x="13" y="24" width="1" height="1" />
            <rect x="14" y="25" width="1" height="1" />
            <rect x="17" y="13" width="1" height="1" />
            <rect x="18" y="12" width="1" height="1" />
            <rect x="19" y="11" width="1" height="1" />
            <rect x="19" y="10" width="1" height="1" />
            <rect x="20" y="9" width="1" height="1" />
            <rect x="21" y="9" width="1" height="1" />
            <rect x="22" y="9" width="1" height="1" />
            <rect x="23" y="10" width="1" height="1" />
            <rect x="23" y="11" width="1" height="1" />
            <rect x="24" y="12" width="1" height="1" />
            <rect x="25" y="13" width="1" height="1" />
            <Animation {...{ index: 4, duration }} />
          </g>
          <g visibility={"hidden"}>
            <rect x="10" y="21" width="1" height="1" />
            <rect x="9" y="20" width="1" height="1" />
            <rect x="10" y="19" width="1" height="1" />
            <rect x="11" y="20" width="1" height="1" />
            <rect x="6" y="25" width="1" height="1" />
            <rect x="7" y="24" width="1" height="1" />
            <rect x="8" y="24" width="1" height="1" />
            <rect x="9" y="24" width="1" height="1" />
            <rect x="10" y="24" width="1" height="1" />
            <rect x="11" y="24" width="1" height="1" />
            <rect x="12" y="24" width="1" height="1" />
            <rect x="13" y="24" width="1" height="1" />
            <rect x="14" y="25" width="1" height="1" />
            <rect x="21" y="9" width="1" height="1" />
            <rect x="20" y="8" width="1" height="1" />
            <rect x="21" y="7" width="1" height="1" />
            <rect x="22" y="8" width="1" height="1" />
            <rect x="17" y="13" width="1" height="1" />
            <rect x="18" y="12" width="1" height="1" />
            <rect x="19" y="12" width="1" height="1" />
            <rect x="20" y="12" width="1" height="1" />
            <rect x="21" y="12" width="1" height="1" />
            <rect x="22" y="12" width="1" height="1" />
            <rect x="23" y="12" width="1" height="1" />
            <rect x="24" y="12" width="1" height="1" />
            <rect x="25" y="13" width="1" height="1" />
            <Animation {...{ index: 5, duration }} />
          </g>
          <g visibility={"hidden"}>
            <rect x="10" y="20" width="1" height="1" />
            <rect x="9" y="19" width="1" height="1" />
            <rect x="10" y="18" width="1" height="1" />
            <rect x="11" y="19" width="1" height="1" />
            <rect x="7" y="25" width="1" height="1" />
            <rect x="8" y="25" width="1" height="1" />
            <rect x="9" y="25" width="1" height="1" />
            <rect x="10" y="25" width="1" height="1" />
            <rect x="11" y="25" width="1" height="1" />
            <rect x="12" y="25" width="1" height="1" />
            <rect x="13" y="25" width="1" height="1" />
            <rect x="21" y="8" width="1" height="1" />
            <rect x="20" y="7" width="1" height="1" />
            <rect x="21" y="6" width="1" height="1" />
            <rect x="22" y="7" width="1" height="1" />
            <rect x="18" y="13" width="1" height="1" />
            <rect x="19" y="13" width="1" height="1" />
            <rect x="20" y="13" width="1" height="1" />
            <rect x="21" y="13" width="1" height="1" />
            <rect x="22" y="13" width="1" height="1" />
            <rect x="23" y="13" width="1" height="1" />
            <rect x="24" y="13" width="1" height="1" />
            <Animation {...{ index: 6, duration }} />
          </g>
        </svg>
      ) : null}
      {isLavaSource ? (
        <svg
          id="lava-source"
          viewBox="0 0 32 32"
          style={{ width: 32, height: 32 }}
        >
          <g id="light">
            <rect x="14" y="5" width="9" height="1" />
            <rect x="13" y="6" width="10" height="1" />
            <rect x="12" y="7" width="11" height="1" />
            <rect
              x="22"
              y="18"
              width="9"
              height="1"
              transform="translate(45 -8) rotate(90)"
            />
            <rect
              x="20.5"
              y="17.5"
              width="10"
              height="1"
              transform="translate(43.5 -7.5) rotate(90)"
            />
            <rect
              x="19"
              y="17"
              width="11"
              height="1"
              transform="translate(42 -7) rotate(90)"
            />
            <rect
              x="9"
              y="26"
              width="9"
              height="1"
              transform="translate(27 53) rotate(180)"
            />
            <rect
              x="9"
              y="25"
              width="10"
              height="1"
              transform="translate(28 51) rotate(180)"
            />
            <rect
              x="9"
              y="24"
              width="11"
              height="1"
              transform="translate(29 49) rotate(180)"
            />
            <rect
              x="1"
              y="13"
              width="9"
              height="1"
              transform="translate(-8 19) rotate(-90)"
            />
            <rect
              x="1.5"
              y="13.5"
              width="10"
              height="1"
              transform="translate(-7.5 20.5) rotate(-90)"
            />
            <rect
              x="2"
              y="14"
              width="11"
              height="1"
              transform="translate(-7 22) rotate(-90)"
            />
          </g>
          <g id="medium">
            <rect x="13" y="8" width="5" height="1" />
            <rect x="17" y="5" width="3" height="1" />
            <rect
              x="21"
              y="15"
              width="5"
              height="1"
              transform="translate(39 -8) rotate(90)"
            />
            <rect
              x="25"
              y="18"
              width="3"
              height="1"
              transform="translate(45 -8) rotate(90)"
            />
            <rect
              x="14"
              y="23"
              width="5"
              height="1"
              transform="translate(33 47) rotate(180)"
            />
            <rect
              x="12"
              y="26"
              width="3"
              height="1"
              transform="translate(27 53) rotate(180)"
            />
            <rect
              x="6"
              y="16"
              width="5"
              height="1"
              transform="translate(-8 25) rotate(-90)"
            />
            <rect
              x="4"
              y="13"
              width="3"
              height="1"
              transform="translate(-8 19) rotate(-90)"
            />
          </g>
          <g id="dark">
            <rect x="14" y="5" width="3" height="1" />
            <polygon points="24 7 24 6 23 6 23 7 23 8 24 8 24 7" />
            <polygon points="22 9 23 9 23 8 22 8 21 8 20 8 19 8 19 9 20 9 21 9 22 9" />
            <rect x="18" y="10" width="1" height="1" />
            <polygon points="14 10 15 10 16 10 17 10 17 9 16 9 15 9 14 9 13 9 13 10 14 10" />
            <rect x="12" y="8" width="1" height="1" />
            <rect x="15" y="12" width="1" height="1" />
            <rect x="26" y="14" width="1" height="3" />
            <polygon points="25 24 26 24 26 23 25 23 24 23 24 24 25 24" />
            <polygon points="23 22 23 23 24 23 24 22 24 21 24 20 24 19 23 19 23 20 23 21 23 22" />
            <rect x="21" y="18" width="1" height="1" />
            <polygon points="22 14 22 15 22 16 22 17 23 17 23 16 23 15 23 14 23 13 22 13 22 14" />
            <rect x="23" y="12" width="1" height="1" />
            <rect x="19" y="15" width="1" height="1" />
            <rect x="15" y="26" width="3" height="1" />
            <polygon points="8 25 8 26 9 26 9 25 9 24 8 24 8 25" />
            <polygon points="10 23 9 23 9 24 10 24 11 24 12 24 13 24 13 23 12 23 11 23 10 23" />
            <rect x="13" y="21" width="1" height="1" />
            <polygon points="18 22 17 22 16 22 15 22 15 23 16 23 17 23 18 23 19 23 19 22 18 22" />
            <rect x="19" y="23" width="1" height="1" />
            <rect x="16" y="19" width="1" height="1" />
            <rect x="5" y="15" width="1" height="3" />
            <polygon points="7 8 6 8 6 9 7 9 8 9 8 8 7 8" />
            <polygon points="9 10 9 9 8 9 8 10 8 11 8 12 8 13 9 13 9 12 9 11 9 10" />
            <rect x="10" y="13" width="1" height="1" />
            <polygon points="10 18 10 17 10 16 10 15 9 15 9 16 9 17 9 18 9 19 10 19 10 18" />
            <rect x="8" y="19" width="1" height="1" />
            <rect x="12" y="16" width="1" height="1" />
          </g>
        </svg>
      ) : null}
    </CellWrapper>
  );
};
