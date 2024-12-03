import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: (() => void) | null;
  onCancel: (() => void) | null;
}

const initialState: ModalState = {
  isOpen: false,
  title: '',
  message: '',
  onConfirm: null,
  onCancel: null
};

const modalSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: {
    showModal: (
      state,
      action: PayloadAction<{
        title: string;
        message: string;
        onConfirm?: () => void;
        onCancel?: () => void;
      }>
    ) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.onConfirm = action.payload.onConfirm || null;
      state.onCancel = action.payload.onCancel || null;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = '';
      state.message = '';
      state.onConfirm = null;
      state.onCancel = null;
    }
  }
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
