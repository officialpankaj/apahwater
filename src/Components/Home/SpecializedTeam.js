import React from "react";
import { Link } from "react-router-dom";

function SpecializedTeam() {
  return (
    <div className="container our-specialized-team">
      <p className="heading" data-aos="fade-right">
        Our Specialized Teams Lead the
        <br />
        Product Design and Development
      </p>
      <span className="subtitle">
        We craft unique experiences. With more than 4 years of expertise in customer service
        <br /> we designed and developed clean water bottles with rich minerals and flavours.
      </span>
      <div className="row tile-container">
        <div className="col-md-4 tile" data-aos="fade-up">
          <div className="tile-box">
            <span className="title">Product Design</span>
            <p className="tile-icon">
              <i className="fas fa-drafting-compass"></i>
            </p>
            <p className="tile-content">We designed the bottle according to your needs which is just perfect to carry around and easy to hold.</p>
          </div>
        </div>
        <div className="col-md-4 tile" data-aos="fade-up">
          <div className="tile-box">
            <span className="title">Quality Check</span>
            <p className="tile-icon">
              <i className="fas fa-globe-americas"></i>
            </p>
            <p className="tile-content">Apart from anything, your health is the first priority that we have kept in mind while developing our product</p>
          </div>
        </div>
        <div className="col-md-4 tile" data-aos="fade-up">
          <div className="tile-box">
            <span className="title">Benefits</span>
            <p className="tile-icon">
              <i className="fas fa-caravan"></i>
            </p>
            <p className="tile-content">We not just give you a plain old water bottle, its also filled with real minerals and natural flavours.</p>
          </div>
        </div>
      </div>
      <p className="bottom-line">
        If you are excited enough and can't wait then <span className="border-bottom border-dark"><Link to="/products">see our Products</Link></span> category.
      </p>
    </div>
  );
}
export default SpecializedTeam;
