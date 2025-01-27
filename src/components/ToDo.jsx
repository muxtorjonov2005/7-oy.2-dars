import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "../store/todoSlice";

function ToDo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  function handleAddTodo() {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  }

  return (
    <div className="p-4">
      <div className="flex gap-4 items-center justify-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter new todo..."
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded ml-2 hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center py-2 px-4 bg-white rounded shadow mb-2">
            <span
              onClick={() => dispatch(toggleComplete(todo.id))}
              className={`cursor-pointer ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 cursor-pointer"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
