import { useState } from "react";

function Header() {
  const [newGame, setNewGame] = useState(false);
  const dices = [1, 2, 3, 4, 5];

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
      {newGame ? <button>PLAY</button> : <button>ROLL</button>}
    </div>
  );
}

export default Header;
