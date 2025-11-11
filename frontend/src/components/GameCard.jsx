import '../css/GameCard.css';
import { useLibraryContext } from '../contexts/LibraryContext';
import { Link } from 'react-router-dom';

function GameCard({ game }) {
    const { isInLibrary, addToLibrary } = useLibraryContext();

    const inLibrary = isInLibrary(game.id);

    function onAddClick(e) {
        e.stopPropagation();
        e.preventDefault();
        addToLibrary(game);
    }

    return (
        <div className='game-card'>
            <Link to={`/game/${game.id}`}>
                <div className='game-cover'>
                    <img src={game.thumbnail} alt={game.title} />
                    <div className='game-overlay'>
                        <button className={`add-to-library-btn ${inLibrary ? 'inactive' : ''}`} onClick={onAddClick}>
                            {inLibrary ? 'In Library' : 'Add to Library'}
                        </button>
                    </div>
                </div>
                <div className='game-info'>
                    <h3>{game.title}</h3>
                    <p>{game.release_date.split('-')[0]}</p>
                </div>
            </Link>
        </div>
    );
}

export default GameCard;