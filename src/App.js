import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefaults, generateWordSet } from "./Words";
import React, { useState, createContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";
import GameOver from "./components/GameOver";

export const AppContext = createContext(); 

function App(props) {
  const location = useLocation();
  const currentPathName = location.pathname;
  let currentDifficulty = 0;
  if(currentPathName === "/game/medium") {
    currentDifficulty = 1;
  } else if (currentPathName === "/game/hard"){
    currentDifficulty = 2;
  } 
  const [board, setBoard] = useState(boardDefaults[0]);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWordSet(currentDifficulty).then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const onEnter = () => {

    if (currAttempt.letter !== currentDifficulty + 5) return;

    let currWord = "";
    for (let i = 0; i < currentDifficulty + 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      alert("Word not found");
    }
    if (currWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    if (currAttempt.attempt === 6 - currentDifficulty) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4 + currentDifficulty) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          correctWord,
          onSelectLetter,
          onDelete,
          onEnter,
          setDisabledLetters,
          disabledLetters,
          gameOver,
        }}
      >
        <div className="game">
          <Board currentDifficulty={currentDifficulty}/>
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
