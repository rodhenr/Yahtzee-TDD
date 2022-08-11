import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newRound: false,
  remainingMoves: 2,
  dices: [1, 2, 3, 4, 5],
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    startNewRound: (state) => {
      state.newRound = true;
    },
    setRemainingMoves: (state) => {
      if (state.remainingMoves > 0) state.remainingMoves -= 1;
    },
    newDices: (state) => {
      const dicesArray = [];

      for (let i = 0; i < 5; i++) {
        dicesArray.push(Math.ceil(Math.random() * 5));
      }

      state.dices = dicesArray;
    },
  },
});

export const { newDices, setRemainingMoves, startNewRound } =
  headerSlice.actions;
export default headerSlice.reducer;
