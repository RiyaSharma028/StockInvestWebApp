import React from 'react'
import ecosystem from '../../../public/Media/ecosystem.png'

function Trust() {
  return (
    <div className='container'>
     <div className='row'>
      <div className='col-6' style={{marginTop : "65px"}}>
        <h1>Trust with confidence</h1>
        <h5 className='mt-5 text-muted'>Customer-first always</h5>
        <p className='mb-3 text-secondary lh-base'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6<br></br>lakh crores of equity investments and contribute to 15%<br></br> of daily retail exchange volumes in India.</p>
        <h5 className='text-muted'>No spam or gimmicks</h5>
        <p className='mb-3 text-secondary'>No gimmicks, spam, "gamification", or annoying push<br></br> notifications. High quality apps that you use at your<br></br> pace, the way you like. Our philosophies.</p>
        <h5 className='text-muted'>The Zerodha universe</h5>
        <p className='mb-3 text-secondary'>Not just an app, but a whole ecosystem. Our investments<br></br> in 30+ fintech startups offer you tailored services<br></br> specific to your needs.</p>
        <h5 className='text-muted'>Do better with money</h5>
        <p className='mb-3 text-secondary'>With initiatives like Nudge and Kill Switch, we don't just<br></br> facilitate transactions, but actively help you do better<br></br> with your money.</p>
      </div>
      <div className='col-6 d-flex justify-content-center' style={{marginTop : "65px"}}>
        <img src={ecosystem} alt='coin-image' style={{width : "35rem"}}/>
      </div>
     </div>
    </div>
  )
}

export default Trust