import Landing from "../../../public/Media/landing.svg"


function KiteConnect() {
  return (
     <div className='container' style={{ marginTop: '7%' }}>
          <div className='row align-items-center'>
            {/* Left Section */}
            <div className="col-md-6 "  style={{ paddingLeft: "60px" }}>
              <h2 style={{ fontWeight: 500 }}>Kite Connect API</h2>
              <p style={{ fontSize : "1.1rem", lineHeight: "1.6" }}>
                Build powerful trading platforms and<br/> experiences with our super simple<br/> HTTP/JSON APIs. If you are a startup, build<br/> your investment app and showcase it to our<br/> clientbase.
              </p>
              <div className='d-flex gap-5 fs-5 mb-3'>
              <a href="#">Kite Connect →</a>    
                   </div>
            </div>
            {/* Right Section */}
            <div className="col-md-6 text-center" style={{marginTop : "5%"}}>
              <img 
                src={Landing} 
                alt="Landing Image" 
                style={{ width: "90%", maxWidth: "100%", height: "auto" }} 
              />
            </div>
          </div>
        </div>
  )

}
export default KiteConnect;