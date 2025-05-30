import React from 'react'
import './index.css';

function Footer() {
  return (
    <div className='container'>
     <div className='row' style={{marginTop : "12%" , backgroundColor : "#f9f9f9" , padding : "2%"}}>
      <div className="col">
        <img src="/Media/logo.svg" alt="" style={{ width: "200px"  }} className='bg-light' />
        <div className='bg-light text-muted mt-3'>
          <p className='fs-6'> © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
        </div>
        <div className='d-flex gap-3'>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-telegram"></i>
        </div>
      </div>
       <div className="col" style={{marginLeft:"5%"}}>
        <h5 className='text-muted'>Support</h5>
       <div className='d-flex  flex-column text-start'>
         <a href="" >Contact us</a>
        <a href="" >Support portal</a>
        
       </div>
       </div>
        <div className="col" style={{marginLeft:"5%"}}>
          <h5 className='text-muted'>Company</h5>
            <div className='d-flex  flex-column text-start'>
         <a href="">About</a>
        <a href="">Products</a>
        <a href="">Pricing</a>  
        <a href="">Referral programme</a>
        <a href="">Careers</a>
        <a href="">Zerodha.tech</a>
        <a href="">Open source</a>
        <a href="">Press & media</a>
        <a href="">Zerodha Cares (CSR)</a>
       </div>
        </div>
         <div className="col" style={{marginLeft:"5%"}}>
          <h5 className='text-muted'>Account</h5>
            <div className='d-flex  flex-column text-start' >
         <a href="">Open an account</a>
        <a href="">Fund transfer</a>
       </div>
         </div>
     </div>
       <div className='mt-1 text-muted' style={{backgroundColor : "#f9f9f9" , padding : "2%" , fontSize:"12px"}}>
        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
       < p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
       <div className='d-flex gap-5'>
         <a href="">NSE</a>
         <a href="">BSE</a>
         <a href="">MCX</a>
         <a href="">Terms & Conditions</a>
         <a href="">Policies & procedures </a>
         <a href="">Privacy policy </a>
         <a href="">Disclosure </a>
         <a href="">For investor's attention </a>
         <a href="">Investor charter</a>
       </div>
       </div>
       
    </div>
  )
}

export default Footer