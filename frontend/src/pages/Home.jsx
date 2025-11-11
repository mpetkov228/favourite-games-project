import { useEffect, useState } from 'react';
import GameCard from '../components/GameCard';
import '../css/Home.css';
import { getAll } from '../services/games';
import { Link } from 'react-router-dom';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [games, setGames] = useState([]);

    useEffect(() => {
        const loadGames = async () => {
            try {
                const allGames = await getAll();
                setGames(allGames);
            } catch (err) {
                console.error(err);
            }
        }

        loadGames();
    }, []);

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
                    game => game.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <GameCard game={game} key={game.id} />
                )}
            </div>
        </div>
    );
}

export default Home;