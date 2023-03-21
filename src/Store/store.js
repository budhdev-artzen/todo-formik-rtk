import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import addReducer from "./add";
import deleteReducer from "./delete";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    add: addReducer,
    delete: deleteReducer,
  },
});

export default store;
