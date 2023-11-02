import { ReactNode } from "react";
import { Wrapper } from "./Console.styles";

interface Props {
  children?: ReactNode;
}
export const Console = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
