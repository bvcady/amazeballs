import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

interface Props {
  nMovement: number;
  playerMessage?: string;
}

const messageOptions = ["aah", "uh oh", "oh nooo", "yikes", "woooo"];

export const PlayerWarning = ({ nMovement, playerMessage }: Props) => {
  const [message, setMessage] = useState("");

  const getMessage = () => {
    if (playerMessage) {
      return playerMessage;
    }
    if (nMovement <= 3 && nMovement > 0) {
      return nMovement.toString();
    }
    if (nMovement === 0) {
      return messageOptions[
        Math.floor(Math.random() * (messageOptions.length - 1))
      ];
    }
    return "";
  };

  useEffect(() => {
    setMessage(getMessage());
  }, [nMovement, playerMessage]);

  return (
    <Wrapper>
      {message ? (
        <SpeachBubble key={`player-message-${message}`}>{message}</SpeachBubble>
      ) : null}
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
  background-color: var(--accentColor);
  color: var(--darkColor);
  border-radius: 1px;
  box-shadow: 1px 1px 0 0 var(--darkColor);
  display: grid;
  place-items: center;
  padding: 4px;
  opacity: 1;
  white-space: nowrap;
  animation: ${shakeKeyframes};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);

  position: relative;

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
  padding: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
