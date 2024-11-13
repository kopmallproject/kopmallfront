// src/redux/tabSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TabState {
  activeTab: string;
}

const initialState: TabState = {
  activeTab: 'Overview'
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    }
  }
});

export const { setActiveTab } = tabSlice.actions;
export default tabSlice.reducer;
