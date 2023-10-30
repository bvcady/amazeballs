import { LightStreak, LightWrapper } from "./Light.styles";

export const Light = () => {
  return (
    <LightWrapper>
      <LightStreak width="3rem" left="10%" intensity="0.4" />
      <LightStreak
        width="1rem"
        left="20%"
        intensity="0.8"
        color="white"
        delay="30s"
      />
      <LightStreak
        width="2rem"
        left="calc(10% + 5rem)"
        intensity="0.8"
        delay={"10s"}
        style={{ transform: "rotate(33deg)" }}
      />
    </LightWrapper>
  );
};
