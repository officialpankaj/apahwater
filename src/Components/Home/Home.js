import React from "react";
import AboutOurCompany from "./AboutOurCompany";
import FrontSection from "./FrontSection";
import Header from "./Header";
import PopularFeatures from "./PopularFeatures";
import PromotionAd from "./PromotionAd";
import OurProducts from "./OurProducts";
import TipsAndTricks from "./TipsAndTricks";
import PricingAndPlans from "./PricingAndPlans";
import NextGenMarketing from "./NextGenMarketing";
import OurDedicatedTeam from "./OurDedicatedTeam";
import SpecializedTeam from "./SpecializedTeam";
import Articles from "./Articles";
import FooterUp from "./FooterUp";
import UserFriendlySection from "./UserFriendlySection";
import { Component } from "react";
import Aos from "aos";

class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      Aos.refresh();
    }, 1000);
  }
  render() {
    return (
      <>
        <div className="header-and-front-section">
          <Header />
          <FrontSection />
        </div>
        <div className="w-100 our-specialized-team-and-about-our-company-container">
          <SpecializedTeam />
          <AboutOurCompany title="About Us" route="/about" />
        </div>
        <PromotionAd />
        {/* <PopularFeatures /> */}
        <OurProducts />
        <div className="tips-and-tricks-and-next-gen-marketing">
          <TipsAndTricks />
          <hr className="section-divide-line" />
          <NextGenMarketing />
        </div>
        <PricingAndPlans />
        <OurDedicatedTeam />
        <UserFriendlySection />
        <Articles />
        <FooterUp />
      </>
    );
  }
}
export default Home;
