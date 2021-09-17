import React from 'react'

export const Status = ({ deck }) => {
    return (
        <div>
            <h2>Is the Deck shuffled <span>{deck.shuffled ? 'Yes' : 'No' }</span></h2>
            <h2>Deck ID: {deck.deck_id}</h2>
            <h2>Remaining Cards: {deck.remaining}</h2>
        </div>
    )
}
