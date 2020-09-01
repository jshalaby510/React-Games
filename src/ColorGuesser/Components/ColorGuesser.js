import React, {useState, useEffect} from 'react';
import Box from "./Box";
import RandomColor from 'randomcolor';

const randomNumber = Math.floor(Math.random() * 9);

let colors = [];
for (let i = 0; i<9; i++){
    colors[i] = RandomColor();
}

function ColorGuesser() {
    const [winner, setWinner] = useState(false);
    const handleClick = (i) => {
        i === randomNumber ?
            setWinner(true) :
            setWinner(false);
    }

    const displayWin = () =>
        winner ?
            <h1>You win!</h1> :
            <h1 className={"rainbow-text"}>Which color is: {colors[randomNumber]}?</h1>

    const boxes = new Array(9)
        .fill()
        .map((color, idx) =>
            <Box key={idx} myKey={idx} color={colors[idx]} clicked={handleClick}/>
            );

    return (
        <>
            {displayWin()}
            <div className={"board"}>
                {boxes}
            </div>
        </>
  );

}

export default ColorGuesser;