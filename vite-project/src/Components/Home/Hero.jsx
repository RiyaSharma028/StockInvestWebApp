import React from 'react'
import homeHero from "../../../public/Media/homeHero.png"

function Hero() {
  return (
    <div className="container">
       <div className="row justify-content-center text-center">
         <img src={homeHero} alt="Hero-Image" className='w-75 mb-5' />
         <h1>Invest in everything</h1>
         <p className='mb-3'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
         <button className='btn btn-primary p-2 fw-bold mb-5' style={{width : "15%"}}>SignUp For Free</button>
       </div>
    </div>
  )
}

export default Hero