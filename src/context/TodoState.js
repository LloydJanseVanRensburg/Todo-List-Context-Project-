import React, { useReducer } from "react";
import TodoContext from "./todo-context";
import todoReducer from "./todo-reducer";

import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./todo-actions";

const TodoState = (props) => {
  const intialState = {
    todos: [], // {id: '123', text: 'Some text', complete: false}
  };

  const [state, dispatch] = useReducer(todoReducer, intialState);

  // Add todo
  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  // Toggle a todo
  const toggleTodo = (todoID) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoID,
    });
  };

  // Delete a todo
  const deleteTodo = (todoID) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoID,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
