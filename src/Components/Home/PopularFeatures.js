import React from "react";
import { Link } from "react-router-dom";

function PopularFeatures() {
  return (
    <div className="popular-features">
      <div className="row m-0">
        <div className="col-md-7 row m-0 feature-box">
          <div className="col-md-6 px-3 py-3">
            <div className="feature-item one" data-aos="zoom-in-down">
              <span>
                <i className="far fa-clone"></i>
              </span>
              <p className="heading">7+ Different Flavours</p>
              <p className="content">We know how you feel when you don't have much to choose</p>
            </div>
          </div>
          <div className="col-md-6 px-3 py-3">
            <div className="feature-item move-down two">
              <span>
                <i className="far fa-clone"></i>
              </span>
              <p className="heading">Customized Packaging</p>
              <p className="content">Everyone is different and we understand it well</p>
            </div>
          </div>
          <div className="col-md-6 px-3 py-3">
            <div className="feature-item three" data-aos="zoom-in-up">
              <span>
                <i className="far fa-clone"></i>
              </span>
              <p className="heading">Quality Water Bottles</p>
              <p className="content">You are special for us so we deliver you premium water</p>
            </div>
          </div>
          <div className="col-md-6 px-3 py-3">
            <div className="feature-item move-down four">
              <span>
                <i className="far fa-clone"></i>
              </span>
              <p className="heading">Water Purity that you seek</p>
              <p className="content">We work hard to purify water so that you don't have to worry</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 content-box">
          <p className="title">Planning for some occasion</p>
          <p className="heading" data-aos="fade-up">
            We have something
            <br />
            to offer you
          </p>
          <p data-aos="fade-up" className="content">
            We at Apah Water work hard everyday so that you can enjoy your water daily, and that's not all we have done, we make sure that every drop that you drink is worth your health. And quality is somethign that we never compromise.
          </p>
          <Link to="/products">
            <button className="start-now-button">Start Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default PopularFeatures;
