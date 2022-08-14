import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { inARow, sameDices, singlePoints, sumDices } from "../../helpers/rules";

interface Score {
  class: string;
  desc: string;
  name: string;
  score: number;
  scoreClass: string;
  rule: number;
  scored: boolean;
}

interface State {
  types: Score[];
  totalScore: number;
}

interface StateOptions {
  options: State;
}

const initialState: State = {
  types: [
    {
      name: "UM",
      desc: "1 PONTO POR CADA 1",
      score: 0,
      scoreClass: "pointOne",
      class: "one",
      rule: 1,
      scored: false,
    },
    {
      name: "DOIS",
      desc: "2 PONTOS POR CADA 2",
      score: 0,
      scoreClass: "pointTwo",
      class: "two",
      rule: 2,
      scored: false,
    },
    {
      name: "TRÊS",
      desc: "3 PONTOS POR CADA 3",
      score: 0,
      scoreClass: "pointThree",
      class: "three",
      rule: 3,
      scored: false,
    },
    {
      name: "QUATRO",
      desc: "4 PONTOS POR CADA 4",
      score: 0,
      scoreClass: "pointFour",
      class: "four",
      rule: 4,
      scored: false,
    },
    {
      name: "CINCO",
      desc: "5 PONTOS POR CADA 5",
      score: 0,
      scoreClass: "pointFive",
      class: "five",
      rule: 5,
      scored: false,
    },
    {
      name: "SEIS",
      desc: "6 PONTOS POR CADA 6",
      score: 0,
      scoreClass: "pointSix",
      class: "six",
      rule: 6,
      scored: false,
    },
    {
      name: "3 DE UM TIPO",
      desc: "SOMA DOS DADOS",
      score: 0,
      scoreClass: "pointThreeKind",
      class: "threeKind",
      rule: 3,
      scored: false,
    },
    {
      name: "4 DE UM TIPO",
      desc: "SOMA DOS DADOS",
      score: 0,
      scoreClass: "pointFourKind",
      class: "fourKind",
      rule: 4,
      scored: false,
    },
    {
      name: "YAHTZEE",
      desc: "50 PONTOS",
      score: 0,
      scoreClass: "pointYahtzee",
      class: "yahtzee",
      rule: 5,
      scored: false,
    },
    {
      name: "4 SEGUIDOS",
      desc: "30 PONTOS",
      score: 0,
      scoreClass: "pointFourRow",
      class: "fourRow",
      rule: 4,
      scored: false,
    },
    {
      name: "5 SEGUIDOS",
      desc: "40 PONTOS",
      score: 0,
      scoreClass: "pointFiveRow",
      class: "fiveRow",
      rule: 5,
      scored: false,
    },
    {
      name: "SOMA",
      desc: "SOMA DE TODOS OS DADOS",
      score: 0,
      scoreClass: "pointSum",
      class: "sum",
      rule: 0,
      scored: false,
    },
  ],
  totalScore: 0,
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    tryToScore: (
      state,
      action: PayloadAction<{ opt: string; dices: number[] }>
    ) => {
      const { opt, dices } = action.payload;

      const newState = state.types.map((i) => {
        if (i.class === opt) {
          if (i.scored === true) {
            return i;
          } else if (
            opt === "one" ||
            opt === "two" ||
            opt === "three" ||
            opt === "four" ||
            opt === "five" ||
            opt === "six"
          ) {
            state.totalScore += singlePoints(dices, i.rule);
            return { ...i, score: singlePoints(dices, i.rule), scored: true };
          } else if (
            opt === "threeKind" ||
            opt === "fourKind" ||
            opt === "yahtzee"
          ) {
            state.totalScore += sameDices(dices, i.rule);
            return { ...i, score: sameDices(dices, i.rule), scored: true };
          } else if (opt === "fourRow" || opt === "fiveRow") {
            state.totalScore += inARow(dices, i.rule);
            return { ...i, score: inARow(dices, i.rule), scored: true };
          } else {
            state.totalScore += sumDices(dices);
            return { ...i, score: sumDices(dices), scored: true };
          }
        } else {
          return i;
        }
      });

      state.types = newState;
    },
  },
});

export const { tryToScore } = optionsSlice.actions;
export const gameEnd = (state: StateOptions) => {
  return state.options.types.every((i) => i.scored === true);
};
export default optionsSlice.reducer;
