import React, {useState} from 'react';
import {calculateWinner} from '../helper'
import Board from "./Board";
import NavBar from "../../NavBar";

const TicTacToe = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xo = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const boxes = [...current];
    if (winner || boxes[i]) return;

    boxes[i] = xo;
    setHistory([...historyPoint, boxes]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const renderMoves = () => history.map((_step, move) => {
    const destination = move ? `Go to move #${move}` : "Go to start";
    return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
    );
  });

  return (
      <>
        <NavBar/>
        <div className={"gameBody"}>
          <h1>Tic Tac Toe</h1>
          <Board boxes={history[stepNumber]} onClick={handleClick}/>
          <div className={"info-wrapper"}>
            <div>
              <h3>History</h3>
              {renderMoves()}
            </div>
            <h3>{winner ? "Winner: " + winner : "Next Player: " + xo}</h3>
          </div>
          </div>
      </>
  );
};

export default TicTacToe;