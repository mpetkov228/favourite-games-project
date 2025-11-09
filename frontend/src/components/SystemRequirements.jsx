function SystemRequirements({ game }) {
    return (
        <div>
            <h2>Minimum System Requirements ({game.platform})</h2>
            {game?.minimum_system_requirements ?
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
                : <div>
                    <p>{game.title} is a {game.platform} game and should run smoothly on your system.</p>  
                  </div>}
        </div>
    );
}

export default SystemRequirements;