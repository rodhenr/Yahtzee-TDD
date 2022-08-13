import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Options from "./Options";
import Header from "../Header/Header";
import { renderWithProviders } from "../../utils/test-utils";

const TestApp = () => (
  <>
    <Header />
    <Options />
  </>
);

describe("Score", () => {
  test("should be able to score and disable the item scored", () => {
    renderWithProviders(<Options />);
    const scoreOption = screen.getByTestId("one");
    const score = screen.getByTestId("pointOne");
    fireEvent.click(scoreOption);
    expect(scoreOption).toHaveClass("disabled");
    expect(score).toBeInTheDocument();
  });

  test("should reset remaining moves after choose a score option", () => {
    renderWithProviders(<TestApp />);
    const scoreOption = screen.getByTestId("one");
    const roll = screen.getByTestId("rollDices");
    const remaining = screen.getByTestId("remaining");
    expect(remaining).toHaveTextContent("2 MOVIMENTO(S) RESTANTE(S)");
    fireEvent.click(roll);
    expect(remaining).toHaveTextContent("1 MOVIMENTO(S) RESTANTE(S)");
    fireEvent.click(scoreOption);
    expect(remaining).toHaveTextContent("2 MOVIMENTO(S) RESTANTE(S)");
  });

  test("should score 5 points after choose '1 PONTO POR CADA 1' with 5 dices 1", () => {
    renderWithProviders(<TestApp />, {
      preloadedState: {
        header: {
          remainingMoves: 2,
          dicesFreeze: [false, false, false, false, false],
          dices: [1, 1, 1, 1, 1],
        },
      },
    });
    const dices = screen.getAllByTestId("die");
    dices.forEach((el) => {
      expect(el).toHaveTextContent("1");
    });
    const scoreOption = screen.getByTestId("one");
    const score = screen.getByTestId("pointOne");
    fireEvent.click(scoreOption);
    expect(scoreOption).toHaveClass("disabled");
    expect(score).toHaveTextContent("5");
  });

  test("should be possible to score 8 points after choose '3 DE UM TIPO' with 3 dices 2 and 2 dices 1", () => {
    renderWithProviders(<TestApp />, {
      preloadedState: {
        header: {
          remainingMoves: 2,
          dicesFreeze: [false, false, false, false, false],
          dices: [2, 2, 2, 1, 1],
        },
      },
    });
    const scoreOption = screen.getByTestId("threeKind");
    const score = screen.getByTestId("pointThreeKind");
    fireEvent.click(scoreOption);
    expect(scoreOption).toHaveClass("disabled");
    expect(score).toHaveTextContent("8");
  });

  test("should be possible to score 9 points after choose '4 DE UM TIPO' with 4 dices 2 and 1 dice 1", () => {
    renderWithProviders(<TestApp />, {
      preloadedState: {
        header: {
          remainingMoves: 2,
          dicesFreeze: [false, false, false, false, false],
          dices: [2, 2, 2, 2, 1],
        },
      },
    });
    const scoreOption = screen.getByTestId("fourKind");
    const score = screen.getByTestId("pointFourKind");
    fireEvent.click(scoreOption);
    expect(scoreOption).toHaveClass("disabled");
    expect(score).toHaveTextContent("9");
  });

  test("should be possible to score 50 points after choose 'Yahtzee' with 5 dices 2", () => {
    renderWithProviders(<TestApp />, {
      preloadedState: {
        header: {
          remainingMoves: 2,
          dicesFreeze: [false, false, false, false, false],
          dices: [2, 2, 2, 2, 2],
        },
      },
    });
    const scoreOption = screen.getByTestId("yahtzee");
    const score = screen.getByTestId("pointYahtzee");
    fireEvent.click(scoreOption);
    expect(scoreOption).toHaveClass("disabled");
    expect(score).toHaveTextContent("50");
  });

  test("should be possible to score 30 points after choose '4 Seguidos' with dices '2,4,1,3,1'", () => {
    renderWithProviders(<TestApp />, {
      preloadedState: {
        header: {
          remainingMoves: 2,
          dicesFreeze: [false, false, false, false, false],
          dices: [2, 4, 1, 3, 1],
        },
      },
    });
    const scoreOption = screen.getByTestId("fourRow");
    const score = screen.getByTestId("pointFourRow");
    fireEvent.click(scoreOption);
    expect(scoreOption).toHaveClass("disabled");
    expect(score).toHaveTextContent("30");
  });

  test("should be possible to score 40 points after choose '5 Seguidos' with dices '2,4,1,3,5'", () => {
    renderWithProviders(<TestApp />, {
      preloadedState: {
        header: {
          remainingMoves: 2,
          dicesFreeze: [false, false, false, false, false],
          dices: [2, 4, 1, 3, 5],
        },
      },
    });
    const scoreOption = screen.getByTestId("fiveRow");
    const score = screen.getByTestId("pointFiveRow");
    fireEvent.click(scoreOption);
    expect(scoreOption).toHaveClass("disabled");
    expect(score).toHaveTextContent("40");
  });
});
