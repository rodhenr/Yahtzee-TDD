import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Title", () => {
  test("should render the title 'Yahtzee'", () => {
    render(<Header />);
    const title = screen.getByText("Yahtzee");
    expect(title).toBeInTheDocument();
  });
});

describe("Dices", () => {
  test("should render 5 dices", () => {
    render(<Header />);
    const dices = screen.getAllByTestId("die");
    expect(dices).toHaveLength(5);
  });

  test("all dices should have a value", () => {
    render(<Header />);
    const dices = screen.getAllByTestId("die");
    const values = ["1", "2", "3", "4", "5", "6"];
    dices.forEach((el) => {
      expect(values).toContain(el.textContent);
    });
  });

  test("button should be 'ROLL' in first render", () => {
    render(<Header />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("ROLL");
  });
});
