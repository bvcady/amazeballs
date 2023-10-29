import * as seedInitializer from "random-seed";

export type SquareType = {
  x: number;
  y: number;
  isWall?: boolean;
  hasLava?: boolean;
};

export type PlayerType = {
  x: number;
  y: number;
  message?: string;
};

export type SeedBuilder = (
  input: (number | string)[]
) => seedInitilizer.RandomSeed;
