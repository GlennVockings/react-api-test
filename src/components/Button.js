import React from 'react'

export const Button = ({ deal, player, shuffle}) => {
    return (
        <div>
            <button onClick={deal}>Draw a card to Dealer</button>
            <button onClick={player}>Draw a card to the player</button>
            <button onClick={shuffle}>Reshufle the Deck</button>
        </div>
    )
}