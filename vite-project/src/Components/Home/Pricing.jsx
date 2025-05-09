import React from 'react'

function Pricing() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6' style={{marginTop : "85px"}}>
          <h1 className='mb-3'>Unbeatable pricing</h1>
          <p  className='mb-3 text-secondary lh-base'>We pioneered the concept of discount broking and price<br></br> transparency in India. Flat fees and no hidden charges.</p>
          <a href="#" className='text-decoration-none'>See Pricing <i class="fa-solid fa-arrow-right"></i></a>
        </div>
  {/* left part started */}
       <div className="col d-flex justify-content-between " style={{marginTop: "30px"}}>
  <div className="d-flex align-items-center gap-2" >
    <div>
      <strong style={{ color: '#f7931e' , fontSize: '2rem'}}>₹0</strong><br />
      <small className='mb-3 text-secondary lh-base'>Free account opening</small>
    </div>
  </div>

  <div className="d-flex align-items-center gap-2">
    <div>
      <strong style={{ color: '#f7931e',fontSize: '2rem' }}>₹0</strong><br />
      <small className='mb-3 text-secondary lh-base'>Free equity delivery<br />and direct mutual funds</small>
    </div>
  </div>

  <div className="d-flex align-items-center gap-2">
    <div>  
      <strong style={{ color: '#f7931e', fontSize: '2rem' }}>₹20</strong><br />
      <small className='mb-3 text-secondary lh-base'>Intraday and F&O</small>
    </div>
  </div>
</div>


        </div>
      </div>
    
  )
}

export default Pricing