import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
    unset() {
        axios.defaults.headers.common.Authorization = '';
  },
};

export const onSignUp = createAsyncThunk("users/signup", async (userInfo, thunkAPI) => {
    try {
        const { data } = await axios.post("/users/signup", userInfo)
        token.set(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}) 

export const onLogIn = createAsyncThunk("users/login", async (userInfo, thunkAPI) => {
    try {
        const { data } = await axios.post("/users/login", userInfo)
        token.set(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const onLogOut = createAsyncThunk("users/logOut", async (_, thunkAPI) => {
    try {
        await axios.post("/users/logout")
        token.unset()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const fetchCurrentUser = createAsyncThunk("/users/current", async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.users.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken)

    try {
        const {data} = await axios.get('/users/current');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})


