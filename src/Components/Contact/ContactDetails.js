import React from "react";

function ContactDetails() {
  return (
    <div className="container">
      <div className="row contact-details">
        <div className="col-md-4 item-box">
          <div className="item">
            <div className="icon-box">
              <i className="fas fa-phone-alt"></i>
            </div>
            <p className="heading">Phone</p>
            <p className="content">(+0755) 4701995</p>
          </div>
        </div>
        <div className="col-md-4 item-box">
          <div className="item">
            <div className="icon-box">
              <i className="fas fa-map-marker-alt"></i>{" "}
            </div>
            <p className="heading">Address</p>
            <p className="content">MIG-4, Sector-2A, Saket Nagar, Bhopal 462024</p>
          </div>
        </div>
        <div className="col-md-4 item-box">
          <div className="item">
            <div className="icon-box">
              <i className="fas fa-envelope"></i>{" "}
            </div>
            <p className="heading">Email</p>
            <p className="content">info@apahwater.in</p>
            <p className="content">apah21water@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
