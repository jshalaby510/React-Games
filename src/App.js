import React from 'react';
import Home from "./Home/Home";
import ColorGuesser from "./ColorGuesser/ColorGuesser";
import RandomColorPicker from "./RandomColorPicker/Components/RandomColorPicker";
import TicTacToe from "./TicTacToe/components/TicTacToe";
import MemoryMatch from "./MemoryMatch/MemoryMatch";
import './Styles.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

    return (
        <>
            <Router>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/ColorGuesser"} component={ColorGuesser}/>
                    <Route path={"/RandomColorPicker"} component={RandomColorPicker}/>
                    <Route path={"/TicTacToe"} component={TicTacToe}/>
                    <Route path={"/MemoryMatch"} component={MemoryMatch}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;