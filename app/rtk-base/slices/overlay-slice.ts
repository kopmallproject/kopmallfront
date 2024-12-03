import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type OverlayType = 'createUser' | 'store' | 'categories' | 'deals' | null;

interface OverlayState {
  type: OverlayType;
}

const initialState: OverlayState = {
  type: null
};

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    showOverlay: (state, action: PayloadAction<OverlayType>) => {
      state.type = action.payload;
    },
    hideOverlay: (state) => {
      state.type = null;
    }
  }
});

export const { showOverlay, hideOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;