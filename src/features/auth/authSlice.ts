import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDatayType, AuthState } from "../../types/dataTypes"

const initialState: AuthState = {
    authUser: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserDatayType>) => {
            state.authUser = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.authUser = null;
            state.isAuthenticated = false;
        }
    }
})

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;