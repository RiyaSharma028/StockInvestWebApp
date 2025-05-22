import varsity from "../../../public/Media/varsity-products.png"
import appStore from "../../../public/Media/appstoreBadge.svg";
import playstore from "../../../public/Media/googlePlayBadge.svg";
function Varsity() {
  return (
    <div className="container" style={{ marginTop: "5%" }}>
          <div className="row align-items-center justify-content-center">
            {/* Image Section , Right-part */}
            <div className="col-md-5 text-center">
              <img src={varsity} alt="Kite trading platform" style={{ width: "100%", height: "auto" }} />
            </div>
            {/* For Middle Gap */}
            <div className="col-md-2"></div>
            {/* Text Section */}
            <div className="col-md-5" style={{paddingLeft: "60px"}}>
              <h2 className="mb-3">Varsity mobile</h2>
              <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                An easy to grasp, collection of stock market<br/> lessons with in-depth coverage and<br/> illustrations. Content is broken down into <br/>bite-size cards to help you learn on the go.
              </p>
              {/* App Store Buttons */}
              <div className="d-flex gap-3">
                <img src={appStore} alt="Download on App Store" style={{ height: "40px" }} />
                <img src={playstore} alt="Get it on Google Play" style={{ height: "40px" }} />
              </div>
            </div>
            <div style={{marginTop : "7%"}}>
              <p className="text-center" style={{fontSize : "1.3rem"}}>Want to know more about our technology stack? Check out the <a href="#" >Zerodha.tech</a> blog.</p>
            </div>
          </div>
        </div>
  )
}

export default Varsity