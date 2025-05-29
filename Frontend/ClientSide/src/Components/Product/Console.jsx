import console from "../../../public/Media/console.png"

function Console() {
  return (
    <div className='container' style={{ marginTop: '5%' }}>
      <div className='row align-items-center'>
        {/* Left Section */}
        <div className="col-md-6 "  style={{ paddingLeft: "60px" }}>
          <h2 style={{ fontWeight: 500 }}>Console</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            The central dashboard for your Zerodha<br/> account. Gain insights into your trades and<br/>
            investments with in-depth reports and <br/>visualisations.
          </p>
          <div className='d-flex gap-5 fs-5 mb-3'>
          <a href="#">Learn More →</a>    
               </div>
        </div>
        {/* Right Section */}
        <div className="col-md-6 text-center">
          <img 
            src={console} 
            alt="console" 
            style={{ width: "90%", maxWidth: "100%", height: "auto" }} 
          />
        </div>
      </div>
    </div>
  );
}

export default Console;
