import React, {useState} from 'react';
import RandomColor from 'randomcolor';

function Box() {
    const [color, setColor] = useState(RandomColor);
    return (
        <div className="Box" style={{backgroundColor: color}} onClick={() => setColor(null)}/>
    );
}

export default Box;
