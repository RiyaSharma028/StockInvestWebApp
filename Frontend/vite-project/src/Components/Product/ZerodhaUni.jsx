import ditto from "../../../public/Media/ditto-logo.png"
import bull from "../../../public/Media/sensibull-logo.svg"
import smallcase from "../../../public/Media/smallcase-logo.png"
import streak from "../../../public/Media/streak-logo.png"
import tijori from "../../../public/Media/tijori.svg"
import zerodhafund from "../../../public/Media/zerodhafundhouse (3).png"
import "../../index.css"

function ZerodhaUni() {
 

  return (
  <div className="container text-center">
    <h2 style={{ marginTop: "8%" }}>The Zerodha Universe</h2>
    <p className="mt-3">
      Extend your trading and investment experience even further with our partner platforms
    </p>

    <div className="row" style={{ marginTop: "8%" }}>
      {/* Card 1 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 border rounded shadow-sm h-100">
          <img src={zerodhafund} alt="Zerodha Fund House" className="img-fluid partner-logo mb-3" />
          <p>
            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 border rounded shadow-sm h-100">
          <img src={streak} alt="Streak" className="img-fluid partner-logo mb-3" />
          <p>
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 border rounded shadow-sm h-100">
          <img src={bull} alt="Sensibull" className="img-fluid partner-logo mb-3" />
          <p>
            Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 border rounded shadow-sm h-100">
          <img src={smallcase} alt="Smallcase" className="img-fluid partner-logo mb-3" />
          <p>
            Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.
          </p>
        </div>
      </div>

      {/* Card 5 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 border rounded shadow-sm h-100">
          <img src={tijori} alt="Tijori" className="img-fluid partner-logo mb-3" />
          <p>
            Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>

      {/* Card 6 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 border rounded shadow-sm h-100">
          <img src={ditto} alt="Ditto" className="img-fluid partner-logo mb-3" />
          <p>
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
      </div>
    </div>
  </div>
);

}

export default ZerodhaUni