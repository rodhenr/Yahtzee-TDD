import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const newDices = () => {
  const dicesArray = [];
  for (let i = 0; i < 5; i++) {
    dicesArray.push(Math.ceil(Math.random() * 6));
  }

  return dicesArray;
};

const initialState = {
  remainingMoves: 2,
  dices: newDices(),
  dicesFreeze: [false, false, false, false, false, false],
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    freezeDie: (state, action: PayloadAction<number>) => {
      state.dicesFreeze[action.payload] = !state.dicesFreeze[action.payload];
    },
    rollDices: (state) => {
      if (state.remainingMoves > 0) {
        const dicesArray = [];

        for (let i = 0; i < 5; i++) {
          if (state.dicesFreeze[i] === false) {
            dicesArray.push(Math.ceil(Math.random() * 6));
          } else {
            dicesArray.push(state.dices[i]);
          }
        }

        state.dices = dicesArray;
        state.remainingMoves -= 1;
      }
    },
    startNewRound: (state) => {
      state.remainingMoves = 2;
      state.dices = newDices();
      state.dicesFreeze = [false, false, false, false, false];
    },
  },
});

export const { freezeDie, rollDices, startNewRound } = headerSlice.actions;
export default headerSlice.reducer;
