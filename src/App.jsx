import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes element={<Todos />}>
        <Route path="/">
          <Route index element={<Todos />} />
          <Route path="create" element={<TodoForm />} />
          <Route path="edit/:id" element={<TodoForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
