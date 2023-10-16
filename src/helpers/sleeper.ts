export const sleeper = async (ms: number) => {
  return function () {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
};
