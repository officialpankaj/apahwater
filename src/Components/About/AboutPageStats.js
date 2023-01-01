import React from "react";

function AboutPageStats() {
  return (
    <div className="about-page-stats">
      <div className="container">
        <div className="row stats-container">
          <div className="col-md-4 row">
            <div className="col-md-3 icon-box">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="col-md-9 stats-box">
              <p className="stats">45K+</p>
              <p className="title">bottles delivered</p>
            </div>
          </div>
          <div className="col-md-4 row">
            <div className="col-md-3 icon-box">
              <i className="far fa-heart"></i>
            </div>
            <div className="col-md-9 stats-box">
              <p className="stats">38K+</p>
              <p className="title">happy cutomers</p>
            </div>
          </div>
          <div className="col-md-4 row">
            <div className="col-md-3 icon-box">
              <i className="far fa-star"></i>
            </div>
            <div className="col-md-9 stats-box">
              <p className="stats">6000+</p>
              <p className="title">positive feedback</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPageStats;
