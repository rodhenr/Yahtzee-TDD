import Header from "./components/Header/Header";
import Options from "./components/Options/Options";
import Score from "./components/Score/Score";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.game}>
        <Header />
        <Options />
        <Score />
      </div>
    </div>
  );
}

export default App;
