import React from "react";
import { Link } from "react-router-dom";

function PromotionAd() {
  return (
    <div className="promotion-ad-container">
      <div className="container promotion-ad">
        <div className="row m-0">
          <div className="col-md-6 content-box">
            <p className="title">Save 20% with Annual Billing</p>
            <p className="heading" data-aos="fade-up">
              We think for Everyone &
              <br />
              for Every Situation
            </p>
            <p data-aos="fade-up" className="content">
              We develop the relationships that underpin the next phase in your organisation's growth. We do this by discerning the daily needs that you and your people need and we stand on our words, we do what we commit. We do prepare for every situation.
            </p>
            <Link to="/contact">
              <button className="start-now-button">Start Now</button>
            </Link>
          </div>
          <div className="col-md-6 image-box">
            <img className="image" src="images/promotion-ad-image.webp" loading="lazy" alt="promotion-img" data-aos="fade-up" />
            <div className="benefits-list-box" data-aos="fade-up">
              <span className="price">More</span>
              <p className="benefits-list-item">
                <i className="fas fa-plus-circle pe-2"></i>Pure Water
              </p>
              <p className="benefits-list-item">
                <i className="fas fa-plus-circle pe-2"></i>7 products
              </p>
              <p className="benefits-list-item">
                <i className="fas fa-plus-circle pe-2"></i>5,000 Bottles Delivered
              </p>
              <p className="benefits-list-item">
                <i className="fas fa-plus-circle pe-2"></i>3 size bottles available
              </p>
              <p className="benefits-list-item">
                <i className="fas fa-plus-circle pe-2"></i>20 bottle/box
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PromotionAd;
