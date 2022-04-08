import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "Congratulations!  Would you like to try again?"
          : <h3>You Failed to Guess the Word. Correct Word: {correctWord}</h3>}
      </h3>
      
    </div>
  );
}

export default GameOver;
