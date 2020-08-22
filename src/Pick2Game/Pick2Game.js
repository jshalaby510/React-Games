import React from 'react';
import './CSS/Pick2Game.css';
import Box from "./Components/Box";

function Pick2Game() {
    let Boxes = [9];
    for (let i=0; i<9; i++){
        Boxes.push(<Box key={i}/>);
    }
  return (
    <div>
        {Boxes}
    </div>
  );
}

export default Pick2Game;