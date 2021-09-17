import React from 'react'

export const Dealer = ({ card }) => {
    return (
        <div>
            <p>Card Name: {card.value} of {card.suit}</p>
        </div>
    )
}
