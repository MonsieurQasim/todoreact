import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { IoIosCloseCircle } from "react-icons/io";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-rowcomplete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <button className="ButtonCancel" onClick={() => removeTodo(todo.id)}>
          <IoIosCloseCircle className="delete-icon" size={20} />{" "}
        </button>
        <button
          className="ButtonEdit"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        >
          <TiEdit className="edit-icon" size={20} />
        </button>
      </div>
    </div>
  ));
}
export default Todo;
