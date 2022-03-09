import React, {useState} from 'react';

function GameSearchForm({filterGames}) {
    const [searchTitle, setSearchTitle] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        filterGames(searchTitle);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchTitle} onChange={e => setSearchTitle(e.target.value)}/>
            <button className="search">Szukaj</button>
        </form>
    );
}

export default GameSearchForm;