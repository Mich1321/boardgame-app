import React, {useState} from 'react';
import DATA_BASE from "./DataBaseAddress";

function AddGame({fetchGames, idVal}) {
    const [tytul, setTytul] = useState("");
    const [iloscGier, setIloscGier] = useState("");
    const [ocena, setOcena] = useState("");
    const [notatki, setNotatki] = useState("");
    const [iloscWygranych, setIloscWygranych] = useState("");

    const saveGame = (event) => {
        event.preventDefault();
        fetch(DATA_BASE + (idVal ? `/${idVal}` : ''), {
            method: "POST",
            body: JSON.stringify({
                tytul,
                iloscGier,
                ocena,
                notatki,
                iloscWygranych
            }),
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Błąd!");
            })
            .then(data => {
                console.log(data);
                fetchGames();
            })
            .catch(error => console.log(error));
    }
    // const clearForm = () => {
    //     document.getElementById("form-add-game").reset();
    // }

    return (

        <form /*id="form-add-game"*/ onSubmit={saveGame}>
            <input type="text" placeholder="tytul" value={tytul} onChange={e => setTytul(e.target.value)}/>
            <input type="text" placeholder="ilosc gier" value={iloscGier} onChange={e => setIloscGier(e.target.value)}/>
            <input type="text" placeholder="ocena" value={ocena} onChange={e => setOcena(e.target.value)}/>
            <input type="text" placeholder="notatki" value={notatki} onChange={e => setNotatki(e.target.value)}/>
            <input type="text" placeholder="ilość wygranych" value={iloscWygranych} onChange={e => setIloscWygranych(e.target.value)}/>
            <button className="save" type="submit" >Dodaj</button>
        </form>

    );
}

export default AddGame;