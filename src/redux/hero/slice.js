import { createSlice } from '@reduxjs/toolkit';
import { operations } from './operations';

const initialState = {
  heroes: [],
  current: null,
  isLoading: false,
  error: null,
};

export const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    updateCurrent (state, action) {
      state.current = action.payload;
    }
  },
  extraReducers: {
    [operations.getAllHeroes.fulfilled](state, action) {
      const page = Number(action.payload.page);

      state.error = null;
      state.isLoading = false;

      if (page === 1) {
        state.heroes = action.payload.data;
        return;
      } 

      state.heroes.push(...action.payload.data);
    },
    [operations.getAllHeroes.pending](state, action) {
      state.isLoading = true;
    },
    [operations.getAllHeroes.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

  },
});

export const { updateCurrent } = heroSlice.actions;
export const heroReducer = heroSlice.reducer;