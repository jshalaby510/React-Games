import React from 'react';

const Box = ({ id, color, handleClick }) => {
    return (
        <button
            style={{backgroundColor: color}}
            onClick={() => handleClick(id)}
        />
    )
}

export default Box;
