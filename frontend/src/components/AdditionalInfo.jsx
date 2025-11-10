function AdditionalInfo({ game }) {
    return (
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
                <div>Genre</div>
                <div>{game.genre}</div>
            </div>
            <div className="info-item">
                <div>Developer</div>
                <div>{game.developer}</div>
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
    );
}

export default AdditionalInfo;