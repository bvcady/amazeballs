import { theme } from "@/styles/Global";
import { CellWrapper } from "../styles/ASCIIStyled";

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
}

export const Lava = ({ neighbours }: Props) => {
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
    </CellWrapper>
  );
};
