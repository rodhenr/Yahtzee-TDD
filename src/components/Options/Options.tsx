import { useDispatch, useSelector } from "react-redux";
import { startNewRound } from "../../store/slices/headerSlice";
import { tryToScore } from "../../store/slices/optionsSlice";
import { RootState } from "../../store/store";

import styles from "../../styles/Options.module.scss";

function Options() {
  const dispatch = useDispatch();
  const options = useSelector((state: RootState) => state.options.types);
  const dices = useSelector((state: RootState) => state.header.dices);

  const handleScore = (opt: string, scored: boolean) => {
    if (scored) return;

    dispatch(tryToScore({ opt, dices }));
    dispatch(startNewRound());
  };

  return (
    <div className={styles.container}>
      {options.map((i, index) => {
        return (
          <div
            data-testid={i.class}
            className={
              i.scored ? `${styles.option} ${styles.disabled}` : styles.option
            }
            onClick={() => {
              handleScore(i.class, i.scored);
            }}
            key={index}
          >
            <p>{i.name}</p>
            <p>{i.desc}</p>
            <p data-testid={i.scoreClass}>{i.score}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Options;
