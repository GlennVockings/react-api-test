
export const Dealer = ({ dealer }) => {
    return (
        <div className="person-container">
            <h2>Dealer</h2>
            <div className="cards">
                { dealer ? dealer.piles.dealer.cards.map((card, index) => {
                    return ( 
                        <div className="card"key={index} >
                            <p> Card Value: {card.value}</p>
                            <p> Card Suit: {card.suit}</p>
                            <img src = {card.image} alt = {card.value}/> 
                        </div>
                        )
                    }) : "" }
            </div>
             <div>
                <p>Total Value: </p>
            </div>
        </div> 
    )
}
