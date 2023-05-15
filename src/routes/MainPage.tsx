import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputForm from "../components/InputForm";
import ListTodos from "../components/ListTodos";
import TopBar from "../components/TopBar";
import { useDispatch, useSelector } from "../store";
import { addTodo, clearTodos, toggleComplete } from "../store/todosSlice";
import { Filters, Todo } from "../utils/types";
import { useState } from "react";

export default function MainPage() {
  const dispatch = useDispatch();
  const [filterBy, setFilterBy] = useState(Filters.ALL);
  const todos = useSelector((state) => state.todos.todos);

  //Получение дел с учетом фильтра
  const filteredTodos = (filter: Filters): Todo[] => {
    return todos.filter((todo) => {
      if (filter === Filters.COMPLETED) return todo.completed;
      if (filter === Filters.ACTIVE) return !todo.completed;
      return true;
    });
  };

  // Стили для разделителей
  const boxStyle = {
    p: "1em",
    display: "flex",
    "&:not(:last-child)": {
      borderBottom: "1px solid",
      borderColor: "divider",
    },
  };

  return (
    <>
      {/*Application title*/}
      <Typography
        variant="h1"
        component="h1"
        align="center"
        sx={{ fontWeight: 100 }}
        gutterBottom
      >
        {APP_NAME}
      </Typography>

      <Paper elevation={3}>
        <Box sx={boxStyle}>
          <TopBar
            remainingCount={filteredTodos(Filters.ACTIVE).length}
            activeFilter={filterBy}
            switchFilter={(newValue) => setFilterBy(newValue)}
            clearCompleted={() => dispatch(clearTodos())}
          />
        </Box>
        <Box sx={boxStyle}>
          <InputForm onSubmit={(title) => dispatch(addTodo(title))} />
        </Box>
        <Box sx={boxStyle}>
          <ListTodos
            todos={filteredTodos(filterBy)}
            toggleTodo={(id) => dispatch(toggleComplete(id))}
          />
        </Box>
      </Paper>
    </>
  );
}
