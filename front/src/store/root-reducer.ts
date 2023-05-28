import { combineReducers } from "@reduxjs/toolkit";
import EmployeesReducer from "./users/users-slice"
import ChatsReducer from "./chats/chats-slice";
export const reducers = combineReducers({
    employees: EmployeesReducer,
    chats: ChatsReducer
})