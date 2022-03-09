import '../css/App.css';
import React, {useEffect} from "react";
import BoardGames from "./BoardGames";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AddGame from "./AddGame";
import GameSearchForm from "./GameSearchForm";

function App() {
    return (
        <Router>
            <div className="main">
                <h1>PLANSZOWY SEGREGATOR</h1>
                <ul>
                    <li id="lista">
                        <Link to="/">Home</Link>
                    </li>
                    <li id="lista">
                        <Link to="/colection">Kolekcja</Link>
                    </li>
                    <li id="lista">
                        <Link to="/add">Dodaj</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/">
                    </Route>
                    <Route path="/colection">
                        <BoardGames/>
                    </Route>
                    <Route path="/add">
                        <AddGame/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
