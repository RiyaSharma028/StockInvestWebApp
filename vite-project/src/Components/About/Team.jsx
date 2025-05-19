import React from 'react'
import nitinKamath from "../../../public/Media/nithinKamath.jpg"

function Team() {
  return (
    <div className='container'>
     <div className='row'>
       <h3 className='text-center mb-5'>People</h3>
        <div className='col-6 text-center'>
         
          <img src={nitinKamath} style={{borderRadius : "100%" , width : "70%"}}  />
          <p className='mt-3'>Nitin Kamath</p>
          <p>Founder, CEO</p>
        </div>
        <div className='col-6 mt-5  text-secondary border-top'>
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the<br></br> hurdles he faced during his decade long stint as a trader. Today,<br></br>Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="">HomePage</a>  / <a href="">HomePage</a>  / <a href="">HomePage</a> </p>
        </div>
     </div>
    </div>
  )
}

export default Team