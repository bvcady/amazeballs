import { useGameStore } from "@/store/GameStore";

export const useEnvironment = () => {
  const { setSaveFile } = useGameStore((state) => state);

  const handleEnvironment = () => {};

  return {
    updateEnvironment: handleEnvironment,
  };
};
