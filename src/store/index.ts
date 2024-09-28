import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice"
import chatAppSlice from "../features/chatApp/chatAppSlice";
export const store = configureStore({
    reducer: {
        auth: authSlice,
        chatApp: chatAppSlice,
    }
})