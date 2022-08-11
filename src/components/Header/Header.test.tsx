import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { renderWithProviders } from "../../utils/test-utils";

describe("Title", () => {
  test("should render the title 'Yahtzee'", () => {
    renderWithProviders(<Header />);
    const title = screen.getByText("Yahtzee");
    expect(title).toBeInTheDocument();
  });
});

describe("Dices", () => {
  test("should render 5 dices", () => {
    renderWithProviders(<Header />);
    const dices = screen.getAllByTestId("die");
    expect(dices).toHaveLength(5);
  });

  test("all dices should have a value", () => {
    renderWithProviders(<Header />);
    const dices = screen.getAllByTestId("die");
    const values = ["1", "2", "3", "4", "5", "6"];
    dices.forEach((el) => {
      expect(values).toContain(el.textContent);
    });
  });

  test("button should be 'ROLL' in first render", () => {
    renderWithProviders(<Header />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("ROLL");
  });
});

describe("Remaining Moves", () => {
  test("should render with 2 remaining moves", () => {
    renderWithProviders(<Header />);
    const remaining = screen.getByTestId("remaining");
    expect(remaining).toBeInTheDocument();
    expect(remaining).toHaveTextContent("2 Movimento(s) restante(s)");
  });
});

describe.only("Rolling", () => {
  test("should be possible roll for new dices", () => {
    renderWithProviders(<Header />);
    const roll = screen.getByTestId("rollDices");
    expect(roll).toBeInTheDocument();
  });
});
