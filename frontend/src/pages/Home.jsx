import GameCard from '../components/GameCard';
import '../css/Home.css';

function Home() {
    const games = [
        { url: '', title: 'Far Cry', releaseYear: 2004 },
        { url: '', title: 'Super Mario', releaseYear: 1985 },
        { url: '', title: 'Grand Theft Auto III', releaseYear: 2001 }
    ];

    return (
        <div className='games-grid'>
            {games.map(game => <GameCard game={game} />)}
        </div>
    );
}

export default Home;