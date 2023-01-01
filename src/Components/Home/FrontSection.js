import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import HeaderCarousel from "./HeaderCarousel";

class FrontSection extends Component {
  render() {
    return (
      <div className="row front-section">
        <div className="col-md-6 slider-box position-relative">
          <HeaderCarousel />
        </div>
        <div className="col-md-6 content-box">
          <p className="title">We are Apah water, Mineral water Bottle</p>
          <p className="heading">Mineral Water Bottle made with Care</p>
          <p className="content">Apah Water, not just water it's something more. We filled everything , that you can taste and feel what real minerals and flavours feel like.</p>
          <Link to="/contact">
            <button className="contact-us-button">Contact Us</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default FrontSection;
