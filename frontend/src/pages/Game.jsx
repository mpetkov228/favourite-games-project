import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../services/games";
import "../css/Game.css";
import SystemRequirements from "../components/SystemRequirements";
import AdditionalInfo from "../components/AdditionalInfo";

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
                <AdditionalInfo game={game} />
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
                <SystemRequirements game={game} />
            </div>
        </div>
    );
}

export default Game;