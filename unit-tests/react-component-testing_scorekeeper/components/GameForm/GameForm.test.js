import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);
  const inputField1 = screen.getByLabelText("Name of game");
  const inputField2 = screen.getByLabelText("Player names, separated by comma");
  expect(inputField1).toBeInTheDocument();
  expect(inputField2).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const formName = screen.getByRole("heading", {
    name: "Create a new game",
  });

  expect(formName).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  // Mock the onCreateGame function to capture submitted data
  const handleCreateGame = jest.fn();
  render(<GameForm onCreateGame={handleCreateGame} />);

  const inputField1 = screen.getByLabelText("Name of game");
  const inputField2 = screen.getByLabelText("Player names, separated by comma");
  const submitButton = screen.getByRole("button", { name: /create game/i });

  // Fill out the form
  await userEvent.type(inputField1, "Test Game");
  await userEvent.type(inputField2, "Max, Maxi");

  // Submit the form
  await userEvent.click(submitButton);

  // Check if the onCreateGame function was called with correct data
  expect(handleCreateGame).toHaveBeenCalledWith({
    nameOfGame: "Test Game",
    playerNames: ["Max", "Maxi"],
  });
});

// test("does not submit form if one input field is left empty", async () => {});
