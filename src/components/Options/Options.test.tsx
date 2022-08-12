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

describe.only("Score", () => {
  test("should be able to score and disable the item scored", () => {
    renderWithProviders(<Options />);
    const scoreOption = screen.getByTestId("one");
    const score = screen.getByTestId("pointOne");
    fireEvent.click(scoreOption);
    expect(scoreOption).toHaveClass("disabled");
    expect(score).toBeInTheDocument();
  });

  test("should display '0 MOVIMENTO(S) RESTANTE(S)' and 'PLAY' after choose a score option", () => {
    renderWithProviders(<TestApp />);
    const scoreOption = screen.getByTestId("one");
    fireEvent.click(scoreOption);
    const remaining = screen.getByTestId("remaining");
    const play = screen.getByTestId("newRound");
    expect(remaining).toHaveTextContent("0 MOVIMENTO(S) RESTANTE(S)");
    expect(play).toBeInTheDocument();
    expect(play).toHaveTextContent("JOGAR");
  });

  test.only("should score 5 points after choose '1 PONTO POR CADA 1' with 5 dices 1", () => {
    renderWithProviders(<TestApp />, {
      preloadedState: {
        header: {
          newRound: false,
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
});
