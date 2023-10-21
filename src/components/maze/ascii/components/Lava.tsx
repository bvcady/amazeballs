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
  };
}

export const Lava = ({ neighbours }: Props) => {
  const duration = 3.5;

  const { l, r, u, d } = neighbours;
  return (
    <CellWrapper
      customColor={theme.colors.accent}
      style={{
        paddingLeft: l ? "0px" : "2px",
        paddingRight: r ? "0px" : "2px",
        paddingTop: u ? "0px" : "2px",
        paddingBottom: d ? "0px" : "2px",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        id="top-bottom"
        style={{
          position: "absolute",
          borderRadius: 4,
          top: u ? 0 : 2,
          bottom: d ? 0 : 2,
          borderTopLeftRadius: u || l ? 0 : 4,
          borderTopRightRadius: u || r ? 0 : 4,
          borderBottomLeftRadius: d || l ? 0 : 4,
          borderBottomRightRadius: d || r ? 0 : 4,
          left: 2,
          right: 2,
          zIndex: -1,
          background: theme.colors.accent,
        }}
      />
      <div
        id="left-right"
        style={{
          position: "absolute",
          borderRadius: 4,
          top: 2,
          bottom: 2,
          left: l ? 0 : 2,
          right: r ? 0 : 2,
          borderTopLeftRadius: u || l ? 0 : 4,
          borderTopRightRadius: u || r ? 0 : 4,
          borderBottomLeftRadius: d || l ? 0 : 4,
          borderBottomRightRadius: d || r ? 0 : 4,
          zIndex: -1,
          background: theme.colors.accent,
        }}
      />

      <svg id="lava" viewBox="0 0 32 32" style={{ width: 32, height: 32 }}>
        <g>
          <rect className="cls-2" x="8" y="25" width="1" height="1" />
          <rect className="cls-2" x="8" y="25" width="1" height="1" />
          <rect className="cls-2" x="9" y="25" width="1" height="1" />
          <rect className="cls-2" x="10" y="25" width="1" height="1" />
          <rect className="cls-2" x="11" y="25" width="1" height="1" />
          <rect className="cls-2" x="12" y="25" width="1" height="1" />
          <rect className="cls-2" x="12" y="25" width="1" height="1" />
          <rect className="cls-2" x="19" y="13" width="1" height="1" />
          <rect className="cls-2" x="19" y="13" width="1" height="1" />
          <rect className="cls-2" x="20" y="13" width="1" height="1" />
          <rect className="cls-2" x="21" y="13" width="1" height="1" />
          <rect className="cls-2" x="22" y="13" width="1" height="1" />
          <rect className="cls-2" x="23" y="13" width="1" height="1" />
          <rect className="cls-2" x="23" y="13" width="1" height="1" />
          <Animation {...{ index: 0, duration }} />
        </g>
        <g visibility={"hidden"}>
          <rect className="cls-2" x="7" y="25" width="1" height="1" />
          <rect className="cls-2" x="8" y="25" width="1" height="1" />
          <rect className="cls-2" x="8" y="25" width="1" height="1" />
          <rect className="cls-2" x="9" y="24" width="1" height="1" />
          <rect className="cls-2" x="10" y="24" width="1" height="1" />
          <rect className="cls-2" x="11" y="24" width="1" height="1" />
          <rect className="cls-2" x="12" y="25" width="1" height="1" />
          <rect className="cls-2" x="12" y="25" width="1" height="1" />
          <rect className="cls-2" x="13" y="25" width="1" height="1" />
          <rect className="cls-2" x="18" y="13" width="1" height="1" />
          <rect className="cls-2" x="19" y="13" width="1" height="1" />
          <rect className="cls-2" x="19" y="13" width="1" height="1" />
          <rect className="cls-2" x="20" y="12" width="1" height="1" />
          <rect className="cls-2" x="21" y="12" width="1" height="1" />
          <rect className="cls-2" x="22" y="12" width="1" height="1" />
          <rect className="cls-2" x="23" y="13" width="1" height="1" />
          <rect className="cls-2" x="23" y="13" width="1" height="1" />
          <rect className="cls-2" x="24" y="13" width="1" height="1" />
          <Animation {...{ index: 1, duration }} />
        </g>
        <g visibility={"hidden"}>
          <rect className="cls-2" x="6" y="25" width="1" height="1" />
          <rect className="cls-2" x="7" y="25" width="1" height="1" />
          <rect className="cls-2" x="8" y="24" width="1" height="1" />
          <rect className="cls-2" x="8" y="24" width="1" height="1" />
          <rect className="cls-2" x="9" y="23" width="1" height="1" />
          <rect className="cls-2" x="10" y="23" width="1" height="1" />
          <rect className="cls-2" x="11" y="23" width="1" height="1" />
          <rect className="cls-2" x="12" y="24" width="1" height="1" />
          <rect className="cls-2" x="12" y="24" width="1" height="1" />
          <rect className="cls-2" x="13" y="25" width="1" height="1" />
          <rect className="cls-2" x="14" y="25" width="1" height="1" />
          <rect className="cls-2" x="17" y="13" width="1" height="1" />
          <rect className="cls-2" x="18" y="13" width="1" height="1" />
          <rect className="cls-2" x="19" y="12" width="1" height="1" />
          <rect className="cls-2" x="19" y="12" width="1" height="1" />
          <rect className="cls-2" x="20" y="11" width="1" height="1" />
          <rect className="cls-2" x="21" y="11" width="1" height="1" />
          <rect className="cls-2" x="22" y="11" width="1" height="1" />
          <rect className="cls-2" x="23" y="12" width="1" height="1" />
          <rect className="cls-2" x="23" y="12" width="1" height="1" />
          <rect className="cls-2" x="24" y="13" width="1" height="1" />
          <rect className="cls-2" x="25" y="13" width="1" height="1" />
          <Animation {...{ index: 2, duration }} />
        </g>
        <g visibility={"hidden"}>
          <rect className="cls-2" x="6" y="25" width="1" height="1" />
          <rect className="cls-2" x="7" y="24" width="1" height="1" />
          <rect className="cls-2" x="8" y="23" width="1" height="1" />
          <rect className="cls-2" x="8" y="23" width="1" height="1" />
          <rect className="cls-2" x="9" y="22" width="1" height="1" />
          <rect className="cls-2" x="10" y="22" width="1" height="1" />
          <rect className="cls-2" x="11" y="22" width="1" height="1" />
          <rect className="cls-2" x="12" y="23" width="1" height="1" />
          <rect className="cls-2" x="12" y="23" width="1" height="1" />
          <rect className="cls-2" x="13" y="24" width="1" height="1" />
          <rect className="cls-2" x="14" y="25" width="1" height="1" />
          <rect className="cls-2" x="17" y="13" width="1" height="1" />
          <rect className="cls-2" x="18" y="12" width="1" height="1" />
          <rect className="cls-2" x="19" y="11" width="1" height="1" />
          <rect className="cls-2" x="19" y="11" width="1" height="1" />
          <rect className="cls-2" x="20" y="10" width="1" height="1" />
          <rect className="cls-2" x="21" y="10" width="1" height="1" />
          <rect className="cls-2" x="22" y="10" width="1" height="1" />
          <rect className="cls-2" x="23" y="11" width="1" height="1" />
          <rect className="cls-2" x="23" y="11" width="1" height="1" />
          <rect className="cls-2" x="24" y="12" width="1" height="1" />
          <rect className="cls-2" x="25" y="13" width="1" height="1" />
          <Animation {...{ index: 3, duration }} />
        </g>
        <g visibility={"hidden"}>
          <rect className="cls-2" x="6" y="25" width="1" height="1" />
          <rect className="cls-2" x="7" y="24" width="1" height="1" />
          <rect className="cls-2" x="8" y="23" width="1" height="1" />
          <rect className="cls-2" x="8" y="22" width="1" height="1" />
          <rect className="cls-2" x="9" y="21" width="1" height="1" />
          <rect className="cls-2" x="10" y="21" width="1" height="1" />
          <rect className="cls-2" x="11" y="21" width="1" height="1" />
          <rect className="cls-2" x="12" y="22" width="1" height="1" />
          <rect className="cls-2" x="12" y="23" width="1" height="1" />
          <rect className="cls-2" x="13" y="24" width="1" height="1" />
          <rect className="cls-2" x="14" y="25" width="1" height="1" />
          <rect className="cls-2" x="17" y="13" width="1" height="1" />
          <rect className="cls-2" x="18" y="12" width="1" height="1" />
          <rect className="cls-2" x="19" y="11" width="1" height="1" />
          <rect className="cls-2" x="19" y="10" width="1" height="1" />
          <rect className="cls-2" x="20" y="9" width="1" height="1" />
          <rect className="cls-2" x="21" y="9" width="1" height="1" />
          <rect className="cls-2" x="22" y="9" width="1" height="1" />
          <rect className="cls-2" x="23" y="10" width="1" height="1" />
          <rect className="cls-2" x="23" y="11" width="1" height="1" />
          <rect className="cls-2" x="24" y="12" width="1" height="1" />
          <rect className="cls-2" x="25" y="13" width="1" height="1" />
          <Animation {...{ index: 4, duration }} />
        </g>
        <g visibility={"hidden"}>
          <rect className="cls-2" x="10" y="21" width="1" height="1" />
          <rect className="cls-2" x="9" y="20" width="1" height="1" />
          <rect className="cls-2" x="10" y="19" width="1" height="1" />
          <rect className="cls-2" x="11" y="20" width="1" height="1" />
          <rect className="cls-2" x="6" y="25" width="1" height="1" />
          <rect className="cls-2" x="7" y="24" width="1" height="1" />
          <rect className="cls-2" x="8" y="24" width="1" height="1" />
          <rect className="cls-2" x="9" y="24" width="1" height="1" />
          <rect className="cls-2" x="10" y="24" width="1" height="1" />
          <rect className="cls-2" x="11" y="24" width="1" height="1" />
          <rect className="cls-2" x="12" y="24" width="1" height="1" />
          <rect className="cls-2" x="13" y="24" width="1" height="1" />
          <rect className="cls-2" x="14" y="25" width="1" height="1" />
          <rect className="cls-2" x="21" y="9" width="1" height="1" />
          <rect className="cls-2" x="20" y="8" width="1" height="1" />
          <rect className="cls-2" x="21" y="7" width="1" height="1" />
          <rect className="cls-2" x="22" y="8" width="1" height="1" />
          <rect className="cls-2" x="17" y="13" width="1" height="1" />
          <rect className="cls-2" x="18" y="12" width="1" height="1" />
          <rect className="cls-2" x="19" y="12" width="1" height="1" />
          <rect className="cls-2" x="20" y="12" width="1" height="1" />
          <rect className="cls-2" x="21" y="12" width="1" height="1" />
          <rect className="cls-2" x="22" y="12" width="1" height="1" />
          <rect className="cls-2" x="23" y="12" width="1" height="1" />
          <rect className="cls-2" x="24" y="12" width="1" height="1" />
          <rect className="cls-2" x="25" y="13" width="1" height="1" />
          <Animation {...{ index: 5, duration }} />
        </g>
        <g visibility={"hidden"}>
          <rect className="cls-2" x="10" y="20" width="1" height="1" />
          <rect className="cls-2" x="9" y="19" width="1" height="1" />
          <rect className="cls-2" x="10" y="18" width="1" height="1" />
          <rect className="cls-2" x="11" y="19" width="1" height="1" />
          <rect className="cls-2" x="7" y="25" width="1" height="1" />
          <rect className="cls-2" x="8" y="25" width="1" height="1" />
          <rect className="cls-2" x="9" y="25" width="1" height="1" />
          <rect className="cls-2" x="10" y="25" width="1" height="1" />
          <rect className="cls-2" x="11" y="25" width="1" height="1" />
          <rect className="cls-2" x="12" y="25" width="1" height="1" />
          <rect className="cls-2" x="13" y="25" width="1" height="1" />
          <rect className="cls-2" x="21" y="8" width="1" height="1" />
          <rect className="cls-2" x="20" y="7" width="1" height="1" />
          <rect className="cls-2" x="21" y="6" width="1" height="1" />
          <rect className="cls-2" x="22" y="7" width="1" height="1" />
          <rect className="cls-2" x="18" y="13" width="1" height="1" />
          <rect className="cls-2" x="19" y="13" width="1" height="1" />
          <rect className="cls-2" x="20" y="13" width="1" height="1" />
          <rect className="cls-2" x="21" y="13" width="1" height="1" />
          <rect className="cls-2" x="22" y="13" width="1" height="1" />
          <rect className="cls-2" x="23" y="13" width="1" height="1" />
          <rect className="cls-2" x="24" y="13" width="1" height="1" />
          <Animation {...{ index: 6, duration }} />
        </g>
      </svg>
    </CellWrapper>
  );
};
