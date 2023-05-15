import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters, Todo } from "../utils/types";

const initialTodos: Todo[] = [
  { id: 0, value: "Тестовое задание", completed: false },
  { id: 1, value: "Прекрасный код", completed: true },
  { id: 2, value: "Покрытие тестами", completed: false },
];

export const initialState = {
  todos: initialTodos,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: new Date().getTime(),
        value: action.payload,
        completed: false,
      });
    },
    clearTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const toggledTodo = state.todos.find(
        (t: Todo) => t.id === action.payload
      );
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
  },
});

export const { addTodo, clearTodos, toggleComplete } = todosSlice.actions;

export default todosSlice.reducer;
