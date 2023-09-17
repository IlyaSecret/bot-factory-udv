import { createSlice } from "@reduxjs/toolkit";
import { ITag } from "../../types/ITag";
import { getAllTagsAction } from "../api-actions";

type InitialState = {
    tags: ITag[],
    isLoading: boolean
}

const initialState: InitialState = {
    tags: [],
    isLoading: false
}

export const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllTagsAction.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getAllTagsAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tags = action.payload;
            })
    }
})

export default tagsSlice.reducer;