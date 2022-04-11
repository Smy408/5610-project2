import React, { useContext } from "react";
import { AppContext } from "../App";
import Letter from "./Letter";

function Board(props) {
  return (
    <div className="board">
      {" "}
      {
          Array.from({length: 7 - props.currentDifficulty})
              .map((_, index) => (
                <div className="row">
                {
                  Array.from({length: props.currentDifficulty + 5})
                      .map((_, indexInner) => (
                        <Letter letterPos={indexInner} attemptVal={index} />
                      )
                  )
              }
                </div>
              )
          )
      }
    </div>
  );
}

export default Board;
