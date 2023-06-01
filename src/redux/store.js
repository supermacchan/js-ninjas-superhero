import { configureStore } from '@reduxjs/toolkit';
import { heroReducer } from './hero/slice';

export const store = configureStore({
    reducer: heroReducer,
})