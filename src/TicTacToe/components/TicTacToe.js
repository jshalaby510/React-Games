import React, {useState} from 'react';
import {calculateWinner} from '../helper'
import Board from "./Board";

const TicTacToe = () => {
  //hook for the history. initialize it with an array of 9 null values
  const [history, setHistory] = useState([Array(9).fill(null)]);
  //hook for the step number
  const [stepNumber, setStepNumber] = useState(0);
  //hook for when X goes next. initialized as true since X always goes first
  const [xIsNext, setXIsNext] = useState(true);
  //if there's a winner it returns the winner. pass through the history of the most recent step
  const winner = calculateWinner(history[stepNumber]);
  //for which turn it is. if its X's turn, return X, otherwise return O
  const xo = xIsNext ? "X" : "O";

  //function to handle when a box gets clicked and update states. takes in the key of the box which is passed from
  //Box to Board to here
  const handleClick = (i) => {
    //gets the history from the first move to the most recent move +1
    const historyPoint = history.slice(0, stepNumber + 1);
    //current spot
    const current = historyPoint[stepNumber];
    //assigns every box up to the current 1 to rerender
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
        <h1>Tic Tac Toe</h1>
        <Board boxes={history[stepNumber]} onClick={handleClick}/>
        <div className={"info-wrapper"}>
          <div>
            <h3>History</h3>
            {renderMoves()}
          </div>
          <h3>{winner ? "Winner: " + winner : "Next Player: " + xo}</h3>
        </div>
        </>
  );
};

export default TicTacToe;