import { theme } from "@/styles/Global";
import { CellWrapper } from "../styles/ASCIIStyled";

export const Lava = () => {
  return <CellWrapper customColor={theme.colors.light}>▢</CellWrapper>;
};
