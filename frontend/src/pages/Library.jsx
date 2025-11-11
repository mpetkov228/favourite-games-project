import '../css/Library.css';
import '../css/Home.css';
import { useLibraryContext } from '../contexts/LibraryContext';
import GameCard from '../components/GameCard';

function Library() {
    const { library } = useLibraryContext();

    console.log(library);

    return (
        <>
            {library.length != 0 ?
                <div>
                    <div className='games-grid'>
                        {library.map(
                            game => <GameCard game={game} key={game.id} />
                        )}
                    </div>
                </div>
                :
                <div className="library-empty">
                    <h2>No Games in Library Yet</h2>
                    <p>Start adding games and they will appear here.</p>
                </div>
            }
        </>
    );
}

export default Library;