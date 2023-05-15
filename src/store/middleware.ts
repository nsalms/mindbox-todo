import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addTodo, clearTodos, toggleComplete } from "./todosSlice";
import type { RootState } from "./index";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(addTodo, clearTodos, toggleComplete),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "todos",
      JSON.stringify((listenerApi.getState() as RootState).todos)
    ),
});
