import React from 'react';
import { AiFillDollarCircle } from "react-icons/ai";

const Header = ({coin}) => {
    return (
        <>
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="flex-1">
    <a className="btn bg-transparent hover:bg-transparent border-0 text-xl"><img className='w-16' src="https://i.ibb.co.com/RkgF2fYJ/logo.png" alt="" /></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-5">
      <li><a className='text-base text-[#131313B3]'>Home</a></li>
      <li><a className='text-base text-[#131313B3]'>Fixture</a></li>
      <li><a className='text-base text-[#131313B3]'>Teams</a></li>
      <li><a className='text-base text-[#131313B3]'>Schedules</a></li>
    </ul>
    <button className='btn font-semibold text-xl ms-5  items-center'>{coin} Coin <span className='text-yellow-500 text-3xl'><AiFillDollarCircle /></span></button>
  </div>
</div>
        </>
    );
};

export default Header;