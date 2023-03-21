import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://64141ce1ebce1f9d8c5f8179.mockapi.io/todos";

export const deleteTodo = createAsyncThunk("/id", async (id) => {
  const request = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
  return request.status;
});

const initialState = { status: null };

const del = createSlice({
  name: "delete",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.status = action.payload;
    });
  },
});

export default del.reducer;
