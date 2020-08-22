import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from "./TicTacToe/components/TicTacToe";
import './TicTacToe/CSS/TicTacToe.css'

ReactDOM.render(
  <React.StrictMode>
    <TicTacToe/>
  </React.StrictMode>,
  document.getElementById('root')
);