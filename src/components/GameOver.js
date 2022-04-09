import React, { useContext } from "react";
import { AppContext } from "../App";


function GameOver() {
  const {
    gameOver,
    correctWord,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? <h3>Congratulations!  Would you like to try again?</h3>
          : <h3>You Failed to Guess the Word. Correct Word: {correctWord}</h3>}
      </h3>
      <button onClick={() => window.location.reload(false)}>Try Again</button>
      
    </div>
  );
}

export default GameOver;
