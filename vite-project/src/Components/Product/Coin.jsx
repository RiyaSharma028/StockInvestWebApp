import coin from "../../../public/Media/coin.png"
import playstore from "../../../public/Media/googlePlayBadge.svg";
import appStore from "../../../public/Media/appstoreBadge.svg";

function Coin() {
  return (
    <div className="container" style={{ marginTop: "5%" }}>
          <div className="row align-items-center justify-content-center">
            {/* Image Section , Right-part */}
            <div className="col-md-5 text-center">
              <img src={coin} alt="Coin Section Image" style={{ width: "100%", height: "auto" }} />
            </div>
            {/* For Middle Gap */}
            <div className="col-md-2"></div>
            {/* Text Section , Left Part*/}
            <div className="col-md-5" style={{paddingLeft: "60px"}}>
              <h2 className="mb-3">Coin</h2>
              <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                Buy direct mutual funds online, commission-<br/>free, delivered directly to your Demat<br/> account. Enjoy the investment experience <br/>on your Android and iOS devices.
              </p>
              <div className="d-flex gap-4 mb-4">
                <a href="#" className="text-decoration-none">Coin →</a>
              </div>
              {/* App Store Buttons */}
              <div className="d-flex gap-3">
                <img src={appStore} alt="Download on App Store" style={{ height: "40px" }} />
                <img src={playstore} alt="Get it on Google Play" style={{ height: "40px" }} />
              </div>
            </div>
          </div>
        </div>
  )
}

export default Coin