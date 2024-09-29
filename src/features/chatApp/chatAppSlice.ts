import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDatayType, ChatAppState } from "../../types/dataTypes"
// import { Socket } from "socket.io-client";

const initialState: ChatAppState = {
    users: [],
    isLoading: false,
    isSearching: false,
    error: "",
    messages: [],
    onlineUsers: [],
}

const chatAppSlice = createSlice({
    name: "chatApp",
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UserDatayType[]>) => {
            state.users = action.payload;
            state.isLoading = false;
            state.error = "";
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setMessages: (state, action: PayloadAction<Message[]>) => {
            state.messages = action.payload
        },
        addNewMessage: (state, acition: PayloadAction<Message>) => {
            state.messages.push(acition.payload);
        },
        setOnlieUsers: (state, acition: PayloadAction<string[]>) => {
            state.onlineUsers = acition.payload
        },
    }
})

export const { setUsers, setLoading, setError, setMessages, addNewMessage, setOnlieUsers } = chatAppSlice.actions;

export default chatAppSlice.reducer;