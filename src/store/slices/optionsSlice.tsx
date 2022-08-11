import { createSlice } from "@reduxjs/toolkit";

interface Score {
  class: string;
  desc: string;
  name: string;
  score: number;
  scoreClass: string;
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
    },
    {
      name: "DOIS",
      desc: "2 PONTOS POR CADA 2",
      score: 0,
      scoreClass: "pointTwo",
      class: "two",
    },
    {
      name: "TRÊS",
      desc: "3 PONTOS POR CADA 3",
      score: 0,
      scoreClass: "pointThree",
      class: "three",
    },
    {
      name: "QUATRO",
      desc: "4 PONTOS POR CADA 4",
      score: 0,
      scoreClass: "pointFour",
      class: "four",
    },
    {
      name: "CINCO",
      desc: "5 PONTOS POR CADA 5",
      score: 0,
      scoreClass: "pointFive",
      class: "five",
    },
    {
      name: "SEIS",
      desc: "6 PONTOS POR CADA 6",
      score: 0,
      scoreClass: "pointSix",
      class: "six",
    },
    {
      name: "3 DE UM TIPO",
      desc: "SOMA DOS DADOS",
      score: 0,
      scoreClass: "pointThreeKind",
      class: "threeKind",
    },
    {
      name: "4 DE UM TIPO",
      desc: "SOMA DOS DADOS",
      score: 0,
      scoreClass: "pointFourKind",
      class: "fourKind",
    },
    {
      name: "YAHTZEE",
      desc: "50 PONTOS",
      score: 0,
      scoreClass: "pointYahtzee",
      class: "yahtzee",
    },
    {
      name: "4 SEGUIDOS",
      desc: "20 PONTOS",
      score: 0,
      scoreClass: "pointFourRow",
      class: "fourRow",
    },
    {
      name: "5 SEGUIDOS",
      desc: "30 PONTOS",
      score: 0,
      scoreClass: "pointFiveRow",
      class: "fiveRow",
    },
    {
      name: "SOMA",
      desc: "SOMA DE TODOS OS DADOS",
      score: 0,
      scoreClass: "pointSum",
      class: "sum",
    },
  ],
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    tryToScore: (state) => {
      const newState = state.types.map((i) => {
        if (i.class === "one") {
          return { ...i, score: 5 };
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
