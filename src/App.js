import React from 'react';
import Home from "./Home";
import ColorGuesser from "./ColorGuesser/Components/ColorGuesser";
import RandomColorPicker from "./RandomColorPicker/Components/RandomColorPicker";
import TicTacToe from "./TicTacToe/components/TicTacToe";
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
                </Switch>
            </Router>
        </>
    );
}

export default App;