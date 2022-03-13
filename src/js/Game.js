import React, {useState} from 'react';
import DATA_BASE from "./DataBaseAddress";

function Game({getGames, game}) {
    const [title, setTitle] = useState(game.tytul);
    const [iloscGier, setIloscGier] = useState(game.iloscGier);
    const [ocena, setOcena] = useState(game.ocena);
    const [notatki, setNotatki] = useState(game.notatki);
    const [iloscWygranych, setIloscWygranych] = useState(game.iloscWygranych)
    const [isEditMode, setIsEditMode] = useState(false);

    const removeGame = (id) => {
        fetch(`${DATA_BASE}/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                getGames();     //refresh data
            })
            .catch(error => console.log(error))
    }

    const modifyGame = (id) => {
        fetch(`${DATA_BASE}/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                tytul: title,
                iloscGier,
                ocena,
                notatki,
                iloscWygranych
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                getGames();
            })
            .catch(error => console.log(error))
    }

    if (isEditMode) {
        return <form>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <input type="text" value={iloscGier} onChange={e => setIloscGier(e.target.value)}/>
            <input type="text" value={ocena} onChange={e => setOcena(e.target.value)}/>
            <input type="text" value={notatki} onChange={e => setNotatki(e.target.value)}/>
            <input type="text" value={iloscWygranych} onChange={e => setIloscWygranych(e.target.value)}/>
            <button onClick={() => {
                setIsEditMode(false);
                modifyGame(game.id);
            }}>Save
            </button>
        </form>
    }

    return <li>
        <h2>{game.tytul}</h2>
        <p>Ilość gier: {game.iloscGier}</p>
        <p>Ocena: {game.ocena}</p>
        <p>Notatki: {game.notatki}</p>
        <p>Ilość wygranych: {game.iloscWygranych}</p>
        <button onClick={() => removeGame(game.id)}>Usun</button>
        <button onClick={() => setIsEditMode(p => !p)}>Zmien</button>
    </li>
}

export default Game;