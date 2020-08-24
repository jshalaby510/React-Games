import React from 'react';
import ReactDOM from 'react-dom';

import RandomColorPicker from "./RandomColorPicker/Components/RandomColorPicker";
import './RandomColorPicker/CSS/RandomColorPicker.css'

ReactDOM.render(
  <React.StrictMode>
    <RandomColorPicker/>
  </React.StrictMode>,
  document.getElementById('root')
);
