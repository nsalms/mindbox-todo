import { AnyAction, configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from "react-redux";
import { listenerMiddleware } from "./middleware";
import todoReducer, { initialState } from "./todosSlice";

const todosState = JSON.parse(localStorage.getItem("todos") || "null");

const store = configureStore({
  preloadedState: {
    todos: todosState === null ? initialState : todosState,
  },
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    listenerMiddleware.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Action = AnyAction;

export const useDispatch: () => AppDispatch = _useDispatch;

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
export default store;
