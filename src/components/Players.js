import React from 'react';
import Player from './Player';

export const Players = ({ player}) => {
    return (
        <div>
            <Player number={1} player={player} />
        </div>
    )
}
