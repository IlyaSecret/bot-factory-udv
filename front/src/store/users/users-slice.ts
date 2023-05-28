import { createSlice } from "@reduxjs/toolkit";
import { IEmployee, ISingleEmployee } from "../../types/IEmployee";
import { getAllEmployeesAction, getEmployeeById } from "../api-actions";

type InitialState = {
    users: IEmployee[],
    currentEmployee: ISingleEmployee | null,
    isLoading: boolean
}

const initialState: InitialState = {
    users: [],
    currentEmployee: null,
    isLoading: false
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
    } 
})


export default employeesSlice.reducer;