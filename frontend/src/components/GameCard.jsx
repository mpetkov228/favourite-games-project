function GameCard({ game }) {

    function onFavourite() {
        alert('clicked');
    }

    return (
        <div>
            <div>
                <img src={game.url} alt={game.title} />
                <div>
                    <button onClick={onFavourite}>❤︎</button>
                </div>
            </div>
            <div>
                <h3>{game.title}</h3>
                <p>{game.releaseYear}</p>
            </div>
        </div>
    );
}

export default GameCard;