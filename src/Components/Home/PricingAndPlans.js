import React, { useState } from "react";
import { Link } from "react-router-dom";

function PricingAndPlans() {
  const [plan, setPlan] = useState("monthly");
  function changePlan() {
    var checkbox = document.getElementById("checkbox");
    if (checkbox.checked === true) {
      setPlan("annually");
    } else {
      setPlan("monthly");
    }
  }

  return (
    <div className="pricing-and-plans">
      <p data-aos="fade-up" className="title">
        Planning on Continuing our service
      </p>
      <p data-aos="fade-up" className="heading">
        Pricing & Plans
      </p>
      <p data-aos="fade-up" className="toggle-button">
        Monthly Billing{" "}
        <label className="switch">
          <input id="checkbox" type="checkbox" onClick={changePlan} />
          <span className="slider round"></span>
        </label>
        Yearly Billing
      </p>
      <div className="row plan-container">
        <div className="col-md-4 plan-item-container">
          <div className="plan-item one" data-aos="fade-up" data-aos-delay="200">
            <img className="image" src="images/plan-item3.webp" loading="lazy" alt="plan-item-3" />
            <div className="content-box">
              <p className="title">Silver Plan</p>
              <p className="heading">for Individuals</p>
              <p className="content">We care for everyone and so we cover thid plan for shops, families and individuals. We cover their daily needs</p>
              <ul className="plan-points-box">
                <li className="plan-points">
                  <i className="fas fa-check"></i>Daily + Weekly Distributions
                </li>
                <li className="plan-points">
                  <i className="fas fa-check"></i>Discounts for bulk orders
                </li>
                <li className="plan-points">
                  <i className="fas fa-check"></i>Standard Delivery time
                </li>
                <li className="plan-points">
                  <i className="fas fa-times fs-6 text-danger"></i>Delivery charges
                </li>
              </ul>
              <div className="price">
                <div className="dollar">$</div>
                {plan === "monthly" && <div className="amount">14</div>}
                {plan === "annually" && <div className="amount">149</div>}
                <div className="decimal">
                  {plan === "monthly" && <p className="nine-nine">.99</p>}
                  {plan === "annually" && <p className="nine-nine">.99</p>}
                  {plan === "monthly" && <p className="frequency">/mo</p>}
                  {plan === "annually" && <p className="frequency">/yr</p>}
                </div>
              </div>
              <Link to="/contact">
                <button className="place-your-order-button">Contact Sales Team</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 plan-item-container">
          <div className="plan-item two" data-aos="fade-up" data-aos-delay="100">
            <img className="image" src="images/plan-item2.webp" loading="lazy" alt="plan-item-2" />
            <div className="content-box">
              <p className="title">Gold Plan</p>
              <p className="heading">for Distributors</p>
              <p className="content">We not only cover the individuals and organizations, we never forget the distributors and sellers who are the key for connecting people</p>
              <ul className="plan-points-box">
                <li className="plan-points">
                  <i className="fas fa-check"></i>Daily + Weekly Distributions
                </li>
                <li className="plan-points">
                  <i className="fas fa-check"></i>Special Discount for events
                </li>
                <li className="plan-points">
                  <i className="fas fa-check"></i>Extra Orders with no delays
                </li>
                <li className="plan-points">
                  <i className="fas fa-check"></i>No charges for min. 20 boxes
                </li>
              </ul>
              <div className="price">
                <div className="dollar">$</div>
                {plan === "monthly" && <div className="amount">44</div>}
                {plan === "annually" && <div className="amount">449</div>}
                <div className="decimal">
                  {plan === "monthly" && <p className="nine-nine">.99</p>}
                  {plan === "annually" && <p className="nine-nine">.99</p>}
                  {plan === "monthly" && <p className="frequency">/mo</p>}
                  {plan === "annually" && <p className="frequency">/yr</p>}
                </div>
              </div>
              <Link to="/contact">
                <button className="place-your-order-button">Contact Sales Team</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 plan-item-container">
          <div className="plan-item three" data-aos="fade-up">
            <img className="image" src="images/plan-item1.webp" loading="lazy" alt="plan-item-1" />
            <div className="content-box">
              <p className="title">Platinum Plan</p>
              <p className="heading">for Organizations</p>
              <p className="content">We have prepared everything that a organization needs and not only we offer quality but we also make sure your finances are not disturbed </p>
              <ul className="plan-points-box">
                <li className="plan-points">
                  <i className="fas fa-check"></i>Daily + Weekly Distributions
                </li>
                <li className="plan-points">
                  <i className="fas fa-check"></i>Special Discount for events
                </li>
                <li className="plan-points">
                  <i className="fas fa-check"></i>Fast Delivery time
                </li>
                <li className="plan-points">
                  <i className="fas fa-check"></i>No charges for delivery
                </li>
              </ul>
              <div className="price">
                <div className="dollar">$</div>
                {plan === "monthly" && <div className="amount">74</div>}
                {plan === "annually" && <div className="amount">749</div>}
                <div className="decimal">
                  {plan === "monthly" && <p className="nine-nine">.99</p>}
                  {plan === "annually" && <p className="nine-nine">.99</p>}
                  {plan === "monthly" && <p className="frequency">/mo</p>}
                  {plan === "annually" && <p className="frequency">/yr</p>}
                </div>
              </div>
              <Link to="/contact">
                <button className="place-your-order-button">Contact Sales Team</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PricingAndPlans;
