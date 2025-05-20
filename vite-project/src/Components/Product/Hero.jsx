import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center " style={{ marginTop: "15%" }}>
        <h1 className="mb-3" style={{ wordSpacing: "5px", fontSize: "58px" }}>
          Zerodha Products
        </h1>
        <h4 className="mb-3 text-secondary">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p className="fs-5">
          Check out our{" "}
          <a href="#" className="text-primary">
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
