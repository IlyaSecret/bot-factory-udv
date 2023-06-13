import { createAsyncThunk } from "@reduxjs/toolkit";
import { IEmployee, IPostEmployee, ISingleEmployee } from "../types/IEmployee";
import { AppDispatch, RootState } from "./store";
import { AxiosInstance } from "axios";
import { IChat } from "../types/IChat";
import { ITag } from "../types/ITag";


export const getAllEmployeesAction = createAsyncThunk<IEmployee[], undefined, {
    dispatch: AppDispatch,
    state: RootState,
    extra: AxiosInstance
}>(
    "users/getAllEmployees",
    async (_arg, { extra: api }) => {
        const { data } = await api.get<IEmployee[]>('/employees/')
        return data;
    }
)

export const getEmployeeById = createAsyncThunk<ISingleEmployee | null, number, {
    dispatch: AppDispatch,
    state: RootState,
    extra: AxiosInstance
}>(
    "users/getEmployeeById",
    async (id, { extra: api }) => {
        const { data } = await api.get<ISingleEmployee>(`employees/${id}`);
        return data;
    }
)

export const addEmployee = createAsyncThunk<void, IPostEmployee, {
    dispatch: AppDispatch,
    state: RootState,
    extra: AxiosInstance
}>(
    "users/addEmployee",
    async (userData, { extra: api }) => {
        await api.post<IPostEmployee>(`employees/`, userData);
    }
)

export const deleteEmployee = createAsyncThunk<void, number, {
    dispatch: AppDispatch,
    state: RootState,
    extra: AxiosInstance
}>(
    "users/delteEmployee",
    async (id, { dispatch, extra: api }) => {
        await api.delete<number>(`employees/${id}`)
        await dispatch(getAllEmployeesAction())
    }
)

export const getAllChatsAction = createAsyncThunk<IChat[], undefined, {
    dispatch: AppDispatch,
    state: RootState,
    extra: AxiosInstance
}>(
    "chats/getAllChats",
    async (_arg, { extra: api }) => {
        const { data } = await api.get("/chats");
        return data;
    }
)

export const addChatAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch,
    state: RootState,
    extra: AxiosInstance
}>(
    "chats/addChat",
    async (title, { dispatch, extra: api }) => {
        await api.post("chat/create/", {
            title: title
        });
    }
)

export const getChatByIdAction = createAsyncThunk<IChat | null, number, {
    dispatch: AppDispatch,
    state: RootState,
    extra: AxiosInstance
}>(
    "chats/getChatById",
    async (id, { dispatch, extra: api }) => {
        const { data } = await api.get(`/chats/${id}`)
        return data;
    }
)

export const addUsersToChat = createAsyncThunk<void, {users: Array<number>, chatId: number}, {
    dispatch: AppDispatch,
    state: RootState,
    extra: AxiosInstance
}>(
    "chats/addUsers",
    async (data, { dispatch, extra: api }) => {
        await api.post(`/chat/add/${data.chatId}`, {
            users: data.users
        })
    }
)

export const getChatUsersAction = createAsyncThunk<IEmployee[], number, {
    dispatch: AppDispatch,
    state: RootState,
    extra: AxiosInstance
}>(
    "chats/getChatUsers",
    async (id, { dispatch, extra: api }) => {
        const { data } = await api.get(`chat/users/${id}`)
        return data
    }
)

export const getUserChatsAction = createAsyncThunk<IChat[], number[], {
    dispatch: AppDispatch,
    state: RootState,
    extra: AxiosInstance
  }>(
    "chats/fetchChatsForUser",
    async (userIds, { dispatch, extra: api }) => {
      const result: IChat[] = [];
  
      for (const userId of userIds) {
        const chat = await dispatch(getChatByIdAction(userId)).unwrap();
        if (chat) {
          result.push(chat);
        }
      }
  
      return result;
    }
);
  
export const deleteUserFromChatAction = createAsyncThunk<void, {chatId: number, userId: number}, {
    dispatch: AppDispatch,
    state: RootState,
    extra: AxiosInstance
}>(
    "chats/deleteUserFromChat",
    async (data, { dispatch, extra: api }) => {
        await api.post(`chat/remove/${data.chatId}`, {
            users: [data.userId]
        })
        await dispatch(getChatUsersAction(data.chatId))
    }
)

export const deleteChatAction = createAsyncThunk< void, number, {
    dispatch: AppDispatch,
    state: RootState,
    extra: AxiosInstance
}>(
    "chats/deleteChat",
    async (id, { dispatch, extra: api }) => {
        await api.delete(`chats/${id}/`)
    }
)

export const getAllTagsAction = createAsyncThunk < ITag[], undefined, {
    dispatch: AppDispatch,
    state: RootState,
    extra: AxiosInstance
}>(
    "tags/getAllTags",
    async (_arg, { dispatch, extra: api }) => {
        const { data } = await api.get("tags/")
        return data;
    }
)