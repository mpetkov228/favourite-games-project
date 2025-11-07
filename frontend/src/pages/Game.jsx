import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../services/games";
import "../css/Game.css";

function Game() {
    const [game, setGame] = useState(null);

    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        const loadGame = async (id) => {
            const gameById = await getById(id);
            console.log(gameById);
            setGame(gameById);
        };

        loadGame(id);
    }, []);

    if (!game) {
        return <div>No game</div>
    }


    return (
        <div className="game-page">
            <div className="sidebar">
                <div className="thumbnail">
                    <img src={game.thumbnail} alt={game.title} />
                </div>
                <div className="additional-info">
                    <div className="info-item">
                        <div>Title</div>
                        <div>{game.title}</div>
                    </div>
                    <div className="info-item">
                        <div>Release Date</div>
                        <div>{game.release_date}</div>
                    </div>
                    <div className="info-item">
                        <div>Developer</div>
                        <div>{game.developer}</div>
                    </div>
                    <div className="info-item">
                        <div>Genre</div>
                        <div>{game.genre}</div>
                    </div>
                    <div className="info-item">
                        <div>Publisher</div>
                        <div>{game.publisher}</div>
                    </div>
                    <div className="info-item">
                        <div>Platform</div>
                        <div>{game.platform}</div>
                    </div>
                </div>
            </div>
            <div>
                <h1>{game.title}</h1>
                <p>{game.short_description}</p>
                <h2>Screenshots</h2>
                <div className="screenshots">
                    {game.screenshots.map(screenshot => <img key={screenshot.id} src={screenshot.image} alt={screenshot.id} />)}
                </div>
                <h2>About {game.title}</h2>
                <p>
                    {game.description}
                </p>
                <div>
                    <h2>Minimum System Requirements ({game.platform})</h2>
                    <div className="system-requirements">
                        <div className="left-col">
                            <span>OS <br /></span>
                            <p>{game.minimum_system_requirements.os}</p>
                            <span>Memory <br /></span>
                            <p>{game.minimum_system_requirements.memory}</p>
                            <span>Storage <br /></span>
                            <p>{game.minimum_system_requirements.storage}</p>
                        </div>
                        <div className="right-col">
                            <span>Processor <br /></span>
                            <p>{game.minimum_system_requirements.processor}</p>
                            <span>Graphics <br /></span>
                            <p>{game.minimum_system_requirements.graphics}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;