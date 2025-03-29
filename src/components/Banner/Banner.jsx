import React from 'react';
const Banner = ({handleAddCoin}) => {
    return (
        <>
        <div
  className="hero my-10 rounded-2xl container mx-auto"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/4wMvZdM9/bg-shadow.png)",
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    backgroundSize:'cover',
    backgroundColor:'black'
  }}>
  <div className="hero-overlay py-8 rounded-2xl">
  <div className="hero-content text-neutral-content text-center mx-auto">
    <div className=" space-y-6">
        <img className='w-60 mx-auto' src="https://i.ibb.co.com/Pv1r6Dhr/banner-main.png" alt="" />
      <h1 className="mb-5 text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-5 text-base">
      Beyond Boundaries Beyond Limits
      </p>
      <button
      onClick={handleAddCoin}
      className="btn btn-primary hover:bg-base-100 bg-[#E7FE29] font-bold text-black text-base rounded-xl py-7 px-6" >Claim Free Credit</button>
     
     
    </div>
  </div>
  </div>
  
</div>
        </>
    );
};

export default Banner;