import React from "react";
import { Link } from "react-router-dom";

function OurDedictaedTeam() {
  return (
    <div className="our-dedicated-team">
      <div className="row m-0 p-0">
        <div className="col-md-5 content-box">
          <p className="title">Our Best</p>
          <p className="heading" data-aos="fade-up">
            Dedicated Team
          </p>
          <p className="content" data-aos="fade-up">
            We develop the relationsps that underpin the next phase in your organization's growth. We do this by discerning the daily need of you and your loved ones, because they are important for us too.
          </p>
          <ul className="benefits-box" data-aos="fade-up">
            <li className="benefits-item">We offer bulk orders and services for companies & businesses</li>
            <li className="benefits-item">We commit to our words and we do know how crucial every timely delivery is for you.</li>
            <li className="benefits-item">And Quality is something that we consider the most important thing of all. </li>
          </ul>
          <Link to="/about">
            <button className="meet-our-team-button">Meet Our Team</button>
          </Link>
        </div>
        <div className="col-md-7 row image-box">
          <div className="col-md-6 image-container" data-aos="fade-down-right">
            <img className="image" src="images/team-member1.webp" loading="lazy" alt="team-member1" />
            <div className="member-info">
              <div>
                <p className="member-name">Arnika Sorkar</p>
                <p className="position">Marketing Lead</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 image-container" data-aos="fade-down">
            <img className="image" src="images/team-member2.webp" loading="lazy" alt="team-member2" />
            <div className="member-info">
              <div>
                <p className="member-name">Deepak Singh</p>
                <p className="position">CEO and Managing Director</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 image-container" data-aos="fade-up-right">
            <img className="image" src="images/team-member3.webp" loading="lazy" alt="team-member3" />
            <div className="member-info">
              <div>
                <p className="member-name">Pankaj Barman</p>
                <p className="position">Web Developer & Designer</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 image-container" data-aos="fade-up">
            <img className="image" src="images/team-member4.webp" loading="lazy" alt="team-member4" />
            <div className="member-info">
              <div>
                <p className="member-name">Varsha Singh</p>
                <p className="position">Social Media Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurDedictaedTeam;
