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
    expect(totalScore).toHaveTextContent("15");
  });
});
