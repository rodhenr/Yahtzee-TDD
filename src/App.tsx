import Header from "./components/Header/Header";
import Options from "./components/Options/Options";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Options />
    </div>
  );
}

export default App;
