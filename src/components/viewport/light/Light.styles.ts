import { theme } from "@/styles/Global";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const LightWrapper = styled("div")`
  position: absolute;
  inset: 0;
  mix-blend-mode: hard-light;
  filter: blur(10px);
  -webkit-filter: blur(10px);
  z-index: 6;
  opacity: 0.5;
`;

const lightMovement = keyframes`
	0% {
    background-position: 0% 0px;
  }
	50% {
    background-position: 100% 1000px;
  }
	100% {
    background-position: 0% 0px;
  }
`;

export const LightStreak = styled("div")<{
  width?: string;
  left?: string;
  intensity?: string;
  delay?: string;
  color?: string;
}>`
  position: absolute;
  width: ${({ width }) => width || "10px"};
  left: ${({ left }) => left || "1rem"};
  top: -50%;
  height: 200%;
  z-index: 6;
  background-size: 200% 200%;
  background-color: white;
  background-repeat: no-repeat;
  background-position: 84% 0;

  --color: ${({ color }) => color || theme.colors.accent};

  background: linear-gradient(
    48deg,
    transparent,
    var(--color),
    transparent,
    transparent,
    var(--color),
    transparent,
    transparent,
    transparent
  );
  opacity: ${({ intensity }) => intensity};
  transform: rotate(45deg);
  animation: ${lightMovement} 60s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || "0s"};
`;
