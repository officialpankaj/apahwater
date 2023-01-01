import React from "react";

function AboutOurServices() {
  return (
    <div className="about-our-services-container">
      <div className="container about-our-services-box">
        <div className="our-services">
          <div className="image-box" data-aos="fade-up">
            <img className="image" src="images/our-services-main.webp" loading="lazy" alt="video-placeholder" />
            <div className="icon">
              <div>
                <div>
                  <i className="fas fa-play"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="content-wrapper row">
            <div className="col-md-6 content-box">
              <p data-aos="fade-right" className="heading">Our Satisfied Customer</p>
              <p className="content">We at Apah Water work hard everyday so that you can enjoy your water daily, and that's not all we have done, we make sure that every drop that you drink is worth your health.</p>
              <button className="our-staisfied-customer-button">Get Started</button>
            </div>
            <div  className="col-md-6 row stats-box">
              <div data-aos="fade-up-left" className="col-md-4">
                <div className="wrapper-container">
                  <div className="wrapperr one">
                    <div className="box">
                      <span className="stats-percent">6+</span>
                    </div>
                  </div>
                </div>
                <p className="title">Flavours</p>
              </div>
              <div data-aos="fade-up-left" data-aos-delay="150" className="col-md-4">
                <div className="wrapper-container">
                  <div className="wrapperr two">
                    <div className="box">
                      <span className="stats-percent">30%</span>
                    </div>
                  </div>
                </div>
                <p className="title">Less Cost</p>
              </div>
              <div data-aos="fade-up-left" data-aos-delay="200" className="col-md-4">
                <div className="wrapper-container">
                  <div className="wrapperr three">
                    <div className="box">
                      <span className="stats-percent">10%</span>
                    </div>
                  </div>
                </div>
                <p className="title">Additional Discount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOurServices;
