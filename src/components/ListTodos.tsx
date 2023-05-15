import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { Alert } from "@mui/material";
import { Todo } from "../utils/types";

type Props = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
};

export default function ListTodos({ todos, toggleTodo }: Props) {
  return (
    <List sx={{ width: "100%" }} disablePadding>
      {todos.map((todo) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <ListItem key={todo.id} disablePadding disabled={todo.completed}>
            <ListItemButton
              role={undefined}
              onClick={() => toggleTodo(todo.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={todo.value} />
            </ListItemButton>
          </ListItem>
        );
      })}

      {!todos.length && <Alert severity="info">List is empty</Alert>}
    </List>
  );
}
