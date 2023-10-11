import { theme } from "@/styles/Global";
import { CellWrapper } from "../styles/ASCIIStyled";

export const Wall = () => {
  return <CellWrapper customColor={theme.colors.background}>□</CellWrapper>;
};
