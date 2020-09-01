import React, {useState} from 'react';
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

        <div className={"ColorBoard"}>
            {boxes}
            <h3>Your color is:</h3>
            <h2 className={"hi"} style={{ color: color }}>{color}</h2>
        </div>
    </>
  );
}

export default RandomColorPicker;