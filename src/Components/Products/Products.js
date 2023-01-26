import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Home/Header";
import ContentLoader from "react-content-loader";

function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [current_index, setCurrentIndex] = useState(0);
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    axios("/json/products.json", {
      method: "GET",
      cancelToken: ourRequest.token,
    })
      .then(async (response) => {
        setProducts(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      ourRequest.cancel();
    };
  }, []);

  function increaseQuantity() {
    if (quantity === 1) {
      setQuantity(quantity + 9);
    } else {
      setQuantity(quantity + 10);
    }
  }

  function decreaseQuantity() {
    if (quantity === 10) {
      setQuantity(quantity - 9);
    } else if (quantity > 1) {
      setQuantity(quantity - 10);
    }
  }

  function changeIndex(data) {
    setCurrentIndex(data);
    setQuantity(1);
    // console.log(data);
  }

  useEffect(() => {
    if (!loading) {
      if (quantity >= item.extra_discount_on_min) {
        setPrice(quantity * item.price * ((100 - item.extra_discount) / 100));
      } else {
        setPrice(quantity * item.price);
      }
    }
  }, [quantity, item, loading]);

  useEffect(() => {
    setItem(products[current_index]);
  }, [current_index, products]);

  return (
    <>
      <div className="about header-and-front-section">
        <Header />
        <div className="contact-page-heading">
          <p className="heading">Products</p>
          <p className="title">Home - Product Page</p>
        </div>
      </div>
      <div className="container">
        <div className="row product-wrapper">
          {!loading && (
            <>
              <div className="col-md-1 product-thumb-container">
                {products.map((data, i) => {
                  return (
                    <div key={"item-thumb-" + i}>
                      {i < 3 && (
                        <div key={"item-thumb-" + i} onClick={(e) => changeIndex(i)} className={"product-thumb " + (i === current_index ? "active" : "")}>
                          <img className="image" src={"images/" + data.thumbnail} alt="" loading="eager" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="col-md-1 product-thumb-container">
                {products.map((data, i) => {
                  return (
                    <div key={"item-thumb-" + i}>
                      {i >= 3 && (
                        <div onClick={(e) => changeIndex(i)} key={"item-thumb-" + i} className={"product-thumb " + (i === current_index ? "active" : "")}>
                          <img className="image" src={"images/" + data.thumbnail} alt="" loading="eager" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="col-md-5 product-main-image">
                <img className="image" src={"images/" + item.image} alt="img-1" loading="eager" />
                <div className="product-available-size">
                  {item.available_size.map((data, i) => {
                    return (
                      <div key={"size-" + i} className="size">
                        {data}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-5 content-box">
                <div className="price-container">
                  <span className="title">Regular Price</span>
                  <span className="price">
                    {" "}
                    <sup>₹</sup>
                    {price}
                  </span>
                </div>
                <p className="title">Flavoured Water</p>
                <p className="heading">{item.name}</p>
                <div className="details-box">
                  <p>
                    <span className="title">Flavour: </span>
                    <span className="detail">{item.flavour}</span>
                  </p>
                  <p>
                    <span className="title">Ingredients: </span>
                    <span className="detail">{item.details.ingredients}</span>
                  </p>
                  <p>
                    <span className="title">Expiry: </span>
                    <span className="detail">{item.details.expiry}</span>
                  </p>
                  <p>
                    <span className="title">Extra Discount: </span>
                    <span className="detail">
                      {item.extra_discount}% extra discount on orders above {item.extra_discount_on_min} units
                    </span>
                  </p>
                </div>
                <div className="quantity-container">
                  <span className="quantity-decrease">
                    <i onClick={decreaseQuantity} className="fas fa-minus"></i>
                  </span>
                  <span className="quantity">{quantity}</span>
                  <span className="quantity-increase">
                    <i onClick={increaseQuantity} className="fas fa-plus"></i>
                  </span>
                </div>
                <Link to="/contact">
                  <button className="contact-sales-team-button">Contact Sales Team</button>
                </Link>
              </div>
            </>
          )}
          {loading && (
            <ContentLoader speed={1} width={1920} height={400} viewBox="0 0 1106 460" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
              <rect className="cls-1" x="93.43" y="3.63" width="81.64" height="87.99" />
              <rect className="cls-1" y="3.63" width="81.64" height="87.99" />
              <rect className="cls-1" x="93.43" y="103.41" width="81.64" height="87.99" />
              <rect className="cls-1" y="103.41" width="81.64" height="87.99" />
              <rect className="cls-1" x="93.43" y="203.19" width="81.64" height="87.99" />
              <rect className="cls-1" y="203.19" width="81.64" height="87.99" />
              <rect className="cls-1" x="93.43" y="302.97" width="81.64" height="87.99" />
              <rect className="cls-1" y="302.97" width="81.64" height="87.99" />
              <rect className="cls-1" x="236.75" width="407.29" height="436.31" />
              <rect className="cls-1" x="700.28" width="334.72" height="75.29" />
              <rect className="cls-1" x="700.28" y="108.85" width="135.16" height="10.89" />
              <rect className="cls-1" x="700.28" y="130.62" width="267.59" height="20.86" />
              <rect className="cls-1" x="700.28" y="192.3" width="149.67" height="12.7" />
              <rect className="cls-1" x="700.28" y="221.33" width="322.02" height="12.7" />
              <rect className="cls-1" x="700.28" y="245.82" width="41.73" height="12.7" />
              <rect className="cls-1" x="700.28" y="273.04" width="122.46" height="12.7" />
              <rect className="cls-1" x="700.28" y="302.06" width="315.67" height="12.7" />
              <rect className="cls-1" x="700.28" y="324.74" width="110.67" height="12.7" />
              <rect className="cls-1" x="700.28" y="409.1" width="207.73" height="46.26" rx="23.13" />
              <circle className="cls-1" cx="735.66" cy="371" r="9.07" />
              <rect className="cls-1" x="753.8" y="361.93" width="17.23" height="17.23" />
              <rect className="cls-1" x="700.28" y="361.93" width="17.23" height="17.23" />
            </ContentLoader>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
