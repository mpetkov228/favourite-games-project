import GameCard from '../components/GameCard'

function Home({ games }) {
    return (
        <div>
            {games.map(game => <GameCard game={game} />)}
        </div>
    );
}

export default Home;