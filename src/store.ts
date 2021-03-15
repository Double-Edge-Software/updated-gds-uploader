import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './rootslice';

export const store = configureStore({
  reducer  
})