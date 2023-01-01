import React from "react";
import { Link } from "react-router-dom";

function AboutOurCompany(props) {
  return (
    <div className="container about-our-company">
      <div className="row px-3 m-0">
        <div className="col-md-6 image-box">
          <img className="image" src="images/about-our-company-img.webp" loading="lazy" alt="about-our-company-img" />
          <div className="video-box" data-aos="fade-up-right">
            <img className="video-placeholder" src="images/about-our-company-video-placeholder.webp" loading="lazy" alt="video-placeholder" />
            <div className="icon">
              <div>
                <i className="fas fa-play"></i>
              </div>
            </div>
            <p className="title">How can we help ?</p>
          </div>
        </div>
        <div className="col-md-6 content-box">
          <p className="title">About our Company</p>
          <p className="heading" data-aos="fade-up">
            Guess What
            <br /> We have much more
            <br /> to share
          </p>
          <p className="content">We at Apah Water work hard everyday so that you can enjoy your water daily, and that's not all we have done, we make sure that every drop that you drink is worth your health.</p>
          <div className="stats-box">
            <div className="stats-item">
              <span className="stats">2K+</span>
              <span className="stats-title ps-2">Orders Preparing Daily</span>
            </div>
            <div className="stats-item">
              <span className="stats">6+</span>
              <span className="stats-title">Flavours</span>
            </div>
            <div className="stats-item">
              <span className="stats">5K+</span>
              <span className="stats-title">Quality Bottles Delivered</span>
            </div>
          </div>
          <Link to={""+props.route}>
            <button className="about-us-button">{props.title}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AboutOurCompany;
