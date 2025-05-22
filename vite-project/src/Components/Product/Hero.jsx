import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center " style={{ marginTop: "15%" }}>
        <h1 className="mb-3" style={{ wordSpacing: "5px", fontSize: "58px" }}>
          Zerodha Products
        </h1>
        <p className="mb-3" style={{fontSize : "1.5rem"}}>
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="fs-5">
          Check out our{" "}
          <a href="#" >
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
