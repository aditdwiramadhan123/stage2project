import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  username: string;
  quote?: string;
  following: number;
  follower: number;
  imageProfilLink?: string | null;
  coverImageLink?: string | null;
}

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: {
    username: "",
    name: "",
    quote: "",
    following: 0,
    follower: 0,
    coverImageLink: "",
    imageProfilLink: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_USER: (state, action: { payload: User }) => {
      console.log(action.payload);
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SET_USER } = authSlice.actions;

export default authSlice.reducer;
