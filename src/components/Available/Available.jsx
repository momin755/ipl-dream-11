import React, { use } from 'react';
import Player from '../Player/Player';

const Available = ({playersPromise, selectedPlayers}) => {
    const availablePlayers = use(playersPromise)
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-7 my-10'>
            {
                availablePlayers.map(player=><Player
                    selectedPlayers={selectedPlayers}
                    key={player.id} player={player}
                   ></Player>)
            }
        </div>
    );
};

export default Available;