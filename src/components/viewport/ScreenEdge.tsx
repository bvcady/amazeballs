export const ScreenEdge = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 7,
        margin: 0,
        padding: 0,
        mixBlendMode: "hard-light",
        opacity: "0.4",
        boxShadow: "inset 0 0 0 1px white",
      }}
    />
  );
};
