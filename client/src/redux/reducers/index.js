import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playerName: '',
  difficulty: 'easy',
  bestTime: 0,
  chances: 5,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayerName(state, action) {
      state.playerName = action.payload;
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload;
    },
    setBestTime(state, action) {
      state.bestTime = action.payload;
    },
    setChances(state, action) {
      state.chances -= action.payload;
    },
  },
});

export const {
  setPlayerName, setDifficulty, setBestTime, setChances,
} = playerSlice.actions;

export default playerSlice.reducer;
