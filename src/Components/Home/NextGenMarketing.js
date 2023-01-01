import React from "react";
import { Link } from "react-router-dom";

function NextGenMarketing() {
  return (
    <div className="row next-gen-marketing">
      <div className="col-md-6 content-box">
        <p className="title">Thinking of saving your money</p>
        <p data-aos="fade-right" className="heading">
          We got you all covered not joking seriously
        </p>
        <p data-aos="fade-right" className="content">
          We know that everyone has different needs, and everyone has different requirements, don't worry we considered everyone and created packages and plans for every scale ranging from daily customers to retailers as well as large organization{" "}
        </p>

        <Link to="/contact">
          <button className="start-now-button">Get Started</button>
        </Link>
      </div>
      <div className="col-md-6 image-box">
        <img className="image" src="images/tips-and-tricks-img.webp" loading="lazy" alt="tips-and-tricks-img" data-aos="fade-up" />
      </div>
    </div>
  );
}
export default NextGenMarketing;
