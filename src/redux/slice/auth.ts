import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../features/type";


export interface AuthState {
  user: UserType;
}

const initialState: AuthState = {
  user: {
    id:0,
    username: "",
    name: "",
    quote: "",
    email:"",
    following: [],
    followers: [],
    profilePictureUrl: "",
    coverPictureUrl: "",
    _count:{
      followers:0,
      following:0,
    }
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_USER: (state, action: { payload: UserType }) => {
      console.log(action.payload);
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SET_USER } = authSlice.actions;

export default authSlice.reducer;
