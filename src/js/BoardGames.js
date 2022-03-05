import React, {useEffect, useState} from 'react';
import AddGame from "./AddGame";
import DATA_BASE from "./DataBaseAddress";
import Game from "./Game";

function BoardGames() {
    const [game, setGame] = useState([]);
    const getGames = () => {
        fetch(DATA_BASE)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Błąd!");
            })
            .then((data) => {
                setGame(data);
            })
            .catch(error => console.log(error));
    }
    useEffect(getGames, []);

    return (
        <div>
            {/*<AddGame fetchGames={getGames}/>*/}
            {/*<div className="lab">*/}
            {/*<label htmlFor="checkBtn">Kolekcja </label>*/}
            {/*</div>*/}
            {/*<input type="checkbox" id="checkBtn"/>*/}
            <ul id="colection">
                {game.length === 0
                    ? <p>LOADING...</p>
                    : game.map(game => (
                        <Game game={game} key={game.id} getGames={getGames} />
                        // <li key={game.id}>
                        //     <h2>{game.tytul}</h2>
                        //     <p>Ilość gier: {game.iloscGier}</p>
                        //     <p>Ocena: {game.ocena}</p>
                        //     <p>Notatki: {game.notatki}</p>
                        //     <p>Ilość wygranych: {game.iloscWygranych}</p>
                        //     <button onClick={() => removeGame(game.id)}>Usun</button>
                        //     <button>Zmien</button>
                        // </li>
                    ))}
            </ul>
        </div>

    );
}

export default BoardGames;