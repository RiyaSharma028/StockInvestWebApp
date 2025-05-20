import React from 'react'
import products from "../../../public/Media/products-kite.png"
import appStore from "../../../public/Media/appstoreBadge.svg"
import playstore from "../../../public/Media/googlePlayBadge.svg"

function Kite() {
  return (
    <div className="container" style={{marginTop : "12%"}}>
       <div className="row align-items-center justify-content-center">
            <div className="col-4  text-center">
              <img src={products} alt="Products" srcset="" />
            </div>
             <div className='col-4'></div>
            <div className="col-4 ">
               <h1 className='mb-3'>Kite</h1>
               <p className='mb-3 text-secondary fs-5' style={{lineHeight : "25px"}}>Our ultra-fast flagship trading platform with<br/> streaming market data, advanced charts, an<br/> elegant UI, and more. Enjoy the Kite <br/>experience seamlessly on your Android and iOS devices.</p>
               <div className='d-flex gap-5 fs-5 mb-3'>
                <a href="#">Try Demo →</a>
                <a href="#">Learn more →</a>
               </div>
                <div className='d-flex gap-5 '>
                <img src={appStore} alt="" srcset="" />
                 <img src={playstore} alt="" srcset="" />
               </div>
            </div>
       </div>
    </div>
  )
}

export default Kite