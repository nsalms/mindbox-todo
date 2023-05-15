import { render, screen, userEvent } from "../utils/test-utils";
import { Provider } from "react-redux";
import store from "../store";
import InputForm from "../components/InputForm";
import App from "../App";

test("Adding a task", async () => {
  const mockOnSubmit = vi.fn();

  render(<InputForm onSubmit={mockOnSubmit} />);

  const input = screen.getByPlaceholderText("What needs to be done?");
  const submitButton = screen.getByTitle("Submit");

  await userEvent.type(input, "New task");
  await userEvent.click(submitButton);

  expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  expect(mockOnSubmit).toHaveBeenCalledWith(
    expect.stringContaining("New task")
  );
});

test("Displaying a task", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const input = screen.getByPlaceholderText("What needs to be done?");
  const submitButton = screen.getByTitle("Submit");

  await userEvent.type(input, "New task");
  await userEvent.click(submitButton);

  expect(screen.getByText("New task")).toBeInTheDocument();
});

test("TextField cleared after submit", async () => {
  render(<InputForm onSubmit={() => {}} />);

  const input = screen.getByPlaceholderText("What needs to be done?");
  const submitButton = screen.getByTitle("Submit");

  await userEvent.type(input, "New task");
  await userEvent.click(submitButton);

  expect(input).toHaveValue("");
});
