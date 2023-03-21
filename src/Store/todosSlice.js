import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://64141ce1ebce1f9d8c5f8179.mockapi.io/";

const getTodos = createAsyncThunk("todos/getTodos", async () => {
  return fetch(`${baseUrl}todos`).then((response) => response.json());
});

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
  },

  extraReducers: {
    [getTodos.pending]: (state, action) => {
      state.loading = true;
    },
    [getTodos.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default todosSlice.reducer;
