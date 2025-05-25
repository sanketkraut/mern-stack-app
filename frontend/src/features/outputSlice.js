import { createSlice } from '@reduxjs/toolkit';

const outputSlice = createSlice({
  name: 'output',
  initialState: {
    value: null,
  },
  reducers: {
    setOutput: (state, action) => {
      state.value = action.payload;
    },
    clearOutput: (state) => {
      state.value = null;
    },
  },
});

export const { setOutput, clearOutput } = outputSlice.actions;
export default outputSlice.reducer;