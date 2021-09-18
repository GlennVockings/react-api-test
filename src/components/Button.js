import React from 'react'

export const Button = ({ draw, shuffle }) => {
    return (
        <div>
            <button onClick={draw}>Draw a Card</button>
            <button onClick={shuffle}>Reshufle the Deck</button>
        </div>
    )
}
