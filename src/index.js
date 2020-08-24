import React from 'react';
import ReactDOM from 'react-dom';

import TicTacToe from "./TicTacToe/components/TicTacToe";
import './TicTacToe/CSS/TicTacToe.css'

import RandomColorPicker from "./RandomColorPicker/Components/RandomColorPicker";
import './RandomColorPicker/CSS/RandomColorPicker.css'

ReactDOM.render(
  <React.StrictMode>
    <RandomColorPicker/>
  </React.StrictMode>,
  document.getElementById('root')
);