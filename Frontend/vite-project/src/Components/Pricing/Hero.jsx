import React from "react";
import Zerorupee from "/Media/pricing-eq.svg";
import twentyRupee from "/Media/other-trades.svg";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 style={{ marginTop: "200px", fontSize: "3rem" }}>Charges</h1>
        <h3 style={{ marginBottom: "230px", color: "grey" }}>
          List of all charges and taxes
        </h3>
        <div className="row">
          <div className="col-4">
            <img
              src={Zerorupee}
              alt="Zero-rupee"
              style={{ width: "75%", height: "50%" }}
            />
            <h3>Free equity delivery</h3>
            <p className="text-muted mt-3">
              All equity delivery investments (NSE, BSE),<br></br> are
              absolutely free — ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4">
            <img
              src={twentyRupee}
              alt="twente/-yrupee"
              style={{ width: "75%", height: "50%" }}
            />
            <h3>Intraday and F&O trades</h3>
            <p className="text-muted mt-3">
              Flat ₹ 20 or 0.03% (whichever is lower) per
              <br /> executed order on intraday trades across
              <br /> equity, currency, and commodity trades. Flat
              <br /> ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4">
            <img
              src={Zerorupee}
              alt="zero-rupee"
              style={{ width: "75%", height: "50%" }}
            />
            <h3>Free direct MF</h3>
            <p className="text-muted mt-3">
              All direct mutual fund investments are
              <br /> absolutely free — ₹ 0 commissions & DP
              <br /> charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
