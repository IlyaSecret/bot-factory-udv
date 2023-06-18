import { combineReducers } from "@reduxjs/toolkit";
import EmployeesReducer from "./users/users-slice"
import ChatsReducer from "./chats/chats-slice";
import TagsReducer from "./tags/tags-slice";
export const reducers = combineReducers({
    employees: EmployeesReducer,
    chats: ChatsReducer,
    tags: TagsReducer
})