// userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the User interface if needed (you can refine it according to your needs)
interface User {
  id: string;
  name: string;
  email: string;
  // Add more properties relevant to the user
}

// Define the UserState type that includes the userInfo and authentication status
interface UserState {
  userInfo: User | null; // Make sure to specify the correct type for userInfo
  isAuthenticated: boolean;
}

// Initial state with UserState type
const initialState: UserState = {
  userInfo: null,
  isAuthenticated: false
};

// Create the slice with the reducers
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<User>) {
      state.userInfo = action.payload;
      state.isAuthenticated = true;
    },
    clearUserInfo(state) {
      state.userInfo = null;
      state.isAuthenticated = false;
    }
  }
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;
