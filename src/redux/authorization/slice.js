import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser, onLogIn, onLogOut, onSignUp } from "./operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
}

export const authSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {builder
        .addCase(onSignUp.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(onLogIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(onLogOut.fulfilled, (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(fetchCurrentUser.pending, (state) => {
            state.isFetchingCurrentUser = true;
        })
        .addCase(fetchCurrentUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        })
        .addCase(fetchCurrentUser.rejected, (state) => {
            state.isFetchingCurrentUser = false;
        })
    }
})

export default authSlice.reducer