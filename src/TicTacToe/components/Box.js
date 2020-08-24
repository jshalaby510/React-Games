import React from "react";

//each box on the board. value is for X or O, onClick for the id of the box it's handling. onClick gets passed down from
//handleClick in TicTacToe to Board, which is passed from Board to Box
const Box = ({value, onClick}) => {
    //if there's a value, set the CSS style to boxes + the value, otherwise just boxes
    const style = value ? `boxes ${value}` : `boxes`;

    return (
        //each box will be a button displaying a value inside (X, O, or null)
        <button className={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Box;