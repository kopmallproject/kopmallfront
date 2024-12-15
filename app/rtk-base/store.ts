import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './slices/tab-slice';
import overlayReducer from './slices/overlay-slice';
import modalReducer from './slices/modal-slice';
import userReducer from './slices/user-slice';

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    overlay: overlayReducer,
    logout: modalReducer,
    user: userReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
