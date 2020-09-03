import React, {useState} from 'react';
import Box from "./Box";
import NavBar from "../../NavBar";

function RandomColorPicker() {
    const [color, setColor] = useState(null);

    const boxes = [];
    for (let i =0; i<9; i++){
        boxes.push(<Box key={i} sendColor={c => setColor(c)}/>);
    }

  return (
      <>
          <NavBar/>
        <div className={"gameBody"}>
            <h1 className={"rainbow-text"}>Pick a Color</h1>

            <div className={"ColorBoard"}>
                {boxes}
                <h2 className={"hi"}>Your color is:</h2>
                <h2 className={"hi"} style={{ color: color }}>{color}</h2>
            </div>
        </div>
      </>
  );
}

export default RandomColorPicker;