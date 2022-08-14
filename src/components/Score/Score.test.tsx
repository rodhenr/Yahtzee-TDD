import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Options from "../Options/Options";
import Header from "../Header/Header";
import Score from "./Score";
import { renderWithProviders } from "../../utils/test-utils";

const TestApp = () => (
  <>
    <Header />
    <Options />
    <Score />
  </>
);

describe("total score", () => {
  test("should display 5 points", () => {
    renderWithProviders(<TestApp />, {
      preloadedState: {
        header: {
          remainingMoves: 2,
          dicesFreeze: [false, false, false, false, false],
          dices: [1, 1, 1, 1, 1],
        },
      },
    });
    const scoreOption = screen.getByTestId("one");
    const totalScore = screen.getByTestId("totalScore");
    fireEvent.click(scoreOption);
    expect(totalScore).toBeInTheDocument();
    expect(totalScore).toHaveTextContent("5");
  });

  test("should end the game after all options are chosen", () => {
    renderWithProviders(<TestApp />);
    const scoreOptionOne = screen.getByTestId("one");
    const scoreOptionTwo = screen.getByTestId("two");
    const scoreOptionThree = screen.getByTestId("three");
    const scoreOptionFour = screen.getByTestId("four");
    const scoreOptionFive = screen.getByTestId("five");
    const scoreOptionSix = screen.getByTestId("six");
    const scoreOptionThreeKind = screen.getByTestId("threeKind");
    const scoreOptionFourKind = screen.getByTestId("fourKind");
    const scoreOptionYahtzee = screen.getByTestId("yahtzee");
    const scoreOptionFourRow = screen.getByTestId("fourRow");
    const scoreOptionFiveRow = screen.getByTestId("fiveRow");
    const scoreOptionSum = screen.getByTestId("sum");
    fireEvent.click(scoreOptionOne);
    fireEvent.click(scoreOptionTwo);
    fireEvent.click(scoreOptionThree);
    fireEvent.click(scoreOptionFour);
    fireEvent.click(scoreOptionFive);
    fireEvent.click(scoreOptionSix);
    fireEvent.click(scoreOptionThreeKind);
    fireEvent.click(scoreOptionFourKind);
    fireEvent.click(scoreOptionYahtzee);
    fireEvent.click(scoreOptionFourRow);
    fireEvent.click(scoreOptionFiveRow);
    fireEvent.click(scoreOptionSum);
    const newGame = screen.getByTestId("newGame");
    expect(newGame).toBeInTheDocument();
    expect(newGame).toHaveClass("gameEnd");
    expect(newGame).toHaveTextContent("NOVO JOGO");
  });
});
