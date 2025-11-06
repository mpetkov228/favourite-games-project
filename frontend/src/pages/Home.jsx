import { useState } from 'react';
import GameCard from '../components/GameCard';
import '../css/Home.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const games = [
        { url: '', title: 'Far Cry', releaseYear: 2004 },
        { url: '', title: 'Super Mario', releaseYear: 1985 },
        { url: '', title: 'Grand Theft Auto III', releaseYear: 2001 },
        { url: '', title: 'Grand Theft Auto III', releaseYear: 2001 },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery('');
    }

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input 
                    type="text"
                    placeholder="Search games..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className='games-grid'>
                {games.map(
                    game => game.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <GameCard game={game} />
                )}
            </div>
        </div>
    );
}

export default Home;