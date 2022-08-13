interface sameKind {
  [key: string]: number;
}

export const singlePoints = (dices: number[], rule: number) => {
  let score = 0;

  dices.forEach((i) => {
    if (i === rule) score += rule;
  });

  return score;
};

export const sameDices = (dices: number[], rule: number) => {
  let score = 0;
  let count: sameKind = {};

  for (const el of dices) {
    count[el] ? (count[el] += 1) : (count[el] = 1);
  }

  Object.values(count).forEach((i) => {
    if (i >= rule) {
      if (rule === 5) {
        score = 50;
      } else {
        dices.forEach((item) => {
          score += item;
        });
      }
    }
  });

  return score;
};

export const inARow = (dices: number[], rule: number) => {
  let score = 0;
  let count: sameKind = {};

  for (const el of dices) {
    count[el] ? (count[el] += 1) : (count[el] = 1);
  }

  if (rule === 4) {
    if (
      (count[1] && count[2] && count[3] && count[4]) ||
      (count[2] && count[3] && count[4] && count[5]) ||
      (count[3] && count[4] && count[5] && count[6])
    ) {
      score = 30;
    }
  } else {
    if (
      (count[1] && count[2] && count[3] && count[4] && count[5]) ||
      (count[2] && count[3] && count[4] && count[5] && count[6])
    ) {
      score = 40;
    }
  }

  return score;
};

export const sumDices = (dices: number[]) => {
  let score = 0;

  dices.forEach((item) => {
    score += item;
  });

  return score;
};
