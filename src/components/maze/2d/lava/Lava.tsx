import { SquareType } from "@/types/types";
import { LavaWrapper } from "./Lava.styled";
interface Props {
  lavaEdges?: { [key: string]: boolean | undefined };
  wallEdges?: { [key: string]: boolean | undefined };
  square?: SquareType;
}
export const Lava = ({ lavaEdges, wallEdges, square }: Props) => {
  return <LavaWrapper {...{ lavaEdges, wallEdges, square }}></LavaWrapper>;
};
