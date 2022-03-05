
import '../css/App.css';
import {useEffect} from "react";
import BoardGames from "./BoardGames";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddGame from "./AddGame";
import Game from "./Game";

function App() {
    useEffect(() => {
        fetch('http://localhost:3000/BoardGames')
            .then(res => res.json())
            .then(data => {console.log("Jakub "); console.log(data)});
    })

    return  (
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



                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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

// ReactDOM.render(<App/>, document.getElementById("App"))
export default App;
