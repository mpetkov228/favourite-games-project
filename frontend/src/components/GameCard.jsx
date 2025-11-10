import '../css/GameCard.css';

function GameCard({ game }) {

    function onFavourite() {
        alert('clicked');
    }

    return (
        <div className='game-card'>
            <div className='game-cover'>
                <img src={game.thumbnail} alt={game.title} />
                <div className='game-overlay'>
                    <button className='add-to-library-btn' onClick={onFavourite}>❤︎</button>
                </div>
            </div>
            <div className='game-info'>
                <h3>{game.title}</h3>
                <p>{game.release_date.split('-')[0]}</p>
            </div>
        </div>
    );
}

export default GameCard;