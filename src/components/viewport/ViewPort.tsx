import { Skeleton } from "@mui/material";
import { ReactNode } from "react";
import { DeathDialog } from "../ui/DeathDialog";
import { Coloring } from "./Coloring";
import { Wrapper } from "./ViewPort.styles";
import { Grid } from "./Grid";
import { Light } from "./light/Light";
import { ScreenEdge } from "./ScreenEdge";

interface Props {
  children: ReactNode;
}

export const ViewPort = ({ children }: Props) => {
  return (
    <Wrapper>
      <DeathDialog />
      <Coloring />
      <Skeleton
        animation="wave"
        sx={{
          position: "absolute",
          inset: "-50%",
          zIndex: 3,
          margin: 0,
          padding: 0,
        }}
      />
      <Grid />
      <Light />
      <ScreenEdge />
      {children}
    </Wrapper>
  );
};
