import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  // Arrange
  render(
    <Input labelText="Username" placeholder="Enter username" name="username" />
  );

  // Act - none required for this test

  // Assert
  const label = screen.getByText("Username");
  expect(label).toBeInTheDocument();

  const input = screen.getByPlaceholderText("Enter username");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "username");
});

test("calls callback on every user input", async () => {
  // Arrange
  const handleChange = jest.fn();
  const user = userEvent.setup();

  render(
    <Input
      labelText="Score"
      placeholder="Enter score"
      name="score"
      onChange={handleChange}
    />
  );

  // Act
  const input = screen.getByPlaceholderText("Enter score");
  await user.type(input, "10");

  // Assert
  expect(handleChange).toHaveBeenCalledTimes(2); // Once for each character typed
});
