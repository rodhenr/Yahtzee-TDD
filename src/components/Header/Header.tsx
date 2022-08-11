import {
  freezeDie,
  rollDices,
  startNewRound,
} from "../../store/slices/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceFive,
  faDiceFour,
  faDiceOne,
  faDiceSix,
  faDiceThree,
  faDiceTwo,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Header.module.scss";

function Header() {
  const dispatch = useDispatch();

  const dices = useSelector((state: RootState) => state.header.dices);
  const dicesFreeze = useSelector(
    (state: RootState) => state.header.dicesFreeze
  );
  const newRound = useSelector((state: RootState) => state.header.newRound);
  const remainingMoves = useSelector(
    (state: RootState) => state.header.remainingMoves
  );

  const handleDie = (index: number) => {
    switch (index) {
      case 1:
        return <FontAwesomeIcon icon={faDiceOne} />;
      case 2:
        return <FontAwesomeIcon icon={faDiceTwo} />;
      case 3:
        return <FontAwesomeIcon icon={faDiceThree} />;
      case 4:
        return <FontAwesomeIcon icon={faDiceFour} />;
      case 5:
        return <FontAwesomeIcon icon={faDiceFive} />;
      case 6:
        return <FontAwesomeIcon icon={faDiceSix} />;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>YAHTZEE</h1>
      <div data-testid="dices" className={styles.dices}>
        {dices.map((i, index) => {
          return (
            <div
              data-testid="die"
              key={index}
              className={
                dicesFreeze[index]
                  ? `${styles.die} ${styles.disabled}`
                  : `${styles.die} ${styles.enabled}`
              }
              onClick={() => {
                dispatch(freezeDie(index));
              }}
            >
              {handleDie(i)}
              <p>{i}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.buttons}>
        <div data-testid="remaining" className={styles.remaining}>
          <p>{remainingMoves} MOVIMENTO(S) RESTANTE(S)</p>
        </div>
        {remainingMoves === 0 ? (
          <button
            data-testid="newRound"
            type="button"
            className={
              newRound
                ? styles.newRound
                : `${styles.newRound} ${styles.roundDisabled}`
            }
          >
            JOGAR
          </button>
        ) : (
          <button
            data-testid="rollDices"
            className={styles.roll}
            onClick={() => {
              dispatch(rollDices());
            }}
            type="button"
          >
            ROLL
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
