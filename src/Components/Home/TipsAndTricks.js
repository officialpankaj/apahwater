import React from "react";
import { Link } from "react-router-dom";

function TipsAndTricks() {
  return (
    <div className="row tips-and-tricks">
      <div className="col-md-6 image-box">
        <img className="image" src="images/tips-and-tricks-img.webp" loading="lazy" alt="tips-and-tricks-img" data-aos="fade-up" />
      </div>
      <div className="col-md-6 content-box">
        <p className="title">Planning on changing what your organization drink</p>
        <p className="heading" data-aos="fade-up">
          Then we are prepared for all your needs
        </p>
        <p className="content" data-aos="fade-up">
          We develop the relationships that underpin the next phase in your organisation's growth. We not only give you better but we do consider your finances.{" "}
        </p>
        <div className="row m-0 p-0 pb-5">
          <div className="col-md-4 wrapper-container">
            <div className="wrapper" data-aos="fade-up">
              <div className="box">
                <div>
                  <span className="stats-percent">6+</span>
                  <p className="stats">Original<br/> Flavours</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 wrapper-container">
            <div className="wrapper" data-aos="fade-up">
              <div className="box">
                <div>
                  <span className="stats-percent">30%</span>
                  <p className="stats">Less Cost <br/>than market</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 wrapper-container">
            <div className="wrapper" data-aos="fade-up">
              <div className="box">
                <div>
                  <span className="stats-percent">10%</span>
                  <p className="stats">Additional <br/>Discount</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/products">
          <button className="start-now-button">Start Now</button>
        </Link>
      </div>
    </div>
  );
}
export default TipsAndTricks;
