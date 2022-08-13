import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

import styles from "../../styles/Score.module.scss";

function Score() {
  const score = useSelector((state: RootState) => state.options.totalScore);

  return (
    <div className={styles.container}>
      <p>Pontos</p>
      <p data-testid="totalScore">{score}</p>
    </div>
  );
}

export default Score;
