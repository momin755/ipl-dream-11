import React from 'react';

const NewsLetter = () => {
    return (
        <div className='container relative  top-68 mx-auto my-32 rounded-2xl'>
            <div className="py-32 bg-[url('https://i.ibb.co.com/4wMvZdM9/bg-shadow.png')] z-30 bg-blue-300
            bg-no-repeat bg-cover rounded-2xl bg-center p-20 text-center space-y-4 ">
            <h1 className='text-3xl font-bold'>Subscribe to our Newsletter</h1>
            <p className='text-[#131313B3] font-medium text-xl'>Get the latest updates and news right in your inbox!</p>
            <div>
                <input className='px-8 bg-white shadow-md border py-2 rounded-2xl border-amber-300' type="text" placeholder='Enter your email' />
                <button className='btn rounded-xl ms-5 text-[#131313] font-bold px-8   py-5 bg-gradient-to-t from-yellow-500 to-fuchsia-600' >Subscribe</button>
            </div>
        </div>
        </div>
    );
};

export default NewsLetter;