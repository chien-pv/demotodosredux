import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  todos: [
    { title: "Học css Redux", status: "Open" },
    { title: "Học JS", status: "Open" },
    { title: "Học CSS", status: "Open" },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ title: "Học react", status: "Open" });
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const reducer = todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
