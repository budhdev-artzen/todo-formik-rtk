import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://64141ce1ebce1f9d8c5f8179.mockapi.io/todos";

export const add = createAsyncThunk("todos", async (body) => {
  const request = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return request.status;
});

const initialState = { addStatus: null };

const addSlice = createSlice({
  name: "add",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(add.fulfilled, (state, action) => {
      state.addStatus = action.payload;
    });
  },
});

export default addSlice.reducer;
