import React, {useState} from 'react';
import '../CSS/RandomColorPicker.css';
import Box from "./Box";

function RandomColorPicker() {
    const [color, setColor] = useState(null);

    const boxes = [];
    for (let i =0; i<9; i++){
        boxes.push(<Box key={i} sendColor={c => setColor(c)}/>);
    }

  return (
    <>
        <h1 className={"rainbow-text"}>Pick a Color</h1>

        <div className={"board"}>
            {boxes}
            <h3>Your color is:</h3>
            <p className={"hi"} style={{ color: color }}>{color}</p>
        </div>
    </>
  );
}

export default RandomColorPicker;