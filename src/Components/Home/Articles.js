import React from "react";

function Articles() {
  return (
    <div className="row articles">
      <div className="col-md-6 articles-item">
        <div className="image-box">
          <img className="image" src="images/article-image1.webp" loading="lazy" alt="article1" />
          <div className="date-label">
            <i className="far fa-calendar-alt"></i>
            October 6, 2021
          </div>
        </div>
        <p className="heading">See how we are preparing flavoured water for you.</p>
        <p className="read-more-box">
          <span className="read-more">Read More</span>
          <i className="fas fa-long-arrow-alt-right"></i>
        </p>
      </div>
      <div className="col-md-6 articles-item">
        <div className="image-box">
          <img className="image" src="images/article-image2.webp" loading="lazy" alt="article1" />
          <div className="date-label">
            <i className="far fa-calendar-alt"></i>
            October 15, 2021
          </div>
        </div>
        <p className="heading">5 Ways Mineral Water can Improve Human Health</p>
        <p className="read-more-box">
          <span className="read-more">Read More</span>
          <i className="fas fa-long-arrow-alt-right"></i>
        </p>
      </div>
      <div className="col-md-6 articles-item">
        <div className="image-box">
          <img className="image" src="images/article-image3.webp" loading="lazy" alt="article1" />
          <div className="date-label">
            <i className="far fa-calendar-alt"></i>
            October 29, 2021
          </div>
        </div>
        <p className="heading">Methods and practices we are using to filter the water</p>
        <p className="read-more-box">
          <span className="read-more">Read More</span>
          <i className="fas fa-long-arrow-alt-right"></i>
        </p>
      </div>
      <div className="col-md-6 articles-item">
        <div className="image-box">
          <img className="image" src="images/article-image4.webp" loading="lazy" alt="article1" />
          <div className="date-label">
            <i className="far fa-calendar-alt"></i>
            November 12, 2021
          </div>
        </div>
        <p className="heading">See how we are trying to connect to your needs.</p>
        <p className="read-more-box">
          <span className="read-more">Read More</span>
          <i className="fas fa-long-arrow-alt-right"></i>
        </p>
      </div>
    </div>
  );
}
export default Articles;
