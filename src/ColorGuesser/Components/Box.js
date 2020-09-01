import React from 'react';

const Box = ({ myKey, color, clicked }) => {
    return (
        <button
            style={{backgroundColor: color}}
            onClick={() => clicked(myKey)
            }
        />
    )
}

export default Box;
