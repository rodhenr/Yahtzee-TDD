import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  newRound: false,
  remainingMoves: 2,
  dices: [1, 2, 3, 4, 5],
  dicesFreeze: [false, false, false, false, false, false],
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    startNewRound: (state) => {
      state.newRound = true;
    },
    rollDices: (state) => {
      if (state.remainingMoves > 0) {
        const dicesArray = [];

        for (let i = 0; i < 5; i++) {
          if (state.dicesFreeze[i] === false) {
            dicesArray.push(Math.ceil(Math.random() * 5));
          } else {
            dicesArray.push(state.dices[i]);
          }
        }

        state.dices = dicesArray;
        state.remainingMoves -= 1;
      }
    },
    freezeDie: (state, action: PayloadAction<number>) => {
      state.dicesFreeze[action.payload] = !state.dicesFreeze[action.payload];
    },
  },
});

export const { freezeDie, rollDices, startNewRound } = headerSlice.actions;
export default headerSlice.reducer;
