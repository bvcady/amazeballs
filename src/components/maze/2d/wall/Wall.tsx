import { WallWrapper } from "./Wall.styled";

interface Props {
  wallEdges?: { [key: string]: boolean | undefined };
}
export const Wall = ({ wallEdges }: Props) => {
  return <WallWrapper {...{ wallEdges }}></WallWrapper>;
};
