import { createSlice } from "@reduxjs/toolkit"
import { IChat } from "../../types/IChat"
import { getAllChatsAction, getChatByIdAction, getChatUsersAction } from "../api-actions"
import { IEmployee } from "../../types/IEmployee"

type initialState = {
    chats: IChat[] | null,
    currentChat: IChat | null,
    currentChatUsers: IEmployee[] | null
    isLoading: boolean
}

const initialState : initialState = {
    chats: null,
    currentChat: null,
    isLoading: false,
    currentChatUsers: null
}

export const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getAllChatsAction.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getAllChatsAction.fulfilled, (state, action) => {
                state.chats = action.payload;
            })
            .addCase(getChatByIdAction.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getChatByIdAction.fulfilled, (state, action) => {
                state.currentChat = action.payload;
                state.isLoading = false;
            })
            .addCase(getChatUsersAction.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getChatUsersAction.fulfilled, (state, action) => {
                state.currentChatUsers = action.payload;
                state.isLoading = false;
            })
    }
})

export default chatsSlice.reducer;