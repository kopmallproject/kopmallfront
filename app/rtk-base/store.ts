import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './slices/tab-slice';

export const store = configureStore({
  reducer: {
    tab: tabReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
