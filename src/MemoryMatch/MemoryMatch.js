import React, { useState, useEffect } from "react";
import Board from './Components/Board'
import Deck from './Components/Deck';
import NavBar from "../NavBar";

export default function MemoryMatch () {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [incorrectFlipsMade, setIncorrectFlipsMade] = useState(0);
    const [correctFlipsMade, setCorrectFlipsMade] = useState(0);
    const [dimension, setDimension] = useState(400);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [banner, setBanner] = useState("Match Game");

    const resetCards = () => {
        setFlipped([]);
        setDisabled(false);
    }

    const resetEverything = () => {
        setFlipped([]);
        setDisabled(false);
        setIncorrectFlipsMade(0);
        setCorrectFlipsMade(0);
        setSolved([]);
        setDisabled(false);
        setBanner("Match Game");
    }

    const sameCardClicked = id => flipped.includes(id);

    const isMatch = id => {
        const clickedCard = cards.find(card => card.id === id);
        const flippedCard = cards.find(card => flipped[0] === card.id);
        return flippedCard.type === clickedCard.type;
    }

    const isWinner = () => {
        if (cards.length-2 === solved.length) setBanner("Winner!");
    }

    const handleClick = id => {
        setDisabled(true);
        if (flipped.length === 0) {
            setFlipped([id]);
            setDisabled(false);
        } else {
            if (sameCardClicked(id)) {
                setIncorrectFlipsMade(prevFlips => prevFlips+1);
                resetCards();
                return;
            }
            setFlipped([flipped[0], id]);
            if (isMatch(id)) {
                setCorrectFlipsMade(prevFlips => prevFlips+1);
                setSolved([...solved, flipped[0], id]);
                isWinner();
                resetCards();
            } else {
                setIncorrectFlipsMade(prevFlips => prevFlips+1);
                setTimeout(resetCards, 1000);
            }
        }
    }

    const resizeBoard = () => {
        setDimension(Math.min(
            document.documentElement.clientWidth,
            document.documentElement.clientHeight
        ))
    }

    const preloadImages = () => {
        cards.map(card => new Image().src = `/img/${card.type}.png`);
    }

    useEffect(() => {
        resizeBoard();
        setCards(Deck());
    }, []);

    useEffect(() => {
        preloadImages();
    }, [cards])

    useEffect(() => {
        const resizeListener = window.addEventListener('resize', resizeBoard);
        return () => window.removeEventListener('resize', resizeListener);
    })

    return (
        <>
            <NavBar/>

            <h1 style={{color: "red"}}>{banner}</h1>
            <div style={{padding: "2rem"}}>
                <Board
                    dimension={dimension}
                    cards={cards}
                    flipped={flipped}
                    handleClick={handleClick}
                    disabled={disabled}
                    solved={solved}
                />
            </div>

            <h3 style={{color: "hotPink"}}>
                Correct flips made: {correctFlipsMade}
                <button className={"resetButton"} onClick={() => resetEverything()}>
                    Reset
                </button>
            </h3>
            <h3 style={{color: "#2AF6B3"}}>
                Incorrect flips made: {incorrectFlipsMade}
            </h3>


        </>
    )
}