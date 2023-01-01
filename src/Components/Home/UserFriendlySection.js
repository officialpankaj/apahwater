import React from "react";
import { Link } from "react-router-dom";

function UserFriendlySection() {
  return (
    <div className="user-friendly-section">
      <p className="play-button">
        <span className="wrapper">
          <span className="inner-circle">
            <i className="fas fa-play"></i>
          </span>
        </span>
      </p>
      <p className="heading" data-aos="fade-right">
        A product for everyone,
        <br />
        Build with usability in mind
      </p>
      <p className="content" data-aos="fade-up">
        We develop the relationships that underpin the next phase in your organisation's
        <br />
        growth. We do this by understand what you actually need.
      </p>
      <Link to="/products">
        <button className="meet-our-product-button">Meet our products</button>
      </Link>
    </div>
  );
}
export default UserFriendlySection;
