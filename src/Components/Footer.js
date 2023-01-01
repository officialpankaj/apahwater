import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="row main">
        <div className="col-md-3 block-1">
          <Link to="/">
            <img className="logo" src="images/logo.svg" alt="footer-logo" />
          </Link>
          <p className="description">We might make it with machines , but we fill up with care for you and your loved ones because your health matters for us.</p>
          <div className="social-icons">
            <a href="https://facebook.com/apahwater/" target="_blank" rel="noreferrer">
              <img src="images/facebookround.svg" alt="facebook-icon" />
            </a>
            <a href="https://twitter.com/apahwater/" target="_blank" rel="noreferrer">
              <img src="images/twitter.svg" alt="twitter-icon" />
            </a>
            {/* <a href="#" target="_blank" rel="noreferrer"><img src="images/google-plus.svg" alt="google-plus-icon" /></a> */}
            {/* <a href="#" target="_blank" rel="noreferrer"><img src="images/pinterest.svg" alt="pinterest-icon" /></a> */}
          </div>
        </div>
        <div className="col-md-3 block-2">
          <p className="heading">
            Twitter Stream<span>.</span>
          </p>
          <ul>
            <li>
              <p>Would you like to know what we are after?</p>
              <p>
                <a href="https://twitter.com/apahwater/" rel="noreferrer" target="_blank">
                  visit us
                </a>
              </p>
            </li>
            <li>
              <p>Would you like to know what we are doing?</p>
              <p>
                <a href="https://twitter.com/apahwater/" rel="noreferrer" target="_blank">
                  visit us
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="col-md-3 block-3">
          <p className="heading">
            Instagram<span>.</span>
          </p>
          <div className="row image-container">
            <div className="col-4 image-box">
              <img src="images/post-01.webp" alt="instagram-post-1" loading="lazy" />
            </div>
            <div className="col-4 image-box">
              <img src="images/post-02.webp" alt="instagram-post-2" loading="lazy" />
            </div>
            <div className="col-4 image-box">
              <img src="images/post-03.webp" alt="instagram-post-3" loading="lazy" />
            </div>
            <div className="col-4 image-box">
              <img src="images/post-04.webp" alt="instagram-post-4" loading="lazy" />
            </div>
            <div className="col-4 image-box">
              <img src="images/post-05.webp" alt="instagram-post-5" loading="lazy" />
            </div>
            <div className="col-4 image-box">
              <img src="images/post-06.webp" alt="instagram-post-6" loading="lazy" />
            </div>
          </div>
          <p className="instagram-box">
            <a href="https://www.instagram.com/apahwater/" target="_blank" rel="noreferrer">
              <img className="image" src="images/instagram-2016.svg" alt="instagram-icon" />
              Follow
            </a>
          </p>
        </div>
        <div className="col-md-3 block-4">
          <p className="heading">
            Contact Us<span>.</span>
          </p>
          <p className="address">
            <a href="https://goo.gl/maps/DxD4cvbAQtM6D1rG7" target="_blank" rel="noreferrer">
              <span>Address:</span> MIG-4, Sector-2A, Saket Nagar, Bhopal 462024
            </a>
          </p>
          <p className="phone">
            <span>Phone: </span> <a href="tel:07554701995">0755-4701995</a>
          </p>
          <p className="email">
            <span>Email:</span>
            <a href="mailto:info@apahwater.in"> info@apahwater.in</a>
          </p>
          <div className="office-hours">
            <p>Office Hours</p>
            Mon - Thru: 9:00am - 6:00pm
            <br />
            Fri: 10:00am - 5:30pm
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="copyright-text">
          &copy; 2021 <span>Apah Water</span> &#8211; Mineral Water Bottle Company
        </p>
      </div>
    </div>
  );
}
export default Footer;
