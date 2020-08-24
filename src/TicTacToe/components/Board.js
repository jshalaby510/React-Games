import React from "react";
import Box from "./Box";

//Sets up a board full of 9 boxes. boxes are the boxes and onClick is the handleClick function from TicTacToe.
//handleClick then gets passed to Box
const Board = ({boxes, onClick}) => (
    //for each box in boxes, it will assign X, O, or null for the value to pass to the Box component. It will set the
    //index i as the key, and use the key with the handleClick function
    <div className={"board"}>
        { boxes.map((box, i) => (
            <Box key={i} value={box} onClick={() => onClick(i)}/>
        )) }
    </div>
);

export default Board;