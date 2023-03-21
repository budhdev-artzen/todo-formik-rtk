import React, { useState, useEffect } from "react";
import classes from "./Todos.module.css";
import { MdEdit, MdDelete, MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { deleteTodo } from "../Store/delete";
import { useSelector, useDispatch } from "react-redux";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteStatus = useSelector((state) => state.delete.status);

  console.log(deleteStatus);

  useEffect(() => {
    const getTodos = async () => {
      const req = await fetch(
        "https://64141ce1ebce1f9d8c5f8179.mockapi.io/todos"
      )
        .then((res) => res.json())
        .then((data) => setTodos(data));
    };

    getTodos();
  }, []);

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={classes.todos}>
      <div className={classes.header}>
        <h1 className={classes.heading}>My Tasks</h1>
      </div>
      <div className={classes["todolist-wrapper"]}>
        <ol>
          {todos &&
            todos?.map((todo) => (
              <li className={classes.listItem} key={todo.id}>
                <span className={classes.text}>{todo.todo}</span>
                <span className={classes.actions}>
                  <MdEdit
                    title="Edit"
                    onClick={() => navigate(`edit/${todo.id}`)}
                  />
                  <MdDelete
                    title="Delete"
                    onClick={() => deleteHandler(todo.id)}
                  />
                </span>
              </li>
            ))}
        </ol>
      </div>

      <div className={classes["add-wrapper"]}>
        <span className={classes.wrapper}>
          <MdAdd title="Create" onClick={() => navigate("create")} />
        </span>
      </div>
    </div>
  );
};

export default Todos;
