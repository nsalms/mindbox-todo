import { render, screen, userEvent } from "../utils/test-utils";
import TopBar from "../components/TopBar.js";
import { Filters, Todo } from "../utils/types";

const mockTodos: Todo[] = [
  {
    id: 1,
    value: "Task 1",
    completed: true,
  },
  {
    id: 2,
    value: "Task 2",
    completed: false,
  },
];

const todosRemainingCount = (): number => {
  return mockTodos.filter((todo) => {
    return !todo.completed;
  }).length;
};

test("Active tasks counter", () => {
  render(
    <TopBar
      remainingCount={todosRemainingCount()}
      clearCompleted={() => {}}
      switchFilter={() => {}}
    />
  );

  expect(screen.getByText(/1 items left/)).toBeInTheDocument();
});

test("Clear completed tasks", async () => {
  const mockClearCompleted = vi.fn();

  render(
    <TopBar
      remainingCount={todosRemainingCount()}
      clearCompleted={mockClearCompleted}
      switchFilter={() => {}}
    />
  );

  await userEvent.click(screen.getByText("Clear completed"));

  expect(mockClearCompleted).toHaveBeenCalledTimes(1);
});
