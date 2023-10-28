import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  value?: number;
}

export const PlayerWarning = ({ value }: Props) => {
  return (
    <Wrapper>
      <SpeachBubble>{value && value > 0 ? value : "aah"}</SpeachBubble>
    </Wrapper>
  );
};

const shakeKeyframes = keyframes`
  0% {
    transform: rotate(10deg);
  }
  15% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(6deg);
  }
  45% {
    transform: rotate(-4deg);
  }
  60% {
    transform: rotate(2deg);
  }
  75% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const SpeachBubble = styled("div")`
  font-size: 14px;
  width: fit-content;
  margin: 0 auto;

  background-color: tomato;
  color: var(--darkColor);
  border-radius: 2px;
  box-shadow: 1px 1px 0 0 var(--darkColor);
  display: grid;
  place-items: center;
  padding: 4px;
  animation: ${shakeKeyframes};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation-fill-mode: forwards;

  :after {
    content: "";
    position: absolute;
    background-color: var(--accentColor);
    box-shadow: 1px 1px 0 0 var(--darkColor);
    bottom: -2px;
    width: 2px;
    height: 2px;
  }
`;

const Wrapper = styled("div")`
  position: absolute;
  inset: 0;
  transform: translateY(-75%);
  overflow: hidden;
  padding: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
