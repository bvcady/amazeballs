import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  currentAmount: number;
  totalAmount: number;
  barName: string;
}

export const ChipBar = ({ currentAmount, totalAmount, barName }: Props) => {
  const chips = new Array(totalAmount).fill("");
  return (
    <ChipWrapper>
      {chips?.map((_, index) => (
        <Chip
          key={[barName, index]?.join("-")}
          current={index <= currentAmount - 1}
        />
      ))}
    </ChipWrapper>
  );
};

const ChipWrapper = styled("div")`
  margin: 1px;

  width: fit-content;
  max-width: 150px;
  display: flex;

  justify-content: flex-start;
  align-items: center;
`;

const Chip = styled("div")<{ current?: boolean }>`
  box-sizing: content-box;
  height: 2px;
  min-width: 3px;
  margin-top: -2px;
  border: 2px solid var(--darkColor);
  border-top: none;
  border-right: none;
  background-color: var(--mediumColor);

  :last-of-type {
    border-right: 2px solid var(--darkColor);
  }

  ${({ current }) =>
    current &&
    css`
      min-width: 8px;
      background-color: var(--accentColor);
    `};
`;
