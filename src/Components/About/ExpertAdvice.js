import React from "react";

function ExpertAdvice() {
  return (
    <div className="expert-advice-container">
      <div className="container">
        <div className="row expert-advice">
          <div className="col-md-6 content-box">
            <p data-aos="fade-right" className="heading">
              Expert level advice
              <br /> for your people's trust
            </p>
            <p className="content">Lorem Ipsum is industry. Lorem Ipsum industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p>
            <p className="title">Just call us.</p>
            <p data-aos="fade-right" className="number">
              <a href="tel:07554701995">0755-4701995</a>
            </p>
          </div>
          <div className="col-md-6">
            <img data-aos="fade-up-left" className="image" src="images/expert-advice-img.webp" loading="lazy" alt="expert-advice" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertAdvice;
