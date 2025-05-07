import React from 'react'
import homeHero from "../../../public/Media/homeHero.png"

function Hero() {
  return (
    <div className='container'>
       <div className="row justify-content-center text-center">
      <img src={homeHero} alt="Boooo" className="w-75 img-fluid mb-5 " />
      <h1 className=''>Invest in everything</h1>
      <p className='mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <button className="btn btn-primary  w-25 fw-bold">SignUp Now</button>
  </div>
    </div>
  
  )
}

export default Hero