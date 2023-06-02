import { createSlice } from '@reduxjs/toolkit';
import { operations } from './operations';

const initialState = {
  heroes: [],
  current: null,
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

      if (page === 1) {
        state.heroes = action.payload.data;
        return;
      } 

      state.heroes.push(...action.payload.data);
    },
    [operations.getAllHeroes.rejected](state, action) {
      state.error = action.payload;
    },

    [operations.updateHero.fulfilled](state, action) {
      const index = state.heroes.indexOf(action.payload.data);
      if (index > 0) {
        state.heroes.splice(index, 1, action.payload.data);
      }
    },
    [operations.updateHero.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export const { updateCurrent } = heroSlice.actions;
export const heroReducer = heroSlice.reducer;