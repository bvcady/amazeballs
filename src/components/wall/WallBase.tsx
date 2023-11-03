export const WallBase = () => {
  return (
    <svg
      viewBox="0 0 32 32"
      width={32}
      height={32}
      style={{ position: "absolute", bottom: 0, zIndex: -1 }}
    >
      <g className="light">
        <polygon points="2 19 2 20 2 21 2 28 3 28 3 29 4 29 4 30 28 30 28 29 29 29 29 28 30 28 30 21 30 20 30 19 30 3 30 1 2 1 2 3 2 19" />
      </g>
      <g className="medium">
        <rect x="28" y="1" width="1" height="28" />
      </g>
      <g className="background">
        <rect x="3" y="1" width="1" height="28" />
      </g>
      <g className="dark">
        <polygon points="30 1 30 19 30 20 30 21 30 28 29 28 29 29 28 29 28 30 4 30 4 29 3 29 3 28 2 28 2 21 2 20 2 19 2 1 1 1 1 20 1 29 2 29 2 30 3 30 3 31 29 31 29 30 30 30 30 29 31 29 31 20 31 1 30 1" />
      </g>
    </svg>
  );
};
