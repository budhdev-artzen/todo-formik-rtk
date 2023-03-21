import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://64141ce1ebce1f9d8c5f8179.mockapi.io/todos";

export const updateTodo = createAsyncThunk("/todos", async (id, body) => {
  const req = await fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return req.status;
});

const update = createSlice({
  name: "update",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(updateTodo.fulfilled, (state, action) => {});
  },
});

export default update.reducer;
