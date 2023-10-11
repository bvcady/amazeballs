import { SquareType } from "@/types/types";
import { Box, CameraControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";

interface Props {
  squares: SquareType[];
}
export const ThreeDMaze = ({ squares }: Props) => {
  const cameraControlsRef = useRef<CameraControls>(null);

  useEffect(() => {
    if (cameraControlsRef?.current) {
      cameraControlsRef.current.moveTo(0, 30, 20, true);
    }
  }, []);

  return (
    <Canvas
      style={{
        overflow: "visible",
        margin: "auto",
        width: "100vw",
        height: "100vh",
      }}
    >
      <ambientLight intensity={1} color="white" position={[30, 4, 40]} />
      <axesHelper />
      <CameraControls ref={cameraControlsRef}></CameraControls>
      <Stage>
        {squares?.map((s) =>
          s.isWall ? (
            <Box
              position={[s.x, 0, s.y]}
              args={[1, 1, 1]}
              key={s.x + "-" + s.y}
            >
              <meshToonMaterial color={"blue"} />
            </Box>
          ) : null
        )}
      </Stage>
    </Canvas>
  );
};
