import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import ColorGuesserPic from './Pics/ColorGuesserPic.png';
import RandomColorPickerPic from './Pics/RandomColorPickerPic.png';
import TicTacToePic from './Pics/TicTacToePic.png';


function Home() {
    return (
        <>
            <NavBar/>
            <div>
                <h1 style={{color: "white"}}>React Games</h1>

                <Link to={"/ColorGuesser"}>
                    <img src={ColorGuesserPic} alt="Color Picker Pic" className={"homePics"}/>
                    <h3>Color Guesser</h3>
                </Link>

                <Link to={"/RandomColorPicker"}>
                    <img src={RandomColorPickerPic} alt="Random Color Picker Pic" className={"homePics"}/>
                    <h3>Random Color Picker</h3>
                </Link>

                <Link to={"/TicTacToe"}>
                    <img src={TicTacToePic} alt="Tic Tac Toe Pic" className={"homePics"}/>

                    <h3>TicTacToe</h3>
                </Link>
            </div>
        </>
    );
}

export default Home;