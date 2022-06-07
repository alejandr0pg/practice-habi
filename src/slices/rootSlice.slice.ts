import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    draft: {}
  },
  reducers: {
    storeDraft: (state, action) => { state.draft = action.payload },
    deleteDraft: (state) => { state.draft = Object.create(null) }
  }
});

export const reducer = rootSlice.reducer;

export const { storeDraft, deleteDraft } = rootSlice.actions;