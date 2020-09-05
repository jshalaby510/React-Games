import React from "react";
import PropTypes from 'prop-types';
import Card from "./Card";

export default function Board ({ solved, disabled, dimension, cards, flipped, handleClick }) {

    return (
        <div className={"board"}>
            {
                cards.map(card => <Card
                    key={card.id}
                    type={card.type}
                    id={card.id}
                    width={dimension / 4.5}
                    height={dimension / 4.5}
                    flipped={flipped.includes(card.id)}
                    solved={solved.includes(card.id)}
                    handleClick={handleClick}
                    disabled={disabled || solved.includes(card.id)}
                />)
            }
        </div>
    )
}

Card.propTypes = {
    disabled: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
}