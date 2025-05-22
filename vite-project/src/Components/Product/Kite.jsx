import products from "../../../public/Media/products-kite.png";
import appStore from "../../../public/Media/appstoreBadge.svg";
import playstore from "../../../public/Media/googlePlayBadge.svg";

export default function Kite() {
  return (
    <div className="container" style={{ marginTop: "12%" }}>
      <div className="row align-items-center justify-content-center">
        {/* Image Section , Right-part */}
        <div className="col-md-5 text-center">
          <img src={products} alt="Kite trading platform" style={{ width: "100%", height: "auto" }} />
        </div>
        {/* For Middle Gap */}
        <div className="col-md-2"></div>
        {/* Text Section */}
        <div className="col-md-5" style={{paddingLeft: "60px"}}>
          <h2 className="mb-3">Kite</h2>
          <p className="mb-4" style={{ fontSize: "1.1rem" }}>
            Our ultra-fast flagship trading platform with<br/> streaming market data, advanced charts, an<br/>
            elegant UI, and more. Enjoy the Kite<br/> experience seamlessly on your Android and<br/> iOS devices.
          </p>
          <div className="d-flex gap-4 mb-4">
            <a href="#" className="text-decoration-none">Try Demo →</a>
            <a href="#" className="text-decoration-none">Learn more →</a>
          </div>
          {/* App Store Buttons */}
          <div className="d-flex gap-3">
            <img src={appStore} alt="Download on App Store" style={{ height: "40px" }} />
  <img
    src={playstore}
    alt="Get it on Google Play"
    style={{ height: "40px", border: "2px solid red" }}
  />
          </div>
        </div>
      </div>
    </div>
  );
}

