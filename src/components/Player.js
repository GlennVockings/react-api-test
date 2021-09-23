import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className="person-container">
                <h2>Player</h2>
                <div className="cards">
                    { this.props.player ? this.props.player.map((card,index) => {
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
                <p>Total Value:</p>
                </div>
            </div>
        )
    }
}

