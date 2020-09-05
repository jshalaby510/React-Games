import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1>React Games</h1>

            <Link to={"/ColorGuesser"}>
                <h3>Color Guesser</h3>
            </Link>

            <Link to={"/RandomColorPicker"}>
                <h3>Random Color Picker</h3>
            </Link>

            <Link to={"/TicTacToe"}>
                <h3>TicTacToe</h3>
            </Link>

            <Link to={"/MemoryMatch"}>
                <h3>Memory Match</h3>
            </Link>

        </>
    );
}

export default Home;