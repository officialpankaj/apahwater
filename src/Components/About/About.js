import React, { Component } from "react";
import Aos from "aos";
import Header from "../Home/Header";
import AboutOurCompany from "../Home/AboutOurCompany";
import AboutOurServices from "./AboutOurServices";
import OurDedictaedTeam from "../Home/OurDedicatedTeam";
import PricingAndPlans from "../Home/PricingAndPlans";
import "./circle.css";
import ExpertAdvice from "./ExpertAdvice";
import AboutPageStats from "./AboutPageStats";
import OurPartners from "./OurPartners";
import AboutFooterUp from "./AboutFooterUp";

class About extends Component {
  componentDidMount() {
    setTimeout(() => {
      Aos.refresh();
    }, 1000);
  }
  render() {
    return (
      <>
        <div className="about header-and-front-section">
          <Header />
          <div className="about-page-heading">
            <p className="heading">About Us</p>
            <p className="title">Home - About Page</p>
          </div>
        </div>
        <div className="w-100 our-specialized-team-and-about-our-company-container">
          <AboutOurCompany title="Contact Us" route="/contact" />
        </div>
        <AboutOurServices />
        <OurDedictaedTeam />
        <PricingAndPlans />
        <ExpertAdvice />
        <AboutPageStats />
        <OurPartners />
        <AboutFooterUp emailBg="#f2f2f2" containerBg="#ffffff" />
      </>
    );
  }
}
export default About;
