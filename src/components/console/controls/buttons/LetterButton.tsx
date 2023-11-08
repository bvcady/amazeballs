import { LetterButtonWrapper } from "../styles/ButtonsStyled";

interface Props {
  callback?: Function;
  color?: string;
  letter: string;
}

export const LetterButton = ({ callback, color, letter }: Props) => {
  return (
    <LetterButtonWrapper color={color} onClick={() => callback?.()}>
      {letter.toLocaleUpperCase()}
    </LetterButtonWrapper>
  );
};
