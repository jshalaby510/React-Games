import React from "react";
import Box from "./Box";

export default function Board ({ boxes, handleClick }) {

    return (
        <div className={"ColorBoard"}>
            {
                boxes.map(box => <Box
                    key={box.id}
                    id={box.id}
                    color={box.color}
                    handleClick={handleClick}
                />)
            }
        </div>
    )
}