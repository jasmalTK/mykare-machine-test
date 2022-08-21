import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : {
        username: "",
        isAuth: false,
    };


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
        state.isAuth = true
        state.username = action.payload.username;
  
      localStorage.setItem("auth", JSON.stringify({
          username: action.payload.username,
          isAuth: true,
    } ));
    },
    logOutSuccess: (state, action) => {
      state.username = "";
      state.isAuth = false;
      localStorage.removeItem("auth");
    },
  },
});

export const { loginSuccess, logOutSuccess } = authSlice.actions;
export const selectUserName = (state) => state.auth.username;

export default authSlice.reducer;
