import React from 'react';
import PlayerDetails from '../PlayerDetails/PlayerDetails';

const Selected = ({players,handleRemove, handleAvailable}) => {
    return (
        <div className='my-10'>
            {
                players.map((player, idx)=><PlayerDetails
                player={player}
                handleRemove={handleRemove}
                key={idx}
                ></PlayerDetails>)
            }

            <div>
                <button
               onClick={handleAvailable}
                className='btn bg-yellow-300 p-7 font-black text-xl text-base-content rounded-xl hover:bg-base-300'>Add More Player</button>
            </div>
        </div>
    );
};

export default Selected;