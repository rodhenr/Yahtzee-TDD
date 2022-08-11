import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Options from "./Options";
import { renderWithProviders } from "../../utils/test-utils";

describe.only("Score", () => {
  test("should be able to score and disable the item scored", () => {
    renderWithProviders(<Options />);
    const scoreOption = screen.getByTestId("one");
    const score = screen.getByTestId("pointOne");
    fireEvent.click(scoreOption);
    expect(scoreOption).toHaveClass("disabled");
    expect(score).toHaveTextContent("5");
  });
});