import React from "react";
import { Component } from "react";
import AboutFooterUp from "../About/AboutFooterUp";
import Header from "../Home/Header";
import ContactDetails from "./ContactDetails";
import MessageBox from "./MessageBox";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="about header-and-front-section">
          <Header />
          <div className="contact-page-heading">
            <p className="heading">Contact Us</p>
            <p className="title">Home - Contact Page</p>
          </div>
        </div>
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7313668331935!2d77.45563291480465!3d23.216458584855236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4231f7239229%3A0x6a844ced1f5473fe!2sMIG-5%2F2-A%2C%20Saket%20Nagar%2C%20Habib%20Ganj%2C%20Bhopal%2C%20Madhya%20Pradesh%20462024!5e0!3m2!1sen!2sin!4v1638897157753!5m2!1sen!2sin" allowFullScreen="" loading="lazy" title="office-location"></iframe>
        <ContactDetails />
        <MessageBox />
        <AboutFooterUp emailBg="#ffffff" containerBg="#f2f2f2" />
      </>
    );
  }
}

export default Contact;
