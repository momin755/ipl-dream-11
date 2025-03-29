import React, { Suspense, useState } from 'react';
import Available from '../Available/Available';
import Selected from '../Selected/Selected';
const playersPromise = fetch('players.json').then(res=>res.json())
const MainPage = ({selectedPlayers, count, players, handleRemove}) => {
    const [show, setShow] = useState(true)
    const handleAvailable=()=>{
        setShow(true)
    }
    const handleSelected=()=>{
        setShow(false)
    }
    return (
        <>
        <div className='flex justify-between items-center my-8 container mx-auto'> 
            <div>
                <h2 className="text-3xl font-bold">{show ? 'Available Players' : `Selected Players (${count}/6)`}</h2>
            </div>
            <div>
                <button onClick={handleAvailable} className={`${show && 'bg-yellow-500 text-white' } bg-green btn text-2xl font-semibold  p-6`}>Available</button>
                
                <button onClick={handleSelected} className={`${show || 'bg-yellow-500 text-white'} bg-green btn text-2xl font-semibold  p-6`}>Selected ({count})</button>
                <div className='block'>
                
                </div>
            </div>
        </div>
        <div className='container mx-auto'>
        {
                    show &&  <Suspense fallback={<h1 className='text-5xl text-red-400'>Players are loading.....</h1>}>
                        <Available
                        selectedPlayers={selectedPlayers}
                        playersPromise={playersPromise}
                        ></Available> 
                    </Suspense>
                }
                {
                    show || <Selected
                    handleRemove={handleRemove}
                     players ={players}
                     handleAvailable={handleAvailable}
                    ></Selected>
                }
        </div>

        </>
    );
};

export default MainPage;