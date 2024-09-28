import { RootState } from "../../types/dataTypes"

export const selectIsLoading = (state: RootState) => state.chatApp.isLoading;
export const selectUsers = (state: RootState) => state.chatApp.users
export const selectOnlineUsersIds = (state: RootState) => state.chatApp.onlineUsers;
export const selectMessages = (state: RootState) => state.chatApp.messages;
export const selectChatAppState = (state: RootState) => state.chatApp;