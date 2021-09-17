import React from 'react'

export const Button = ({ onAdd }) => {
    return (
        <div>
            <button onClick={onAdd}>Draw a Card</button>
        </div>
    )
}
