import React from "react";
import { Link } from "react-router-dom";

function TopInfo() {
  return (
    <div className="top-info">
      <div className="mail">
        <i className="far fa-envelope"></i>Mail:{" "}
        <a className="text-decoration-none" href="mailto:info@apahwater.in">
          info@apahwater.in
        </a>
      </div>
      <div className="phone">
        <i className="fas fa-phone-volume"></i>Phone:
        <a className="text-decoration-none" href="tel:07554701995">
          {" "}
          0755-470-1995
        </a>
      </div>
      {/* <div className="social-icons">
              <i className="fab fa-facebook-square"></i>
            </div> */}
      <div className="social-icons">
        <a href="https://instagram.com/apahwater/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="social-icons">
        <a href="https://www.twitter.com/apahwater/" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter-square"></i>
        </a>
      </div>
      <button className="contact-us-button">
        <Link to="/#contact-form">Contact Us</Link>
      </button>
    </div>
  );
}

export default TopInfo;
