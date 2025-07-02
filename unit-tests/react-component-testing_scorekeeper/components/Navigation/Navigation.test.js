import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  // Render the Navigation component
  render(<Navigation />);

  // Check if the 'Play' link exists
  const playLink = screen.getByRole("link", { name: /play/i });
  expect(playLink).toBeInTheDocument();

  // Check if the 'History' link exists
  const historyLink = screen.getByRole("link", { name: /history/i });
  expect(historyLink).toBeInTheDocument();
});
