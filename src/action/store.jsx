import { configureStore } from '@reduxjs/toolkit';
import studioReducer from './state/studioSlice';

export const store = configureStore({
	reducer: { studioTemplate: studioReducer }
});
