import { useDispatch, useSelector } from "react-redux";
import { tryToScore } from "../../store/slices/optionsSlice";
import { RootState } from "../../store/store";

import styles from "../../styles/Options.module.scss";

function Options() {
  const dispatch = useDispatch();
  const options = useSelector((state: RootState) => state.options.types);

  return (
    <div className={styles.container}>
      {options.map((i, index) => {
        return (
          <div
            data-testid={i.class}
            className={
              i.score > 0
                ? `${styles.option} ${styles.disabled}`
                : styles.option
            }
            onClick={() => {
              dispatch(tryToScore());
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
