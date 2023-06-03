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
      state.error = action.payload;
      state.isLoading = false;
    },

    [operations.createHero.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
    },
    [operations.createHero.pending](state, action) {
      state.isLoading = true;
    },
    [operations.createHero.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    [operations.updateHero.fulfilled](state, action) {
      const index = state.heroes.indexOf(action.payload.data);
      if (index > 0) {
        state.heroes.splice(index, 1, action.payload.data);
      }
      state.error = null;
    },
    [operations.updateHero.rejected](state, action) {
      state.error = action.payload;
    },

    [operations.deleteHero.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
    },
    [operations.deleteHero.pending](state, action) {
      state.isLoading = true;
    },
    [operations.deleteHero.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { updateCurrent } = heroSlice.actions;
export const heroReducer = heroSlice.reducer;