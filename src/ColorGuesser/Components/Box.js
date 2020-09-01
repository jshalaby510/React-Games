import React, {useState} from 'react';

const Box = ({ myKey, color, clicked }) => {
    const [myColor, setMyColor] = useState(color);
    return (
        <button
            style={{backgroundColor: myColor}}
            onClick={() => clicked(myKey)
            }
        />
    )
}

export default Box;
