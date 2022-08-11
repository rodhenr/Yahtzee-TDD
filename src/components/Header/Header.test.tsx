import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { renderWithProviders } from "../../utils/test-utils";

describe("Title", () => {
  test("should render the title 'Yahtzee'", () => {
    renderWithProviders(<Header />);
    const title = screen.getByText("YAHTZEE");
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

  test("should be possible to 'freeze' a die", () => {
    renderWithProviders(<Header />);
    const dices = screen.getAllByTestId("die");
    fireEvent.click(dices[0]);
    expect(dices[0]).toHaveClass("disabled");
  });
});

describe("Remaining Moves", () => {
  test("should render with 2 remaining moves", () => {
    renderWithProviders(<Header />);
    const remaining = screen.getByTestId("remaining");
    expect(remaining).toBeInTheDocument();
    expect(remaining).toHaveTextContent("2 MOVIMENTO(S) RESTANTE(S)");
  });
});

describe.only("Rolling", () => {
  test("should be possible roll for new dices", () => {
    const values = ["1", "2", "3", "4", "5", "6"];
    renderWithProviders(<Header />);
    const roll = screen.getByTestId("rollDices");
    const dices = screen.getAllByTestId("die");
    expect(roll).toBeInTheDocument();
    fireEvent.click(roll);
    dices.forEach((el) => {
      expect(values).toContain(el.textContent);
      expect(el).toHaveClass("enabled");
    });
  });

  test("should be possible to roll only for dices that aren't frozen", () => {
    renderWithProviders(<Header />);
    const dices = screen.getAllByTestId("die");
    const roll = screen.getByTestId("rollDices");
    fireEvent.click(dices[0]);
    fireEvent.click(dices[1]);
    fireEvent.click(roll);
    expect(dices[0]).toHaveClass("disabled");
    expect(dices[1]).toHaveClass("disabled");
    expect(dices[2]).toHaveClass("enabled");
    expect(dices[3]).toHaveClass("enabled");
    expect(dices[4]).toHaveClass("enabled");
  });
});
