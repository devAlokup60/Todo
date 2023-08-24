import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // todos: [{ id: 1, text: "Hello" }],
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo); //manage the state
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = newText;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions; //particularly export actions

export default todoSlice.reducer; //this is wired up with store *reducer same as store reducer name *
