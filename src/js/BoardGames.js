import React, {useEffect, useState} from 'react';
import DATA_BASE from "./DataBaseAddress";
import Game from "./Game";
import GameSearchForm from "./GameSearchForm";

function BoardGames() {
    const [game, setGame] = useState([]);
    const [filtered, setFiltered] = useState([])

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
                setFiltered(data);
            })
            .catch(error => console.log(error));
    }

    useEffect(getGames, []);

    const filterGames = (searchTitle) => {
        const filteredData = game.filter(theGame => {
            const gameTitleInUpperCase = theGame.tytul.toUpperCase();
            const searchPhraseInUpperCase = searchTitle.toUpperCase();
            const includesResult = gameTitleInUpperCase.includes(searchPhraseInUpperCase);
            if (includesResult) {
                console.log(includesResult + " " + theGame.tytul);
            }
            return includesResult;
        });
        setFiltered(filteredData);
    }

    return (
        <div>
            <GameSearchForm filterGames={filterGames}/>
            <ul id="colection">
                {filtered.length === 0
                    ? <p>LOADING...</p>
                    : filtered.map(gameData => (<Game game={gameData} key={gameData.id} getGames={getGames}/>))}}
            </ul>
        </div>
    );
}

export default BoardGames;