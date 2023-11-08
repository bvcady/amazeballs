import { ButtonBase } from "@mui/material";
import { SSButtonWrapper } from "../styles/ButtonsStyled";

interface Props {
  callback?: Function;
}

export const SSButton = ({ callback }: Props) => {
  return <SSButtonWrapper onClick={() => callback?.()} />;
};
