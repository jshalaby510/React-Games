import React, { useState } from 'react';
import Board from "./Components/Board";
import NavBar from "../NavBar";
import RandomColor from 'randomcolor';

function initialize () {
    const boxes = [];
    for (let i=0; i<9; i++){
        boxes.push({
            id: i,
            color: RandomColor()
        });
    }
    return boxes;
}

const randomNumber = Math.floor(Math.random() * 9);

function ColorGuesser() {
    const [boxes, setBoxes] = useState(initialize());
    setBoxes(initialize());
    const [banner, setBanner] = useState(`Which color is: ${boxes[randomNumber].color}?`);

    const handleClick = (i) => {
        if(i === randomNumber) setBanner("You win!")
    }

    return (
        <>
            <NavBar/>
            <div className={"gameBody"}>
                <h1 className={"rainbow-text"}>{banner}</h1>
                <Board
                    boxes={boxes}
                    handleClick={handleClick}
                />
            </div>
        </>
  );

}

export default ColorGuesser;