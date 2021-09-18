import React from 'react'

export const Dealer = ({ card }) => {


    return (
        <>
            {card ? card.cards.map((card, index)=> {
                return (
                    <div key={index}>
                        <p>Card Value: {card.value}</p>
                        <p>Card Suit: {card.suit}</p>
                        <img src={card.image} alt={card.value} />
                    </div>
                )
            }) : ""}
        </> 
    )
}
