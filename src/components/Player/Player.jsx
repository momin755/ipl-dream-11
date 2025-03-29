import React from "react";
import { FaUserAlt, FaFlag } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
const Player = ({ player,selectedPlayers  }) => {
  const { name, image, price, country, rating, role } = player;
  return (
    <div>
      <div className="card  shadow-xl">
        <img
          className="w-[376px] h-[240px] object-cover md:w-full  rounded-2xl"
          src={image}
          alt=""
        />
        <div className="p-3 space-y-6">
        <div>
          <h2 className="text-2xl flex items-center gap-5 font-semibold">
            <span>
              <FaUserAlt />
            </span>
            {name}
          </h2>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-xl flex gap-2 items-center text-[#131313]"><span><FaFlag /></span>{country}</h3>

          <h3 className="text-xl text-[#131313]">{role}</h3>
        </div>
        <div>
            <hr className="text-[#1313131A]"/>
        </div>
        <h2 className="text-2xl font-bold">Rating</h2>

        <div className="flex justify-between items-center"> 
            <h2 className="text-2xl font-bold">{rating.batting_style ? rating.batting_style : "N/A" }</h2>
            <h2 className="text-xl font-semibold">{rating.bowling_style ? rating.bowling_style : " N/A"}</h2>
        </div>
        <div className="flex items-center justify-between">
            <h2 className="text-[#131313] font-semibold text-xl">Price: {price}</h2>
            <button 
            onClick={()=>selectedPlayers(player)}
            className="text-[#131313] font-semibold text-2xl btn p-7 hover:bg-yellow-300">Choose Player</button>
            <ToastContainer
                  ></ToastContainer>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
