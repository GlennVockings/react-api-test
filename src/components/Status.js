import React from 'react'

export const Status = ({ deck, remain }) => {
    return (
        <div className="status">
            <h4>Deck ID: {deck.deck_id}</h4>
            <h4>Remaining Cards: {remain}</h4>
        </div>
    )
}

Status.defaultProps = {
    remain: 52
}
