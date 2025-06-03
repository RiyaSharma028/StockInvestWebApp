import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid"
      style={{ backgroundColor: "rgb(56 ,126 ,209", color: "white" }}
    >
      <div
        className=" p-5 mt-5"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 100px",
        }}
      >
        <h3>Support Portal</h3>
        <a href="" style={{ color: "white" }}>
          Track Tickets
        </a>
      </div>
      <div className="row  mb-5 mt-3 m-5">
        <div className="col-6 mb-5 p-5 mt-5">
          <h3 className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input
            placeholder="Eg how do I activate my F&O Why is my order getting rejected"
            style={{
              padding: "20px 50px",
              width: "100%",
              fontSize: "20px",
              borderRadius: "10px",
              border: "none",
            }}
          ></input>
          <br></br>
          <a href="" style={{ color: "white" }}>
            Track account opening
          </a>
          <a href="" style={{ color: "white" }}>
            {" "}
            Track segment activation
          </a>
          <a href="" style={{ color: "white" }}>
            {" "}
            Intraday margins
          </a>
          <a href="" style={{ color: "white" }}>
            Kite user manual
          </a>
        </div>
        <div className="col-6 mb-5 p-5 mt-5 ">
          <h3 className="fs-4">Featured</h3>
          <ol>
            <li>
              <a href="" style={{ color: "white" }}>
                Surveillance measure on scrips - June 2025
              </a>
            </li>
            <li>
              {" "}
              <a href="" style={{ color: "white" }}>
                Show More
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
