export const singlePoints = (dices: number[], rule: number) => {
  let score = 0;

  dices.forEach((i) => {
    if (i === rule) score += rule;
  });

  return score;
};
