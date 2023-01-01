import React from "react";
import { Link } from "react-router-dom";

function OurProducts() {
  return (
    <div className="our-products">
      <p className="title">We have more to give you</p>
      <p className="heading">Our Flavoured Products</p>
      <p className="view-all"><Link to="/products">View All Products</Link></p>
      <div className="row m-0">
        <div className="col-md-4 p-1">
          <div className="product-item" data-aos="fade-up">
            <img className="image" src="images/our-product-item-01.webp" loading="lazy" alt="product-img" />
            <div className="description-box">
              <span className="info-icon">
                <i className="fas fa-info-circle"></i>
              </span>
              <p className="heading">Tulsi Water</p>
              <p className="content">Water coming with natural holy basil leaves and healing power.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-1">
          <div className="product-item" data-aos="fade-up" data-aos-delay="200">
            <img className="image" src="images/our-product-item-02.webp" loading="lazy" alt="product-img" />
            <div className="description-box">
              <span className="info-icon">
                <i className="fas fa-info-circle"></i>
              </span>
              <p className="heading">Lemon Water</p>
              <p className="content">Water filled with high quality lemon extracts.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-1">
          <div className="product-item" data-aos="fade-up" data-aos-delay="300">
            <img className="image" src="images/our-product-item-03.webp" loading="lazy" alt="product-img" />
            <div className="description-box">
              <span className="info-icon">
                <i className="fas fa-info-circle"></i>
              </span>
              <p className="heading">Laung Water</p>
              <p className="content">Water filled with clove extracts and helps in digestive mobility.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-1">
          <div className="product-item" data-aos="fade-up">
            <img className="image" src="images/our-product-item-04.webp" loading="lazy" alt="product-img" />
            <div className="description-box">
              <span className="info-icon">
                <i className="fas fa-info-circle"></i>
              </span>
              <p className="heading">Amla Water</p>
              <p className="content">Water filled with amla extracts and expert in taking care of your body.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-1">
          <div className="product-item" data-aos="fade-up" data-aos-delay="200">
            <img className="image" src="images/our-product-item-05.webp" loading="lazy" alt="product-img" />
            <div className="description-box">
              <span className="info-icon">
                <i className="fas fa-info-circle"></i>
              </span>
              <p className="heading">Honey Water</p>
              <p className="content">Water filled with honey extracted from the wilderness.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-1">
          <div className="product-item" data-aos="fade-up" data-aos-delay="300">
            <img className="image" src="images/our-product-item-06.webp" loading="lazy" alt="product-img" />
            <div className="description-box">
              <span className="info-icon">
                <i className="fas fa-info-circle"></i>
              </span>
              <p className="heading">Mint Water</p>
              <p className="content">Water with natural mint extracts that soothes your upset stomach.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurProducts;
