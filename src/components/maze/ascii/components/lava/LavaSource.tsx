import { theme } from "@/styles/Global";
import { CellWrapper } from "../../styles/ASCIIStyled";

export const LavaSource = () => {
  return (
    <CellWrapper
      customColor={theme.colors.dark}
      style={{
        position: "absolute",
        transform: "translateY(-3px)",
        fill: theme.colors.dark,
      }}
    ></CellWrapper>
  );
};
