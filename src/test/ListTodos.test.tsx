import { render, screen, userEvent } from "../utils/test-utils";
import ListTodos from "../components/ListTodos";
import { Todo } from "../utils/types";

test("Toggle task status", async () => {
  const mockToggleTodo = vi.fn();
  const mockData: Todo[] = [
    {
      id: 1,
      value: "Task 1",
      completed: false,
    },
  ];

  render(<ListTodos todos={mockData} toggleTodo={mockToggleTodo} />);

  const checkboxes = screen.getAllByRole("checkbox");
  await userEvent.click(checkboxes[0]);
  expect(mockToggleTodo).toHaveBeenCalledTimes(1);

  await userEvent.click(checkboxes[0]);
  expect(mockToggleTodo).toHaveBeenCalledTimes(2);
});
