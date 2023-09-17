import { createSlice } from "@reduxjs/toolkit";
import { IEmployee, ISingleEmployee } from "../../types/IEmployee";
import { getAllEmployeesAction, getEmployeeById, getUserChatsAction } from "../api-actions";
import { IChat } from "../../types/IChat";

type InitialState = {
    users: IEmployee[],
    currentEmployee: ISingleEmployee | null,
    isLoading: boolean,
    currentEmployeeChats: IChat[]
}

const initialState: InitialState = {
    users: [],
    currentEmployee: null,
    isLoading: false,
    currentEmployeeChats: []
}

export const employeesSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllEmployeesAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllEmployeesAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(getEmployeeById.fulfilled, (state, action) => {
                state.currentEmployee = action.payload;
            })
            .addCase(getUserChatsAction.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getUserChatsAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentEmployeeChats = action.payload;
            })
    } 
})


export default employeesSlice.reducer;