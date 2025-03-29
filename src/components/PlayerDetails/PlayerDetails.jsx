import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
const PlayerDetails = ({player, handleRemove}) => {
    const {name, image, price, role} = player
    return (
        <div className='shadow-2xlw border p-4 my-4 rounded-2xl border-amber-200'>
            <div className='md: flex justify-between items-center'>
            <div className='flex gap-6 items-center'>
                <img className='md:w-60 rounded-xl' src={image} alt="" />
                <div>
                    <p className='text-xl font-semibold'>{name}</p>
                    <p>{role}</p>
                </div>
            </div>
            <h1 className='text-2xl font-semibold text-red-500'>${price}</h1>
            <button className='btn text-4xl py-7 font-semibold text-red-500' onClick={()=>handleRemove(player.id)}><RiDeleteBin6Line></RiDeleteBin6Line></button>
            
        </div>
        </div>
    );
};

export default PlayerDetails;