
const Player = ({ player }) => {
    return (
        <div className="person-container">
            <h2>Player</h2>
            <div className="cards">
                { player ? player.map((card,index) => {
                    return (
                        <div className="card" key={index}>
                            <p>Card Name: {card.value}</p>
                            <p>Card Suit: {card.suit}</p>
                            <img src={card.image} alt={card.code} />
                        </div>
                    )
                }): ""}
            </div>
            <div>
                <p>Player total:</p>
            </div>
        </div>
    ) 
}

export default Player

