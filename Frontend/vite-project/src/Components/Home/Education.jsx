import React from 'react'
import Educationn from '../../../public/Media/education.svg'

function Education() {
  return (
    <div className='container'>
      <div className='row'>
      <div className='col-6' style={{marginTop : "8.5rem"}} >
          <img src={Educationn} alt="Education" style={{width : "70%"}} />
       </div>
       <div className='col-6' style={{marginTop : "8.5rem"}}>
        <div>
          <h1>
          Free and open market education
        </h1>
        <p className='mt-3 text-secondary lh-base'>Varsity, the largest online stock market education book in the world <br></br>covering everything from the basics to advanced trading.</p>
        <a href="#" className='text-decoration-none'>Varsity <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div>
        <p className='mt-3 text-secondary lh-base'>TradingQ&A, the most active trading and investment community in<br></br> India for all your market related queries.</p>
        <a href="#" className='text-decoration-none'>Varsity <i className="fa-solid fa-arrow-right"></i></a>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Education