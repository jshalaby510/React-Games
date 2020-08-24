import React, {useState} from 'react';
import RandomColor from 'randomcolor';

const Box = ({ sendColor }) => {
    const [color, setColor] = useState("black");

    const handleClick = () => {
        const randColor = RandomColor();
        setColor(randColor);
        sendColor(randColor);
    }

    return (
        <button
            style={{backgroundColor: color}}
            onClick={() => handleClick()}
            onMouseOver={() => sendColor(color)}
            onMouseLeave={() => sendColor(null)}
        />
    )
}

export default Box;
