import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { singlePoints } from "../../helpers/rules";

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
      rule: 1,
      scored: false,
    },
    {
      name: "4 DE UM TIPO",
      desc: "SOMA DOS DADOS",
      score: 0,
      scoreClass: "pointFourKind",
      class: "fourKind",
      rule: 1,
      scored: false,
    },
    {
      name: "YAHTZEE",
      desc: "50 PONTOS",
      score: 0,
      scoreClass: "pointYahtzee",
      class: "yahtzee",
      rule: 1,
      scored: false,
    },
    {
      name: "4 SEGUIDOS",
      desc: "20 PONTOS",
      score: 0,
      scoreClass: "pointFourRow",
      class: "fourRow",
      rule: 1,
      scored: false,
    },
    {
      name: "5 SEGUIDOS",
      desc: "30 PONTOS",
      score: 0,
      scoreClass: "pointFiveRow",
      class: "fiveRow",
      rule: 1,
      scored: false,
    },
    {
      name: "SOMA",
      desc: "SOMA DE TODOS OS DADOS",
      score: 0,
      scoreClass: "pointSum",
      class: "sum",
      rule: 1,
      scored: false,
    },
  ],
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
        if (i.class === opt && i.scored === false) {
          console.log("aqui")
          return { ...i, score: singlePoints(dices, i.rule), scored: true };
        } else {
          return i;
        }
      });

      state.types = newState;
    },
  },
});

export const { tryToScore } = optionsSlice.actions;
export default optionsSlice.reducer;
