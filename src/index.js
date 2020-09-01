import React from 'react';
import ReactDOM from 'react-dom';

import ColorGuesser from "./ColorGuesser/Components/ColorGuesser";
import './ColorGuesser/CSS/ColorGuesser.css'

ReactDOM.render(
  <React.StrictMode>
    <ColorGuesser/>
  </React.StrictMode>,
  document.getElementById('root')
);