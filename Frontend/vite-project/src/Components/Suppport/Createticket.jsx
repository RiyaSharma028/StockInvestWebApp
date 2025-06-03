import React from 'react';

function Createticket() {
    return (
   <div className="container my-5 " style={{ maxWidth: "1100px" }}>
  <div className="row mb-4 justify-content-between">
    <h3 className='text-muted mb-5 mt-5'>To create a ticket, select a relevant topic</h3>

    <div className="col-md-3 mt-3">
      <h6 className='text-muted fs-5'><i class="fa-solid fa-plus me-2"></i>Account Opening</h6>
      <ul className="list-unstyled">
        <li><a href="#" className='text-primary'>Resident individual</a></li>
        <li><a href="#" className='text-primary'>Minor</a></li>
        <li><a href="#" className='text-primary'>NRI</a></li>
        <li><a href="#" className='text-primary'>Company, HUF, LLP</a></li>
        <li><a href="#" className='text-primary'>Glossary</a></li>
      </ul>
    </div>

    <div className="col-md-3 mt-3">
      <h6 className='text-muted fs-5'><i class="fa-solid fa-circle-user me-2"></i>Your Zerodha Account</h6>
      <ul className="list-unstyled">
        <li><a href="#" className='text-primary'>Your Profile</a></li>
        <li><a href="#" className='text-primary'>Account modification</a></li>
        <li><a href="#" className='text-primary'>CMR & DP</a></li>
        <li><a href="#" className='text-primary'>Nomination</a></li>
        <li><a href="#" className='text-primary'>Transfer of securities</a></li>
      </ul>
    </div>

    <div className="col-md-3 mt-3">
      <h6 className='text-muted fs-5'><i class="fa-solid fa-chart-simple me-2"></i>Kite</h6>
      <ul className="list-unstyled">
        <li><a href="#" className='text-primary'>IPO</a></li>
        <li><a href="#" className='text-primary'>Trading FAQs</a></li>
        <li><a href="#" className='text-primary'> MTF & Margins</a></li>
        <li><a href="#" className='text-primary'>Charts and orders</a></li>
        <li><a href="#" className='text-primary'>Alerts and Nudges</a></li>
         <li><a href="#" className='text-primary'>General</a></li>
      </ul>
    </div>
  </div>

  <div className="row justify-content-between">
    <div className="col-md-3 mt-3">
      <h6 className=' text-muted fs-5'><i class="fa-solid fa-box me-2"></i>Funds</h6>
      <ul className="list-unstyled ">
        <li><a href="#" className='text-primary' >Add money</a></li>
        <li><a href="#" className='text-primary'>Withdraw money</a></li>
        <li><a href="#" className='text-primary'>Add bank accounts</a></li>
        <li><a href="#" className='text-primary'>eMandates</a></li>
      </ul>
    </div>

    <div className="col-md-3 mt-3">
      <h6 className=' text-muted fs-5'><i class="fas fa-chart-line me-2"></i>Console</h6>
      <ul className="list-unstyled">
        <li><a href="#"  className='text-primary'>Portfolio</a></li>
        <li><a href="#" className='text-primary'>Corporate actions</a></li>
        <li><a href="#" className='text-primary'>Funds statement</a></li>
        <li><a href="#" className='text-primary'>Reports</a></li>
         <li><a href="#" className='text-primary'>Profile</a></li>
          <li><a href="#" className='text-primary'>segment</a></li>
      </ul>
    </div>

    <div className="col-md-3 mt-3">
      <h6 className='text-muted fs-5'><i class="fa-solid fa-money-check me-2"></i>Coin</h6>
      <ul className="list-unstyled">
        <li><a href="#" className='text-primary'> Mutual funds</a></li>
        <li><a href="#" className='text-primary'>NPS</a></li>
        <li><a href="#" className='text-primary'>Features on Coin</a></li>
        <li><a href="#" className='text-primary'>Payments and Orders</a></li>
         <li><a href="#" className='text-primary'>General</a></li>
      </ul>
    </div>
  </div>
</div>


);
}

export default Createticket;