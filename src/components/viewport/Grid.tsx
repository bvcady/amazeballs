export const Grid = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 4,
        inset: "0",
        backgroundSize: "8px",
        backgroundRepeat: "repeat",
        backgroundPosition: "-10px 2px",
        backgroundImage: 'url("sprites/grid.svg")',
        mixBlendMode: "darken",
        opacity: 0.25,
      }}
    />
  );
};
