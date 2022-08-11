import {
  newDices,
  setRemainingMoves,
  startNewRound,
} from "../../store/slices/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

function Header() {
  const dispatch = useDispatch();

  const dices = useSelector((state: RootState) => state.header.dices);
  const newRound = useSelector((state: RootState) => state.header.newRound);
  const remainingMoves = useSelector(
    (state: RootState) => state.header.remainingMoves
  );

  return (
    <div>
      <h1>Yahtzee</h1>
      <div data-testid="dices">
        {dices.map((i, index) => {
          return (
            <div data-testid="die" key={index}>
              <p>{i}</p>
            </div>
          );
        })}
      </div>
      {newRound ? (
        <button>JOGAR</button>
      ) : (
        <button data-testid="rollDices">ROLL</button>
      )}
      <div data-testid="remaining">
        <p>{remainingMoves} Movimento(s) restante(s)</p>
      </div>
    </div>
  );
}

export default Header;
